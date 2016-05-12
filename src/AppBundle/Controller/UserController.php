<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class UserController extends Controller
{
    /**
     * @Route("/", name="profil")
     */
    public function userAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->container->get('security.context')->getToken()->getUser();
        $request = $em->getRepository('AppBundle:User')->findOneById($user->getId());
        return $this->render('default/profil.html.twig', array(
            'requete' => $request,
        ));
    }
}
<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class ProfilmodifController extends Controller
{
    /**
     * @Route("/", name="user_profilmodif")
     */
    public function profilmodifAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->container->get('security.context')->getToken()->getUser();

        $nom = $request->request->get('nom');
        $prenom = $request->request->get('prenom');
        $email = $request->request->get('email');

        $hidden = $request->request->get('hidden');

        $requestinfos = $em->getRepository('AppBundle:User')->findOneById($user->getId());

        if ($hidden == 1){
            if (!empty($nom)) {
                $requestinfos->setNom($nom);
            }
            if (!empty($prenom)) {
                $requestinfos->setPrenom($prenom);
            }
            if (!empty($email)) {
                $requestinfos->setAge($email);
            }
            $em->persist($requestinfos);
            $em->flush();
        }
        return $this->render('default/profilmodif.html.twig', array(
            'requete' => $requestinfos,
        ));   
    }
}
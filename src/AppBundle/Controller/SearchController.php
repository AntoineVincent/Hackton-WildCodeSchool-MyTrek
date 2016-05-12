<?php
namespace AppBundle\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class SearchController extends Controller
{
    public function searchAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $search = $request->request->get('recherche');
        if ($search == null) {
            $searchresult = $em->getRepository('AppBundle:User')->findAll();
        }
        else {
            $searchresult = $em->getRepository('AppBundle:User')->findByUsername($search);
        }
        return $this->render('default/search.html.twig', array(
            'searchresult' => $searchresult,
        ));
    }
}
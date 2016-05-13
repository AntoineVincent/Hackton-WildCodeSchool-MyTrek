<?php

namespace TrekBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use TrekBundle\Entity\Trek;
use TrekBundle\Form\trekType;

class TrekController extends Controller
{
    /**
     * @Route("/")
     */
    public function mapAction(Request $request)
    {

        return $this->render('TrekBundle:Trek:trekDescription.html.twig');
    }
    public function createAction(Request $request)
    {
    	$trek = new trek();
        $form = $this->createForm('TrekBundle\Form\trekType', $trek);
        $form->handleRequest($request);

        
            $em = $this->getDoctrine()->getManager();
            $em->persist($trek);
            $em->flush();
        

        return $this->render('TrekBundle:Trek:trekcreate.html.twig', array(
            'trek' => $trek,
            'form' => $form->createView(),
        ));
        
    }
    public function listAction(Request $request, $niveau)
    {
    	$em = $this->getDoctrine()->getManager();
        $user = $this->container->get('security.context')->getToken()->getUser();

        $treks = $em->getRepository('TrekBundle:Trek')->findByNiveau($niveau);
        
        return $this->render('TrekBundle:Trek:treklist.html.twig', array(
            'treks' => $treks,
        ));
    }
    public function showAction(Request $request, $trekid)
    {
    	$em = $this->getDoctrine()->getManager();
        $user = $this->container->get('security.context')->getToken()->getUser();

        $treks = $em->getRepository('TrekBundle:Trek')->findOneById($trekid);
        
        return $this->render('TrekBundle:Trek:trekshow.html.twig', array(
            'treks' => $treks,
        ));
    }
}

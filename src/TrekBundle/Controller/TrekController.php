<?php

namespace TrekBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use TrekBundle\Entity\Trek;

class TrekController extends Controller
{
    /**
     * @Route("/")
     */
    public function mapAction()
    {

        return $this->render('TrekBundle:Trek:trekDescription.html.twig');
    }
}

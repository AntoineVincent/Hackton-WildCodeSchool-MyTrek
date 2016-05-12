<?php

namespace TrekBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Trek
 *
 * @ORM\Table(name="trek")
 * @ORM\Entity(repositoryClass="TrekBundle\Repository\TrekRepository")
 */
class Trek
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=255, nullable=true)
     */
    private $nom;

    /**
     * @var string
     *
     * @ORM\Column(name="region", type="string", length=255, nullable=true)
     */
    private $region;

    /**
     * @var int
     *
     * @ORM\Column(name="niveau", type="integer", nullable=true)
     */
    private $niveau;

    /**
     * @var string
     *
     * @ORM\Column(name="locomotion", type="string", length=255, nullable=true)
     */
    private $locomotion;


    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set nom
     *
     * @param string $nom
     * @return Trek
     */
    public function setNom($nom)
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * Get nom
     *
     * @return string 
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * Set region
     *
     * @param string $region
     * @return Trek
     */
    public function setRegion($region)
    {
        $this->region = $region;

        return $this;
    }

    /**
     * Get region
     *
     * @return string 
     */
    public function getRegion()
    {
        return $this->region;
    }

    /**
     * Set niveau
     *
     * @param integer $niveau
     * @return Trek
     */
    public function setNiveau($niveau)
    {
        $this->niveau = $niveau;

        return $this;
    }

    /**
     * Get niveau
     *
     * @return integer 
     */
    public function getNiveau()
    {
        return $this->niveau;
    }

    /**
     * Set locomotion
     *
     * @param string $locomotion
     * @return Trek
     */
    public function setLocomotion($locomotion)
    {
        $this->locomotion = $locomotion;

        return $this;
    }

    /**
     * Get locomotion
     *
     * @return string 
     */
    public function getLocomotion()
    {
        return $this->locomotion;
    }
}

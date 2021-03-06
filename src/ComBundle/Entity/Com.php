<?php

namespace ComBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Com
 *
 * @ORM\Table(name="com")
 * @ORM\Entity(repositoryClass="ComBundle\Repository\ComRepository")
 */
class Com
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
     * @ORM\Column(name="commentaire", type="text", nullable=true)
     */
    private $commentaire;


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
     * Set commentaire
     *
     * @param string $commentaire
     * @return Com
     */
    public function setCommentaire($commentaire)
    {
        $this->commentaire = $commentaire;

        return $this;
    }

    /**
     * Get commentaire
     *
     * @return string 
     */
    public function getCommentaire()
    {
        return $this->commentaire;
    }

    // clé étrangère user -> com

    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\User")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    private $user;

    

    /**
     * Set user
     *
     * @param \AppBundle\Entity\User $user
     * @return Com
     */
    public function setUser(\AppBundle\Entity\User $user = null)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get user
     *
     * @return \AppBundle\Entity\User 
     */
    public function getUser()
    {
        return $this->user;
    }

    // clé étrangère trek -> com

    /**
     * @ORM\ManyToOne(targetEntity="TrekBundle\Entity\Trek")
     * @ORM\JoinColumn(name="trek_id", referencedColumnName="id")
     */
    private $trek;

    /**
     * Set trek
     *
     * @param \TrekBundle\Entity\Trek $trek
     * @return Com
     */
    public function setTrek(\TrekBundle\Entity\Trek $trek = null)
    {
        $this->trek = $trek;

        return $this;
    }

    /**
     * Get trek
     *
     * @return \TrekBundle\Entity\Trek 
     */
    public function getTrek()
    {
        return $this->trek;
    }
}

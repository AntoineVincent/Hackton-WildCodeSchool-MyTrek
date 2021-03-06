<?php
// src/AppBundle/Entity/User.php

namespace AppBundle\Entity;

use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity
 * @ORM\Table(name="fos_user")
 */
class User extends BaseUser
{   
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    public function __construct()
    {
        $this->trekencours = new \Doctrine\Common\Collections\ArrayCollection();
        parent::__construct();
        // your own logic
    }
    public function __toString()
    {
        return $this->getName();
    }
    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", nullable=true)
     */
    private $name;
    /**
     * @var string
     *
     * @ORM\Column(name="firstname", type="string", nullable=true)
     */
    private $firstname;
    /**
     * @var date
     *
     * @ORM\Column(name="age", type="date", nullable=true)
     */
    private $age;
    /**
     * @var string
     *
     * @ORM\Column(name="gender", type="string", nullable=true)
     */
    private $gender;
    /**
     * @var int
     *
     * @ORM\Column(name="level", type="integer", nullable=true)
     */
    private $level;
    /**
     * @var int
     *
     * @ORM\Column(name="exp", type="integer", nullable=true)
     */
    private $exp;

    /**
     * Set name
     *
     * @param string $name
     * @return User
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set firstname
     *
     * @param string $firstname
     * @return User
     */
    public function setFirstname($firstname)
    {
        $this->firstname = $firstname;

        return $this;
    }

    /**
     * Get firstname
     *
     * @return string 
     */
    public function getFirstname()
    {
        return $this->firstname;
    }

    /**
     * Set age
     *
     * @param \DateTime $age
     * @return User
     */
    public function setAge($age)
    {
        $this->age = $age;

        return $this;
    }

    /**
     * Get age
     *
     * @return \DateTime 
     */
    public function getAge()
    {
        return $this->age;
    }

    /**
     * Set gender
     *
     * @param string $gender
     * @return User
     */
    public function setGender($gender)
    {
        $this->gender = $gender;

        return $this;
    }

    /**
     * Get gender
     *
     * @return string 
     */
    public function getGender()
    {
        return $this->gender;
    }

    /**
     * Set level
     *
     * @param integer $level
     * @return User
     */
    public function setLevel($level)
    {
        $this->level = $level;

        return $this;
    }

    /**
     * Get level
     *
     * @return integer 
     */
    public function getLevel()
    {
        return $this->level;
    }

    /**
     * Set exp
     *
     * @param integer $exp
     * @return User
     */
    public function setExp($exp)
    {
        $this->exp = $exp;

        return $this;
    }

    /**
     * Get exp
     *
     * @return integer 
     */
    public function getExp()
    {
        return $this->exp;
    }

    /**
     * Set treks
     *
     * @param array $treks
     * @return User
     */
    public function setTreks($treks)
    {
        $this->treks = $treks;

        return $this;
    }

    /**
     * Get treks
     *
     * @return array 
     */
    public function getTreks()
    {
        return $this->treks;
    }

    /**
     * @ORM\ManyToMany(targetEntity="TrekBundle\Entity\Trek", inversedBy="users")
     * @ORM\JoinTable(name="users_treks")
     */
    private $trekencours;



    /**
     * Add trekencours
     *
     * @param \TrekBundle\Entity\Trek $trekencours
     * @return User
     */
    public function addTrekencour(\TrekBundle\Entity\Trek $trekencours)
    {
        $this->trekencours[] = $trekencours;

        return $this;
    }

    /**
     * Remove trekencours
     *
     * @param \TrekBundle\Entity\Trek $trekencours
     */
    public function removeTrekencour(\TrekBundle\Entity\Trek $trekencours)
    {
        $this->trekencours->removeElement($trekencours);
    }

    /**
     * Get trekencours
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getTrekencours()
    {
        return $this->trekencours;
    }
}

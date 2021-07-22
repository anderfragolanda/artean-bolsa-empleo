<?php

namespace App\Repository\CVsMgr;

use App\Entity\CVsMgr\CV;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CV|null find($id, $lockMode = null, $lockVersion = null)
 * @method CV|null findOneBy(array $criteria, array $orderBy = null)
 * @method CV[]    findAll()
 * @method CV[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CVRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CV::class);
    }

    public function findCVByUsername($username) {
        $em = $this->getEntityManager();
        $queryCV = "select cv  
                    from App:UserMgr\Student u, App:CVsMgr\CV cv 
                    where cv.student = u
                    and u.username = :username";
        $query1 = $em->createQuery($queryCV);
        $query1->setParameter('username', $username);
        return $query1->getResult();
    }

    // /**
    //  * @return CV[] Returns an array of CV objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?CV
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}

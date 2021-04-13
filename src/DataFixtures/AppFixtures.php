<?php

namespace App\DataFixtures;

use App\Entity\Book;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = \Faker\Factory::create('fr_FR');
        for ($i = 0; $i < 100; $i++){
            $book = new Book();
            $book
                ->setAuthor( $faker->name() )
                ->setDate("10/04/2021")
                ->setEdition( $faker->company )
                ->setName( $faker->company )
                ->setPrice( mt_rand(10000, 60000) );
            $manager->persist($book);
        }
        // $product = new Product();
        // $manager->persist($product);

        $manager->flush();
    }
}

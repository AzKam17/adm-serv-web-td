<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     * @param Request $request
     * @return Response
     */
    public function index(Request $request): Response
    {
        dump($request->headers);

        $res = '';
        foreach ($request->headers as $key => $value){
            $res .= '<b>' . $key . '</b> : '.$value[0] . '<br>';
        }

        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
            'request' => $res
        ]);
    }
}

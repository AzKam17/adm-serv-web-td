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
        dump($request);

        $res = '';
        foreach ($request->headers as $key => $value){
            $res .= '<b>' . $key . '</b> : '.$value[0] . '<br>';
        }

        $link = $this->generateUrl("home");

        return $this->render('home/index.html.twig', [
            'lien' => $link,
            'controller_name' => 'HomeController',
            'request' => $res
        ]);
    }

    /**
     * @Route("/test", name="test")
     * @param Request $request
     * @return Response
     */
    public function test(Request $request): Response
    {
        $res = [];
        foreach ($request->headers as $key => $value){
            $res[$key] = $value[0];
            //$res .= ( '<b>'.$key.'</b> : '.$value[0].'<br>' );
        }
        return new Response( json_encode($res) );
    }

}

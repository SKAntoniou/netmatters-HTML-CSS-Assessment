<?php

$router->get('/', 'index.php');

$router->get('/contact-us', 'contact-us/index.php');
$router->post('/contact-us', 'contact-us/store.php');

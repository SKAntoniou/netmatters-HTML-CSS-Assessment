<?php

// Shortcut for out of public folder
const BASE_PATH = __DIR__ . '/../';

// Require autoload (composer) and custom functions
require BASE_PATH . 'vendor/autoload.php';
require BASE_PATH . 'Core/functions.php';

// Use classes required for this file
use Core\ValidationException;
use Dotenv\Dotenv;
use Core\App;
use Core\Container;
use Core\Database;

// Dotenv plugin to use .env file for secrets
$dotenv = Dotenv::createImmutable(BASE_PATH);
$dotenv->load();

// Setup Database and store it in a Container that can be retrieved with App class.  
$container = new Container();
$container->bind('Core\Database', function () {
  return new Database();
});
App::setContainer($container);

// Router class and routes
$router = new \Core\Router();
require BASE_PATH . 'routes.php';

// Parse user URL input for router
$uri = parse_url($_SERVER['REQUEST_URI'])['path'];
$method = $_POST['_method'] ?? $_SERVER['REQUEST_METHOD'];

// Route based on user URL.
try {
  $router->route($uri, $method);
} catch (ValidationException $exception) {
  return redirect($router->previousUrl());
}

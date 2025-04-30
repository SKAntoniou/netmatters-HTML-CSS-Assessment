<?php

use Core\App;
use Core\Database;

// Retrieve database.
$db = App::resolve(Database::class);

// News section from database - limited to only 3 for the homepage 
$news = $db->query('SELECT * FROM `news` ORDER BY `created_date` DESC LIMIT 3', [])->get();

// Show view with information from the database
view("index.view.php", [
  'newsArray' => $news
]);
<?php

use Core\App;
use Core\Database;

$db = App::resolve(Database::class);

// News section from database - limited to only 3 for the homepage 
$news = $db->query('SELECT * FROM `news` ORDER BY `created_date` DESC LIMIT 3', [])->get();
dd($news);
view("index.view.php", [

]);
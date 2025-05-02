<?php

use Core\App;
use Core\Database;
use Core\Validator;

$db = App::resolve(Database::class);

$name = $_POST["name"];
$companyName = $_POST["company-name"];
$email = $_POST["email"];
$phoneNumber = $_POST["phone-number"];
$message = $_POST["message"];
$marketingAllowed = $_POST["marketing"] ?? '';

$errors = [];
// Validate there is a name.
if (!Validator::string($name)) {
  $errors['name'] = "Your Name is required to send enquiry.";
}
// Validate there is an email and is formatted correctly
if (!Validator::email($email)) {
  $errors["email"] = "Your Email is not formatted correctly";
}
// Validate Phone Number - Currently only allows UK Phone number
if (!Validator::ukphone($phoneNumber)) {
  $errors["phone-number"] = "Your Phone Number is not formatted correct";
}
// Validate Message
if (!Validator::string($message, 5)) {
  $errors["message"] = "Your message needs to be at least five characters long";
}

// Return if there are errors
if (!empty($errors)) {
  return view('contact-us.view.php', [
    'errors'=> $errors
  ]);
}


$db->query("INSERT INTO `customer_enquiry`(
    `created_at`,
    `customer_name`,
    `customer_company`,
    `customer_email`,
    `customer_phone`,
    `customer_message`,
    `marketing_allowed`
  ) VALUES(
    DEFAULT,
    :name,
    :company,
    :email,
    :phone,
    :message,
    :marketing
  )", [
    'name' => $name,
    'company' => $companyName,
    'email' => $email,
    'phone' => $phoneNumber,
    'message' => $message,
    'marketing' => $marketingAllowed
]);

return view('contact-us.view.php', [
  'confirmation' => 'Your enquiry has been submitted'
]);
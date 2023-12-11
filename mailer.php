<?php

// Access submitted data
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Compose email message
$body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message";

// Send email
mail('example.email.com', $subject, $body, "From: $email");

// Optional: redirect to confirmation page
echo "Thank you for contacting us, $name. We will get back to you shortly.";

?>

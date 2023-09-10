<?php
$name = strip_tags($_POST['name']);
$email = strip_tags($_POST['email']);
$message = strip_tags($_POST['message']);

$recipient = "thetechjd@gmail.com";
$subject = "Contact Form | The Web3JD";

$headers = "From: $name <$email>\r\n";

mail($recipient, $subject, $message, $headers);

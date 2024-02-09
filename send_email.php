<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = "milo.prelevicc@google.com";
    $subject = "New Message from Contact Form";
    $body = "Name: $name\nEmail: $email\n\n$message";

    if (mail($to, $subject, $body)) {
        echo "Thank you for your message. We will get back to you soon!";
    } else {
        echo "There was a problem sending your message. Please try again later.";
    }
}
?>

<?php
// PHPMailer namespaces
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer files
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Form data receive karna
    $name = strip_tags(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $subject = strip_tags(trim($_POST['subject']));
    $message = strip_tags(trim($_POST['message']));

    // PHPMailer initialization + SMTP setup
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';       
        $mail->SMTPAuth = true;
        $mail->Username = 'adwiz_digital.india@gmail.com';  
        $mail->Password = getenv('GMAIL_APP_PASSWORD');    
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Sender & Recipient
        $mail->setFrom($email, $name);              
        $mail->addAddress('adwiz_digital.india@gmail.com');  

        // Email content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = "<h3>Contact Form Submission</h3>
                          <p><strong>Name:</strong> $name</p>
                          <p><strong>Email:</strong> $email</p>
                          <p><strong>Message:</strong><br>$message</p>";

        // Send email
        $mail->send();
        echo 'Message sent successfully!';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }

} else {
    echo "Invalid request";
}

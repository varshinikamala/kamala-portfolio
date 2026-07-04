<?php

$allowed_origins = [
    "http://localhost:5173",
    "https://kamala-portfolio-five.vercel.app"
];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowed_origins)) {
    header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
}
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

require_once "../vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$data = json_decode(file_get_contents("php://input"), true);

$name = trim($data["name"] ?? "");
$email = trim($data["email"] ?? "");
$subject = trim($data["subject"] ?? "");
$message = trim($data["message"] ?? "");

if (
    empty($name) ||
    empty($email) ||
    empty($subject) ||
    empty($message)
) {
    echo json_encode([
        "success" => false,
        "message" => "All fields are required."
    ]);
    exit;
}

$mail = new PHPMailer(true);

try {

    $mail->isSMTP();

    $mail->Host = "smtp.gmail.com";

    $mail->SMTPAuth = true;

    $mail->Username = "varshinikamala14@gmail.com";

    $mail->Password = "xmla prab ipud rrau";

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

    $mail->Port = 587;

    $mail->setFrom("varshinikamala14@gmail.com", "Portfolio Website");

    $mail->addAddress("varshinikamala14@gmail.com");

    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);

    $mail->Subject = "Portfolio Contact - " . $subject;

    $mail->Body = '
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <title>Portfolio Contact</title>
        </head>

        <body style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;">

        <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;background:#f4f7fb;">
        <tr>
        <td align="center">

        <table width="650" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 25px rgba(0,0,0,.08);">

            <!-- Header -->
            <tr>
                <td style="background:linear-gradient(135deg,#6d28d9,#8b5cf6,#06b6d4);padding:35px;text-align:center;color:#ffffff;">
                    <h1 style="margin:0;font-size:30px;">
                         New Portfolio Contact
                    </h1>

                    <p style="margin-top:10px;font-size:16px;color:#f3f3f3;">
                        A visitor has submitted your contact form.
                    </p>
                </td>
            </tr>

            <!-- Greeting -->
            <tr>
                <td style="padding:35px 40px 15px 40px;">

                    <h2 style="margin:0;color:#111827;">
                        Hello Varshini 
                    </h2>

                    <p style="margin-top:15px;color:#6b7280;font-size:16px;line-height:28px;">
                        You have received a new message from your portfolio website.
                        Below are the contact details submitted by the visitor.
                    </p>

                </td>
            </tr>

            <!-- Contact Details -->
            <tr>
                <td style="padding:20px 40px;">

                    <table width="100%" cellpadding="15" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:12px;background:#f9fafb;">

                        <tr>
                            <td width="150" style="font-weight:bold;color:#6d28d9;">
                                 Name
                            </td>

                            <td style="color:#374151;">
                                '.$name.'
                            </td>
                        </tr>

                        <tr>
                            <td style="font-weight:bold;color:#6d28d9;">
                                 Email
                            </td>

                            <td style="color:#374151;">
                                '.$email.'
                            </td>
                        </tr>

                        <tr>
                            <td style="font-weight:bold;color:#6d28d9;">
                                 Subject
                            </td>

                            <td style="color:#374151;">
                                '.$subject.'
                            </td>
                        </tr>

                    </table>

                </td>
            </tr>

            <!-- Message -->
            <tr>
                <td style="padding:0 40px 30px 40px;">

                    <h3 style="color:#111827;margin-bottom:15px;">
                         Message
                    </h3>

                    <div style="background:#f9fafb;border-left:5px solid #8b5cf6;padding:20px;border-radius:10px;color:#4b5563;line-height:28px;font-size:15px;">

                        '.nl2br(htmlspecialchars($message)).'

                    </div>

                </td>
            </tr>


        </table>

        </td>
        </tr>
        </table>

        </body>
        </html>
    ';

    $mail->send();

    echo json_encode([
        "success" => true,
        "message" => "Message sent successfully."
    ]);

} catch (Exception $e) {

    echo json_encode([
        "success" => false,
        "message" => $mail->ErrorInfo
    ]);

}
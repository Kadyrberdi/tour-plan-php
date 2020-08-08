<?php
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];
$title = "Новое обращение Best Tour plan";
$body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$message
<b>Подписка:</b><br>$email
";
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};
    $mail->Host       = 'ssl://smtp.gmail.com'; 
    $mail->Username   = 'lhojamkulyyev@gmail.com'; 
    $mail->Password   = 'LOC27P14'; 
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('lhojamkulyyev@gmail.com', 'John Mammet'); 
    $mail->addAddress('knurberdiyev@gmail.com');  
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

if ($mail->send()) {$result = "success";} 
else {$result = "error";}
 catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
header("Location: thankyou.html");

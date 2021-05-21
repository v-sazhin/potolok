<?php
require __DIR__.'/../vendor/autoload.php';


use PHPMailer\PHPMailer\PHPMailer;


$params = [
    "Заказчик (телефон): " => isset($_POST['phone']) ? $_POST['phone'] : 'не указано',
    "Заказчик (имя): " => isset($_POST['name']) ? $_POST['name'] : 'не указано',
    "Стоимость с калькулятора: " => isset($_POST['fullprice']) ? $_POST['fullprice'] : 'не указано',
    "Площадь: " => isset($_POST['square']) ? $_POST['square'] : 'не указано',
    "Материал: " => isset($_POST['material']) ? $_POST['material'] : 'не указано',

    "Дополнительный угол: " => isset($_POST['calc_ugol']) ? $_POST['calc_ugol'] : 'не указано',
    "Трубы: " => isset($_POST['calc_truba']) ? $_POST['calc_truba'] : 'не указано',
    "Светильники: " => isset($_POST['calc_svet_st']) ? $_POST['calc_svet_st'] : 'не указано',
];


$text = '';

foreach ($params as $k => $v) {
    $text .= "<p>".$k.$v."</p> <br>";
}


$mail = new PHPMailer(true);
try {
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host = 'smtp.example.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth = true;                                   //Enable SMTP authentication
    $mail->Username = 'user@example.com';                     //SMTP username
    $mail->Password = 'secret';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('from@example.com', 'Mailer');
    $mail->addAddress('kuchruk04@mail.ru', 'Администратор сайта');     //Add a recipient


    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Заявка с сайта';
    $mail->Body = $text;

    $mail->send();
    echo 'ok';
} catch (Exception $e) {
    echo "<p color='#E89700'>Ошибка, позвоните по номеру 568 - 618!</p>";
}

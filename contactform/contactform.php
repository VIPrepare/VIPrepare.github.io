
<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
	$subject=$_POST['subject']
    $message = $_POST['message'];

//send email
    mail("viprepare@gmail.com", "This is an email from:" .$email, $message);
}
?>
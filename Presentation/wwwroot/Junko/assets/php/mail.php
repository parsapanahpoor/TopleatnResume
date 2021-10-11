<?php

// Only process POST reqeusts.
if ($_SERVER["REQUEST_METHOD"] == "POST") {

	// Get the form fields and remove whitespace.
	$name = strip_tags(trim($_POST["name"]));
	$name = str_replace(array("\r","\n"),array(" "," "),$name);
	$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
	$subject = trim($_POST["subject"]);
	$message = trim($_POST["message"]);

	// Check that data was sent to the mailer.
	if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
		// Set a 400 (bad request) response code and exit.
		http_response_code(400);
		echo "لطفا فرم را کامل کرده و دوباره تلاش کنید.";
		exit;
	}

	// Set the recipient email address.
	// FIXME: Update this to your desired email address.
	$recipient = "info@sample.com";

	// Set the email subject.
	$mail_subject = "تماس جدید از طرف $name";

	// Build the email content.
	$email_content = "نام: $name\n";
	$email_content .= "ایمیل: $email\n";
	$email_content .= "موضوع: $subject\n\n";
	$email_content .= "پیام:\n$message\n";

	// Build the email headers.
	$email_headers = "From: $name <$email>";

	// Send the email.
	if (mail($recipient, $mail_subject, $email_content, $email_headers)) {
		// Set a 200 (okay) response code.
		http_response_code(200);
		echo "متشکریم! پیام شما ارسال شد.";
	} else {
		// Set a 500 (internal server error) response code.
		http_response_code(500);
		echo "خطایی در ارسال پیام رخ داده است.";
	}

} else {
	// Not a POST request, set a 403 (forbidden) response code.
	http_response_code(403);
	echo "مشکلی در ثبت پیام شما وجود دارد. لطفا دوباره تلاش کنید.";
}

?>

<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// ─── YOUR EMAIL ADDRESS ─────────────────────────────
$to = 'ananasharaf45@gmail.com';
// ────────────────────────────────────────────────────

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
    exit;
}

// Sanitize inputs
$name    = strip_tags(trim($_POST['name']    ?? ''));
$email   = strip_tags(trim($_POST['email']   ?? ''));
$subject = strip_tags(trim($_POST['subject'] ?? ''));
$message = strip_tags(trim($_POST['message'] ?? ''));

// Validate
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

// Email content
$email_subject = "Portfolio Contact: $subject";

$email_body  = "You have a new message from your portfolio website.\n\n";
$email_body .= "-------------------------------------------\n";
$email_body .= "Name:    $name\n";
$email_body .= "Email:   $email\n";
$email_body .= "Subject: $subject\n";
$email_body .= "-------------------------------------------\n\n";
$email_body .= "Message:\n$message\n\n";
$email_body .= "-------------------------------------------\n";
$email_body .= "Sent from ananaysha.com contact form\n";

$headers  = "From: portfolio@ananaysha.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
$sent = mail($to, $email_subject, $email_body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Mail server error']);
}
?>

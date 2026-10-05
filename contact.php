<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// ── YOUR EMAIL ──────────────────────────────────────────
$to = 'ananasharaf45@gmail.com';
// ────────────────────────────────────────────────────────

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
    exit;
}

// Get and sanitize form fields
$name    = isset($_POST['name'])    ? htmlspecialchars(strip_tags(trim($_POST['name'])))    : '';
$email   = isset($_POST['email'])   ? htmlspecialchars(strip_tags(trim($_POST['email'])))   : '';
$subject = isset($_POST['subject']) ? htmlspecialchars(strip_tags(trim($_POST['subject']))) : '';
$message = isset($_POST['message']) ? htmlspecialchars(strip_tags(trim($_POST['message']))) : '';

// Validate required fields
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

// Build the email
$email_subject = "Portfolio Contact: $subject";

$email_body  = "You received a new message from your portfolio website.\n\n";
$email_body .= "-------------------------------------------\n";
$email_body .= "Name    : $name\n";
$email_body .= "Email   : $email\n";
$email_body .= "Subject : $subject\n";
$email_body .= "-------------------------------------------\n\n";
$email_body .= "Message:\n$message\n\n";
$email_body .= "-------------------------------------------\n";
$email_body .= "Sent from ananaysha.com contact form\n";

$headers  = "From: no-reply@ananaysha.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send the email
$sent = mail($to, $email_subject, $email_body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send email']);
}
?>

<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php';

header('Content-Type: application/json');

function respond($code, $data) {
    http_response_code($code);
    echo json_encode($data);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['success' => false, 'message' => 'Method not allowed']);
}

/* ── Load .env ── */
$envFile = __DIR__ . '/.env';
if (!is_readable($envFile)) {
    respond(500, ['success' => false, 'message' => 'Server configuration missing']);
}
$env = parse_ini_file($envFile, false, INI_SCANNER_RAW);

/* ── Read & validate input ── */
$input = json_decode(file_get_contents('php://input'), true) ?: $_POST;
$clean = fn($v) => trim(strip_tags((string)($v ?? '')));

$name     = $clean($input['name'] ?? '');
$phone    = $clean($input['phone'] ?? '');
$email    = $clean($input['email'] ?? '');
$property = $clean($input['property'] ?? '');
$message  = $clean($input['message'] ?? '');

if ($name === '' || $phone === '') {
    respond(422, ['success' => false, 'message' => 'Name and phone are required']);
}
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['success' => false, 'message' => 'Invalid email address']);
}

$h = fn($v) => nl2br(htmlspecialchars($v !== '' ? $v : '-', ENT_QUOTES, 'UTF-8'));

$rows = [
    'Name'          => $name,
    'Phone'         => $phone,
    'Email'         => $email,
    'Property Type' => $property,
    'Message'       => $message,
];
$table = '';
foreach ($rows as $label => $value) {
    $table .= "<tr><td style=\"padding:8px 12px;background:#f5f5f5;font-weight:bold;width:140px;vertical-align:top\">$label</td>"
            . "<td style=\"padding:8px 12px\">" . $h($value) . "</td></tr>";
}
$body = "<h2 style=\"color:#0d1b2a\">New Website Enquiry</h2>"
      . "<table style=\"border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px\" border=\"1\" bordercolor=\"#ddd\">$table</table>";

$plain = '';
foreach ($rows as $label => $value) {
    $plain .= "$label: " . ($value !== '' ? $value : '-') . "\n";
}

/* ── Send ── */
$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = $env['SMTP_HOST'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $env['SMTP_USER'];
    $mail->Password   = $env['SMTP_PASS'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = (int)$env['SMTP_PORT'];
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom($env['SMTP_USER'], $env['MAIL_FROM_NAME'] ?? 'Website');
    foreach (array_filter(array_map('trim', explode(',', $env['MAIL_TO'] ?? ''))) as $to) {
        $mail->addAddress($to);
    }
    if ($email !== '') {
        $mail->addReplyTo($email, $name);
    }

    $mail->isHTML(true);
    $mail->Subject = "New Enquiry from $name";
    $mail->Body    = $body;
    $mail->AltBody = $plain;

    $mail->send();
    respond(200, ['success' => true, 'message' => 'Enquiry sent successfully']);
} catch (Exception $e) {
    error_log('Contact mail error: ' . $mail->ErrorInfo);
    respond(500, ['success' => false, 'message' => 'Failed to send enquiry. Please try again later.']);
}

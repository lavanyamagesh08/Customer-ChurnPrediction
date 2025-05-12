<?php
$servername = "localhost";
$username = "root";
$password = ""; // default XAMPP password
$dbname = "feedbackDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get POST data safely
$platform_satisfaction = $_POST['platform_satisfaction'];
$improvements = $_POST['improvements'];
$rating = $_POST['rating']; // Corrected name!

// Prepare SQL statement to avoid SQL injection
$stmt = $conn->prepare("INSERT INTO feedbacks (platform_satisfaction, improvements, rating) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $platform_satisfaction, $improvements, $rating);

// Execute and check result
if ($stmt->execute()) {
  echo "<script>alert('🎉 Your feedback has been recorded. Thank you!'); window.location.href='feedback.html';</script>";
} else {
  echo "Error: " . $stmt->error;
}

// Close connection
$stmt->close();
$conn->close();
?>

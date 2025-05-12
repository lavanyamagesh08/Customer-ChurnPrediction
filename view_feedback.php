<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "feedbackDB";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM feedbacks";
$result = $conn->query($sql);

echo "<h2>All Feedbacks:</h2>";
echo "<table border='1' cellpadding='10'>";
echo "<tr><th>ID</th><th>Satisfaction</th><th>Improvements</th><th>Rating</th><th>Submitted At</th></tr>";

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    echo "<tr>
          <td>{$row['id']}</td>
          <td>{$row['platform_satisfaction']}</td>
          <td>{$row['improvements']}</td>
          <td>{$row['rating']}</td>
          <td>{$row['submitted_at']}</td>
          </tr>";
  }
} else {
  echo "<tr><td colspan='5'>No feedback submitted yet</td></tr>";
}
echo "</table>";

$conn->close();
?>

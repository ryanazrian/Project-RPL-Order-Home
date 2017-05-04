<?php
require_once 'config.php';
if($_POST) {
  $username = $_POST['username'];
  $password = $_POST['password'];
  $user_status = $_POST['user_status'];

  $sql = "INSERT INTO user ( username, password,user_status) VALUES ('$username','$password', '$user_status')";
  if($conn->query($sql) === TRUE) {
    echo "<p>New Record Successfully Created!</p>";
    
  } else {
    echo "Error" .$sql.' '.$conn->connect_error;
  }
  $conn->close();
}

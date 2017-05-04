<?php
require_once 'config.php';
if($_POST){
  $username = $_POST['username'];
  $password = $_POST['password'];
  $user_status = $_POST['user_status'];
  $user_id = $_POST['user_id'];
  $sql = "UPDATE user SET username = '$username', password = '$password', user_status = '$user_status' WHERE user_id = {$user_id}";
  if($conn->query($sql) === TRUE) {
    echo "<p>Successfully Updated! </p>";
  } else {
    echo "Error while updating record :".$connect->connect_error;
  }
  $conn->close();
}
 ?>

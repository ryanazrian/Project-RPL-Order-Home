<?php

    include 'config.php';

      $postdata = file_get_contents("php://input");
      $username="";
      $password="";
      $user_status="";
      if (isset($postdata)) {
          $request = json_decode($postdata);
          $username = $request->username;
          $password = $request->password;
          $user_status = $request->user_status;

      }
      $encrypt_password = md5($password);
  $sql = mysqli_query($conn,"INSERT INTO user ( username, password,user_status) VALUES ('$username','$encrypt_password', '$user_status')");
  if($sql){
      $data =array(
          'message' => "Data have been created",
          'data' => $request,
          'status' => "200"
      );}
 else {
    echo "Error" .$sql.' '.$conn->connect_error;
    $data =array(
        'message' => "ERROR",
        'status' => "404"
    );
  }
  echo json_encode($data);

?>
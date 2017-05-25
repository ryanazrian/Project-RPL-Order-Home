<?php

    include 'config.php';

      $postdata = file_get_contents("php://input");
      $user_id="";
      $addres_name="";
      $addres_user="";
      $latitude="";
      $longitude="";

      if (isset($postdata)) {
          $request = json_decode($postdata);
          $user_id = $request->user_id;
          $addres_name = $request->addres_name;
          $addres_user = $request->addres_user;
          $latitude = $request->latitude;
          $longitude = $request->longitude;
      }

      $sql = mysqli_query($conn,"INSERT INTO addres ( user_id, addres_name, addres_user,latitude,longitude)
      VALUES ('$user_id','$addres_name', '$addres_user','$longitude',  '$latitude')");

  if($sql){
      $data =array(
          'message' => "Addres have been recorded",
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

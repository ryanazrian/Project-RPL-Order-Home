<?php

    include 'config.php';

      $postdata = file_get_contents("php://input");
      $user_id="";
      $addres_name="";
      $addres_province="";
      $addres_city="";
      $addres_state="";
      $addres_street="";

      if (isset($postdata)) {
          $request = json_decode($postdata);
          $user_id = $request->user_id;
          $addres_name = $request->addres_name;
          $addres_province = $request->addres_province;
          $addres_city= $request->addres_city;
          $addres_state=$request->addres_state;
          $addres_street=$request->addres_street;
      }

      $sql = mysqli_query($conn,"INSERT INTO addres ( user_id, addres_name, addres_province, addres_city, addres_state, addres_street)
      VALUES ('$user_id','$addres_name', '$addres_province','$addres_city','$addres_state','$addres_street')");

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

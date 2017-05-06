 <?php
include('config.php');
  $postdata = file_get_contents("php://input");
  $user_id="";
  if (isset($postdata)) {
      $request = json_decode($postdata);
      $user_id = $request->user_id;
  }

  $data = mysqli_query($conn, "DELETE FROM user WHERE user_id = $user_id");
  if($data){
  echo "Successfully removed!";
 }else{
  echo "Upss Something wrong..";
 }
 
 $conn->close();
?>

 <?php
include('config.php');
if($_POST){

  if (isset($_POST['user_id'])) {
	    $user_id = $_POST['user_id'];
	}

  $data = mysqli_query($conn, "DELETE FROM user WHERE user_id = $user_id");
  if($data){
  echo "Successfully removed!";
 }else{
  echo "Upss Something wrong..";
 }
 }
 $conn->close();
?>

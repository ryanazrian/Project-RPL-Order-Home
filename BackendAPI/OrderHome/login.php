<?php
	include 'config.php';
	//get data dari body (method post)
	$username = $_POST['username'];
	$password = $_POST['password'];
	//enkripsi password dengan md5
	$encryptPassword = md5($password);
	//query cek user
	$queryLogin = mysqli_query($conn, "SELECT * FROM users WHERE username = '$username' AND password = '$encryptPassword' ");
	//cek user kalo ketemu
	if (mysqli_num_rows($queryLogin)) {
		
		$row = mysqli_fetch_array($queryLogin);

		$data = array(
			'message' => "Login Succeess",
			'nama' => $row['nama'],
			'status' => "200"
			);
	} else {
		$data = array(
			'message' => "Login Failed"
			);
	}
	echo json_encode($data);
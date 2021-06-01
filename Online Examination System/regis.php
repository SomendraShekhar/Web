<?php
if(isset($_POST['register'])){
	include("conn.php");

	$username = $_POST['uname'];
	$email = $_POST['username'];
	$password = $_POST['pass'];
	$year = $_POST['year'];
	$course = $_POST['cid'];
 
if (mysqli_connect_error()){
die('Connect Error ('. mysqli_connect_errno() .') '
. mysqli_connect_error());
}
else{
$sql = "INSERT INTO examinee_tbl (exmne_fullname, exmne_email,exmne_password,exmne_year_level,exmne_course)
values ('$username','$email','$password','$year',$course)";
if ($conn->query($sql)){
	header("Location:index.php?register=success");

}
else{
echo "Error: ". $sql ."
". $conn->error;
}
$conn->close();

}
}
?>
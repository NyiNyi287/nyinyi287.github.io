<?php 
session_start();
include_once("db.php");



$sender_id=$_POST['sender_id'];
$toUser_id=$_POST['toUser_id'];

$message=$_POST['message'];
 if($message==""){
       return;
 };
$output="";

$query="INSERT INTO messages(fromuser, touser, message) VALUES ('$sender_id','$toUser_id','$message')";
$result=mysqli_query($connect,$query);
if(!$result){
      echo "Query failed to database";
};



      
?>

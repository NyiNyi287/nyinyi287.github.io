<?php 
include_once("db.php");

$sender_id=$_POST['sender_id'];
$toUser_id=$_POST['toUser_id'];

$output="";
$query="SELECT * FROM messages WHERE (fromuser=$sender_id And touser=$toUser_id) OR (fromuser=$toUser_id And touser=$sender_id)";


$result=mysqli_query($connect,$query);
if(!$result){
    die("Query failed to database".mysqli_error($result));
};

while($row=mysqli_fetch_assoc($result)){

if($row['fromuser']===$sender_id){

   $output.="<div class='messageBox'>".$row["message"]."</div>";
}else{
    $output.="<div class='messageBox2'>".$row["message"]."</div>";
};



}
echo $output;
?>
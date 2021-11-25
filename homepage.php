<?php
session_start();
include_once("db.php");
$sender_id= $_SESSION['sender_id'];
if(isset($_GET['id'])){
    $toUser_id=$_GET['id'];
    $query="SELECT username from users where id=$toUser_id";
$result=mysqli_query($connect,$query);
$row=mysqli_fetch_assoc($result);
$username=$row['username'];
echo '<input type="text" id="toUser_id" value="'.$toUser_id.'" hidden>';
echo '<input type="text" id="sender_id" value="'.$sender_id.'" hidden>';
}else{
    header("location:login.php");
};
if($toUser_id===$sender_id){
    echo "Something went wrong! Please refresh the page";
    return;
};

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Texter</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/custom.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,500;1,300;1,500&display=swap"
        rel="stylesheet">
        <link rel="stylesheet" href="assets/css/custom2.css">
        <script src="https://kit.fontawesome.com/55357d607e.js" crossorigin="anonymous"></script>
</head>
<body>
      
  <section>
       <div class="header d-flex">
           <h2 style="display:inline-block;"> Texter </h2>
         <div  class="p-2" style="display:inline-block; white-space: nowrap;">To:&nbsp;<?php echo $username;?> </div>
     
       </div>
    
       <div class="body" id="messageBody">

       
       </div>
       <div class="footer">
           <div class="handler">
               <input class="input" type="text" id="message">
               <i class="far fa-paper-plane icon2"></i>
           </div>
       </div>
      
   </section>


  <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/jquery-3.2.1.slim.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="assets/js/script.js"></script>
   
</body>
</html>
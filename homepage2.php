<<<<<<< HEAD

<?php 
session_start();
include_once("db.php");
if(isset($_GET['id'])){
    $user_id=$_GET['id'];
    $query="SELECT username from users where id=$user_id";
  $result=mysqli_query($connect,$query);
  $row=mysqli_fetch_assoc($result);
  $username=$row['username'];
  $_SESSION['username']=$row['username'];
}else{header("Location:login.php");};
$_SESSION['sender_id']= $_SESSION['userid'];
$sender_id=$_SESSION['sender_id'];
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
  <div class="header d-flex justify-content-between">
           <h2> Texter </h2>
        <div class="p-2" style=" white-space: nowrap;"><?php if(isset($username)){echo $username;}; ?></div>
     
       </div>
       <form action="homepage2.php" method="post" class="d-flex m-t-3">
        <input class="form-control me-2" id="search_value" type="search" placeholder="Search your friend" aria-label="Search" name="search_value">
        <input class="btn btn-primary " type="button" name="submitt" id='search-button' value="Search">
      </form>
      <!-- showUser(search_value) -->
    
       <div class="body">

       </div>
      
        

      
   </section>


  <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/jquery-3.2.1.slim.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="assets/js/script2.js"></script>
   
</body>
=======

<?php 
session_start();
include_once("db.php");
if(isset($_GET['id'])){
    $user_id=$_GET['id'];
    $query="SELECT username from users where id=$user_id";
  $result=mysqli_query($connect,$query);
  $row=mysqli_fetch_assoc($result);
  $username=$row['username'];
  $_SESSION['username']=$row['username'];
}else{header("Location:login.php");};
$_SESSION['sender_id']= $_SESSION['userid'];
$sender_id=$_SESSION['sender_id'];
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
  <div class="header d-flex justify-content-between">
           <h2> Texter </h2>
        <div class="p-2" style=" white-space: nowrap;"><?php if(isset($username)){echo $username;}; ?></div>
     
       </div>
       <form action="homepage2.php" method="post" class="d-flex m-t-3">
        <input class="form-control me-2" id="search_value" type="search" placeholder="Search your friend" aria-label="Search" name="search_value">
        <input class="btn btn-primary " type="button" name="submitt" id='search-button' value="Search">
      </form>
      <!-- showUser(search_value) -->
    
       <div class="body">

       </div>
      
        

      
   </section>


  <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/jquery-3.2.1.slim.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="assets/js/script2.js"></script>
   
</body>
>>>>>>> 2a53df39bbca5c60b5f3e5e78f19cb2f54830d65
</html>
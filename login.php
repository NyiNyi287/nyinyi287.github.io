<?php 
session_start();
ob_start();

include_once("db.php");
if(isset($_POST['submit'])){
 
        $username = $_POST['username'];
        $password = $_POST['password']; 
    
            if($username=="" or $password=="" ){
                header("location:login.php");
                return;
            };


        $query="SELECT id from users where username = '$username' and password = '$password'";
        $result=mysqli_query($connect,$query);
        if(!$result){
            echo "Query failed";
        };
        $row = mysqli_fetch_assoc($result);
        $num_row=mysqli_num_rows($result);
        $id=$row['id'];
    if($num_row>0){
        

        $_SESSION['userid']=$id;
        header("Location:homepage2.php?id=$id");
       

    }else{
        header("Location:login.php?status=fail");
        return;
    };



 };



?>




<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign up</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/custom.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,500;1,300;1,500&display=swap"
        rel="stylesheet">
</head>

<body>
    <section class=" sign-up  ">
        <form action="login.php" method="POST">
            <div class="container">
                <div class=" col-lg-6 col-md-6 col-sm-12 p-4 handler align-middle m-auto">
                    <div class="row ">
                        <h2 class="m-l-5">TEXTER</h2>


                    </div><br>

                    <!----------------------------- for warning text--------------------------------------->
                    <?php 
                    if(isset($_GET["status"])){
                        if($_GET["status"]=="fail") {
                            echo ' <div class="alert alert-warning" role="alert"> Wrong username or password </div>';
                        };

                    };
                    
                    
                    ?>
                
                    <!-- ----------------------------------------------------------------------------- -->

                    <input type="text" class="form-control " placeholder="Enter your Username" name="username"
                        required>
                    <br>
                    <input type="password" class="form-control" placeholder="Enter your Password" name="password"
                        required>
                    <br>
                    <p><a href="sign_up.php">Not registerd yet? Sign Up!!</a></p>

                    <input type="submit" class="btn btn-primary btn-submit" value="Log In" name="submit">
                </div>
            </div>
        </form>

    </section>



    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/jquery-3.2.1.slim.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
</body>

</html>
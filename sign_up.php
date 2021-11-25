<<<<<<< HEAD
<?php include_once("db.php");

            if(isset($_POST['submitt'])){
                $username=$_POST['username'];
                $password=$_POST['password'];
                $conf_password=$_POST['conf_password'];

                if($username=="" or $password=="" or $conf_password==""){
                    header("location:sign_up.php");
                    return;
                }else{
                   if(strlen($password)<6){
                       echo 
                    header("location:sign_up.php?status=fail3");
                    return;
                   };
                    if($password !== $conf_password){
                      
                        header("location:sign_up.php?status=fail");
                      return;
                       
                     }else{
                        $query1="SELECT id from users where username = '$username'";
                        $result=mysqli_query($connect,$query1);
                        if(!$result){
                            echo "Query failed";
                        };
                        $row = mysqli_fetch_assoc($result);
                        $num_row=mysqli_num_rows($result);
                        if ($num_row>0){
                            header("location:sign_up.php?status=fail2");
                            return;
                        }else{
                            $query="INSERT into users(username, password) VALUES ( '$username','$password')";
                            $result=mysqli_query($connect,$query);
                            if(!$result){
                                echo "Query failed";
                            };
                            header("location:login.php");
                            };
                        };
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
        <form action="sign_up.php" method="POST">
            <div class="container">
                <div class=" col-lg-6 col-md-6 col-sm-12 p-4 handler align-middle m-auto">
                    <div class="row ">
                        <h2>Welcome</h2>
                        <span>From TEXTER</span>

                    </div>
                    <!--------------------------------- for warning text -------------------------------------->
                     <?php 
                     if(isset($_GET["status"])){
                        if($_GET["status"]=="fail"){
                            echo '
                            <div class="alert alert-warning" role="alert"> Passwords does not match!</div> 
                            ';
                        };
                        if($_GET["status"]=="fail2"){
                            echo '
                            <div class="alert alert-warning" role="alert"> This username already existed!</div> 
                            ';
                        };
                        if($_GET["status"]=="fail3"){
                            echo '
                            <div class="alert alert-warning" role="alert"> Password must have 6 characters</div> 
                            ';
                        };
                     };
                   
                    ?> 
                   
                   <!-- --------------------------------------------------------------------------------------- -->
                    <input type="text" class="form-control " placeholder="Enter your Username" name="username"
                       required >
                    <br>
                    <input type="password" class="form-control" placeholder="Enter your Password" name="password"
                    required >
                    <br>
                    <input type="password" class="form-control" placeholder="Confirm your Password" name="conf_password"
                    required><br>
                    <p><a href="login.php" class="text-reset">Already have an account? Let's Sign In</p>
                    <input type="submit" class="btn btn-primary btn-submit" value="Sign Up" name="submitt">
                </div>
            </div>
        </form>

    </section>

    
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/jquery-3.2.1.slim.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
</body>

</html>
=======
<?php include_once("db.php");

            if(isset($_POST['submitt'])){
                $username=$_POST['username'];
                $password=$_POST['password'];
                $conf_password=$_POST['conf_password'];

                if($username=="" or $password=="" or $conf_password==""){
                    header("location:sign_up.php");
                    return;
                }else{
                   if(strlen($password)<6){
                       echo 
                    header("location:sign_up.php?status=fail3");
                    return;
                   };
                    if($password !== $conf_password){
                      
                        header("location:sign_up.php?status=fail");
                      return;
                       
                     }else{
                        $query1="SELECT id from users where username = '$username'";
                        $result=mysqli_query($connect,$query1);
                        if(!$result){
                            echo "Query failed";
                        };
                        $row = mysqli_fetch_assoc($result);
                        $num_row=mysqli_num_rows($result);
                        if ($num_row>0){
                            header("location:sign_up.php?status=fail2");
                            return;
                        }else{
                            $query="INSERT into users(username, password) VALUES ( '$username','$password')";
                            $result=mysqli_query($connect,$query);
                            if(!$result){
                                echo "Query failed";
                            };
                            header("location:login.php");
                            };
                        };
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
        <form action="sign_up.php" method="POST">
            <div class="container">
                <div class=" col-lg-6 col-md-6 col-sm-12 p-4 handler align-middle m-auto">
                    <div class="row ">
                        <h2>Welcome</h2>
                        <span>From TEXTER</span>

                    </div>
                    <!--------------------------------- for warning text -------------------------------------->
                     <?php 
                     if(isset($_GET["status"])){
                        if($_GET["status"]=="fail"){
                            echo '
                            <div class="alert alert-warning" role="alert"> Passwords does not match!</div> 
                            ';
                        };
                        if($_GET["status"]=="fail2"){
                            echo '
                            <div class="alert alert-warning" role="alert"> This username already existed!</div> 
                            ';
                        };
                        if($_GET["status"]=="fail3"){
                            echo '
                            <div class="alert alert-warning" role="alert"> Password must have 6 characters</div> 
                            ';
                        };
                     };
                   
                    ?> 
                   
                   <!-- --------------------------------------------------------------------------------------- -->
                    <input type="text" class="form-control " placeholder="Enter your Username" name="username"
                       required >
                    <br>
                    <input type="password" class="form-control" placeholder="Enter your Password" name="password"
                    required >
                    <br>
                    <input type="password" class="form-control" placeholder="Confirm your Password" name="conf_password"
                    required><br>
                    <p><a href="login.php" class="text-reset">Already have an account? Let's Sign In</p>
                    <input type="submit" class="btn btn-primary btn-submit" value="Sign Up" name="submitt">
                </div>
            </div>
        </form>

    </section>

    
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/jquery-3.2.1.slim.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
</body>

</html>
>>>>>>> 2a53df39bbca5c60b5f3e5e78f19cb2f54830d65

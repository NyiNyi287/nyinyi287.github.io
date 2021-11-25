<?php 
session_start();
include_once("db.php");
$search_value=$_POST["search_value"];

$sender_id=$_SESSION['sender_id'];
$username=$_SESSION['username'];
 if($search_value==""){
          return;
        };
        $query="SELECT * FROM users WHERE (username LIKE '%$search_value%' AND username!='$username')";
        $result=mysqli_query($connect,$query);

        if($result=="false"){
            echo "query failed";
        };

        // $row=mysqli_fetch_assoc($result);
    //  $filtered_val=$row['username'];
    //  echo $filtered_val;
   
        while ( $row=mysqli_fetch_assoc($result)){
       
            ?>
            <div class="card">
             <div class="card-body">
            <h5 class="card-title"><?php echo $row['username'];?></h5>
            <p class="card-text">Let's start a chat.</p>
            <a  href= <?php echo "homepage.php?id=".$row['id']?> class="btn btn-primary">Send message</a>
        </div></div>
 <?php

        };
      
      
     

?>
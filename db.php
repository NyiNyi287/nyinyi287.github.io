<<<<<<< HEAD
<?php 

$db['db_severname']="localhost";
$db['db_user']="root";
$db['db_pass']="";
$db['db_name']="texter";

foreach ($db as $key => $value) {
    
define(strtoupper($key),$value);

};

$connect=mysqli_connect(DB_SEVERNAME,DB_USER,DB_PASS,DB_NAME);

if(!$connect){
    die("Query failed ".mysqli_error());
};


?>
=======
<?php 

$db['db_severname']="mysql-59193-0.cloudclusters.net";
$db['db_user']="nicolas";
$db['db_pass']="texter123";
$db['db_name']="texter";

foreach ($db as $key => $value) {
    
define(strtoupper($key),$value);

};

$connect=mysqli_connect(DB_SEVERNAME,DB_USER,DB_PASS,DB_NAME);

if(!$connect){
    die("Query failed ".mysqli_error());
};


?>
>>>>>>> 2a53df39bbca5c60b5f3e5e78f19cb2f54830d65

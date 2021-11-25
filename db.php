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

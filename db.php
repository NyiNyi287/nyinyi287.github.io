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
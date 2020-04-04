<?php


$servername = "localhost";
$username = "root";
$password = "sterinsaji";
$dbname = "laravel";





// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}



$username = $_POST['username'];
$password = $_POST['password'];

if(username && $password)
{

    $sql = "SELECT username from users where username = '$username' and pass='$password'";


$result = $conn->query($sql);

if($result)
{
    while($row = $result->fetch_assoc()) {
       echo $row['username'];
    }
}
else{

   echo  "0";
   
}

}
else{
    echo "00";
}




?>






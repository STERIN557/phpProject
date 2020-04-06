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

    $sql = "SELECT * from users where username = '$username' and pass='$password'";


$result = $conn->query($sql);

if($result)
{
    
    while($row = $result->fetch_assoc()) {
   
        echo "firstname=".$row['firstname']."&username=".$row['username']."&lastname=".$row["lastname"]."&pass=".$row['pass']."&email=".$row['email'];
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






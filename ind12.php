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



$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$password = $_POST['pass'];
$connfpass = $_POST['Confpass'];



if(empty($firstname))
{
    echo "1";
}
else if(empty($lastname))
{
    echo "2";
}
else if(empty($email))
{
    echo "3";
}
else if(empty($password))
{
    echo "4";
}
else if(empty($connfpass))
{
    echo "5";
}
else if($password!=$connfpass)
{
    echo "6";
} else if(strlen($password) < 8)
{
    echo "7";
}
else{





$sql1 = "SELECT email from users where email='$email'";

$result1 = $conn->query($sql1);

if(mysqli_num_rows($result1)>0)
{
 echo "Already Exists";
}
else{

    $username1= rand(1,1000);
    $username = $firstname.$username1;
 
    $sql = "INSERT into users values('$username','$firstname','$lastname','$email','$password')";


    $result = $conn->query($sql);

    if($result)
    {
        $sql2 = "select username from users where email='$email'";
        $result3 = $conn->query($sql2);
        while($row = $result3->fetch_assoc())
        {
            echo $row['username'];
        }

    }
    else{
        echo "404";
    }



}

}








?>






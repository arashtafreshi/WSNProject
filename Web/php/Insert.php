<?php
// Create connection
$con=mysqli_connect("localhost","root","","wsn_lab");

// Check connection
if (mysqli_connect_errno($con))
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
else
	{
	echo "Connectedddd!";
  }
  
  
  /**
  Before Insert to Job table we need to clean all the row of 
  table which done before. 
  for this we can use following Command:
  "TRUNCATE TABLE name"
  
  **/
  
  $sql="INSERT INTO Job (ID,Name)
VALUES ('7','Peyman')";
 
 if (!mysqli_query($con,$sql))
  {
  die('Error: ' . mysqli_error($con));
  }
echo "1 Peyman record added";
 //close connection
 mysqli_close($con);
 
?> 
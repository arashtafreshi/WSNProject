<?php
$con=mysqli_connect("localhost","root","","wsn_lab");
// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }

$result = mysqli_query($con,"SELECT * FROM job");

//Create a Table to store

echo "<table border='1'>
<tr>
<th>Firstname</th>
<th>Lastname</th>
</tr>";


/**
	mysqli_fetch_array() function to return the first row from the recordset as an array.
	Each call to mysqli_fetch_array() returns the next row in the recordset. 
	The while loop loops through all the records in the recordset. 
	To print the value of each row, we use the PHP $row variable ($row['FirstName'] and $row['LastName']).
	**/

while($row = mysqli_fetch_array($result))
  {
  echo "<tr>";
  echo "<td>" . $row['ID'] . "</td>";
  echo "<td>" . $row['Name'] . "</td>";
  echo "</tr>";
  }
echo "</table>";

mysqli_close($con);
?> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>WDV101 Form Emailer Example</title>
<style type="text/css">
.colorRed {
	color: #F00;
}
</style>
</head>

<body>
<h1>WDV101 Intro HTML and CSS</h1>
<h2>Chapter 9 - Processing Forms</h2>
<h2>Format and Email the form information to an email address of your choice.</h2>
<h2 class="colorRed">This page was created by PHP on the server and sent back to your browser. </h2>
<hr />
<p>This process will process the 'name = value' pairs for all the elements of a form. It will format and create an email with the form information.  The email will be sent to whatever email address you wish to use.  You can hard code the email address within the PHP code or you could pass the email address as part of the form content.
</p>
<p>This form will also display the name value pairs from your form on the response page created by this PHP page.</p>
<p>
To call this page use <strong>basicFormEmailer.php</strong> in the action attribute of your form. Upload this PHP file to your server.</p>
<h3>Change the $to variable within the PHP code to the address where you want to send the information.</h3>
<p><strong>name</strong> - The value of the name attribute from the HTML form element.</p>
<p><strong>value</strong> - The value entered in the field. This will vary depending upon the HTML form element.</p>
<h3>Form Name-Value Pairs</h3>

<?php


//It will create a table and display one set of name value pairs per row
	echo "<table border='1'>";
	echo "<tr><th>Field Name</th><th>Value of field</th></tr>";
	foreach($_POST as $key => $value)
	{
		echo '<tr>';
		echo '<td>',$key,'</td>';
		echo '<td>',$value,'</td>';
		echo "</tr>";
	}
	echo "</table>";
	echo "<p>&nbsp;</p>";

//This code pulls the field name and value attributes from the Post file
//The Post file was created by the form page when it gathered all the name value pairs from the form.
//It is building a string of data that will become the body of the email

	$emailBody = "Form Data\n\n ";			//stores the content of the email
	foreach($_POST as $key => $value)		//Reads through all the name-value pairs. 	$key: field name
											//											$value: value from the form
	{
		$emailBody.= $key."=".$value."\n";	//Adds the name value pairs to the body of the email
	}

	$to = "jfrancois@dmacc.edu";				//change this to the address you wish to send the form information
 	$subject = "WDV101 Test Email";			//change this for Subject line
 	if (mail($to, $subject, $emailBody)) 	//puts pieces together and emails
	{
   		echo("<p>Message successfully sent!</p>");
  	}
	else
	{
   		echo("<p>Message delivery failed...</p>");
  	}

?>

</body>
</html>

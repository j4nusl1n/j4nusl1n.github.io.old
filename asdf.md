### Introduction
The code is menat to scan through the patients' statistics and insert into MySQL database. Source codes are **_mysql.inc.php_** and **_test.php_**,  one for connecting to the MySQL database server and the other for the scanning procedure.



### Methods
#### mysql.inc.php
```php
	$host="localhost";  // the MySQL database server IP, which is localhost in this case.
	$username="dbuser"; // the user name to login to MySQL
	$password="dbuser"; // the user's password
	$database="test";   // the database name used for this code.
	
	$con=mysqli_connect($host, $username, $password, $database);  // connect to the database, using an if statement for error detection.
```
#### test.php
Since the data format in **_sas0212v3.csv_** is **_DayX-YYYY,ZZZZ,WWWW_**, the PHP function 
```php 
fgetcsv();
```
will scan through each line and seperate the strings when a comma is encountered.
The function will return an array consisted of the data, in this code is **_$data_**.  
The next step is to get the substring of the data.
```php
$dayn=substr($data[0], 3, 1); // get DayX's X.
$type=substr($data[0], 5);    // get the type of the statistics.
$statistic=str_replace(" ", "", $data[1]);  // statistics
$patid=$data[2];              // patient id.
```  
After getting the substrings of the data, the next step is to check whether the table of the type of the statistics is exist or not.
```php
$result=mysqli_query($con, "show tables from test like '".$type."'"); // return a mysqli_result object
$exists=(mysqli_num_rows($result))?TRUE:FALSE;  // check the mysqli_result object's content
```
The checking uses the MySQL syntax. If the table exists, it will return the mysqli_result object consists of at least one row, which can be used for the following code.
**_$exists_** is **_True_** only if the **_$result_** has at least one row, which means the table is exists.
```php
if(!$exists){
	$sql="CREATE TABLE ".$type." (
		pid INT(32),
		day1 VARCHAR(512),
		day2 VARCHAR(512),
		day3 VARCHAR(512),
		day4 VARCHAR(512),
		day5 VARCHAR(512),
		day6 VARCHAR(512),
		day7 VARCHAR(512),
		PRIMARY KEY (pid)
	)";
	mysqli_query($con, $sql) or die("Error(create table):".mysqli_error($con)); // send the MySQL query to the database server
	$tablemap["$type"]=1;
	$sql="INSERT INTO $type (pid, day".$dayn.") values ($patid, $statistic)";
	mysqli_query($con, $sql) or die("Error(insert):".mysqli_error($con));
}
```
If the table is not exist, this is the MySQL syntax to create a table with columns **_pid, day1~day7_** and the primary key is **_pid_**.
Then set the value in **_$tablemap["$type"]_** to 1, indicating the table is created.


### Problems
The problems of this code is that it will have some MySQL errors at creating, inserting and updating. I think the reason is probally that the statistics data contain's serveral special characters that MySQL rejects.
Hope this document will help you understand the procedure flow.

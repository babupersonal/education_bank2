<?php

$servername = "localhost";
$username = "root";
$password = "asdfg535060";
$dbname = "bankDB";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// 檢查連接是否成功
if (!$conn) {
    die("資料庫連接失敗: " . mysqli_connect_error());
}

// 從表單獲取資料
$username = $_POST['username'];
$useremail = $_POST['useremail'];
$startime = $_POST['startime'];
$endtime = $_POST['endtime'];
$founds = $_POST['founds'];
$proposal_type = $_POST['proposal_type'];
$proposal_name = $_POST['proposal_name'];
$introduce = $_POST['introduce'];

// 執行 SQL 查詢插入資料
$sql = "INSERT INTO proposal_data (username, email, startime, endtime, founds, proposal_type, proposal_name, introduce) VALUES ('$username', '$useremail', '$startime', '$endtime',
 '$founds', '$proposal_type', '$proposal_name', '$introduce' )";
if (mysqli_query($conn, $sql)) {
    echo "資料插入成功";
} else {
    echo "錯誤: " . $sql . "<br>" . mysqli_error($conn);
}

// 關閉資料庫連接
mysqli_close($conn);
?>

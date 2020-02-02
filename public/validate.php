<?php 

  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);

  include("./libs/pdo.php");
  var_dump($pdo);

  if($_SERVER['REQUEST_METHOD'] === "POST") {

    header('Content-Type: application/json');
    $data = json_decode(file_get_contents("php://input"));
    
    // var_dump($data);
    if(!empty($data)) {
      
    }
    

    echo json_encode($data);
  }

?>
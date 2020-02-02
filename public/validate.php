<?php 

  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);

  if($_SERVER['REQUEST_METHOD'] === "POST") {

    header('Content-Type: application/json');
    $data = json_decode(file_get_contents("php://input"));
    
    // var_dump($data);
    

    echo json_encode($data);
  }

?>
<?php 

  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);

  if($_SERVER['REQUEST_METHOD'] === "POST") {

    header('Content-Type: application/json');
    $data = json_decode(file_get_contents("php://input"));
    
    if(count((array)$data)) {

      require_once("./libs/pdo.php");
      require_once("./libs/validator.php");

      /**
       * START VALIDATE FIELDS
       */
      $onlyStr = "([a-zA-z-]+)";
      $validationField = [
        "answer" => ["required"],
        "firstname" => ["required", $onlyStr],
        "lastname" => ["required", $onlyStr],
        "email" => ["required", "[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})"],
        "phone" => [],
        "address" => [],
        "number" => ["required"],
        "cp" => [],
        "city" => [],
        "accept" => [],
        "estimation" => [],
      ];

      $tmp = new Validator($data, $validationField);

      if(count($tmp->errors) > 0) {
        echo json_encode(array("type" => "error", "data" => $tmp->errors));
        die();
      }

      // else save on database

      echo json_encode(array("type" => "success", "message" => "Participation enregistrée."));
      echo json_encode(array("type" => "error", "message" => "Problème lors de la participation."));
      die();
    }
    
    echo json_encode(array("type" => "error", "message" => "Nous n'avons rien reçu."));
    
  }

?>
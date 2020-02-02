<?php 

  // ini_set('display_errors', 1);
  // ini_set('display_startup_errors', 1);
  // error_reporting(E_ALL);

  if($_SERVER['REQUEST_METHOD'] === "POST") {

    // Hack get ($_POST) from FETCH(.js)  
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
        "email" => ["required", "[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})"],
        "firstname" => ["required", $onlyStr],
        "lastname" => ["required", $onlyStr],
        "phone" => [],
        "address_line1" => [],
        "address_line2" => [],
        "postal_code" => [],
        "city" => [],
        "accept" => [],
        "estimation" => []
      ];

      $tmp = new Validator($data, $validationField);

      if(count($tmp->errors) > 0) {
        echo json_encode(array("type" => "error", "data" => $tmp->errors));
        die();
      }

      // Save on database
      $sql = "INSERT INTO carlsbourg (".join(",", array_keys($tmp->data)).") VALUES (".join(",", array_fill(0, count($tmp->data), '?')).")";
      $stmt = $pdo->prepare($sql);

      try {
        $stmt->execute(array_values($tmp->data));
        echo json_encode(array("type" => "success", "message" => "Participation enregistrée."));
      } catch(Exception $e) {
        // var_dump($e->getMessage());
        echo json_encode(array("type" => "error", "message" => "Problème lors de la participation."));
      }
      
      die();
    }
    
    echo json_encode(array("type" => "error", "message" => "Nous n'avons rien reçu."));
    
  }

?>
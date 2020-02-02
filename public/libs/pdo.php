<?php
  // BDD CONNEXION
  $options = [
    PDO::ATTR_EMULATE_PREPARES   => false, // turn off emulation mode for "real" prepared statements
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, //turn on errors in the form of exceptions
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, //make the default fetch be an associative array
  ];

  try {
    $pdo = new PDO('mysql:host=db;dbname=strategie_test;charset=utf8', 'dev', 'dev', $options);
  } catch(Exception $e) {
    die('Erreur : '.$e->getMessage());
  }
?>
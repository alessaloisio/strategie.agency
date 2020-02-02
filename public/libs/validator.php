<?php
// *********
// * Created by Alessandro Aloisio <https://aloisio.work>
// * 02/02/2019
// *********

class Validator {
  public function __construct(Object $data = NULL, Array $fields) {
    $this->data = get_object_vars($data);
    $this->fields = $fields;
    $this->errors = [];

    $this->secureData();
    $this->fieldVerify();

    $this->sortDataForSQL();
  }

  private function secureData() {
    $this->data = array_map("trim", $this->data);
    $this->data = array_map("strip_tags", $this->data);
    $this->data = array_map("htmlspecialchars", $this->data);
  }

  private function fieldVerify() {
    foreach ($this->fields as $key => $value) {
      for ($i=0; $i < count($value); $i++) {
        if ($value[$i] === "required") {
          if (!isset($this->data[$key]) || empty($this->data[$key])) {
            $this->errors[$key] = "Le champ est requis.";
          }
        } else {
          preg_match('/^'.$value[$i].'$/', $this->data[$key], $matches, PREG_OFFSET_CAPTURE);
          if(empty($matches)) {
            $this->errors[$key] = "Le champ est invalide.";
          }
        }
      }
    }
  }

  private function sortDataForSQL() {
    $tmp = [];

    foreach ($this->fields as $key => $value) {

      if(isset($this->data[$key]) && !empty($this->data[$key])) {
        $tmp[$key] = $this->data[$key];
      }
    }

    $this->data = $tmp;
  }
}
?>
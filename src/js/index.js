// *********
// * Created by Alessandro Aloisio <https://aloisio.work>
// * 01/02/2019
// *********

import "../scss/style.scss";

import Steps from "./Steps";
import FormData from "./FormData";

(() => {
  // Document ready

  const steps = new Steps();
  const form = document.getElementById("qcmForm");

  /***
   * Show the first Step
   */
  steps.inc();

  /***
   * Event Click Radio on Step1 => currentStep = 2 => switchStep
   */
  Array.from(document.querySelectorAll("#step-1 .radio")).map(radio => {
    radio.addEventListener("click", e => {
      e.preventDefault();
      e.target.querySelector("input").checked = true;
      steps.inc();
    });
  });

  /***
   * Validate Step 2
   */
  form.addEventListener("submit", e => {
    e.preventDefault();

    // Create a object with all fields data
    const FD = new FormData(form);
    const [data, errors] = FD.getAll();

    // Request
    if (!Object.keys(errors).length)
      fetch("/validate.php", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);
        });
  });
})();

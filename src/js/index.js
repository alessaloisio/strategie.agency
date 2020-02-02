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
   * On Radio Click sitch to Step 2
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
    FD.request("/validate.php", "POST").then(() => {
      if (FD.submit) steps.inc();
    });
  });
})();

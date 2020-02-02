export default class Step {
  constructor() {
    this.currentStep = 0;
    this.steps = Array.from(document.querySelectorAll('[id^="step-"]'));
  }

  switch() {
    this.steps.map(step =>
      step.getAttribute("id").includes(this.currentStep)
        ? (step.style.display = "flex")
        : (step.style.display = "none")
    );
  }

  inc() {
    if (this.currentStep + 1 <= this.steps.length) {
      this.currentStep++;
      this.switch();
    }
  }

  dec() {
    this.currentStep++;
    if (this.currentStep - 1 >= 1) {
      this.currentStep--;
      this.switch();
    }
  }
}

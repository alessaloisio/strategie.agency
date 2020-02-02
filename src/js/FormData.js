export default class FormData {
  constructor(form) {
    this.form = form;
    this.data = {};
    this.errors = {};
    this.submit = false;

    this.idErrorBlock = "error-message";
    this.classErrorInput = "error-message";

    // INIT FORM
    this.cleanAll();
    this.getAll();
  }

  cleanAll() {
    this.form.querySelector(`#${this.idErrorBlock}`).innerText = "";
    Array.from(this.form.querySelectorAll("input")).map(input => {
      if (input.parentNode) {
        const child = input.parentNode.querySelector(
          `.${this.classErrorInput}`
        );
        if (child) input.parentNode.removeChild(child);
      }
    });
  }

  getAll() {
    // console.log(Array.from(this.form.querySelectorAll("input")));
    Array.from(this.form.querySelectorAll("input")).map(input => {
      const { name, type, value, required, checked } = input;

      // Manage Required Input
      if (required && value.length === 0)
        return (errors[name] = "Remplissez ce champ");

      // Manage Checkbox
      if (type === "checkbox") return (this.data[name] = checked);

      // Manage Radio get checked field
      if (this.data[name] && !checked) return;

      this.data[name] = value;
    });

    return [this.data, this.errors];
  }

  request(action, method = "GET") {
    return new Promise(resolve => {
      fetch(action, {
        method: method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.data)
      })
        .then(response => response.json())
        .then(response => {
          if (response.type === "error") {
            console.log(response);

            if (response.message) {
              // Error with the database (multi-participation)
              document.getElementById(this.idErrorBlock).innerText =
                response.message;
            } else if (response.data) {
              // Error with fields
              const data = response.data;
              Object.keys(data).forEach(key => {
                // Add error message field
                const element = this.form.querySelector(`[name=${key}]`);
                if (element.parentNode) {
                  let p = document.createElement("p");
                  p.classList.add(this.classErrorInput);
                  p.innerText = data[key];
                  element.parentNode.appendChild(p);
                }
              });
            }
          } else if (response.type === "success") {
            this.submit = true;
          }

          resolve(true);
        });
    });
  }
}

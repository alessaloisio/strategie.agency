export default class FormData {
  constructor(form) {
    this.form = form;

    this.data = {};
    this.errors = {};

    // INIT FORM
    this.getAll();
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
    if (!Object.keys(this.errors).length)
      fetch(action, {
        method: method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.data)
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);
        });
  }
}

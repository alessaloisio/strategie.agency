export default class FormData {
  constructor(form) {
    this.form = form;

    this.data = {};
    this.errors = {};
  }

  getAll() {
    Array.from(this.form.querySelectorAll("input")).map(input => {
      const { name, value, required, checked } = input;

      // Manage Required Input
      if (required && value.length === 0)
        return (errors[name] = "Remplissez ce champ");

      // Manage Radio get checked field
      if (this.data[name] && !checked) return;

      this.data[name] = value;
    });

    return [this.data, this.errors];
  }
}

<div id="step-2">
  <div class="title">
    Entrez vos informations pour valider votre <span class="btn-primary">participation</span>
  </div>

  <div id="error-message"></div>

  <div class="columns">
    <div class="input tablet-50">
      <label for="lastname">Nom <span class="required">*</span>:</label>
      <input type="text" name="lastname" id="lastname" required>
    </div>
    
    <div class="input tablet-50">
      <label for="firstname">Prénom <span class="required">*</span>:</label>
      <input type="text" name="firstname" id="firstname" required>
    </div>
  </div>

  <div class="columns">
    <div class="input tablet-50">
      <label for="email">Email <span class="required">*</span>:</label>
      <input type="email" name="email" id="email" required>
    </div>

    <div class="input tablet-50">
      <label for="phone">Téléphone:</label>
      <input type="tel" name="phone" id="phone">
    </div>
  </div>

  <div class="columns">
    <div class="input tablet-75">
      <label for="address_line1">Adresse:</label>
      <input type="text" name="address_line1" id="address_line1">
    </div>

    <div class="input tablet-25">
      <label for="address_line2">N°:</label>
      <input type="text" name="address_line2" id="address_line2">
    </div>
  </div>

  <div class="columns">
    <div class="input tablet-50">
      <label for="postal_code">CP:</label>
      <input type="text" name="postal_code" id="postal_code">
    </div>

    <div class="input tablet-50">
      <label for="city">Ville:</label>
      <input type="text" name="city" id="city">
    </div>
  </div>

  <div class="accept-chart">
    <label class="checkbox">Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, dia+m. Sed arcu.
      <input type="checkbox" name="accept" checked="checked">
      <span class="checkmark"></span>
    </label>
  </div>

  <span class="sub-question_label">Combien de personne participeront avant le xx juin 2019 à minuit ?</span>

  <div class="estimation input">
    <label for="estimation">Estimation:</label>
    <input type="text" name="estimation" id="estimation">
  </div>

  <button id="submit" class="btn-secondary" type="submit">Valider votre participation</button>
</div>
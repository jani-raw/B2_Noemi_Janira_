// (1) Variablen initialisieren
const formContainer = document.getElementById("formularContainer");
const gameContainer = document.getElementById("Thankyou");
const submitButton = document.getElementById("submit");
submitButton.disabled = true;
const vornameField = document.getElementById("vorname");
const nachnameField = document.getElementById("nachname");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone");

// (2) Interaktionen festlegen
vornameField.addEventListener("keyup", () => {
  validateform();
});
nachnameField.addEventListener("keyup", () => {
  validateform();
});
emailField.addEventListener("keyup", () => {
  validateform();
});
phoneField.addEventListener("keyup", () => {
  validateform();
});

submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  onClickSubmit();
});

// Restlicher Code bleibt unverändert

// (3) Interaktionen Code

// Funktion zur Überprüfung des Namens (nur Buchstaben und bis zu 255 Zeichen)
function validateName(name) {
  var nameRegex = /^[A-Za-z]{1,255}$/;
  return nameRegex.test(name);
}

// Funktion zur Überprüfung der E-Mail-Syntax
function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Funktion zur Überprüfung der Telefonnummer im schweizerischen Format
function validatePhone(phone) {
  var phoneRegex = /^\+41[1-9]\d{1,13}$/;
  return phoneRegex.test(phone);
}

// Funktion zum Anzeigen einer Fehlermeldung
function showError(input, message) {
  var errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;

  var parent = input.parentElement;
  parent.appendChild(errorDiv);

  input.classList.add('input-error');
  
}

function validateform() {
  const vornameValue = vornameField.value;
  const nachnameValue = nachnameField.value;
  const emailValue = emailField.value;
  const phoneValue = phoneField.value;

  if (vornameValue !== "" && nachnameValue !== "" && emailValue !== "" && phoneValue !== "") {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

async function onClickSubmit() {
  // Validierung der Eingabefelder
  var vornameInput = document.getElementById('vorname');
  var nachnameInput = document.getElementById('nachname');
  var emailInput = document.getElementById('email');
  var phoneInput = document.getElementById('phone');

  // Vorname Validierung
  var vorname = vornameInput.value.trim();
  if (!validateName(vorname)) {
    showError(vornameInput, 'Vorname ist ungültig');
    return;
  }

  // Nachname Validierung
  var nachname = nachnameInput.value.trim();
  if (!validateName(nachname)) {
    showError(nachnameInput, 'Nachname ist ungültig');
    return;
  }

  // Email Validierung
  var email = emailInput.value.trim();
  if (!validateEmail(email)) {
    showError(emailInput, 'Emailformat: name@xy.ch');
    return;
  }

  // Telefonnummer Validierung
  var phone = phoneInput.value.trim();
  if (!validatePhone(phone)) {
    showError(phoneInput, 'Telefonnummerformat: +4112345678');
    return;
  }

  // Daten aus dem Formular für die Datenbank bereitstellen
  const data = {
    group: "b2",
    pw: "aa61f63b",
    tableName: "newsletter",

    columns: {
      vorname: vorname,
      nachname: nachname,
      email: email,
      phone: phone
    },
  };
  // Speichert die Daten in der Datenbank
  await databaseClient.insertInto(data);

  // Nach dem Speichern verschwindet das Formular, das Game erscheint
  formContainer.classList.add("hidden");
  gameContainer.classList.remove("hidden");
}

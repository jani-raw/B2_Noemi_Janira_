

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

// (3) Interaktionen Code

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
  // Daten aus dem Formular für die Datenbank bereitstellen
  const data = {
    group: "b2",
    pw: "aa61f63b",
    tableName: "newsletter",

    columns: {
      // "email" Name der Spalte in der SQL Tabelle
      //emailField.value" Eingabe des Benutzers aus dem Formularfeld
      vorname: vornameField.value,
      nachname: nachnameField.value,
      email: emailField.value,
      phone: phoneField.value
    },
  };
  // Speichert die Daten in der Datenbank
  await databaseClient.insertInto(data);

  // Nach dem Speichern verschwindet das Formular, das Game erscheint
  formContainer.classList.add("hidden");
  gameContainer.classList.remove("hidden");
}




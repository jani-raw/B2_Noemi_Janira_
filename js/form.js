// (1) Variablen initialisieren
const formContainer = document.getElementById("formContainer");
const gameContainer = document.getElementById("game-container");
const submitButton = document.getElementById("submit");
submitButton.disabled = true;
const emailField = document.getElementById("email");

// (2) Interaktionen festlegen
emailField.addEventListener("keyup", () => {
  onChangeEmailField();
});
submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  onClickSubmit();
});

// (3) Interaktionen Code
const onChangeEmailField = () => {
  if (emailField.value === "") {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
};

const onClickSubmit = async () => {
  // E-Mail-Adresse überprüfen
  const email = emailField.value;
  if (!validateEmail(email)) {
    alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
    return;
  }

  // Daten aus dem Formular für die Datenbank bereitstellen
  const data = {
    group: "b2", // SQL Gruppen Namen
    pw: "aa61f63b", // SQL Passwort
    tableName: "game", // Name der Tabelle in der SQL Datenbank

    columns: {
      // "email" Name der Spalte in der SQL Tabelle
      // "emailField.value" Eingabe des Benutzers aus dem Formularfeld
      email: emailField.value,
    },
  };
  // Speichert die Daten in der Datenbank
  await databaseClient.insertInto(data);

  // Nach dem Speichern verschwindet das Formular, das Game erscheint
  formContainer.classList.add("hidden");
  gameContainer.classList.remove("hidden");
};

// Funktion zur Überprüfung der E-Mail-Syntax
function validateEmail(email) {
  // Einfacher Regulärer Ausdruck zur Überprüfung der E-Mail-Syntax
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

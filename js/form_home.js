
// CHAT GPT korrrigiert?'
const myform = document.getElementById("formularContainer");
const gameContainer = document.getElementById("Thankyou");
const submitButton = document.getElementById("submit");
submitButton.disabled = true;
const vornameField = document.getElementById("vorname");
const nachnameField = document.getElementById("nachname");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone");
const infoField = document.querySelectorAll(".info-checkbox"); // Mehrere Elemente mit gemeinsamer Klasse

// (2) Interaktionen festlegen
vornameField.addEventListener("keyup", () => {
  validateForm();
});

nachnameField.addEventListener("keyup", () => {
  validateForm();
});

emailField.addEventListener("keyup", () => {
  validateForm();
});

phoneField.addEventListener("keyup", () => {
  validateForm();
});

infoField.forEach((field) => {
  field.addEventListener("change", () => {
    validateForm();
  });
});

submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  onClickSubmit();
});

// (3) Interaktionen Code
const validateForm = () => {
  if (
    vornameField.value === "" ||
    nachnameField.value === "" ||
    emailField.value === "" ||
    phoneField.value === "" ||
    !isAnyInfoFieldChecked()
  ) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
};

const isAnyInfoFieldChecked = () => {
  for (let i = 0; i < infoField.length; i++) {
    if (infoField[i].checked) {
      return true;
    }
  }
  return false;
};

async function onClickSubmit() {
  // Daten aus dem Formular für die Datenbank bereitstellen
  const data = {
    group: "b2",
    pw: "aa61f63b",
    tableName: "user",

    columns: {
      vorname: vornameField.value,
      nachname: nachnameField.value,
      email: emailField.value,
      phone: phoneField.value,
      info: getInfoFieldValues(),
    },
  };
  // Speichert die Daten in der Datenbank
  await databaseClient.insertInto(data);
}

const getInfoFieldValues = () => {
  const infoValues = [];
  infoField.forEach((field) => {
    if (field.checked) {
      infoValues.push(field.value);
    }
  });
  return infoValues;
}







/*
// (1) Variablen initialisieren
const myform = document.getElementById("formularContainer");
const gameContainer = document.getElementById("Thankyou");
const submitButton = document.getElementById("submit");
submitButton.disabled = true;
const vornameField = document.getElementById("vorname");
const nachnameField = document.getElementById("nachname");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone");
const infoField = document.getElementById("rabatte","updates", "angebote", "alle" );



// (2) Interaktionen festlegen
vornameField.addEventListener("keyup", () => {
  validateForm();
});

nachnameField.addEventListener("keyup", () => {
  validateForm();
});

emailField.addEventListener("keyup", () => {
  validateForm();
});

phoneField.addEventListener("keyup", () => {
  validateForm();
});

infoField.addEventListener("keyup", () => {
  validateForm();
});


submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  onClickSubmit();
});



// (3) Interaktionen Code
const validateForm = () => {
 // if (vornameField.value === "" && nachnameField.value === "")
  if (vornameField === "" && nachnameField === "" && emailField === "" && phoneField === "" && infoField === "" )  {
    submitButton.disabled = true;
  } else { 
    submitButton.disabled = false; 
  }
};



async function onClickSubmit() {
  // Daten aus dem Formular für die Datenbank bereitstellen
  const data = {
    group: "b2",
    pw: "aa61f63b",
    tableName: "user",

    columns: {
      // "email" Name der Spalte in der SQL Tabelle
      // "emailField.value" Eingabe des Benutzers aus dem Formularfeld
      vorname: vornameField.value,
      nachname: nachnameField.value,
      email: emailField.value,
      phone: phoneField.value,
      info: infoField.value,
    },
  };
  // Speichert die Daten in der Datenbank
  await databaseClient.insertInto(data);

  ;
}







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
  // Daten aus dem Formular für die Datenbank bereitstellen
  const data = {
    group: "b2", // SQL Gruppen Namen
    pw: "aa61f63b", // SQL Passwort
    tableName: "user", // Name der Tabelle in der SQL Datenbank

    columns: {
      // "email" Name der Spalte in der SQL Tabelle
      // "emailField.value" Eingabe des Benutzers aus dem Formularfeld
      email: emailField.value,
    },
  };
  // Speichert die Daten in der Datenbank
  await databaseClient.insertInto(data);

}

*/
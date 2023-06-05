

// (1) Variablen initialisieren
const formContainer = document.getElementById("formularContainer");
const gameContainer = document.getElementById("Thankyou");
const submitButton = document.getElementById("submit");
submitButton.disabled = true;
const vornameField = document.getElementById("vorname");
const nachnameField = document.getElementById("nachname");
const emailField = document.getElementById("email");
const infoField = document.getElementById("rabatten","updates", "angebote", "alles" );


// (2) Interaktionen festlegen
emailField.addEventListener("keyup", () => {
  onChangeEmailField();
});
submitButton.addEventListener("click", async (event) => {
  event.preventDefault();
  onClickSubmit();
});

// (3) Interaktionen Code + Validierung - nur wenn alle Eingaben vorhanden - Button anzeigen
 /*const onChangeEmailField = () => {
  if (emailField.value === " " && nachnameField.value === " " && vornameField.value === " " 
  && infoField.value === " "  ) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
};
*/

//https://stackoverflow.com/questions/5614399/disabling-submit-button-until-all-fields-have-values#:~:text=Just%20click%20f12%20in%20your,if%20the%20inputs%20are%20empty.
function buttonState(){
  $("input").each(function(){
      $('#submit').attr('disabled', 'disabled');
      if($(this).val() == "" ) return false;
      $('#submit').attr('disabled', '');
  })
}

$(function(){
  $('#submit').attr('disabled', 'disabled');
  $('input').change(buttonState);
})




const onClickSubmit = async () => {
  // Daten aus dem Formular für die Datenbank bereitstellen
  const data = {
    group: "b2", // SQL Gruppen Namen
    pw: "aa61f63b", // SQL Passwort
    tableName: "user", // Name der Tabelle in der SQL Datenbank

    columns: {
      // "email" Name der Spalte in der SQL Tabelle
      // "emailField.value" Eingabe des Benutzers aus dem Formularfeld
      vorname: vornameField.value,
      nachname: nachnameField.value,
      email: emailField.value,
      info: infoField.value,

    },
  };
  // Speichert die Daten in der Datenbank
  await databaseClient.insertInto(data);

  // Nach dem Speichern verschwindet das Formular, das Game erscheint
  formularContainer.classList.add("hidden");
  Thankyou.classList.remove("hidden");
};




//Validierung vom Formular
function validateemail()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  }  
}  


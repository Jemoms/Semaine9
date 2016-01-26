/******************* EXERCICE 1 ********************/

var listouille = document.querySelector("#liste"),
		nom = document.querySelector("#nom") ,
    prenom = document.querySelector("#prenom") ,
    numero = document.querySelector("#numero") ,
		ajouter = document.querySelector("#ajouter"),
    annuler = document.querySelector("#annuler"),
    recherche = document.querySelector("#recherche"),
    rechercher = document.querySelector("#rechercher"),
    resultats = document.querySelector("#resultats");
    

 
 contacts = [{
  prenom: "Julien",
  nom: "Grillot",
  numero: "0123456789"
}, {
  prenom: "John",
  nom: "Smith",
  numero: "0123456789"
}];

function texteContact(contact) {
  return contact.nom + ' ' + contact.prenom + ' ' + '('+ contact.numero + ')';
}

function afficherListe() {
		elements = "";
    for (i = 0; i < contacts.length; i++) {
        elements += "<li>" + texteContact(contacts[i]) + "</li>";
    }
    listouille.innerHTML = elements;
}

function ajouterElements() {
	    contacts.push({
        prenom: prenom.value,
        nom: nom.value,
        numero: numero.value
    });
  afficherListe();
  

}

function supprimerElements () {
	contacts.pop();
  afficherListe();
}

function rechercherElements() {
  elements="";
  var truc = recherche.value.toUpperCase();
  for (i = 0; i < contacts.length; i++) {
  	if (contacts[i].prenom.toUpperCase() == truc || contacts[i].nom.toUpperCase() == truc || contacts[i].numero == truc) {
    	elements += "<li>" + texteContact(contacts[i]) + "</li>";
    }
  }
  resultats.innerHTML = elements;
}

ajouter.addEventListener('click',ajouterElements,false);
annuler.addEventListener('click',supprimerElements,false);
rechercher.addEventListener('click',rechercherElements,false);
afficherListe();








/**********************************************/

/******************EXERCICE 2*******************

var listouille = document.querySelector("#liste"),
		texte = document.querySelector("#texte") ,
		ajouter = document.querySelector("#ajouter"),
    annuler = document.querySelector("#annuler");

tableau = ["Bob", "Julien", "Roger"];

function afficherListe() {
		elements = "";
    for (i = 0; i < tableau.length; i++) {
        elements += "<li>" + tableau[i] + "</li>";
    }
    listouille.innerHTML = elements;
}

function ajouterElements() {
	if(texte.value){
	tableau.push(texte.value);
  afficherListe();
  }

}

function supprimer () {
	tableau.pop();
  afficherListe();
}

ajouter.addEventListener('click',ajouterElements,false);
annuler.addEventListener('click',supprimer,false);
afficherListe();


**********************************************************************/
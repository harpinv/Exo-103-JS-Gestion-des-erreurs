let erreur = document.getElementById('resoulte');

try {
    erreur.innerHTML = "Je me suis tromper";
}
catch (error) {
    alert("L'élément 'erreur' n'existe pas !");
}
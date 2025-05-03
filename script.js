// Menu hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

let panier = JSON.parse(localStorage.getItem('panier')) || [];

const boutonsAjouter = document.querySelectorAll('.add-to-cart');

boutonsAjouter.forEach(bouton => {
    bouton.addEventListener('click', () => {
        const nom = bouton.dataset.nom;
        const prix = parseFloat(bouton.dataset.prix);
        panier.push({ nom, prix });
        localStorage.setItem('panier', JSON.stringify(panier));
        alert('${nom} ajouté au panier (${prix} MAD)');
   });
});
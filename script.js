// Menu hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
}

const boutonsAjouter = document.querySelectorAll('.add-to-cart');
const panier = JSON.parse(localStorage.getItem('panier')) || [];

boutonsAjouter.forEach(bouton => {
    bouton.addEventListener('click', () => {
        const nom = bouton.dataset.nom;
        const prix = Number(bouton.dataset.prix);
        const image = bouton.closest('.product-card').querySelector('img').src;

        const exist = panier.find(p => p.nom === nom);
        if (exist) {
            exist.quantité++;
        } else {
            panier.push({ nom, prix, image, quantité: 1 });
        }

        localStorage.setItem('panier', JSON.stringify(panier));
        alert(`${nom} ajouté au panier !`);
    });
});
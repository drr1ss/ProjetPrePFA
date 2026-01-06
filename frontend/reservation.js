document.addEventListener('DOMContentLoaded', () => {
  const vehiculeSelect = document.getElementById('vehicule');
  const form = document.getElementById('reservation-form');
  const result = document.getElementById('reservation-result');

  // Charger les véhicules depuis flotte.js
  const cars = appState.cars; // générés par flotte.js
  cars.slice(0, 50).forEach(car => { // limiter pour ne pas surcharger
    const option = document.createElement('option');
    option.value = car.id;
    option.textContent = `${car.name} - ${car.price} DH/jour`;
    vehiculeSelect.appendChild(option);
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const carId = parseInt(vehiculeSelect.value);
    const car = cars.find(c => c.id === carId);
    const start = new Date(document.getElementById('date-debut').value);
    const end = new Date(document.getElementById('date-fin').value);
    const days = Math.max(1, (end - start) / (1000*60*60*24));

    // Prix de base
    let total = car.price * days;

    // Options
    const options = form.querySelectorAll('input[type="checkbox"]:checked');
    options.forEach(opt => {
      total += parseInt(opt.value) * days;
    });

    result.textContent = `Réservation pour ${car.name} : ${total.toLocaleString('fr-FR')} DH (${days} jours)`;
  });
});

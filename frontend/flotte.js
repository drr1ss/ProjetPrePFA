// ============================================
// DONNÉES DE LA FLOTTE - 400 VÉHICULES
// ============================================

const categories = {
    prestige: 'Prestige',
    suv: 'SUV & 4x4',
    sport: 'Sport',
    business: 'Business'
};

// Modèles par catégorie avec spécifications
const carModels = {
    prestige: [
        { name: 'Mercedes Classe S 500', basePrice: 1800, fuel: 'Diesel/Hybride', transmission: 'Auto', seats: 5 },
        { name: 'Mercedes Classe S 580', basePrice: 2200, fuel: 'Hybride', transmission: 'Auto', seats: 5 },
        { name: 'BMW 735 Li', basePrice: 1700, fuel: 'Diesel', transmission: 'Auto', seats: 5 },
        { name: 'BMW 740 Le', basePrice: 1900, fuel: 'Hybride', transmission: 'Auto', seats: 5 },
        { name: 'Audi A8 L 55 TFSI', basePrice: 1750, fuel: 'Essence', transmission: 'Auto', seats: 5 },
        { name: 'Audi A8 L 60 TDI', basePrice: 1950, fuel: 'Diesel', transmission: 'Auto', seats: 5 },
        { name: 'Porsche Panamera 4', basePrice: 2000, fuel: 'Hybride', transmission: 'Auto', seats: 5 },
        { name: 'Porsche Panamera Turbo', basePrice: 2800, fuel: 'Essence', transmission: 'Auto', seats: 5 },
        { name: 'Bentley Flying Spur', basePrice: 3500, fuel: 'V8 Essence', transmission: 'Auto', seats: 5 },
        { name: 'Bentley Continental GT', basePrice: 3200, fuel: 'V8 Essence', transmission: 'Auto', seats: 4 },
        { name: 'Rolls-Royce Ghost', basePrice: 5500, fuel: 'V12 Essence', transmission: 'Auto', seats: 5 },
        { name: 'Rolls-Royce Phantom', basePrice: 7500, fuel: 'V12 Essence', transmission: 'Auto', seats: 5 },
        { name: 'Mercedes-Maybach S 680', basePrice: 4500, fuel: 'V12 Essence', transmission: 'Auto', seats: 5 },
        { name: 'Mercedes-Maybach GLS 600', basePrice: 4000, fuel: 'V8 Hybride', transmission: 'Auto', seats: 5 },
        { name: 'BMW i7 xDrive60', basePrice: 2500, fuel: 'Électrique', transmission: 'Auto', seats: 5 },
        { name: 'Audi e-tron GT', basePrice: 2200, fuel: 'Électrique', transmission: 'Auto', seats: 5 },
        { name: 'Porsche Taycan Turbo', basePrice: 2400, fuel: 'Électrique', transmission: 'Auto', seats: 5 },
        { name: 'Mercedes EQE 53 AMG', basePrice: 2100, fuel: 'Électrique', transmission: 'Auto', seats: 5 },
        { name: 'Lucid Air Sapphire', basePrice: 3000, fuel: 'Électrique', transmission: 'Auto', seats: 5 },
        { name: 'Tesla Model S Plaid', basePrice: 2000, fuel: 'Électrique', transmission: 'Auto', seats: 5 }
    ],
    suv: [
        { name: 'Range Rover Vogue', basePrice: 2200, fuel: 'Diesel V6', transmission: 'Auto 4x4', seats: 5 },
        { name: 'Range Rover Sport', basePrice: 2000, fuel: 'Diesel V6', transmission: 'Auto 4x4', seats: 5 },
        { name: 'Range Rover Autobiography', basePrice: 2800, fuel: 'V8 Essence', transmission: 'Auto 4x4', seats: 5 },
        { name: 'Mercedes GLS 400d', basePrice: 2100, fuel: 'Diesel', transmission: 'Auto 4x4', seats: 7 },
        { name: 'Mercedes GLS 580', basePrice: 2600, fuel: 'V8 Essence', transmission: 'Auto 4x4', seats: 7 },
        { name: 'Mercedes G-Class G63 AMG', basePrice: 3500, fuel: 'V8 Essence', transmission: 'Auto 4x4', seats: 5 },
        { name: 'BMW X7 xDrive40d', basePrice: 1900, fuel: 'Diesel', transmission: 'Auto 4x4', seats: 7 },
        { name: 'BMW X7 M60i', basePrice: 2400, fuel: 'V8 Essence', transmission: 'Auto 4x4', seats: 7 },
        { name: 'BMW X5 xDrive40d', basePrice: 1700, fuel: 'Diesel', transmission: 'Auto 4x4', seats: 5 },
        { name: 'BMW X5 M Competition', basePrice: 2800, fuel: 'V8 Essence', transmission: 'Auto 4x4', seats: 5 },
        { name: 'Audi Q8 55 TFSI', basePrice: 1850, fuel: 'V6 Essence', transmission: 'Auto 4x4', seats: 5 },
        { name: 'Audi Q8 e-tron', basePrice: 1950, fuel: 'Électrique', transmission: 'Auto 4x4', seats: 5 },
        { name: 'Audi Q7 45 TDI', basePrice: 1600, fuel: 'Diesel', transmission: 'Auto 4x4', seats: 7 },
        { name: 'Porsche Cayenne GTS', basePrice: 2300, fuel: 'V8 Essence', transmission: 'Auto 4x4', seats: 5 },
        { name: 'Porsche Cayenne Turbo', basePrice: 2900, fuel: 'V8 Essence', transmission: 'Auto 4x4', seats: 5 },
        { name: 'Porsche Cayenne E-Hybrid', basePrice: 2100, fuel: 'Hybride', transmission: 'Auto 4x4', seats: 5 },
        { name: 'Land Rover Defender 110', basePrice: 1800, fuel: 'Diesel', transmission: 'Auto 4x4', seats: 6 },
        { name: 'Land Rover Discovery', basePrice: 1500, fuel: 'Diesel', transmission: 'Auto 4x4', seats: 7 },
        { name: 'Cadillac Escalade', basePrice: 2000, fuel: 'V8 Essence', transmission: 'Auto', seats: 8 },
        { name: 'Lincoln Navigator', basePrice: 1800, fuel: 'V6 Twin-Turbo', transmission: 'Auto', seats: 8 }
    ],
    sport: [
        { name: 'Porsche 911 Carrera S', basePrice: 2500, fuel: 'Flat-6 Essence', transmission: 'PDK', seats: 4 },
        { name: 'Porsche 911 Turbo S', basePrice: 4000, fuel: 'Flat-6 Turbo', transmission: 'PDK', seats: 4 },
        { name: 'Porsche 911 GT3 RS', basePrice: 5000, fuel: 'Flat-6 Essence', transmission: 'PDK', seats: 2 },
        { name: 'Ferrari F8 Tributo', basePrice: 4500, fuel: 'V8 Twin-Turbo', transmission: 'F1', seats: 2 },
        { name: 'Ferrari SF90 Stradale', basePrice: 6000, fuel: 'V8 Hybride', transmission: 'F1', seats: 2 },
        { name: 'Ferrari Roma', basePrice: 4000, fuel: 'V8 Twin-Turbo', transmission: 'F1', seats: 4 },
        { name: 'Lamborghini Huracán EVO', basePrice: 4200, fuel: 'V10 Essence', transmission: 'LDA', seats: 2 },
        { name: 'Lamborghini Huracán STO', basePrice: 5500, fuel: 'V10 Essence', transmission: 'LDA', seats: 2 },
        { name: 'Lamborghini Aventador S', basePrice: 6500, fuel: 'V12 Essence', transmission: 'LDA', seats: 2 },
        { name: 'McLaren 720S', basePrice: 4800, fuel: 'V8 Twin-Turbo', transmission: 'Auto', seats: 2 },
        { name: 'McLaren 765LT', basePrice: 5800, fuel: 'V8 Twin-Turbo', transmission: 'Auto', seats: 2 },
        { name: 'McLaren Artura', basePrice: 5000, fuel: 'V6 Hybride', transmission: 'Auto', seats: 2 },
        { name: 'BMW M4 Competition', basePrice: 1800, fuel: 'I6 Twin-Turbo', transmission: 'Auto', seats: 4 },
        { name: 'BMW M5 Competition', basePrice: 2200, fuel: 'V8 Twin-Turbo', transmission: 'Auto', seats: 5 },
        { name: 'Mercedes-AMG GT 63', basePrice: 2800, fuel: 'V8 Twin-Turbo', transmission: 'Auto', seats: 4 },
        { name: 'Mercedes-AMG GT R', basePrice: 3500, fuel: 'V8 Twin-Turbo', transmission: 'Auto', seats: 2 },
        { name: 'Audi RS e-tron GT', basePrice: 2400, fuel: 'Électrique', transmission: 'Auto', seats: 5 },
        { name: 'Audi R8 V10 Performance', basePrice: 3200, fuel: 'V10 Essence', transmission: 'S-Tronic', seats: 2 },
        { name: 'Nissan GT-R R35', basePrice: 2000, fuel: 'V6 Twin-Turbo', transmission: 'DCT', seats: 4 },
        { name: 'Jaguar F-Type R', basePrice: 1900, fuel: 'V8 Essence', transmission: 'Auto', seats: 2 }
    ],
    business: [
        { name: 'Mercedes Classe E 300', basePrice: 800, fuel: 'Diesel', transmission: 'Auto', seats: 5 },
        { name: 'Mercedes Classe E 350e', basePrice: 950, fuel: 'Hybride', transmission: 'Auto', seats: 5 },
        { name: 'BMW 520i', basePrice: 750, fuel: 'Essence', transmission: 'Auto', seats: 5 },
        { name: 'BMW 530e', basePrice: 900, fuel: 'Hybride', transmission: 'Auto', seats: 5 },
        { name: 'Audi A6 40 TDI', basePrice: 700, fuel: 'Diesel', transmission: 'Auto', seats: 5 },
        { name: 'Audi A6 55 TFSIe', basePrice: 850, fuel: 'Hybride', transmission: 'Auto', seats: 5 },
        { name: 'Audi A7 55 TFSI', basePrice: 1100, fuel: 'V6 Essence', transmission: 'Auto', seats: 5 },
        { name: 'Mercedes CLS 450', basePrice: 1300, fuel: 'I6 Turbo', transmission: 'Auto', seats: 5 },
        { name: 'BMW 8 Series Gran Coupe', basePrice: 1800, fuel: 'V8 Essence', transmission: 'Auto', seats: 5 },
        { name: 'Porsche Panamera 4S', basePrice: 2200, fuel: 'V8 Essence', transmission: 'Auto', seats: 5 },
        { name: 'Mercedes Classe V', basePrice: 1000, fuel: 'Diesel', transmission: 'Auto', seats: 8 },
        { name: 'Vito Tourer', basePrice: 700, fuel: 'Diesel', transmission: 'Auto', seats: 9 },
        { name: 'Ford Tourneo Custom', basePrice: 600, fuel: 'Diesel', transmission: 'Auto', seats: 9 },
        { name: 'Toyota Alphard', basePrice: 1200, fuel: 'Hybride', transmission: 'CVT', seats: 7 },
        { name: 'Toyota Granvia', basePrice: 1000, fuel: 'Diesel', transmission: 'Auto', seats: 8 },
        { name: 'Lexus ES 300h', basePrice: 850, fuel: 'Hybride', transmission: 'CVT', seats: 5 },
        { name: 'Lexus LS 500h', basePrice: 1600, fuel: 'V6 Hybride', transmission: 'Auto', seats: 5 },
        { name: 'Volvo S90 Recharge', basePrice: 900, fuel: 'Hybride', transmission: 'Auto', seats: 5 },
        { name: 'Volvo XC90 Recharge', basePrice: 1100, fuel: 'Hybride', transmission: 'Auto', seats: 7 },
        { name: 'Citroën SpaceTourer', basePrice: 550, fuel: 'Diesel', transmission: 'Auto', seats: 8 }
    ]
};

// Images Unsplash pour chaque catégorie
const categoryImages = {
    prestige: [
        'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop'
    ],
    suv: [
        'https://images.unsplash.com/photo-1606611013016-969c19ba27bb?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop'
    ],
    sport: [
        'https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop'
    ],
    business: [
        'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop'
    ]
};

// Couleurs disponibles
const colors = ['Noir', 'Gris', 'Blanc', 'Bleu', 'Rouge', 'Argent', 'Beige', 'Bordeaux'];

// Options par catégorie
const options = {
    prestige: [
        'Intégral Cuir Nappa',
        'Toit Panoramique',
        'Sièges Massants',
        'Écrans Arrière',
        'Système Hi-Fi Bang & Olufsen',
        'Climatisation 4 Zones',
        'Rideaux Électriques'
    ],
    suv: [
        'Suspension Pneumatique',
        'Écran Tactile 12"',
        'Caméra 360°',
        'Sièges Chauffants',
        'Hayon Mains Libres',
        'Troisième Rangée rabattable'
    ],
    sport: [
        'Volant Carbone',
        'Sièges Baquets',
        'Freins Céramique',
        'Échappement Sport',
        'Launch Control',
        'Palettes au Volant'
    ],
    business: [
        'WiFi Intégré',
        'Ports USB-C',
        'Écran de Navigation',
        'Régulateur de Vitesse',
        'Aide au Stationnement',
        'Bluetooth'
    ]
};

// ============================================
// GÉNÉRATION DES 400 VÉHICULES
// ============================================

function generateCars() {
    const cars = [];
    let id = 1;
    
    Object.keys(carModels).forEach(category => {
        const models = carModels[category];
        const images = categoryImages[category];
        const categoryOptions = options[category];
        const categoryName = categories[category];
        
        // Générer 100 véhicules par catégorie
        for (let i = 0; i < 100; i++) {
            const modelIndex = i % models.length;
            const model = models[modelIndex];
            const imageIndex = i % images.length;
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
            
            // Variation de prix +/- 20%
            const priceVariation = 0.8 + Math.random() * 0.4;
            const price = Math.round(model.basePrice * priceVariation / 100) * 100;
            
            // Sélection aléatoire de 4 options
            const shuffledOptions = [...categoryOptions].sort(() => 0.5 - Math.random());
            const selectedOptions = shuffledOptions.slice(0, 4);
            
            cars.push({
                id: id++,
                name: model.name,
                category: categoryName,
                categoryKey: category,
                price: price,
                fuel: model.fuel,
                transmission: model.transmission,
                seats: model.seats,
                image: images[imageIndex],
                colors: `${randomColor}, ${randomColor2}`,
                options: selectedOptions,
                status: Math.random() > 0.3 ? 'Disponible' : 'Réservé'
            });
        }
    });
    
    return cars;
}

// ============================================
// ÉTAT DE L'APPLICATION
// ============================================

const appState = {
    cars: generateCars(),
    currentPage: 1,
    carsPerPage: 12,
    activeFilter: 'all',
    searchQuery: ''
};

// ============================================
// FONCTIONS DE FILTRAGE
// ============================================

function getFilteredCars() {
    let filtered = appState.cars;
    
    // Filtrage par catégorie
    if (appState.activeFilter !== 'all') {
        const filterKey = Object.keys(categories).find(key => categories[key] === appState.activeFilter);
        filtered = filtered.filter(car => car.categoryKey === filterKey);
    }
    
    // Filtrage par recherche
    if (appState.searchQuery.trim()) {
        const query = appState.searchQuery.toLowerCase();
        filtered = filtered.filter(car => 
            car.name.toLowerCase().includes(query) ||
            car.category.toLowerCase().includes(query)
        );
    }
    
    return filtered;
}

function getPaginatedCars() {
    const filtered = getFilteredCars();
    const start = (appState.currentPage - 1) * appState.carsPerPage;
    const end = start + appState.carsPerPage;
    return filtered.slice(start, end);
}

function getTotalPages() {
    return Math.ceil(getFilteredCars().length / appState.carsPerPage);
}

// ============================================
// FONCTIONS D'AFFICHAGE
// ============================================

function createCarCard(car) {
    return `
        <div class="car-card" data-id="${car.id}">
            <div class="car-img" style="background-image: url('${car.image}')">
                <span class="status-tag ${car.status === 'Disponible' ? 'available' : 'reserved'}">${car.status}</span>
            </div>
            <div class="car-content">
                <span class="category">${car.category}</span>
                <h3>${car.name}</h3>
                <div class="car-specs">
                    <span>⛽ ${car.fuel}</span>
                    <span>🕹️ ${car.transmission}</span>
                    <span>👤 ${car.seats} places</span>
                </div>
                <ul class="options-list">
                    ${car.options.map(opt => `<li>• ${opt}</li>`).join('')}
                </ul>
                <div class="colors-info">
                    <small>Couleurs: ${car.colors}</small>
                </div>
                <div class="car-footer">
                    <div class="price">
                        <small>À partir de</small>
                        <strong>${car.price.toLocaleString('fr-FR')} DH<span>/jour</span></strong>
                    </div>
                    <a href="reservation.html?car=${encodeURIComponent(car.name)}" class="btn-action">Réserver</a>
                </div>
            </div>
        </div>
    `;
}

function renderCars() {
    const grid = document.getElementById('cars-grid');
    const cars = getPaginatedCars();
    
    if (cars.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <p>Aucun véhicule ne correspond à vos critères.</p>
                <button class="btn-reset" onclick="resetFilters()">Réinitialiser les filtres</button>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = cars.map(car => createCarCard(car)).join('');
    
    // Animation d'entrée
    const cards = grid.querySelectorAll('.car-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

// ============================================
// PAGINATION
// ============================================

function renderPagination() {
    const pagination = document.getElementById('pagination');
    const totalPages = getTotalPages();
    const currentPage = appState.currentPage;
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // Bouton Précédent
    paginationHTML += `
        <button class="page-btn prev" ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">
            &laquo; Précédent
        </button>
    `;
    
    // Pages avec ellipses
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    if (startPage > 1) {
        paginationHTML += `<button class="page-btn" onclick="changePage(1)">1</button>`;
        if (startPage > 2) {
            paginationHTML += `<span class="page-ellipsis">...</span>`;
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">
                ${i}
            </button>
        `;
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationHTML += `<span class="page-ellipsis">...</span>`;
        }
        paginationHTML += `<button class="page-btn" onclick="changePage(${totalPages})">${totalPages}</button>`;
    }
    
    // Bouton Suivant
    paginationHTML += `
        <button class="page-btn next" ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">
            Suivant &raquo;
        </button>
    `;
    
    pagination.innerHTML = paginationHTML;
    
    // Info de pagination
    const info = document.getElementById('pagination-info');
    const filteredCars = getFilteredCars();
    const start = (currentPage - 1) * appState.carsPerPage + 1;
    const end = Math.min(start + appState.carsPerPage - 1, filteredCars.length);
    info.innerHTML = `Affichage de ${start} à ${end} sur ${filteredCars.length} véhicules`;
}

function changePage(page) {
    const totalPages = getTotalPages();
    if (page < 1 || page > totalPages) return;
    
    appState.currentPage = page;
    renderCars();
    renderPagination();
    
    // Scroll vers le haut de la grille
    document.getElementById('cars-grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============================================
// FILTRES
// ============================================

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-pills .pill');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Mise à jour UI
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Mise à jour état
            const filterText = btn.textContent.trim();
            appState.activeFilter = filterText === 'Tout voir' ? 'all' : filterText;
            appState.currentPage = 1;
            
            renderCars();
            renderPagination();
        });
    });
}

// ============================================
// RECHERCHE
// ============================================

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    let searchTimeout;
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            appState.searchQuery = e.target.value;
            appState.currentPage = 1;
            renderCars();
            renderPagination();
        }, 300);
    });
}

function resetFilters() {
    appState.activeFilter = 'all';
    appState.searchQuery = '';
    appState.currentPage = 1;
    
    // Mise à jour UI
    document.querySelectorAll('.filter-pills .pill').forEach((btn, index) => {
        btn.classList.toggle('active', index === 0);
    });
    document.getElementById('search-input').value = '';
    
    renderCars();
    renderPagination();
}

// ============================================
// INITIALISATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    setupFilters();
    setupSearch();
    renderCars();
    renderPagination();
});

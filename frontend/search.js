/**
 * Search Container Module
 * Gère le formulaire de recherche de reservation sur la page d'accueil
 */

document.addEventListener('DOMContentLoaded', function() {
    initSearchForm();
    initURLParams();
});

/**
 * Initialise le formulaire de recherche
 */
function initSearchForm() {
    const lieuInput = document.getElementById('lieu');
    const dateDebutInput = document.getElementById('date-debut');
    const dateFinInput = document.getElementById('date-fin');
    const searchForm = document.querySelector('.search-bar');

    if (!dateDebutInput || !dateFinInput) return;

    // Définir la date minimum à aujourd'hui
    const today = new Date().toISOString().split('T')[0];
    dateDebutInput.setAttribute('min', today);
    dateFinInput.setAttribute('min', today);

    // Mettre à jour le min de date-fin quand date-debut change
    dateDebutInput.addEventListener('change', function() {
        dateFinInput.setAttribute('min', this.value);
        if (dateFinInput.value && dateFinInput.value < this.value) {
            dateFinInput.value = this.value;
        }
    });

    // Validation du formulaire
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            const lieu = lieuInput ? lieuInput.value.trim() : '';
            const dateDebut = dateDebutInput.value;
            const dateFin = dateFinInput.value;
            
            if (!lieu || !dateDebut || !dateFin) {
                e.preventDefault();
                showNotification('Veuillez remplir tous les champs pour générer votre reservation.', 'error');
                
                // Focus sur le premier champ vide
                if (!lieu && lieuInput) {
                    lieuInput.focus();
                } else if (!dateDebut) {
                    dateDebutInput.focus();
                } else {
                    dateFinInput.focus();
                }
                return false;
            }

            // Validation des dates
            if (new Date(dateFin) < new Date(dateDebut)) {
                e.preventDefault();
                showNotification('La date de retour doit être postérieure à la date de départ.', 'error');
                dateFinInput.focus();
                return false;
            }

            // Tout est valide, le formulaire sera soumis
            return true;
        });
    }

    // Animation du label flottant
    const inputWrappers = document.querySelectorAll('.input-wrapper');
    inputWrappers.forEach(wrapper => {
        const input = wrapper.querySelector('input');
        const label = wrapper.querySelector('label');
        
        if (input && label) {
            // Garder le label en haut si l'input a une valeur
            if (input.value) {
                label.style.top = '0.2rem';
                label.style.fontSize = '0.55rem';
            }

            input.addEventListener('focus', function() {
                wrapper.classList.add('focused');
            });

            input.addEventListener('blur', function() {
                wrapper.classList.remove('focused');
                if (this.value) {
                    label.style.top = '0.2rem';
                    label.style.fontSize = '0.55rem';
                } else {
                    label.style.top = '50%';
                    label.style.fontSize = '0.65rem';
                    label.style.transform = 'translateY(-50%)';
                }
            });
        }
    });
}

/**
 * Gère les paramètres URL pour pré-remplir les formulaires
 */
function initURLParams() {
    const params = new URLSearchParams(window.location.search);
    
    // Champs à pré-remplir sur index.html
    const lieuInput = document.getElementById('lieu');
    const dateDebutInput = document.getElementById('date-debut');
    const dateFinInput = document.getElementById('date-fin');

    // Pré-remplir depuis les paramètres URL
    if (params.has('lieu') && lieuInput) {
        lieuInput.value = params.get('lieu');
        // Déclencher l'animation du label
        const label = lieuInput.closest('.input-wrapper')?.querySelector('label');
        if (label) {
            label.style.top = '0.2rem';
            label.style.fontSize = '0.55rem';
        }
    }

    if (params.has('date-debut') && dateDebutInput) {
        dateDebutInput.value = params.get('date-debut');
        const label = dateDebutInput.closest('.input-wrapper')?.querySelector('label');
        if (label) {
            label.style.top = '0.2rem';
            label.style.fontSize = '0.55rem';
        }
    }

    if (params.has('date-fin') && dateFinInput) {
        dateFinInput.value = params.get('date-fin');
        const label = dateFinInput.closest('.input-wrapper')?.querySelector('label');
        if (label) {
            label.style.top = '0.2rem';
            label.style.fontSize = '0.55rem';
        }
    }

    // Pré-remplir le formulaire reservation.html si on vient de index.html
    const livraisonLieu = document.getElementById('livraison-lieu');
    const livraisonDate = document.getElementById('livraison-date');
    const restitutionDate = document.getElementById('restitution-date');

    if (params.has('lieu') && livraisonLieu) {
        const lieuValue = params.get('lieu').toLowerCase();
        // Essayer de trouver une correspondance
        const options = livraisonLieu.options;
        for (let i = 0; i < options.length; i++) {
            if (options[i].value === lieuValue || 
                options[i].text.toLowerCase().includes(lieuValue)) {
                livraisonLieu.selectedIndex = i;
                break;
            }
        }
    }

    if (params.has('date-debut') && livraisonDate) {
        livraisonDate.value = params.get('date-debut');
    }

    if (params.has('date-fin') && restitutionDate) {
        restitutionDate.value = params.get('date-fin');
    }
}

/**
 * Affiche une notification
 */
function showNotification(message, type = 'info') {
    // Supprimer les notifications existantes
    const existingNotification = document.querySelector('.search-notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Créer la notification
    const notification = document.createElement('div');
    notification.className = `search-notification ${type}`;
    notification.innerHTML = `
        <span class="notification-icon">${type === 'error' ? '⚠️' : 'ℹ️'}</span>
        <span class="notification-message">${message}</span>
        <button class="notification-close">&times;</button>
    `;

    // Styles dynamiques
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? 'rgba(239, 68, 68, 0.95)' : 'rgba(14, 165, 233, 0.95)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        z-index: 9999;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        animation: slideIn 0.3s ease;
        font-size: 0.9rem;
        max-width: 400px;
    `;

    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
        margin-left: auto;
        opacity: 0.8;
        transition: opacity 0.2s;
    `;
    closeBtn.addEventListener('mouseenter', () => closeBtn.style.opacity = '1');
    closeBtn.addEventListener('mouseleave', () => closeBtn.style.opacity = '0.8');
    closeBtn.addEventListener('click', () => notification.remove());

    // Ajouter l'animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Auto-supprimer après 5 secondes
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Ajouter l'animation slideOut
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);


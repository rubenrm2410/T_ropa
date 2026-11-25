// =====================================================
//   D'MODA — script.js  |  Tienda por Temporada
// =====================================================

/* ════════════════════════════════════════════
   BASE DE DATOS DE PRODUCTOS
   ════════════════════════════════════════════
   campos:
     id, name, type, gender, season, price, priceOrig (null = sin descuento),
     emoji, nuevo (bool)
*/
const PRODUCTS = [
  /* ─── VERANO ─── */
  // Polos
  { id: 1, name: 'Polo Algodón Pima', type: 'polo', gender: 'varon', season: 'verano', price: 45, priceOrig: 60, emoji: '👕', nuevo: false },
  { id: 2, name: 'Polo Estampado Floral', type: 'polo', gender: 'mujer', season: 'verano', price: 40, priceOrig: null, emoji: '👚', nuevo: true },
  { id: 3, name: 'Polo Rayas Colores', type: 'polo', gender: 'mujer', season: 'verano', price: 38, priceOrig: 50, emoji: '👚', nuevo: false },
  { id: 4, name: 'Polo Clásico Slim', type: 'polo', gender: 'varon', season: 'verano', price: 42, priceOrig: null, emoji: '👕', nuevo: false },
  // Pantalones
  { id: 5, name: 'Pantalón Cargo Ligero', type: 'pantalon', gender: 'varon', season: 'verano', price: 85, priceOrig: 110, emoji: '🩳', nuevo: false },
  { id: 6, name: 'Pantalón Palazzo', type: 'pantalon', gender: 'mujer', season: 'verano', price: 70, priceOrig: null, emoji: '👖', nuevo: true },
  { id: 7, name: 'Short Jean Holgado', type: 'pantalon', gender: 'varon', season: 'verano', price: 55, priceOrig: null, emoji: '🩳', nuevo: false },
  // Accesorios – gorros
  { id: 8, name: 'Gorra Visera Plana', type: 'gorro', gender: 'varon', season: 'verano', price: 35, priceOrig: null, emoji: '🧢', nuevo: false },
  { id: 9, name: 'Sombrero Playa Paja', type: 'gorro', gender: 'mujer', season: 'verano', price: 50, priceOrig: 65, emoji: '👒', nuevo: false },

  /* ─── OTOÑO ─── */
  // Casacas
  { id: 10, name: 'Casaca Jean Oversized', type: 'casaca', gender: 'mujer', season: 'otoño', price: 140, priceOrig: 180, emoji: '🧥', nuevo: false },
  { id: 11, name: 'Casaca Bomber', type: 'casaca', gender: 'varon', season: 'otoño', price: 155, priceOrig: null, emoji: '🧥', nuevo: true },
  { id: 12, name: 'Casaca Cuero Sintético', type: 'casaca', gender: 'mujer', season: 'otoño', price: 170, priceOrig: 220, emoji: '🥼', nuevo: false },
  // Pantalones
  { id: 13, name: 'Pantalón Corduroy', type: 'pantalon', gender: 'varon', season: 'otoño', price: 90, priceOrig: null, emoji: '👖', nuevo: false },
  { id: 14, name: 'Pantalón Wide Leg', type: 'pantalon', gender: 'mujer', season: 'otoño', price: 95, priceOrig: 120, emoji: '👖', nuevo: true },
  // Polos manga larga
  { id: 15, name: 'Polo Manga Larga Waffle', type: 'polo', gender: 'varon', season: 'otoño', price: 55, priceOrig: null, emoji: '👕', nuevo: false },
  { id: 16, name: 'Polo Manga Larga Modal', type: 'polo', gender: 'mujer', season: 'otoño', price: 52, priceOrig: 68, emoji: '👚', nuevo: false },
  // Gorros
  { id: 17, name: 'Gorra Baseball Otoño', type: 'gorro', gender: 'varon', season: 'otoño', price: 38, priceOrig: null, emoji: '🧢', nuevo: false },
  { id: 18, name: 'Gorro Lana Suave', type: 'gorro', gender: 'mujer', season: 'otoño', price: 42, priceOrig: 55, emoji: '🎩', nuevo: false },

  /* ─── INVIERNO ─── */
  // Casacas
  { id: 19, name: 'Casaca Puffer Térmica', type: 'casaca', gender: 'varon', season: 'invierno', price: 220, priceOrig: 280, emoji: '🧥', nuevo: false },
  { id: 20, name: 'Casaca Acolchada Premium', type: 'casaca', gender: 'mujer', season: 'invierno', price: 245, priceOrig: null, emoji: '🧥', nuevo: true },
  { id: 21, name: 'Casaca Polar Grande', type: 'casaca', gender: 'varon', season: 'invierno', price: 160, priceOrig: 200, emoji: '🥼', nuevo: false },
  // Guantes
  { id: 22, name: 'Guantes Térmicos Lana', type: 'guante', gender: 'varon', season: 'invierno', price: 35, priceOrig: null, emoji: '🧤', nuevo: false },
  { id: 23, name: 'Guantes Touch Screen', type: 'guante', gender: 'mujer', season: 'invierno', price: 40, priceOrig: 55, emoji: '🧤', nuevo: true },
  { id: 24, name: 'Guantes Cuero Forrado', type: 'guante', gender: 'varon', season: 'invierno', price: 65, priceOrig: 85, emoji: '🧤', nuevo: false },
  { id: 25, name: 'Guantes Tejido Elegante', type: 'guante', gender: 'mujer', season: 'invierno', price: 45, priceOrig: null, emoji: '🧤', nuevo: false },
  // Gorros
  { id: 26, name: 'Gorro Beanie Polar', type: 'gorro', gender: 'varon', season: 'invierno', price: 38, priceOrig: 50, emoji: '🎿', nuevo: false },
  { id: 27, name: 'Gorro Pompón Lana', type: 'gorro', gender: 'mujer', season: 'invierno', price: 42, priceOrig: null, emoji: '🧶', nuevo: true },
  { id: 28, name: 'Gorro Ski Premium', type: 'gorro', gender: 'varon', season: 'invierno', price: 55, priceOrig: 70, emoji: '⛷️', nuevo: false },
  // Pantalones
  { id: 29, name: 'Pantalón Térmico Base', type: 'pantalon', gender: 'varon', season: 'invierno', price: 95, priceOrig: 120, emoji: '👖', nuevo: false },
  { id: 30, name: 'Pantalón Recto Grueso', type: 'pantalon', gender: 'mujer', season: 'invierno', price: 100, priceOrig: null, emoji: '👖', nuevo: false },

  /* ─── PRIMAVERA ─── */
  // Polos
  { id: 31, name: 'Polo Pastel Suave', type: 'polo', gender: 'mujer', season: 'primavera', price: 42, priceOrig: 55, emoji: '👚', nuevo: false },
  { id: 32, name: 'Polo Lino Fresco', type: 'polo', gender: 'varon', season: 'primavera', price: 48, priceOrig: null, emoji: '👕', nuevo: true },
  // Pantalones
  { id: 33, name: 'Pantalón Chino Slim', type: 'pantalon', gender: 'varon', season: 'primavera', price: 88, priceOrig: 110, emoji: '👖', nuevo: false },
  { id: 34, name: 'Pantalón Fluido Flores', type: 'pantalon', gender: 'mujer', season: 'primavera', price: 78, priceOrig: null, emoji: '👖', nuevo: true },
  // Casacas ligeras
  { id: 35, name: 'Casaca Rompevientos', type: 'casaca', gender: 'varon', season: 'primavera', price: 120, priceOrig: 150, emoji: '🧥', nuevo: false },
  { id: 36, name: 'Casaca Kimono Floral', type: 'casaca', gender: 'mujer', season: 'primavera', price: 110, priceOrig: null, emoji: '🥼', nuevo: true },
  // Gorros
  { id: 37, name: 'Gorra Bordada Spring', type: 'gorro', gender: 'mujer', season: 'primavera', price: 36, priceOrig: 48, emoji: '🧢', nuevo: false },
  { id: 38, name: 'Gorro Bucket Pastel', type: 'gorro', gender: 'varon', season: 'primavera', price: 38, priceOrig: null, emoji: '🪣', nuevo: false },
];

/* ════════════════════════════════════════════
   INFO POR TEMPORADA
   ════════════════════════════════════════════ */
const SEASON_INFO = {
  todas: { icon: '🌍', title: 'Toda la Colección', desc: 'Explora todos nuestros productos sin filtro de temporada.', color: 'var(--dark)', prendas: ['Polos', 'Pantalones', 'Casacas', 'Gorros', 'Guantes'] },
  verano: { icon: '☀️', title: 'Colección Verano', desc: 'Prendas ligeras, frescas y llenas de color para los días de calor.', color: 'var(--ver)', prendas: ['Polos', 'Pantalones', 'Gorros de sol'] },
  otoño: { icon: '🍂', title: 'Colección Otoño', desc: 'Capas, tonos tierra y texturas acogedoras para la temporada de lluvia.', color: 'var(--oto)', prendas: ['Casacas', 'Pantalones', 'Polos manga larga', 'Gorros'] },
  invierno: { icon: '❄️', title: 'Colección Invierno', desc: 'Abrigos térmicos, guantes y gorros para enfrentar el frío con estilo.', color: 'var(--inv)', prendas: ['Casacas térmicas', 'Guantes', 'Gorros', 'Pantalones gruesos'] },
  primavera: { icon: '🌸', title: 'Colección Primavera', desc: 'Colores vivos, telas ligeras y estampados florales para renacer.', color: 'var(--pri)', prendas: ['Polos', 'Pantalones', 'Casacas ligeras', 'Gorros'] },
};

const TYPE_EMOJI = { polo: '👕', pantalon: '👖', casaca: '🧥', gorro: '🧢', guante: '🧤' };
const TYPE_LABEL = { polo: 'Polo', pantalon: 'Pantalón', casaca: 'Casaca', gorro: 'Gorro', guante: 'Guante' };

/* ════════════════════════════════════════════
   ESTADO GLOBAL
   ════════════════════════════════════════════ */
let state = { season: 'todas', gender: 'todos', type: 'todas', soloOfertas: false };
let cart = [];

/* ════════════════════════════════════════════
   SETTERS DE FILTROS
   ════════════════════════════════════════════ */
function setSeason(s) {
  state.season = s;
  // tabs
  document.querySelectorAll('.season-tab').forEach(b => {
    b.classList.toggle('active', b.dataset.season === s);
  });
  // banner
  const info = SEASON_INFO[s];
  document.getElementById('bannerIcon').textContent = info.icon;
  document.getElementById('bannerTitle').textContent = info.title;
  document.getElementById('bannerDesc').textContent = info.desc;
  document.getElementById('bannerPrendas').innerHTML =
    info.prendas.map(p => `<span class="prenda-chip">${p}</span>`).join('');
  document.getElementById('seasonBanner').style.borderLeftColor = info.color;

  applyFilters();
  document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
}

function setGender(g) {
  state.gender = g;
  document.querySelectorAll('#genderFilter .pill').forEach(b => {
    b.classList.toggle('active', b.dataset.gender === g);
  });
  applyFilters();
}

function setType(t) {
  state.type = t;
  document.querySelectorAll('#typeFilter .pill').forEach(b => {
    b.classList.toggle('active', b.dataset.type === t);
  });
  applyFilters();
}

function toggleOfertas() {
  state.soloOfertas = !state.soloOfertas;
  document.getElementById('ofertaToggle').classList.toggle('active', state.soloOfertas);
  applyFilters();
}

function resetFilters() {
  state = { season: 'todas', gender: 'todos', type: 'todas', soloOfertas: false };
  document.querySelectorAll('.season-tab').forEach(b => b.classList.toggle('active', b.dataset.season === 'todas'));
  document.querySelectorAll('#genderFilter .pill').forEach(b => b.classList.toggle('active', b.dataset.gender === 'todos'));
  document.querySelectorAll('#typeFilter .pill').forEach(b => b.classList.toggle('active', b.dataset.type === 'todas'));
  document.getElementById('ofertaToggle').classList.remove('active');
  // reset banner
  const info = SEASON_INFO['todas'];
  document.getElementById('bannerIcon').textContent = info.icon;
  document.getElementById('bannerTitle').textContent = info.title;
  document.getElementById('bannerDesc').textContent = info.desc;
  document.getElementById('bannerPrendas').innerHTML =
    info.prendas.map(p => `<span class="prenda-chip">${p}</span>`).join('');
  document.getElementById('seasonBanner').style.borderLeftColor = info.color;
  applyFilters();
}

/* ════════════════════════════════════════════
   APLICAR FILTROS → RENDER
   ════════════════════════════════════════════ */
function applyFilters() {
  let list = [...PRODUCTS];
  if (state.season !== 'todas') list = list.filter(p => p.season === state.season);
  if (state.gender !== 'todos') list = list.filter(p => p.gender === state.gender);
  if (state.type !== 'todas') list = list.filter(p => p.type === state.type);
  if (state.soloOfertas) list = list.filter(p => p.priceOrig !== null);

  renderProducts(list);
  renderFilterSummary();
}

/* ════════════════════════════════════════════
   RENDER CATÁLOGO
   ════════════════════════════════════════════ */
function renderProducts(list) {
  const grid = document.getElementById('productsGrid');
  document.getElementById('resultCount').textContent =
    `${list.length} producto${list.length !== 1 ? 's' : ''} encontrado${list.length !== 1 ? 's' : ''}`;

  if (!list.length) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="nr-icon">🔍</div>
        <h3>Sin resultados</h3>
        <p>Prueba con otra combinación de filtros.</p>
      </div>`;
    return;
  }

  grid.innerHTML = list.map(p => {
    const hasDiscount = p.priceOrig !== null;
    const pct = hasDiscount ? Math.round((1 - p.price / p.priceOrig) * 100) : 0;
    const bgClass = `bg - ${ p.season }`;
    const seasonLabel = p.season.charAt(0).toUpperCase() + p.season.slice(1);

    return `
  < div class= "pcard" >
      <div class="pcard-gender-bar ${p.gender}"></div>
      <div class="pcard-emoji ${bgClass}">
        ${p.emoji}
        ${hasDiscount ? `<span class="badge badge-oferta">-${pct}% OFF</span>` : ''}
        ${p.nuevo    ? `<span class="badge badge-nuevo">Nuevo</span>` : ''}
        <span class="badge-temporada">${seasonIcon(p.season)} ${seasonLabel}</span>
        <span class="badge-genero ${p.gender}">${p.gender === 'varon' ? '♂ Varón' : '♀ Mujer'}</span>
      </div>
      <div class="pcard-body">
        <div class="pcard-type">${TYPE_EMOJI[p.type]} ${TYPE_LABEL[p.type]}</div>
        <div class="pcard-name">${p.name}</div>
        <div class="pcard-prices">
          <span class="price-now">S/ ${p.price}</span>
          ${hasDiscount ? `<span class="price-was">S/ ${p.priceOrig}</span>
            <span class="discount-pct">-${pct}%</span>` : ''}
        </div>
        <button class="btn-add" onclick="addToCart(${p.id})">🛒 Añadir al carrito</button>
      </div>
    </div>`;
}).join('');
}

  function seasonIcon(s) {
    return { verano: '☀️', otoño: '🍂', invierno: '❄️', primavera: '🌸' }[s] || '🌍';
  }

  /* ════════════════════════════════════════════
     RESUMEN DE FILTROS
     ════════════════════════════════════════════ */
  function renderFilterSummary() {
    const chips = [];
    if (state.season !== 'todas') chips.push(`${seasonIcon(state.season)} ${SEASON_INFO[state.season].title}`);
    if (state.gender !== 'todos') chips.push(`${state.gender === 'varon' ? '♂ Varón' : '♀ Mujer'}`);
    if (state.type !== 'todas') chips.push(`${TYPE_EMOJI[state.type]} ${TYPE_LABEL[state.type]}`);
    if (state.soloOfertas) chips.push('🏷️ Solo Ofertas');

    document.getElementById('filterSummary').innerHTML =
      chips.map(c => `<span class="f-chip">${c}</span>`).join('');
  }

  /* ════════════════════════════════════════════
     SECCIÓN OFERTAS (mostrar top 6)
     ════════════════════════════════════════════ */
  function renderOfertas() {
    const ofertas = PRODUCTS.filter(p => p.priceOrig !== null).slice(0, 6);
    const grid = document.getElementById('ofertasGrid');

    grid.innerHTML = ofertas.map(p => {
      const pct = Math.round((1 - p.price / p.priceOrig) * 100);
      const seasonLabel = p.season.charAt(0).toUpperCase() + p.season.slice(1);
      return `
    <div class="ocard">
      <div class="ocard-pct">-${pct}% OFF</div>
      <div class="ocard-emoji">${p.emoji}</div>
      <div class="ocard-season">${seasonIcon(p.season)} ${seasonLabel} · ${TYPE_LABEL[p.type]}</div>
      <div class="ocard-name">${p.name}</div>
      <span class="ocard-gender ${p.gender}">${p.gender === 'varon' ? '♂ Varón' : '♀ Mujer'}</span>
      <div class="ocard-prices">
        <span class="o-was">S/ ${p.priceOrig}</span>
        <span class="o-now">S/ ${p.price}</span>
      </div>
      <button class="btn-primary" onclick="addToCart(${p.id})">🛒 Añadir al carrito</button>
    </div>`;
    }).join('');
  }

  /* ════════════════════════════════════════════
     CARRITO
     ════════════════════════════════════════════ */
  function addToCart(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const ex = cart.find(i => i.id === id);
    if (ex) ex.qty++;
    else cart.push({ ...p, qty: 1 });
    updateCartUI();
    showToast(`✅ "${p.name}" añadido al carrito`);
  }

    function changeQty(id, delta) {
      const item = cart.find(i => i.id === id);
      if (!item) return;
      item.qty += delta;
      if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
      updateCartUI();
    }

    function updateCartUI() {
      const total = cart.reduce((a, i) => a + i.price * i.qty, 0);
      const count = cart.reduce((a, i) => a + i.qty, 0);
      document.getElementById('cartCount').textContent = count;
      document.getElementById('cpTotal').textContent = `S/ ${total.toFixed(2)}`;

      const container = document.getElementById('cpItems');
      if (!cart.length) {
        container.innerHTML = '<p class="cp-empty">Tu carrito está vacío 🛍️</p>';
        return;
      }
      container.innerHTML = cart.map(item => `
    <div class="cp-item">
      <span class="cp-emoji">${item.emoji}</span>
      <div class="cp-info">
        <h4>${item.name}</h4>
        <p>S/ ${(item.price * item.qty).toFixed(2)}</p>
      </div>
      <div class="cp-qty">
        <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
        <span  class="qty-n">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id},+1)">+</button>
      </div>
    </div > `).join('');
}

function openCart()  { document.getElementById('cartPanel').classList.add('open'); document.getElementById('overlay').classList.add('open'); }
function closeCart() { document.getElementById('cartPanel').classList.remove('open'); document.getElementById('overlay').classList.remove('open'); }

function checkout() {
  if (!cart.length) { showToast('⚠️ Tu carrito está vacío'); return; }
  const total = cart.reduce((a,i) => a + i.price * i.qty, 0);
  showToast(`🎉 Compra por S / ${ total.toFixed(2) } procesada. ¡Gracias!`);
  cart = [];
  updateCartUI();
  closeCart();
}

document.getElementById('cartBtn').addEventListener('click', openCart);

/* ════════════════════════════════════════════
   FORMULARIO CONTACTO
   ════════════════════════════════════════════ */
function sendMsg(e) {
  e.preventDefault();
  const ok = document.getElementById('formOk');
  ok.textContent = '✅ ¡Mensaje enviado! Te responderemos pronto.';
  e.target.reset();
  setTimeout(() => { ok.textContent = ''; }, 5000);
}

/* ════════════════════════════════════════════
   TOAST
   ════════════════════════════════════════════ */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

/* ════════════════════════════════════════════
   HAMBURGER MENÚ
   ════════════════════════════════════════════ */
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

/* ════════════════════════════════════════════
   NAVBAR SCROLL
   ════════════════════════════════════════════ */
window.addEventListener('scroll', () => {
  document.getElementById('topHeader').style.boxShadow =
    window.scrollY > 10 ? '0 2px 24px rgba(0,0,0,.45)' : '0 2px 18px rgba(0,0,0,.35)';
});

/* ════════════════════════════════════════════
   INICIALIZAR
   ════════════════════════════════════════════ */
(function init() {
  applyFilters();
  renderOfertas();
})();

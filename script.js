// ═══════════════════════════════════════════════
//   D'LICIA — script.js | Restaurante Peruano
// ═══════════════════════════════════════════════

/* ════════════════════════════════════════════
   BASE DE DATOS — PLATOS
   ════════════════════════════════════════════ */
const MENU = [
  /* ── ENTRADAS ── */
  { id:1,  cat:'entradas', name:'Ceviche Clásico',         emoji:'🍋', price:28, orig:null, desc:'Pescado fresco marinado en limón, cebolla morada, ají limo y choclo. El rey de nuestra carta.',  badge:'casa',   especial:true  },
  { id:2,  cat:'entradas', name:'Papa a la Huancaína',     emoji:'🥔', price:18, orig:22,   desc:'Papas sancochadas bañadas en cremosa salsa huancaína con ají amarillo. Clásico infaltable.',     badge:'oferta', especial:false },
  { id:3,  cat:'entradas', name:'Anticuchos de Corazón',   emoji:'🍡', price:22, orig:null, desc:'Brochetas de corazón de res marinadas en ají panca, comino y vinagre. Cocinadas a la parrilla.', badge:'nuevo',  especial:false },
  { id:4,  cat:'entradas', name:'Causa Limeña',            emoji:'🟡', price:20, orig:null, desc:'Pastel frío de papa amarilla con relleno de pollo, palta y mayonesa. Elegante y sabrosa.',        badge:null,     especial:false },
  { id:5,  cat:'entradas', name:'Tequeños de Queso',       emoji:'🧀', price:16, orig:20,   desc:'Palitos de masa rellenos de queso derretido, perfectos para compartir.',                          badge:'oferta', especial:false },
  { id:6,  cat:'entradas', name:'Ceviche Mixto',           emoji:'🦐', price:35, orig:null, desc:'Combinación de pescado, mariscos y pulpo en leche de tigre con ají amarillo y rocoto.',           badge:'casa',   especial:true  },

  /* ── SOPAS ── */
  { id:7,  cat:'sopas', name:'Aguadito de Pollo',          emoji:'🍗', price:22, orig:null, desc:'Reconfortante caldo verde con pollo, arroz, culantro y chicha de jora. Ideal para el frío.',      badge:null,     especial:false },
  { id:8,  cat:'sopas', name:'Chupe de Camarones',         emoji:'🦐', price:38, orig:null, desc:'Exquisita sopa arequipeña con camarones frescos, papa, choclo, queso y huevo.',                   badge:'casa',   especial:true  },
  { id:9,  cat:'sopas', name:'Sopa a la Minuta',           emoji:'🥣', price:18, orig:22,   desc:'Fideos finos en caldo de res con trozos de carne y un toque de orégano.',                         badge:'oferta', especial:false },
  { id:10, cat:'sopas', name:'Parihuela',                  emoji:'🍲', price:40, orig:null, desc:'Poderosa sopa de mariscos con almejas, mariscos frescos y una base de ají panca.',                badge:'nuevo',  especial:false },

  /* ── FONDOS ── */
  { id:11, cat:'fondos', name:'Lomo Saltado',              emoji:'🥩', price:32, orig:null, desc:'Tiernos trozos de lomo fino salteados con cebolla, tomate, soya y papas fritas. Infaltable.',     badge:'casa',   especial:true  },
  { id:12, cat:'fondos', name:'Ají de Gallina',            emoji:'🐔', price:28, orig:33,   desc:'Pollo desmenuzado en cremosa salsa de ají amarillo con leche, pan y nueces. Puro sabor.',         badge:'oferta', especial:false },
  { id:13, cat:'fondos', name:'Pollo a la Brasa',          emoji:'🍗', price:38, orig:null, desc:'Pollo marinado en especias secretas y cocido a la brasa. Crujiente por fuera, jugoso por dentro.', badge:'casa',  especial:true  },
  { id:14, cat:'fondos', name:'Seco de Res con Frijoles',  emoji:'🫘', price:30, orig:null, desc:'Tierno estofado de res al culantro con frijoles, arroz blanco y yuca sancochada.',                badge:null,     especial:false },
  { id:15, cat:'fondos', name:'Carapulcra',                emoji:'🫙', price:26, orig:30,   desc:'Papa seca guisada con cerdo, maní y ají panca. Una de las comidas más antiguas del Perú.',        badge:'oferta', especial:false },
  { id:16, cat:'fondos', name:'Olluquito con Charqui',     emoji:'🌱', price:24, orig:null, desc:'Olluco picado salteado con charqui (carne seca) en salsa de ají amarillo. Genuinamente andino.',  badge:'nuevo',  especial:false },

  /* ── MARISCOS ── */
  { id:17, cat:'mariscos', name:'Arroz con Mariscos',      emoji:'🦑', price:42, orig:null, desc:'Arroz cremoso estilo risotto con camarones, mariscos frescos y un toque de culantro.',             badge:'casa',   especial:true  },
  { id:18, cat:'mariscos', name:'Sudado de Mero',          emoji:'🐟', price:45, orig:null, desc:'Filete de mero cocido a vapor en salsa de tomate y chicha con mariscos y choclo.',                badge:null,     especial:false },
  { id:19, cat:'mariscos', name:'Jalea Mixta',             emoji:'🦞', price:48, orig:55,   desc:'Mariscos y pescado empanizados y fritos, acompañados de zarza criolla y yuca.',                   badge:'oferta', especial:false },
  { id:20, cat:'mariscos', name:'Tiradito de Lenguado',    emoji:'🐠', price:35, orig:null, desc:'Finas láminas de lenguado fresco en salsa de ají amarillo con culantro y limón.',                 badge:'nuevo',  especial:false },

  /* ── BEBIDAS ── */
  { id:21, cat:'bebidas', name:'Pisco Sour',               emoji:'🍸', price:22, orig:null, desc:'El cóctel peruano por excelencia. Pisco quebranta, limón, jarabe, clara de huevo y amargo.',      badge:'casa',   especial:false },
  { id:22, cat:'bebidas', name:'Chicha Morada',            emoji:'🫐', price:12, orig:15,   desc:'Refrescante bebida de maíz morado cocido con piña, canela, clavo y manzana. Sin alcohol.',        badge:'oferta', especial:false },
  { id:23, cat:'bebidas', name:'Inca Kola',                emoji:'🟡', price:8,  orig:null, desc:'La bebida de sabor nacional, acompañante inseparable de la comida peruana.',                       badge:null,     especial:false },
  { id:24, cat:'bebidas', name:'Maracuyá Frozen',          emoji:'🍹', price:16, orig:null, desc:'Jugo de maracuyá fresco mezclado con hielo raspado. Tropical y refrescante.',                      badge:'nuevo',  especial:false },
  { id:25, cat:'bebidas', name:'Mate de Coca',             emoji:'🍵', price:10, orig:null, desc:'Infusión tradicional andina de hoja de coca, perfecta para la digestión.',                         badge:null,     especial:false },
  { id:26, cat:'bebidas', name:'Chilcano de Pisco',        emoji:'🥂', price:20, orig:24,   desc:'Pisco, ginger ale, limón y amargo de angostura. Ligero y muy refrescante.',                       badge:'oferta', especial:false },

  /* ── POSTRES ── */
  { id:27, cat:'postres', name:'Suspiro Limeño',           emoji:'🍮', price:18, orig:null, desc:'Manjar blanco con merengue de oporto y canela. El postre más romántico de Lima.',                  badge:'casa',   especial:true  },
  { id:28, cat:'postres', name:'Arroz con Leche',          emoji:'🍚', price:14, orig:18,   desc:'Cremoso arroz cocido en leche evaporada con canela, clavo y vainilla. Tierno y reconfortante.',   badge:'oferta', especial:false },
  { id:29, cat:'postres', name:'Mazamorra Morada',         emoji:'🫐', price:14, orig:null, desc:'Postre de maíz morado con frutas, especias y chuño disuelto. Dulce y aromático.',                 badge:null,     especial:false },
  { id:30, cat:'postres', name:'Picarones',                emoji:'🍩', price:16, orig:null, desc:'Donuts fritos de zapallo y camote bañados en miel de chancaca. Crujientes y adictivos.',           badge:'nuevo',  especial:false },
];

/* ════════════════════════════════════════════
   ESPECIALES DE LA CASA
   ════════════════════════════════════════════ */
const ESPECIALES = [
  { name:'Ceviche Especial D\'Licia',  emoji:'🍋', price:'S/ 45', desc:'Nuestra versión premium con 3 tipos de pescado, camarones, leche de tigre al rocoto y choclo confitado.' },
  { name:'Pollo a la Brasa Real',      emoji:'🍗', price:'S/ 65', desc:'Pollo entero marinado 24 horas en nuestras especias secretas. Incluye papas, ensalada y 2 cremas.' },
  { name:'Tabla Mar y Tierra',         emoji:'🦞', price:'S/ 85', desc:'Combinación perfecta: lomo saltado, ceviche mixto, mariscos a la parrilla y pisco sour de regalo.' },
  { name:'Chupe de Camarones Grande',  emoji:'🦐', price:'S/ 55', desc:'Porción generosa con más de 10 camarones frescos del día. La joya de nuestra sección de sopas.' },
];

/* ════════════════════════════════════════════
   TESTIMONIOS
   ════════════════════════════════════════════ */
const TESTIMONIOS = [
  { emoji:'👩', name:'Carla Mendoza',   role:'Miraflores, Lima',   stars:5, text:'El mejor ceviche que he probado en toda Lima. Vine de visita y regresé 3 veces más. ¡Los anticuchos son increíbles!' },
  { emoji:'👨', name:'Rodrigo Vargas',  role:'Santiago, Chile',    stars:5, text:'Como turista, D\'Licia fue la mejor recomendación que recibí. El lomo saltado y el pisco sour superaron todas mis expectativas.' },
  { emoji:'👩', name:'Paola Torres',    role:'Lima, Perú',         stars:5, text:'Celebré mi cumpleaños aquí y fue una experiencia maravillosa. El servicio es excepcional y el suspiro limeño es un pecado.' },
  { emoji:'👨', name:'Marco Espinoza',  role:'Bogotá, Colombia',   stars:5, text:'Vine por trabajo y tuve suerte de encontrar este restaurante. El chupe de camarones y el arroz con mariscos son para morirse de lo buenos.' },
  { emoji:'👩', name:'Lucía Ramírez',   role:'Buenos Aires, AR',   stars:5, text:'La comida peruana es mi favorita y D\'Licia tiene el nivel de un restaurante de Lima auténtico. Volveré siempre que pueda.' },
];

/* ════════════════════════════════════════════
   ESTADO GLOBAL
   ════════════════════════════════════════════ */
let activeTab      = 'todo';
let soloOfertas    = false;
let testimonioIdx  = 0;

/* ════════════════════════════════════════════
   TABS DE MENÚ
   ════════════════════════════════════════════ */
function setTab(cat) {
  activeTab = cat;
  document.querySelectorAll('.menu-tab').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === cat);
  });
  renderMenu();
}

document.getElementById('menuTabs').addEventListener('click', e => {
  if (e.target.classList.contains('menu-tab')) {
    setTab(e.target.dataset.cat);
  }
});

function toggleOfertas() {
  soloOfertas = !soloOfertas;
  document.getElementById('toggleOferta').classList.toggle('active', soloOfertas);
  renderMenu();
}

/* ════════════════════════════════════════════
   RENDER MENÚ
   ════════════════════════════════════════════ */
const CAT_BG = {
  entradas:'cat-ent', sopas:'cat-sopas', fondos:'cat-fondos',
  mariscos:'cat-maris', bebidas:'cat-beb', postres:'cat-post',
};
const CAT_LABEL = {
  entradas:'Entrada', sopas:'Sopa', fondos:'Fondo',
  mariscos:'Marisco', bebidas:'Bebida', postres:'Postre',
};
const BADGE_LABEL = { oferta:'🏷️ Oferta', nuevo:'✨ Nuevo', casa:'⭐ De la Casa' };

function renderMenu() {
  let list = [...MENU];
  if (activeTab !== 'todo') list = list.filter(d => d.cat === activeTab);
  if (soloOfertas)          list = list.filter(d => d.orig !== null);

  document.getElementById('menuCount').textContent =
    `${list.length} plato${list.length !== 1 ? 's' : ''} encontrado${list.length !== 1 ? 's' : ''}`;

  const grid = document.getElementById('menuGrid');
  if (!list.length) {
    grid.innerHTML = `<div class="no-results"><p>🔍 Sin resultados para esta selección.</p></div>`;
    return;
  }

  grid.innerHTML = list.map(d => {
    const pct    = d.orig ? Math.round((1 - d.price / d.orig) * 100) : 0;
    const bgCls  = CAT_BG[d.cat] || '';
    const badgeH = d.badge ? `<span class="dish-badge badge-${d.badge}">${BADGE_LABEL[d.badge]}</span>` : '';
    const origH  = d.orig  ? `<span class="dish-price-orig">S/ ${d.orig}</span><span class="dish-pct">-${pct}%</span>` : '';

    return `
    <div class="dish-card">
      <div class="dish-top ${bgCls}">
        ${d.emoji}
        ${badgeH}
      </div>
      <div class="dish-body">
        <div class="dish-cat">${CAT_LABEL[d.cat]}</div>
        <div class="dish-name">${d.name}</div>
        <div class="dish-desc">${d.desc}</div>
        <div class="dish-footer">
          <div>
            <span class="dish-price">S/ ${d.price}</span>
            ${origH}
          </div>
          <button class="btn-pedir" onclick="pedir('${d.name}')">Pedir 🛎️</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function pedir(name) {
  showToast(`🛎️ "${name}" agregado a tu pedido`);
}

/* ════════════════════════════════════════════
   ESPECIALES DE LA CASA
   ════════════════════════════════════════════ */
function renderEspeciales() {
  document.getElementById('especialesGrid').innerHTML =
    ESPECIALES.map((e, i) => `
      <div class="esp-card">
        <div class="esp-num">${String(i+1).padStart(2,'0')}</div>
        <span class="esp-emoji">${e.emoji}</span>
        <div class="esp-name">${e.name}</div>
        <div class="esp-desc">${e.desc}</div>
        <div class="esp-price">${e.price}</div>
      </div>`).join('');
}

/* ════════════════════════════════════════════
   TESTIMONIOS SLIDER
   ════════════════════════════════════════════ */
function renderTestimonios() {
  const slider = document.getElementById('testimoniosSlider');
  const dots   = document.getElementById('sliderDots');

  slider.innerHTML = TESTIMONIOS.map((t, i) => `
    <div class="testimonio-item ${i === 0 ? 'active' : ''}">
      <div class="test-emoji">${t.emoji}</div>
      <div class="test-stars">${'⭐'.repeat(t.stars)}</div>
      <div class="test-text">${t.text}</div>
      <div class="test-author">
        <span class="test-name">${t.name}</span>
        <span class="test-role">${t.role}</span>
      </div>
    </div>`).join('');

  dots.innerHTML = TESTIMONIOS.map((_, i) =>
    `<button class="dot ${i === 0 ? 'active' : ''}" onclick="goTestimonio(${i})"></button>`
  ).join('');
}

function goTestimonio(idx) {
  document.querySelectorAll('.testimonio-item').forEach((el, i) => el.classList.toggle('active', i === idx));
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === idx));
  testimonioIdx = idx;
}
function nextTestimonio() { goTestimonio((testimonioIdx + 1) % TESTIMONIOS.length); }
function prevTestimonio() { goTestimonio((testimonioIdx - 1 + TESTIMONIOS.length) % TESTIMONIOS.length); }

/* Auto-slide cada 6 segundos */
setInterval(nextTestimonio, 6000);

/* ════════════════════════════════════════════
   CONTADORES ANIMADOS
   ════════════════════════════════════════════ */
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = +el.dataset.target;
    const dur    = 1800;
    const step   = target / (dur / 16);
    let cur = 0;
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) { el.textContent = target.toLocaleString(); clearInterval(t); }
      else               { el.textContent = Math.floor(cur).toLocaleString(); }
    }, 16);
  });
}

const statsBar = document.querySelector('.stats-bar');
let countersDone = false;
new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !countersDone) { countersDone = true; animateCounters(); }
}, { threshold: .4 }).observe(statsBar);

/* ════════════════════════════════════════════
   FORMULARIOS
   ════════════════════════════════════════════ */
function submitReserva(e) {
  e.preventDefault();
  const ok = document.getElementById('reservaOk');
  ok.textContent = '✅ ¡Reserva confirmada! Te contactaremos en breve para verificar tu mesa.';
  e.target.reset();
  setTimeout(() => { ok.textContent = ''; }, 6000);
}

function sendContact(e) {
  e.preventDefault();
  const ok = document.getElementById('contactOk');
  ok.textContent = '✅ ¡Mensaje enviado! Te responderemos en menos de 24 horas.';
  e.target.reset();
  setTimeout(() => { ok.textContent = ''; }, 6000);
}

/* Fecha mínima = hoy */
(function setMinDate() {
  const f = document.getElementById('fechaReserva');
  if (f) f.min = new Date().toISOString().split('T')[0];
})();

/* ════════════════════════════════════════════
   NAVBAR SCROLL + BACK TO TOP
   ════════════════════════════════════════════ */
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.getElementById('navbar').style.boxShadow =
    y > 20 ? '0 4px 30px rgba(0,0,0,.55)' : 'none';
  const btn = document.getElementById('backTop');
  btn.classList.toggle('visible', y > 400);
});

/* ════════════════════════════════════════════
   HAMBURGER MENÚ
   ════════════════════════════════════════════ */
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

/* Cerrar nav al hacer click en link */
document.querySelectorAll('.nav-a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
});

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
   INICIALIZAR
   ════════════════════════════════════════════ */
(function init() {
  renderMenu();
  renderEspeciales();
  renderTestimonios();
})();

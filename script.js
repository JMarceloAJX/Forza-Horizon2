console.log("SISTEMA FORZA TUS HORIZONTES OPTIMIZADO - BETA v2.4");

// BASE DE DATOS PRINCIPAL (Lo que se ve al cargar la página)
const products = [
  { id: 1, name: "Procesador Intel Core i7", cat: "computadora", price: 350, image: "img/computadora/corei7.jpg" },
  { id: 2, name: "Procesador Intel Core Ultra", cat: "computadora", price: 450, image: "img/computadora/Intelcore.jpg" },
  { id: 3, name: "Tarjeta de Video RTX 5060", cat: "computadora", price: 800, image: "img/computadora/RTX5060.jpg" },
  { id: 4, name: "Tarjeta de Video RTX 5090", cat: "computadora", price: 1800, image: "img/computadora/RTX5090.jpg" },
  { id: 5, name: "Tuba Profesional Brass", cat: "instrumentos", price: 2200, image: "img/Instrumentos/Tuba.jpg" },
  { id: 6, name: "Trombón de Concierto", cat: "instrumentos", price: 900, image: "img/Instrumentos/trombon.jpg" },
  { id: 7, name: "Saxofón Alto Premium", cat: "instrumentos", price: 1200, image: "img/Instrumentos/Saxofon.jpg" },
  { id: 8, name: "Vinilo: Michael Jackson - Thriller", cat: "vinilos", price: 120, image: "img/Vinilos/Michael Jackson/michael-jackson-thriller.jpg" },
  { id: 9, name: "Vinilo: Michael Jackson - Bad", cat: "vinilos", price: 100, image: "img/Vinilos/Michael Jackson/Bad.jpg" },
  { id: 10, name: "Vinilo: Michael Jackson - Dangerous", cat: "vinilos", price: 140, image: "img/Vinilos/Michael Jackson/Dangerous.jpg" },
  { id: 11, name: "Vinilo: Queen - A Night At The Opera", cat: "vinilos", price: 130, image: "img/Vinilos/GRQueen/ANightAtTheOpera.jpg" },
  { id: 12, name: "Vinilo: Queen - Queen II", cat: "vinilos", price: 115, image: "img/Vinilos/GRQueen/QueenII.jpg" },
  { id: 13, name: "Escultura León de Oro Colección", cat: "valor", price: 5000, image: "img/gran_valor/LeondeOro.jpeg" },
  { id: 14, name: "Jarrón de Oro Dinastía Imperial", cat: "valor", price: 4200, image: "img/gran_valor/JarrondeOro.jpeg" },
  { id: 15, name: "Reliquia Utopía de Exhibición", cat: "valor", price: 10000, image: "img/gran_valor/Utopia.jpeg" }
];

// LISTA EXTRA / OCULTA DE HUEVOS DE PASCUA CON NUEVOS TAGS INTELIGENTES
const secretProducts = [
  { id: 101, name: "Kriptonita Verde Mineral Pura", price: 75000, label: "RESTRINGIDO", tags: ["kriptonita", "verde", "mineral", "superman"] },
  { id: 102, name: "Montura de Capitán de Navío Oficial", price: 650, label: "EQUIPAMIENTO", tags: ["montura", "capitan", "navio", "ropa", "sombrero"] },
  { id: 103, name: "Cápsula de Clones de Star Wars (Fase II)", price: 45000, label: "IMPORTACIÓN", tags: ["clones", "star", "wars", "ejercito", "guerra"] },
  { id: 104, name: "Montura del Caballo Sunday Silence (Edición Histórica)", price: 12500, label: "COLECCIÓN", tags: ["montura", "sunday", "silence", "caballo", "hipismo"] },
  { id: 105, name: "Torreta de Tanque Tiger E Blindada", price: 32000, label: "EXCEDENTE", tags: ["torreta", "tiger", "tanque", "aleman", "guerra", "militar"] },
  { id: 106, name: "Fusil Semiautomático M1 Garand Clásico", price: 1400, label: "ARMAMENTO", tags: ["m1", "garand", "fusil", "arma", "armas", "militar"] },
  { id: 107, name: "Fusil de Asalto Táctico HK 416 Mod", price: 3100, label: "ARMAMENTO", tags: ["hk", "416", "fusil", "arma", "armas", "militar"] },
  { id: 108, name: "Fusil Avanzado Ruso AN-94 Abakan", price: 4200, label: "ARMAMENTO", tags: ["an", "94", "an94", "fusil", "arma", "armas", "militar"] },
  { id: 109, name: "Tonfa Policial Antimotines de Alta Densidad", price: 45, label: "SEGURIDAD", tags: ["tonfa", "policial", "bastom", "policia", "arma"] },
  { id: 110, name: "Caza de Combate Sukhoi Su-57 Felon", price: 35000000, label: "MILITAR", tags: ["sukhoi", "sukoi", "57", "avion", "caza", "guerra", "vehiculo"] },
  { id: 111, name: "Bandera Oficial de la URSS (Unión Soviética)", price: 25, label: "HISTÓRICO", tags: ["bandera", "urss", "comunista", "sovietica"] },
  { id: 112, name: "Bandera Histórica de la Alemania Nazi (1939)", price: 30, label: "HISTÓRICO", tags: ["bandera", "alemania", "nazi", "guerra"] },
  { id: 113, name: "Subfusil Táctico UMP 45", price: 2100, label: "ARMAMENTO", tags: ["ump", "45", "ump45", "subfusil", "arma", "armas"] },
  { id: 114, name: "Fusil Bullpup OTs-14 Groza Ruso", price: 3800, label: "ARMAMENTO", tags: ["groza", "fusil", "arma", "armas", "militar"] },
  { id: 115, name: "Tanque de Combate Soviético T-34-85", price: 85000, label: "EXCEDENTE", tags: ["t-34-85", "t34", "tanque", "guerra", "militar", "vehiculo"] },
  { id: 116, name: "Ametralladora Ligera RPK-16 Avanzada", price: 5400, label: "ARMAMENTO", tags: ["rpk", "rpk-16", "ametralladora", "arma", "armas"] },
  { id: 117, name: "Fusil de Asalto Moderno AK-12", price: 2900, label: "ARMAMENTO", tags: ["ak-12", "ak12", "fusil", "arma", "armas"] },
  { id: 118, name: "Fusil de Asalto de Alto Calibre AK-15", price: 3200, label: "ARMAMENTO", tags: ["ak-15", "ak15", "fusil", "arma", "armas"] },
  { id: 119, name: "Tanque Principal de Batalla T-14 Armata Ruso", price: 4200000, label: "MILITAR", tags: ["t-14", "armata", "tanque", "ruso", "guerra", "vehiculo"] },
  { id: 120, name: "Tanque Alemán Histórico Panther G", price: 95000, label: "EXCEDENTE", tags: ["panther", "phanther", "tanque", "aleman", "guerra", "vehiculo"] },
  { id: 121, name: "Tanque de Perfil Bajo Sueco Strv 103 C", price: 110000, label: "COLECCIÓN", tags: ["strv", "103", "strv103", "tanque", "sueco", "vehiculo"] },
  { id: 122, name: "Automóvil Deportivo BMW M3 Evolution", price: 5000, label: "OFERTA", tags: ["bmw", "m3", "auto", "vehiculo", "coche", "deportivo"] },
  { id: 123, name: "Fusil de Combate Belga FN FAL Calibre 7.62", price: 1800, label: "ARMAMENTO", tags: ["fn", "fal", "fusil", "arma", "armas"] },
  { id: 124, name: "Pistola Táctica Heckler & Koch MK-23", price: 1600, label: "ARMAMENTO", tags: ["mk-23", "mk23", "pistola", "arma", "armas"] },
  { id: 125, name: "Motor de Fórmula 1 Cadillac V-Series V6 Twin-Turbo", price: 150000, label: "F1_COMPONENTE", tags: ["motor", "f1", "cadillac", "auto", "vehiculo", "formula1"] },
  { id: 126, name: "Rueda para Lluvia Extrema de F1 Red Bull Racing", price: 850, label: "F1_COMPONENTE", tags: ["rueda", "lluvia", "f1", "red", "bull", "auto", "vehiculo", "formula1"] },
  { id: 127, name: "Munición Con Camisa Metálica 9x19 mm (Caja de 200 unidades)", price: 90, label: "SUMINISTROS", tags: ["9x19", "municion", "balas", "9mm", "arma"] },
  { id: 128, name: "Prototipo de Tanque Soviético T-44-122", price: 130000, label: "CLASIFICADO", tags: ["t44", "t-44-122", "tanque", "sovietico", "vehiculo"] },
  { id: 129, name: "Tanque de Nueva Generación Challenger 3 Británico", price: 5800000, label: "MILITAR", tags: ["challenger", "3", "tanque", "britanico", "guerra", "vehiculo"] },
  { id: 130, name: "Cazacarros Ligero Sueco IKV 103", price: 40000, label: "EXCEDENTE", tags: ["ikv", "103", "ikv103", "tanque", "sueco", "vehiculo"] },
  { id: 131, name: "Bombardero Bimotor Histórico Junkers Ju-88 A-4", price: 450000, label: "HISTÓRICO", tags: ["ju-88", "ju88", "avion", "bombardero", "guerra", "vehiculo"] },
  { id: 132, name: "Cinta VHS Original a Color - Gemini Home Entertainment", price: 150, label: "COLECCIÓN", tags: ["cinta", "vhs", "gemini", "home", "terror"] },
  { id: 133, name: "Mina Planta Papapum Explosiva", price: 50, label: "RESTRINGIDO", tags: ["papapum", "planta", "pvz", "mina", "explosivo"] }
];

let cart = [];
let currentFilter = 'todos';

function renderProducts(filter, itemsToRender = null) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  
  let filtered = itemsToRender;
  if (!filtered) {
    filtered = filter === 'todos' ? products : products.filter(p => p.cat === filter);
  }

  const countEl = document.getElementById('prodCount');
  if (countEl) countEl.textContent = filtered.length + ' artículos cargados';

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #ffb400; padding: 3rem 0; font-weight: 600;">No se encontraron artículos que coincidan con los criterios de búsqueda.</p>`;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const finalImg = p.image ? p.image : `https://placehold.co/400x300/181a1f/ffb400?text=${encodeURIComponent(p.name)}`;
    const categoryText = p.cat ? p.cat.toUpperCase() : (p.label ? p.label : "REGISTRO");

    return `
      <div class="product-card">
        <div class="product-img">
          <span class="status-tag" style="${!p.cat ? 'color:#ff4d4d; border-color:#ff4d4d;' : ''}">${p.cat ? 'Disponible' : '⚠️ Importado'}</span>
          <img src="${finalImg}" alt="${p.name}" onerror="this.onerror=null; this.src='https://placehold.co/400x300?text=Error+Carga';">
        </div>
        <div class="product-body">
          <p class="product-cat">Estado: ${categoryText}</p>
          <p class="product-name">${p.name}</p>
          <div class="product-footer">
            <span class="product-price">$${p.price} USD</span>
            <button class="add-btn" onclick="addToCartById(${p.id})">Añadir al carrito</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterCat(el, cat) {
  document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  currentFilter = cat;
  document.getElementById('searchInput').value = "";
  renderProducts(cat);
}

// BUSCADOR CON INTEGRACIÓN DE PALABRAS CLAVE (TAGS)
function searchProducts() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  
  if (query === "") {
    renderProducts(currentFilter);
    return;
  }

  const poolCompleto = [...products, ...secretProducts];
  
  const filtered = poolCompleto.filter(p => {
    // Busca coincidencia en el nombre
    const coincideNombre = p.name.toLowerCase().includes(query);
    // Busca coincidencia en los tags de búsqueda inteligente
    const coincideTag = p.tags && p.tags.some(t => t.includes(query));
    // Aplica el filtro lateral solo si el producto pertenece a esa sección (los secretos ignoran esto para aparecer siempre)
    const coincideFiltro = currentFilter === 'todos' || p.cat === currentFilter || !p.cat;

    return coincideFiltro && (coincideNombre || coincideTag);
  });
  
  renderProducts(currentFilter, filtered);
}

function addToCartById(id) {
  const poolCompleto = [...products, ...secretProducts];
  const p = poolCompleto.find(x => x.id === id);
  if (!p) return;

  const existing = cart.find(x => x.id === id);
  if (existing) { 
    existing.qty++; 
  } else { 
    const finalImg = p.image ? p.image : `https://placehold.co/100x100/181a1f/ffb400?text=Item`;
    cart.push({ ...p, qty: 1, image: finalImg }); 
  }
  updateCartUI();
  showToast(`[Añadido]: ${p.name}`);
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  
  const cartCountEl = document.getElementById('cartCount');
  if (cartCountEl) cartCountEl.textContent = totalItems;

  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  if (!itemsEl || !footerEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = `<div class="cart-empty"><p>El carrito está vacío</p></div>`;
    footerEl.style.display = 'none';
  } else {
    itemsEl.innerHTML = cart.map(i => `
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${i.image}" alt="${i.name}">
        </div>
        <div class="cart-item-info">
          <p>${i.name}</p>
          <span>Cantidad: ${i.qty}</span>
        </div>
        <span class="cart-item-price">$${i.price * i.qty}</span>
        <button class="remove-item" onclick="removeFromCart(${i.id})">✕</button>
      </div>
    `).join('');

    footerEl.style.display = 'block';
    const cartTotalEl = document.getElementById('cartTotal');
    if (cartTotalEl) cartTotalEl.textContent = '$' + total;
  }
}

function triggerFakePayment() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  let mensajeFinal = "";

  if (/android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)) {
    mensajeFinal = "Se ha hecho el cobro de forma exitosa del saldo de su dispositivo móvil, gracias por elegirnos.";
  } else {
    mensajeFinal = "Se ha hecho el cobro de forma exitosa de la conexión de su celular, gracias por elegirnos.";
  }
  
  const messageEl = document.getElementById('fakeModalMessage');
  if (messageEl) { messageEl.innerHTML = mensajeFinal; }
  const modal = document.getElementById('fakeModalBackdrop');
  if (modal) modal.classList.add('show');
}

function closeFakeModal() {
  const modal = document.getElementById('fakeModalBackdrop');
  if (modal) modal.classList.remove('show');
  cart = [];
  updateCartUI();
  toggleCart();
}

function toggleCart() {
  document.getElementById('cartOverlay').classList.toggle('open');
  document.getElementById('cartBackdrop').classList.toggle('open');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => { t.classList.remove('show'); }, 2500);
}

function sendRequest() {
  const text = document.getElementById('requestText').value;
  const response = document.getElementById('requestResponse');
  if (!response) return;

  if (text.trim() === '') {
    response.innerHTML = 'Por favor, rellene el campo de solicitud.';
    response.style.color = '#ff4d4d';
    return;
  }

  response.innerHTML = 'Solicitud de importación registrada en la fase beta. Nuestro equipo verificará stock.';
  response.style.color = '#ffb400';
  document.getElementById('requestText').value = '';
}

window.addEventListener('DOMContentLoaded', () => {
  renderProducts('todos');
  updateCartUI();
});
// ==========================================================================
// CONTROLADOR DE LOGISTICA Y CARGA TÁCTICA GFL
// ==========================================================================
function startGflLoading() {
  // Esconder botón de inicio y mostrar barra de progreso
  document.getElementById('startLoadBtn').style.display = 'none';
  const progressContainer = document.getElementById('loadingProgressContainer');
  progressContainer.style.display = 'block';

  const progressBar = document.getElementById('gflProgressBar');
  const statusText = document.getElementById('loadingStatus');
  const percentageText = document.getElementById('loadingPercentage');
  
  let progress = 0;
  
  // Lista de logs militares de carga al estilo Girls' Frontline
  const loadingLogs = [
    { limit: 15, text: "ACCEDIENDO AL SERVIDOR CENTRAL IOP..." },
    { limit: 35, text: "AUTENTICANDO CREDENCIALES DE GRIFFIN & KRYUGER..." },
    { limit: 55, text: "DESENCRIPTANDO BASE DE DATOS PROTOCOLO DE RED..." },
    { limit: 75, text: "DESPLEGANDO ARCHIVOS DE INVENTARIO TÁCTICO..." },
    { limit: 90, text: "ESTABILIZANDO CONEXIÓN CIFRADA TLS 1.3..." },
    { limit: 100, text: "SISTEMA CONFIGURADO. ENTRADA AUTORIZADA." }
  ];

  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 4) + 1; // Incrementos aleatorios realistas
    if (progress > 100) progress = 100;

    // Actualizar barra y porcentaje
    progressBar.style.width = progress + '%';
    percentageText.innerText = progress + '%';

    // Cambiar logs de estado según el progreso actual
    const currentLog = loadingLogs.find(log => progress <= log.limit);
    if (currentLog) {
      statusText.innerText = currentLog.text;
    }

    // Al completar la simulación de carga
    if (progress === 100) {
      clearInterval(interval);
      setTimeout(() => {
        const splash = document.getElementById('gflSplash');
        splash.style.opacity = '0';
        setTimeout(() => {
          splash.style.visibility = 'hidden';
        }, 500); // Remueve la pantalla tras el fundido
      }, 600); // Breve pausa de confirmación al llegar al 100%
    }
  }, 80); // Velocidad de la animación
}

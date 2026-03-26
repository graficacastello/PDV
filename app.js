// ===== STATE =====
let state = {
  currentUser: null,
  caixa: null,
  cart: [],
  currentCustomer: null,
  products: [],
  categories: {},
  empresa: {},
  vendaNum: 1,
  editingProductId: null,
  selectedPayment: null,
  pendingProduct: null,
  discountItemIndex: null,   // novo: índice do item que está recebendo desconto
  discountType: 'percent',   // novo: tipo de desconto padrão
  selectedCategory: null,
  selectedSubcategory: null,
  currentCupomHtml: '',
  dragContext: null
};

// ===== INITIAL DATA =====
const DEFAULT_PRODUCTS = [
  {
    "id": "csv1",
    "codigo": "CPB1a10",
    "nome": "1 a 10un",
    "categoria": "Cópias (Xerox)",
    "subcategoria": "A4 Preto e Branco",
    "preco": 0.4
  },
  {
    "id": "csv2",
    "codigo": "CPB11a30",
    "nome": "11 a 30un",
    "categoria": "Cópias (Xerox)",
    "subcategoria": "A4 Preto e Branco",
    "preco": 0.35
  },
  {
    "id": "csv3",
    "codigo": "CPB31a60",
    "nome": "31 a 60un",
    "categoria": "Cópias (Xerox)",
    "subcategoria": "A4 Preto e Branco",
    "preco": 0.3
  },
  {
    "id": "csv4",
    "codigo": "CPB61a100",
    "nome": "61 a 100un",
    "categoria": "Cópias (Xerox)",
    "subcategoria": "A4 Preto e Branco",
    "preco": 0.25
  },
  {
    "id": "csv5",
    "codigo": "CPB101a200",
    "nome": "101 a 200un",
    "categoria": "Cópias (Xerox)",
    "subcategoria": "A4 Preto e Branco",
    "preco": 0.2
  },
  {
    "id": "csv6",
    "codigo": "CPB201mais",
    "nome": "201 ou +",
    "categoria": "Cópias (Xerox)",
    "subcategoria": "A4 Preto e Branco",
    "preco": 0.18
  },
  {
    "id": "csv7",
    "codigo": "CCOLOR1a10",
    "nome": "1 a 10un",
    "categoria": "Cópias (Xerox)",
    "subcategoria": "A4 Colorido",
    "preco": 0.9
  },
  {
    "id": "csv8",
    "codigo": "CCOLOR11a30",
    "nome": "11 a 30un",
    "categoria": "Cópias (Xerox)",
    "subcategoria": "A4 Colorido",
    "preco": 0.85
  },
  {
    "id": "csv9",
    "codigo": "CCOLOR31a60",
    "nome": "31 a 60un",
    "categoria": "Cópias (Xerox)",
    "subcategoria": "A4 Colorido",
    "preco": 0.8
  },
  {
    "id": "csv10",
    "codigo": "CCOLOR61a100",
    "nome": "61 a 100un",
    "categoria": "Cópias (Xerox)",
    "subcategoria": "A4 Colorido",
    "preco": 0.75
  },
  {
    "id": "csv11",
    "codigo": "CCOLOR101a200",
    "nome": "101 a 200un",
    "categoria": "Cópias (Xerox)",
    "subcategoria": "A4 Colorido",
    "preco": 0.7
  },
  {
    "id": "csv12",
    "codigo": "CCOLOR201mais",
    "nome": "201 ou +",
    "categoria": "Cópias (Xerox)",
    "subcategoria": "A4 Colorido",
    "preco": 0.65
  },
  {
    "id": "csv13",
    "codigo": "IMPIGPE1a10",
    "nome": "1 a 10un",
    "categoria": "Impressões Pigmentadas",
    "subcategoria": "A4 Preto e Branco",
    "preco": 0.5
  },
  {
    "id": "csv14",
    "codigo": "IMPIGPE11a30",
    "nome": "11 a 30un",
    "categoria": "Impressões Pigmentadas",
    "subcategoria": "A4 Preto e Branco",
    "preco": 0.45
  },
  {
    "id": "csv15",
    "codigo": "IMPIGPE31a60",
    "nome": "31 a 60un",
    "categoria": "Impressões Pigmentadas",
    "subcategoria": "A4 Preto e Branco",
    "preco": 0.4
  },
  {
    "id": "csv16",
    "codigo": "IMPIGPE61a100",
    "nome": "61 a 100un",
    "categoria": "Impressões Pigmentadas",
    "subcategoria": "A4 Preto e Branco",
    "preco": 0.35
  },
  {
    "id": "csv17",
    "codigo": "IMPIGPE101a200",
    "nome": "101 a 200un",
    "categoria": "Impressões Pigmentadas",
    "subcategoria": "A4 Preto e Branco",
    "preco": 0.3
  },
  {
    "id": "csv18",
    "codigo": "IMPIGPE201mais",
    "nome": "201 ou +",
    "categoria": "Impressões Pigmentadas",
    "subcategoria": "A4 Preto e Branco",
    "preco": 0.28
  },
  {
    "id": "csv19",
    "codigo": "IMPIGCOLOR1a10",
    "nome": "1 a 10un",
    "categoria": "Impressões Pigmentadas",
    "subcategoria": "A4 Colorido",
    "preco": 1.0
  },
  {
    "id": "csv20",
    "codigo": "IMPIGCOLOR11a30",
    "nome": "11 a 30un",
    "categoria": "Impressões Pigmentadas",
    "subcategoria": "A4 Colorido",
    "preco": 0.95
  },
  {
    "id": "csv21",
    "codigo": "IMPIGCOLOR31a60",
    "nome": "31 a 60un",
    "categoria": "Impressões Pigmentadas",
    "subcategoria": "A4 Colorido",
    "preco": 0.9
  },
  {
    "id": "csv22",
    "codigo": "IMPIGCOLOR61a100",
    "nome": "61 a 100un",
    "categoria": "Impressões Pigmentadas",
    "subcategoria": "A4 Colorido",
    "preco": 0.85
  },
  {
    "id": "csv23",
    "codigo": "IMPIGCOLOR101a200",
    "nome": "101 a 200un",
    "categoria": "Impressões Pigmentadas",
    "subcategoria": "A4 Colorido",
    "preco": 0.8
  },
  {
    "id": "csv24",
    "codigo": "IMPIGCOLOR201mais",
    "nome": "201 ou +",
    "categoria": "Impressões Pigmentadas",
    "subcategoria": "A4 Colorido",
    "preco": 0.75
  },
  {
    "id": "csv25",
    "codigo": "IMLPB1a10",
    "nome": "1 a 10un",
    "categoria": "Impressões Laser",
    "subcategoria": "A4 Preto e Branco",
    "preco": 0.8
  },
  {
    "id": "csv26",
    "codigo": "IMLPB11a30",
    "nome": "11 a 30un",
    "categoria": "Impressões Laser",
    "subcategoria": "A4 Preto e Branco",
    "preco": 0.7
  },
  {
    "id": "csv27",
    "codigo": "IMLPB31a100",
    "nome": "31 a 100un",
    "categoria": "Impressões Laser",
    "subcategoria": "A4 Preto e Branco",
    "preco": 0.6
  },
  {
    "id": "csv28",
    "codigo": "IMLPB101mais",
    "nome": "101un ou +",
    "categoria": "Impressões Laser",
    "subcategoria": "A4 Preto e Branco",
    "preco": 0.5
  },
  {
    "id": "csv29",
    "codigo": "IMLCOLOR1a10",
    "nome": "1 a 10un",
    "categoria": "Impressões Laser",
    "subcategoria": "A4 Colorido",
    "preco": 1.5
  },
  {
    "id": "csv30",
    "codigo": "IMLCOLOR11a30",
    "nome": "11 a 30un",
    "categoria": "Impressões Laser",
    "subcategoria": "A4 Colorido",
    "preco": 1.4
  },
  {
    "id": "csv31",
    "codigo": "IMLCOLOR31a100",
    "nome": "31 a 100un",
    "categoria": "Impressões Laser",
    "subcategoria": "A4 Colorido",
    "preco": 1.3
  },
  {
    "id": "csv32",
    "codigo": "IMLCOLOR101mais",
    "nome": "101un ou +",
    "categoria": "Impressões Laser",
    "subcategoria": "A4 Colorido",
    "preco": 1.2
  },
  {
    "id": "csv33",
    "codigo": "IMA3SF1a10",
    "nome": "1 a 10un",
    "categoria": "Impressões Laser",
    "subcategoria": "A3 Colorido",
    "preco": 3.5
  },
  {
    "id": "csv34",
    "codigo": "IMA3SF11a30",
    "nome": "11 a 30un",
    "categoria": "Impressões Laser",
    "subcategoria": "A3 Colorido",
    "preco": 3.2
  },
  {
    "id": "csv35",
    "codigo": "IMA3SF31a100",
    "nome": "31 a 100un",
    "categoria": "Impressões Laser",
    "subcategoria": "A3 Colorido",
    "preco": 2.8
  },
  {
    "id": "csv36",
    "codigo": "IMA3SF101mais",
    "nome": "101un ou +",
    "categoria": "Impressões Laser",
    "subcategoria": "A3 Colorido",
    "preco": 2.0
  },
  {
    "id": "csv37",
    "codigo": "IMC250A4",
    "nome": "A4",
    "categoria": "Couche 250g",
    "subcategoria": "A4",
    "preco": 3.0
  },
  {
    "id": "csv38",
    "codigo": "IMC250A3",
    "nome": "A3",
    "categoria": "Couche 250g",
    "subcategoria": "A3",
    "preco": 5.5
  },
  {
    "id": "csv39",
    "codigo": "IMC240A4",
    "nome": "A4",
    "categoria": "Cartão 240g",
    "subcategoria": "A4",
    "preco": 2.8
  },
  {
    "id": "csv40",
    "codigo": "IMC240A3",
    "nome": "A3",
    "categoria": "Cartão 240g",
    "subcategoria": "A3",
    "preco": 5.5
  },
  {
    "id": "csv41",
    "codigo": "IMC180A4",
    "nome": "A4",
    "categoria": "Cartão 180g",
    "subcategoria": "A4",
    "preco": 2.5
  },
  {
    "id": "csv42",
    "codigo": "IMC180A3",
    "nome": "A3",
    "categoria": "Cartão 180g",
    "subcategoria": "A3",
    "preco": 5.0
  },
  {
    "id": "csv43",
    "codigo": "IMLADA4",
    "nome": "A4",
    "categoria": "Papel Adesivo",
    "subcategoria": "A4",
    "preco": 4.0
  },
  {
    "id": "csv44",
    "codigo": "IMLADA3",
    "nome": "A3",
    "categoria": "Papel Adesivo",
    "subcategoria": "A3",
    "preco": 7.5
  },
  {
    "id": "csv45",
    "codigo": "IMLVADA4",
    "nome": "A4",
    "categoria": "Vinil Adesivo",
    "subcategoria": "A4",
    "preco": 10.0
  },
  {
    "id": "csv46",
    "codigo": "IMLVADA3",
    "nome": "A3",
    "categoria": "Vinil Adesivo",
    "subcategoria": "A3",
    "preco": 15.0
  },
  {
    "id": "csv47",
    "codigo": "IMPFOTOA5",
    "nome": "A5 (15x21cm)",
    "categoria": "Fotográfico",
    "subcategoria": "A5 (15x21cm)",
    "preco": 2.5
  },
  {
    "id": "csv48",
    "codigo": "IMPFOTOA4",
    "nome": "A4 (21x29cm)",
    "categoria": "Fotográfico",
    "subcategoria": "A4 (21x29cm)",
    "preco": 5.0
  },
  {
    "id": "csv49",
    "codigo": "ACSCEMIG",
    "nome": "CEMIG / COPASA",
    "categoria": "Serviços",
    "subcategoria": "CEMIG / COPASA",
    "preco": 2.0
  },
  {
    "id": "csv50",
    "codigo": "ACSTELEFONE",
    "nome": "Contas Telefone",
    "categoria": "Serviços",
    "subcategoria": "Contas Telefone",
    "preco": 2.0
  },
  {
    "id": "csv51",
    "codigo": "ACSCARTAO",
    "nome": "Contas Cartão",
    "categoria": "Serviços",
    "subcategoria": "Contas Cartão",
    "preco": 2.0
  },
  {
    "id": "csv52",
    "codigo": "ACSIPTU",
    "nome": "IPTU",
    "categoria": "Serviços",
    "subcategoria": "IPTU",
    "preco": 2.0
  },
  {
    "id": "csv53",
    "codigo": "ACSDETRAN",
    "nome": "Serviços DETRAN",
    "categoria": "Serviços",
    "subcategoria": "Serviços DETRAN",
    "preco": 2.0
  },
  {
    "id": "csv54",
    "codigo": "ACSEMAIL",
    "nome": "Acessar E-mail",
    "categoria": "Serviços",
    "subcategoria": "Acessar E-mail",
    "preco": 2.0
  },
  {
    "id": "csv55",
    "codigo": "ACSRENOVACAOCNH",
    "nome": "Renovação CNH",
    "categoria": "Serviços",
    "subcategoria": "Renovação CNH",
    "preco": 3.0
  },
  {
    "id": "csv56",
    "codigo": "ACSMARCACAORG",
    "nome": "Marcação RG",
    "categoria": "Serviços",
    "subcategoria": "Marcação RG",
    "preco": 3.0
  },
  {
    "id": "csv57",
    "codigo": "ENVKRAFT",
    "nome": "Envelope A4 Kraft",
    "categoria": "Envelopes",
    "subcategoria": "Envelope A4 Kraft",
    "preco": 1.0
  },
  {
    "id": "csv58",
    "codigo": "ENVBRANCO",
    "nome": "Envelope A4 Branco",
    "categoria": "Envelopes",
    "subcategoria": "Envelope A4 Branco",
    "preco": 1.0
  },
  {
    "id": "csv59",
    "codigo": "ENCAD20",
    "nome": "Até 20 folhas",
    "categoria": "Encadernações Espiral",
    "subcategoria": "Até 20 folhas",
    "preco": 3.0
  },
  {
    "id": "csv60",
    "codigo": "ENCAD50",
    "nome": "21-50 folhas",
    "categoria": "Encadernações Espiral",
    "subcategoria": "21-50 folhas",
    "preco": 4.0
  },
  {
    "id": "csv61",
    "codigo": "ENCAD100",
    "nome": "51-100 folhas",
    "categoria": "Encadernações Espiral",
    "subcategoria": "51-100 folhas",
    "preco": 5.0
  },
  {
    "id": "csv62",
    "codigo": "ENCAD200",
    "nome": "101-200 folhas",
    "categoria": "Encadernações Espiral",
    "subcategoria": "101-200 folhas",
    "preco": 6.0
  },
  {
    "id": "csv63",
    "codigo": "ENCAD300",
    "nome": "201-300 folhas",
    "categoria": "Encadernações Espiral",
    "subcategoria": "201-300 folhas",
    "preco": 8.0
  },
  {
    "id": "csv64",
    "codigo": "ENCAD400",
    "nome": "301-400 folhas",
    "categoria": "Encadernações Espiral",
    "subcategoria": "301-400 folhas",
    "preco": 10.0
  },
  {
    "id": "csv65",
    "codigo": "FOTO14x20",
    "nome": "14x20cm (2 unidades)",
    "categoria": "Impressão de Fotos",
    "subcategoria": "14x20cm (2 unidades)",
    "preco": 7.0
  },
  {
    "id": "csv66",
    "codigo": "FOTO10x14",
    "nome": "10x14cm (4 unidades)",
    "categoria": "Impressão de Fotos",
    "subcategoria": "10x14cm (4 unidades)",
    "preco": 7.0
  },
  {
    "id": "csv67",
    "codigo": "FOTOPOLAROID",
    "nome": "Polaroid (4 unidades)",
    "categoria": "Impressão de Fotos",
    "subcategoria": "Polaroid (4 unidades)",
    "preco": 7.0
  },
  {
    "id": "csv68",
    "codigo": "PLASTDOC",
    "nome": "Plastificação de Documento",
    "categoria": "Plastificação",
    "subcategoria": "Plastificação de Documento",
    "preco": 3.0
  },
 {
    "id": "csv69",
    "codigo": "PLASTA4",
    "nome": "Plastificação A4",
    "categoria": "Plastificação",
    "subcategoria": "Plastificação A4",
    "preco": 5.0
  },
 {
    "id": "csv70",
    "codigo": "PLASTDOC",
    "nome": "Plastificação A3",
    "categoria": "Plastificação",
    "subcategoria": "Plastificação A3",
    "preco": 8.0
  },
{
    "id": "csv71",
    "codigo": "CURRIC",
    "nome": "Currículo",
    "categoria": "Serviços",
    "subcategoria": "Currículo",
    "preco": 6.0
  },
{
    "id": "csv72",
    "codigo": "FOTO3X4",
    "nome": "3x4 (12 unidades)",
    "categoria": "Impressão de Fotos",
    "subcategoria": "3x4(12 unidades)",
    "preco": 7.0
  },
  {
    "id": "csv73",
    "codigo": "DIGIT1",
    "nome": "Digitalização 1ª Folha",
    "categoria": "Digitalização",
    "subcategoria": "Digitalização 1ª Folha",
    "preco": 1.0
  },
   {
    "id": "csv74",
    "codigo": "DIGI2a20",
    "nome": "Digitalização 2 a 20 páginas",
    "categoria": "Digitalização",
    "subcategoria": "Digitalização 2 a 20 páginas",
    "preco": 0.25
  },
   {
    "id": "csv75",
    "codigo": "DIGI21a100",
    "nome": "Digitalização 21 a 100 páginas",
    "categoria": "Digitalização",
    "subcategoria": "Digitalização 21 a 100 páginas",
    "preco": 0.20
  },
 {
    "id": "csv76",
    "codigo": "DIGI101+",
    "nome": "Digitalização 101 ou mais páginas",
    "categoria": "Digitalização",
    "subcategoria": "Digitalização 101 ou mais páginas",
    "preco": 0.15
  }
  
];

const DEFAULT_EMPRESA = {
  nome: 'Gráfica Castello',
  endereco: 'Rua Délio da Consolação Rocha, 153, Santa Helena - Contagem/MG',
  telefone: '(31) 98459-9525',
  mensagem: 'Obrigado pela sua preferência! Volte sempre.'
};

const CAT_ICONS = {
  'Cópias (Xerox)': '📄',
  'Impressões Pigmentadas': '🖨️',
  'Impressões Laser': '🖨️',
  'Couche 250g': '🧾',
  'Cartão 240g': '🧾',
  'Cartão 180g': '🧾',
  'Papel Adesivo': '🏷️',
  'Vinil Adesivo': '🏷️',
  'Fotográfico': '🖼️',
  'Serviços': '🛠️',
  'Envelopes': '✉️',
  'Plastificação': '📚',
  'Encadernações Espiral': '📚',
  'Impressão de Fotos': '📸'
  'Digitalização': '🧾',
};

// ===== STORAGE =====
function save(key, val) { localStorage.setItem('pdv_'+key, JSON.stringify(val)); }
function load(key, def) {
  try {
    const v = localStorage.getItem('pdv_'+key);
    return v !== null ? JSON.parse(v) : def;
  } catch(e) { return def; }
}

// ===== INIT =====
function init() {
  state.products = load('products', DEFAULT_PRODUCTS);
  state.empresa = load('empresa', DEFAULT_EMPRESA);
  state.vendaNum = load('vendaNum', 1);
  
  const caixa = load('caixaAtual', null);
  if (caixa && caixa.status === 'aberto') {
    state.caixa = caixa;
    const user = load('session', null);
    if (user) {
      state.currentUser = user;
      showPDV();
    } else {
      showScreen('screen-login');
    }
  } else {
    showScreen('screen-login');
  }
  
  updateCaixaDatetime();
  setInterval(updateCaixaDatetime, 1000);
  mergeDefaultCatalog();
  applySavedTheme();
  populateCategoryDatalist();
}

function updateCaixaDatetime() {
  const el = document.getElementById('caixa-datetime');
  if (el) el.textContent = formatDateTime(new Date());
}

// ===== CATEGORIAS SUGERIDAS (nova funcionalidade) =====
function populateCategoryDatalist() {
  const datalist = document.getElementById('category-datalist');
  if (!datalist) return;
  datalist.innerHTML = '';
  const cats = [...new Set(state.products.map(p => p.categoria))];
  cats.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    datalist.appendChild(opt);
  });
}


function mergeDefaultCatalog() {
  const existingByCode = new Map((state.products || []).map(p => [String(p.codigo || '').trim().toLowerCase(), p]));
  let changed = false;
  DEFAULT_PRODUCTS.forEach(prod => {
    const key = String(prod.codigo || '').trim().toLowerCase();
    if (!existingByCode.has(key)) {
      state.products.push({...prod, id: 'm' + Date.now() + Math.random().toString(36).slice(2,7)});
      changed = true;
    }
  });
  if (changed) save('products', state.products);
}

function applySavedTheme() {
  const savedTheme = load('theme', 'light') || 'light';
  document.body.setAttribute('data-theme', savedTheme);
  updateThemeButton();
}

function toggleTheme() {
  const current = document.body.getAttribute('data-theme') || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-theme', next);
  save('theme', next);
  updateThemeButton();
}

function updateThemeButton() {
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;
  const dark = document.body.getAttribute('data-theme') === 'dark';
  btn.textContent = dark ? '☀️ Tema Claro' : '🌙 Tema Escuro';
}

// ===== AUTH =====
function doLogin() {
  const user = document.getElementById('login-user').value.trim();
  const pass = document.getElementById('login-pass').value;
  
  const users = load('users', [{username:'admin', password:'admin123', name:'Administrador'}]);
  const found = users.find(u => u.username === user && u.password === pass);
  
  if (!found) {
    document.getElementById('login-error').style.display = 'block';
    return;
  }
  
  document.getElementById('login-error').style.display = 'none';
  state.currentUser = found;
  save('session', found);
  
  const caixa = load('caixaAtual', null);
  if (caixa && caixa.status === 'aberto') {
    state.caixa = caixa;
    showPDV();
  } else {
    showScreen('screen-caixa');
  }
}

document.getElementById('login-pass').addEventListener('keydown', e => {
  if (e.key === 'Enter') doLogin();
});
document.getElementById('login-user').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('login-pass').focus();
});

// ===== CAIXA =====
function abrirCaixa() {
  const val = parseFloat(document.getElementById('caixa-valor').value) || 0;
  state.caixa = {
    status: 'aberto',
    abertura: new Date().toISOString(),
    valorInicial: val,
    id: Date.now()
  };
  save('caixaAtual', state.caixa);
  showPDV();
  showToast('Caixa aberto com sucesso!', 'success');
}

// ===== SCREENS =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function showPDV() {
  if (!state.selectedCategory && state.products.length) {
    state.selectedCategory = state.products[0].categoria;
    state.selectedSubcategory = state.products[0].subcategoria;
  }
  buildCategories();
  updateHeader();
  showScreen('screen-pdv');
}

function openHistorico() {
  loadHistorico();
  showScreen('screen-historico');
}

function openConfiguracoes() {
  loadConfiguracoes();
  showScreen('screen-configuracoes');
}

function openDashboard() {
  loadDashboard();
  showScreen('screen-dashboard');
}

function voltarParaPDV() {
  state.cart = [];
  state.currentCustomer = null;
  renderCart();
  showPDV();
}

// ===== HEADER =====
function updateHeader() {
  document.getElementById('empresa-nome-header').textContent = state.empresa.nome || 'Gráfica Castello';
  document.getElementById('empresa-tel-header').textContent = state.empresa.telefone || '';
  const name = state.currentUser?.name || 'Admin';
  document.getElementById('user-name-display').textContent = name;
  document.getElementById('user-avatar-letter').textContent = name[0].toUpperCase();
}

// ===== CATEGORIES =====
function buildCategories() {
  const cats = {};
  state.products.forEach(p => {
    if (!cats[p.categoria]) cats[p.categoria] = [];
    cats[p.categoria].push(p);
  });

  const list = document.getElementById('categories-list');
  list.innerHTML = '';

  getOrderedCategories(Object.keys(cats)).forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'category-btn' + (state.selectedCategory === cat ? ' active' : '');
    btn.innerHTML = `<span class="cat-icon">${CAT_ICONS[cat] || '📦'}</span> ${cat}`;
    btn.onclick = () => showSubcategories(cat, cats[cat], btn);
    btn.draggable = true;
    btn.dataset.category = cat;
    btn.dataset.dragType = 'category';
    list.appendChild(btn);
  });

  setupDragAndDrop(list, '.category-btn', 'category', () => {
    saveCategoryOrder();
    syncOrdersFromDom();
  });

  if (state.selectedCategory && cats[state.selectedCategory]) {
    renderFloatingMenu(state.selectedCategory, cats[state.selectedCategory]);
  } else {
    renderFloatingMenu(null, []);
  }
}


function getOrderedCategories(categories) {
  const savedOrder = load('categoryOrder', []);
  const available = [...categories].sort((a, b) => a.localeCompare(b, 'pt-BR'));
  if (!Array.isArray(savedOrder) || !savedOrder.length) return available;

  const ordered = savedOrder.filter(cat => available.includes(cat));
  const missing = available.filter(cat => !ordered.includes(cat));
  return [...ordered, ...missing];
}

function getOrderedSubcategories(category, subcategories) {
  const orders = load('subcategoryOrder', {});
  const savedOrder = orders?.[category] || [];
  const available = [...subcategories].sort((a, b) => a.localeCompare(b, 'pt-BR'));
  if (!Array.isArray(savedOrder) || !savedOrder.length) return available;

  const ordered = savedOrder.filter(sub => available.includes(sub));
  const missing = available.filter(sub => !ordered.includes(sub));
  return [...ordered, ...missing];
}

function getOrderedProducts(category, subcategory, products) {
  const orders = load('productOrder', {});
  const key = `${category}|||${subcategory || ''}`;
  const savedOrder = orders?.[key] || [];
  const available = [...products].sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
  if (!Array.isArray(savedOrder) || !savedOrder.length) return available;

  const map = new Map(available.map(p => [String(p.id), p]));
  const ordered = savedOrder.map(id => map.get(String(id))).filter(Boolean);
  const missing = available.filter(p => !savedOrder.includes(String(p.id)));
  return [...ordered, ...missing];
}

function saveCategoryOrder() {
  const list = document.getElementById('categories-list');
  if (!list) return;
  const order = [...list.querySelectorAll('.category-btn')].map(btn => btn.dataset.category).filter(Boolean);
  save('categoryOrder', order);
}

function saveSubcategoryOrder(category, container) {
  if (!category || !container) return;
  const orders = load('subcategoryOrder', {});
  orders[category] = [...container.querySelectorAll('.float-btn[data-subcategory]')].map(btn => btn.dataset.subcategory).filter(Boolean);
  save('subcategoryOrder', orders);
}

function saveProductOrder(category, subcategory, container) {
  if (!category || !container) return;
  const orders = load('productOrder', {});
  const key = `${category}|||${subcategory || ''}`;
  orders[key] = [...container.querySelectorAll('.product-float-btn[data-product-id]')].map(btn => btn.dataset.productId).filter(Boolean);
  save('productOrder', orders);
}

function syncOrdersFromDom() {
  const subWrap = document.getElementById('floating-subcategories');
  const prodWrap = document.getElementById('floating-products');
  if (state.selectedCategory && subWrap) saveSubcategoryOrder(state.selectedCategory, subWrap);
  if (state.selectedCategory && prodWrap) saveProductOrder(state.selectedCategory, state.selectedSubcategory, prodWrap);
}

function setupDragAndDrop(container, selector, type, onSave) {
  if (!container) return;
  let draggedItem = null;

  container.querySelectorAll(selector).forEach(item => {
    item.draggable = true;

    item.addEventListener('dragstart', () => {
      draggedItem = item;
      state.dragContext = { type, containerId: container.id || null };
      item.classList.add('dragging');
      container.classList.add('drag-over');
    });

    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
      container.classList.remove('drag-over');
      draggedItem = null;
      state.dragContext = null;
      if (typeof onSave === 'function') onSave();
    });
  });

  container.ondragover = event => {
    event.preventDefault();
    if (!draggedItem) return;
    const afterElement = getDragAfterElement(container, selector, event.clientX, event.clientY);
    if (!afterElement) {
      container.appendChild(draggedItem);
    } else if (afterElement !== draggedItem) {
      container.insertBefore(draggedItem, afterElement);
    }
  };

  container.ondrop = event => {
    event.preventDefault();
    if (typeof onSave === 'function') onSave();
  };
}

function getDragAfterElement(container, selector, x, y) {
  const elements = [...container.querySelectorAll(`${selector}:not(.dragging)`)].filter(el => el.offsetParent !== null);
  let closest = { score: Number.NEGATIVE_INFINITY, element: null };

  elements.forEach(child => {
    const box = child.getBoundingClientRect();
    const vertical = y - box.top - box.height / 2;
    const horizontal = x - box.left - box.width / 2;
    const useHorizontal = getComputedStyle(container).display.includes('flex') && box.width > 120;
    const offset = useHorizontal ? (vertical < 0 ? vertical : vertical - Math.abs(horizontal) * 0.001) : vertical;
    if (offset < 0 && offset > closest.score) {
      closest = { score: offset, element: child };
    }
  });

  return closest.element;
}

function showSubcategories(cat, products, btn) {
  document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  state.selectedCategory = cat;
  const uniqueSubcats = [...new Set(products.map(p => p.subcategoria))].sort();
  if (!uniqueSubcats.includes(state.selectedSubcategory)) {
    state.selectedSubcategory = uniqueSubcats[0] || null;
  }
  renderFloatingMenu(cat, products);
}

function renderFloatingMenu(cat, products) {
  const badge = document.getElementById('selected-category-badge');
  const subWrap = document.getElementById('floating-subcategories');
  const prodWrap = document.getElementById('floating-products');

  if (!cat || !products.length) {
    badge.className = 'navigator-empty';
    badge.textContent = 'Selecione uma categoria no menu lateral.';
    subWrap.innerHTML = '<div class="navigator-empty">As subcategorias aparecerão aqui.</div>';
    prodWrap.innerHTML = '<div class="navigator-empty">Os produtos aparecerão aqui em botões flutuantes.</div>';
    return;
  }

  badge.className = 'floating-buttons';
  badge.innerHTML = `<button type="button" class="float-btn active"><span>${CAT_ICONS[cat] || '📦'}</span> ${cat}</button>`;

  const subcats = getOrderedSubcategories(cat, [...new Set(products.map(p => p.subcategoria))]);
  subWrap.innerHTML = subcats.map(sub => `
    <button type="button" class="float-btn ${state.selectedSubcategory === sub ? 'active' : ''}" onclick="selectSubcategory('${escape_js(sub)}')" data-subcategory="${escapeAttr(sub)}" data-drag-type="subcategory">
      <span>${sub}</span>
      <span class="float-meta">${products.filter(p => p.subcategoria === sub).length}</span>
    </button>
  `).join('');

  const visibleProducts = getOrderedProducts(
    cat,
    state.selectedSubcategory,
    products.filter(p => !state.selectedSubcategory || p.subcategoria === state.selectedSubcategory)
  );

  prodWrap.innerHTML = visibleProducts.length ? visibleProducts.map(p => `
    <button type="button" class="float-btn product-float-btn" onclick="openQtyModalById('${p.id}')" data-product-id="${escapeAttr(String(p.id))}" data-drag-type="product">
      <span class="product-info">
        <span class="product-name">${p.nome}</span>
        <span class="product-code">${p.codigo || ''}</span>
      </span>
      <span class="product-price">${formatMoney(p.preco)}</span>
    </button>
  `).join('') : '<div class="navigator-empty">Nenhum produto nesta subcategoria.</div>';

  setupDragAndDrop(subWrap, '.float-btn[data-subcategory]', 'subcategory', () => saveSubcategoryOrder(cat, subWrap));
  setupDragAndDrop(prodWrap, '.product-float-btn[data-product-id]', 'product', () => saveProductOrder(cat, state.selectedSubcategory, prodWrap));
}

function selectSubcategory(sub) {
  state.selectedSubcategory = sub;
  const products = state.products.filter(p => p.categoria === state.selectedCategory);
  renderFloatingMenu(state.selectedCategory, products);
}

function openQtyModalById(id) {
  const product = state.products.find(p => String(p.id) === String(id));
  if (product) openQtyModal(product);
}

function escape_js(str) {
  return String(str).split('\\').join('\\\\').split("'").join("\'");
}

function escapeAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function openQtyModal(product) {
  state.pendingProduct = product;
  document.getElementById('qty-product-name').textContent = product.nome;
  document.getElementById('qty-product-price').textContent = formatMoney(product.preco) + ' / unidade';
  document.getElementById('qty-input').value = 1;
  openModal('modal-qty');
}

function changeQtyModal(delta) {
  const inp = document.getElementById('qty-input');
  const newVal = Math.max(1, (parseInt(inp.value) || 1) + delta);
  inp.value = newVal;
}

function confirmAddProduct() {
  const qty = Math.max(1, parseInt(document.getElementById('qty-input').value) || 1);
  const p = state.pendingProduct;
  if (!p) return;
  
  const existing = state.cart.findIndex(i => i.id === p.id);
  if (existing >= 0) {
    state.cart[existing].qty += qty;
  } else {
    state.cart.push({ 
      ...p, 
      qty, 
      desconto: 0,           // novo campo
      tipoDesconto: 'percent' // novo campo
    });
  }
  
  closeModal('modal-qty');
  renderCart();
  showToast(`${p.nome} adicionado!`, 'success');
}

function openDiscountModal(idx) {
  state.discountItemIndex = idx;
  const item = state.cart[idx];
  document.getElementById('desc-valor-input').value = item.desconto || 0;
  // reset visual
  document.querySelectorAll('.discount-option').forEach(el => el.classList.remove('selected'));
  document.getElementById('desc-' + item.tipoDesconto).classList.add('selected');
  state.discountType = item.tipoDesconto;
  openModal('modal-desconto');
}

function selectDiscountType(el, type) {
  document.querySelectorAll('.discount-option').forEach(e => e.classList.remove('selected'));
  el.classList.add('selected');
  state.discountType = type;
  document.getElementById('desc-label').textContent = type === 'percent' ? 'Porcentagem (%)' : 'Valor Fixo (R$)';
}

function aplicarDescontoItem() {
  if (state.discountItemIndex === null) return;
  const valor = parseFloat(document.getElementById('desc-valor-input').value) || 0;
  const item = state.cart[state.discountItemIndex];
  item.desconto = valor;
  item.tipoDesconto = state.discountType;
  closeModal('modal-desconto');
  renderCart();
  showToast('Desconto aplicado!', 'success');
}

function removeFromCart(idx) {
  state.cart.splice(idx, 1);
  renderCart();
}

function updateQty(idx, delta) {
  const item = state.cart[idx];
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  const countEl = document.getElementById('cart-items-count');
  const btnFinal = document.getElementById('btn-finalizar');
  
  if (state.cart.length === 0) {
    container.innerHTML = `<div class="cart-empty"><span class="cart-empty-icon">🛒</span><span>Nenhum item adicionado</span></div>`;
    totalEl.textContent = 'R$ 0,00';
    countEl.textContent = '0 itens';
    btnFinal.disabled = true;
    return;
  }
  
  btnFinal.disabled = false;
  
  let total = 0;
  let totalItems = 0;
  
  container.innerHTML = state.cart.map((item, idx) => {
    const subtotalBruto = item.qty * item.preco;
    let descontoValor = 0;
    if (item.tipoDesconto === 'percent') {
      descontoValor = subtotalBruto * (item.desconto || 0) / 100;
    } else {
      descontoValor = item.desconto || 0;
    }
    const subtotalLiquido = Math.max(0, subtotalBruto - descontoValor);
    total += subtotalLiquido;
    totalItems += item.qty;
    
    return `
      <div class="cart-item">
        <div class="cart-item-name">
          ${item.nome}
          <small>${item.categoria} › ${item.subcategoria}</small>
        </div>
        <div class="cart-qty-ctrl">
          <button class="qty-btn" onclick="updateQty(${idx},-1)">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${idx},1)">+</button>
        </div>
        <div class="cart-price">${formatMoney(item.preco)}</div>
        <div class="cart-discount" onclick="openDiscountModal(${idx})">
          ${item.desconto > 0 
            ? (item.tipoDesconto === 'percent' ? `${item.desconto}%` : formatMoney(item.desconto)) 
            : '—'}
        </div>
        <div class="cart-subtotal">${formatMoney(subtotalLiquido)}</div>
        <div class="cart-item-actions">
          <button class="btn-remove" onclick="removeFromCart(${idx})" title="Remover">✕</button>
        </div>
      </div>
    `;
  }).join('');
  
  totalEl.textContent = formatMoney(total);
  countEl.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'itens'}`;
}

// ===== SEARCH =====
document.getElementById('search-input').addEventListener('input', function() {
  const q = this.value.toLowerCase().trim();
  const res = document.getElementById('search-results');
  
  if (!q) { res.classList.remove('visible'); return; }
  
  const matches = state.products.filter(p =>
    p.nome.toLowerCase().includes(q) ||
    p.codigo.toLowerCase().includes(q)
  ).slice(0, 8);
  
  if (!matches.length) { res.classList.remove('visible'); return; }
  
  res.innerHTML = matches.map(p => `
    <div class="search-result-item" onclick="openQtyModalById('${p.id}')">
      <div>
        <div class="search-result-name">${p.nome}</div>
        <div class="search-result-cat">${p.categoria} › ${p.subcategoria} · ${p.codigo}</div>
      </div>
      <div class="search-result-price">${formatMoney(p.preco)}</div>
    </div>
  `).join('');
  res.classList.add('visible');
});

document.addEventListener('click', e => {
  if (!e.target.closest('.search-area')) {
    document.getElementById('search-results').classList.remove('visible');
    document.getElementById('search-input').value = '';
  }
});

// ===== CUSTOMER =====
function openClienteModal() {
  document.getElementById('cliente-nome').value = state.currentCustomer?.nome || '';
  document.getElementById('cliente-cpf').value = state.currentCustomer?.cpf || '';
  document.getElementById('cliente-tel').value = state.currentCustomer?.tel || '';
  openModal('modal-cliente');
}

function identificarCliente() {
  const nome = document.getElementById('cliente-nome').value.trim();
  if (!nome) { showToast('Informe o nome do cliente', 'error'); return; }
  
  state.currentCustomer = {
    nome,
    cpf: document.getElementById('cliente-cpf').value,
    tel: document.getElementById('cliente-tel').value
  };
  
  document.getElementById('customer-display').innerHTML = `<strong>${nome}</strong>`;
  document.getElementById('customer-tag').style.display = 'inline-flex';
  closeModal('modal-cliente');
  showToast('Cliente identificado!', 'success');
}

function prosseguirSemCliente() {
  state.currentCustomer = null;
  document.getElementById('customer-display').textContent = 'Nenhum cliente identificado';
  document.getElementById('customer-tag').style.display = 'none';
  closeModal('modal-cliente');
}

// Mask CPF
document.getElementById('cliente-cpf').addEventListener('input', function() {
  let v = this.value.replace(/\D/g,'');
  if (v.length > 9) v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/,'$1.$2.$3-$4');
  else if (v.length > 6) v = v.replace(/(\d{3})(\d{3})(\d{1,3})/,'$1.$2.$3');
  else if (v.length > 3) v = v.replace(/(\d{3})(\d{1,3})/,'$1.$2');
  this.value = v;
});

// ===== PAYMENT =====
function openFinalizarVenda() {
  if (state.cart.length === 0) return;
  const total = getCartTotal();
  document.getElementById('finalizar-total').textContent = formatMoney(total);
  state.selectedPayment = null;
  document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
  document.getElementById('troco-area').classList.remove('visible');
  document.getElementById('outros-area').style.display = 'none';
  document.getElementById('valor-recebido').value = '';
  document.getElementById('troco-val').textContent = 'R$ 0,00';
  openModal('modal-finalizar');
}

function selectPayment(type) {
  state.selectedPayment = type;
  document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
  document.getElementById('pay-'+type).classList.add('selected');
  
  document.getElementById('troco-area').classList.toggle('visible', type === 'dinheiro');
  document.getElementById('outros-area').style.display = type === 'outros' ? 'block' : 'none';
  
  if (type === 'dinheiro') {
    setTimeout(() => document.getElementById('valor-recebido').focus(), 100);
  }
}

function calcTroco() {
  const total = getCartTotal();
  const recebido = parseFloat(document.getElementById('valor-recebido').value) || 0;
  const troco = Math.max(0, recebido - total);
  document.getElementById('troco-val').textContent = formatMoney(troco);
}

function confirmarVenda() {
  if (!state.selectedPayment) { showToast('Selecione a forma de pagamento', 'warning'); return; }
  if (state.selectedPayment === 'dinheiro') {
    const total = getCartTotal();
    const recebido = parseFloat(document.getElementById('valor-recebido').value) || 0;
    if (recebido < total) { showToast('Valor recebido insuficiente', 'error'); return; }
  }
  
  const total = getCartTotal();
  const recebido = state.selectedPayment === 'dinheiro' ? (parseFloat(document.getElementById('valor-recebido').value) || 0) : total;
  const troco = state.selectedPayment === 'dinheiro' ? Math.max(0, recebido - total) : 0;
  const pagLabel = state.selectedPayment === 'outros' ? (document.getElementById('outros-text').value || 'Outros') : paymentLabel(state.selectedPayment);
  
  const venda = {
    id: Date.now(),
    num: state.vendaNum++,
    data: new Date().toISOString(),
    cliente: state.currentCustomer,
    itens: [...state.cart],
    total,
    pagamento: state.selectedPayment,
    pagamentoLabel: pagLabel,
    recebido,
    troco,
    status: 'concluida'
  };
  
  save('vendaNum', state.vendaNum);
  
  const vendas = load('vendas', []);
  vendas.push(venda);
  save('vendas', vendas);
  
  closeModal('modal-finalizar');
  gerarCupom(venda);
}

function paymentLabel(p) {
  const labels = { dinheiro:'Dinheiro', credito:'Cartão de Crédito', debito:'Cartão de Débito', pix:'Pix', outros:'Outros' };
  return labels[p] || p;
}

// ===== CUPOM + PDF (nova funcionalidade) =====
function gerarCupom(venda) {
  const emp = state.empresa;
  const num = String(venda.num).padStart(6, '0');

  let itensHtml = venda.itens.map(i => {
    const subtotalBruto = i.qty * i.preco;
    let desconto = 0;
    if (i.tipoDesconto === 'percent') desconto = subtotalBruto * (i.desconto || 0) / 100;
    else desconto = i.desconto || 0;
    const subtotal = Math.max(0, subtotalBruto - desconto);
    return `
      <div class="receipt-item">
        <div class="receipt-item-name">${i.nome}</div>
        <div class="receipt-item-detail">${i.qty} x ${formatMoney(i.preco)} 
          ${i.desconto > 0 ? `(-${i.tipoDesconto==='percent'?i.desconto+'%':formatMoney(i.desconto)})` : ''}
          = <strong>${formatMoney(subtotal)}</strong></div>
      </div>
    `;
  }).join('');

  let clienteHtml = venda.cliente ? `
    <div class="receipt-row"><span>Cliente:</span><span>${venda.cliente.nome}</span></div>
    ${venda.cliente.cpf ? `<div class="receipt-row"><span>CPF:</span><span>${venda.cliente.cpf}</span></div>` : ''}
    ${venda.cliente.tel ? `<div class="receipt-row"><span>Tel:</span><span>${venda.cliente.tel}</span></div>` : ''}
    <div class="receipt-divider"></div>
  ` : '';

  let trocoHtml = venda.troco > 0 ? `
    <div class="receipt-row"><span>Valor Recebido:</span><span>${formatMoney(venda.recebido)}</span></div>
    <div class="receipt-row bold"><span>TROCO:</span><span>${formatMoney(venda.troco)}</span></div>
  ` : '';

  const html = `
    <div class="receipt-logo-area">
      <img src="logo.png" alt="Logo">
      <div class="receipt-company">${emp.nome || 'Gráfica Castello'}</div>
      <div class="receipt-address">${emp.endereco || ''}</div>
      <div class="receipt-address">Tel: ${emp.telefone || ''}</div>
    </div>
    <div class="receipt-num">Cupom Nº ${num}</div>
    <div class="receipt-row"><span>Data:</span><span>${formatDateTime(new Date(venda.data))}</span></div>
    <div class="receipt-row"><span>Operador:</span><span>${state.currentUser?.name || 'Admin'}</span></div>
    <div class="receipt-divider"></div>
    ${clienteHtml}
    <div style="font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">ITENS</div>
    ${itensHtml}
    <div class="receipt-divider"></div>
    <div class="receipt-row total"><span>TOTAL:</span><span>${formatMoney(venda.total)}</span></div>
    <div class="receipt-divider"></div>
    <div class="receipt-row"><span>Pagamento:</span><span>${venda.pagamentoLabel}</span></div>
    ${trocoHtml}
    <div class="receipt-footer">
      <div>${emp.mensagem || 'Obrigado pela sua preferência!'}</div>
      <div style="margin-top:8px;font-size:9px;opacity:0.6">PDV Gráfica Castello v1.0</div>
    </div>
  `;

  state.currentCupomHtml = html;
  document.getElementById('receipt-content').innerHTML = html;
  showScreen('screen-cupom');
}

function getReceiptPrintDocument() {
  const logoSrc = document.querySelector('.header-logo img')?.src || 'logo.png';
  const receiptHtml = state.currentCupomHtml || document.getElementById('receipt-content').innerHTML || '';
  return `<!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <title>Cupom PDV</title>
    <style>
      body { font-family: monospace; background:#f3f4f6; padding:20px; }
      .cupom-wrapper { background:#fff; width:380px; margin:0 auto; box-shadow:none; border:1px solid #ddd; }
      .receipt { font-size:12px; color:#1a1a1a; padding:24px; line-height:1.6; }
      .receipt-logo-area { text-align:center; padding-bottom:16px; border-bottom:1px dashed #ccc; margin-bottom:16px; }
      .receipt-logo-area img { width:80px; height:80px; object-fit:contain; margin-bottom:8px; }
      .receipt-company { font-size:16px; font-weight:bold; letter-spacing:1px; }
      .receipt-address { font-size:11px; color:#555; margin-top:4px; }
      .receipt-divider { border-top:1px dashed #ccc; margin:12px 0; }
      .receipt-row { display:flex; justify-content:space-between; font-size:11px; margin-bottom:2px; gap:10px; }
      .receipt-row.bold { font-weight:bold; font-size:12px; }
      .receipt-row.total { border-top:1px dashed #ccc; padding-top:8px; margin-top:8px; font-size:14px; font-weight:bold; }
      .receipt-item { margin-bottom:6px; }
      .receipt-item-name { font-weight:bold; font-size:12px; }
      .receipt-item-detail { font-size:11px; color:#555; }
      .receipt-footer { text-align:center; font-size:10px; color:#666; margin-top:16px; border-top:1px dashed #ccc; padding-top:12px; }
      .receipt-num { text-align:center; font-size:11px; color:#888; margin-bottom:8px; }
      @media print {
        body { background:#fff; padding:0; }
        .cupom-wrapper { border:none; width:auto; }
      }
    </style>
  </head>
  <body>
    <div class="cupom-wrapper">
      <div class="receipt">${receiptHtml.replace('src="logo.png"', `src="${logoSrc}"`)}</div>
    </div>
  </body>
  </html>`;
}

function openReceiptPrintWindow() {
  const printWin = window.open('', '_blank', 'width=520,height=760');
  if (!printWin) {
    showToast('Libere pop-ups para imprimir o cupom', 'warning');
    return null;
  }
  printWin.document.open();
  printWin.document.write(getReceiptPrintDocument());
  printWin.document.close();
  return printWin;
}

function imprimirCupom() {
  const win = openReceiptPrintWindow();
  if (!win) return;
  win.onload = () => {
    win.focus();
    win.print();
  };
}

function baixarPDF() {
  const win = openReceiptPrintWindow();
  if (!win) return;
  win.onload = () => {
    win.focus();
    win.print();
  };
  showToast('Janela do cupom aberta. Escolha "Salvar como PDF" na impressão.', 'success');
}

function openFecharCaixa() {
  const vendas = load('vendas', []).filter(v => {
    const caixaAbertura = state.caixa?.abertura;
    return v.data >= caixaAbertura && v.status === 'concluida';
  });
  
  let totalGeral = 0, totalDinheiro = 0, totalCartao = 0, totalPix = 0, totalOutros = 0;
  vendas.forEach(v => {
    totalGeral += v.total;
    if (v.pagamento === 'dinheiro') totalDinheiro += v.total;
    else if (v.pagamento === 'credito' || v.pagamento === 'debito') totalCartao += v.total;
    else if (v.pagamento === 'pix') totalPix += v.total;
    else totalOutros += v.total;
  });
  
  const valorEsperado = (state.caixa?.valorInicial || 0) + totalDinheiro;
  
  document.getElementById('fechar-caixa-body').innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px">
      <div style="background:var(--gray-50);border-radius:var(--radius);padding:16px;text-align:center">
        <div style="font-size:11px;color:var(--gray-400);text-transform:uppercase;letter-spacing:0.5px;font-weight:700">Vendas Realizadas</div>
        <div style="font-size:28px;font-weight:700;font-family:var(--mono);margin-top:4px">${vendas.length}</div>
      </div>
      <div style="background:var(--gray-50);border-radius:var(--radius);padding:16px;text-align:center">
        <div style="font-size:11px;color:var(--gray-400);text-transform:uppercase;letter-spacing:0.5px;font-weight:700">Total em Vendas</div>
        <div style="font-size:24px;font-weight:700;font-family:var(--mono);color:var(--success);margin-top:4px">${formatMoney(totalGeral)}</div>
      </div>
    </div>
    <div style="background:white;border:1px solid var(--gray-200);border-radius:var(--radius);overflow:hidden;margin-bottom:16px">
      <div style="padding:14px 16px;border-bottom:1px solid var(--gray-100);display:flex;justify-content:space-between;font-size:13px">
        <span>💵 Dinheiro</span><strong style="font-family:var(--mono)">${formatMoney(totalDinheiro)}</strong>
      </div>
      <div style="padding:14px 16px;border-bottom:1px solid var(--gray-100);display:flex;justify-content:space-between;font-size:13px">
        <span>💳 Cartões (Crédito+Débito)</span><strong style="font-family:var(--mono)">${formatMoney(totalCartao)}</strong>
      </div>
      <div style="padding:14px 16px;border-bottom:1px solid var(--gray-100);display:flex;justify-content:space-between;font-size:13px">
        <span>⚡ Pix</span><strong style="font-family:var(--mono)">${formatMoney(totalPix)}</strong>
      </div>
      <div style="padding:14px 16px;display:flex;justify-content:space-between;font-size:13px">
        <span>💰 Outros</span><strong style="font-family:var(--mono)">${formatMoney(totalOutros)}</strong>
      </div>
    </div>
    <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:var(--radius);padding:16px;display:flex;justify-content:space-between;align-items:center">
      <div>
        <div style="font-size:12px;font-weight:600;color:#15803D;text-transform:uppercase">Valor Inicial + Dinheiro em Caixa</div>
        <div style="font-size:10px;color:#15803D;opacity:0.7">Inicial: ${formatMoney(state.caixa?.valorInicial || 0)}</div>
      </div>
      <strong style="font-family:var(--mono);font-size:20px;color:#15803D">${formatMoney(valorEsperado)}</strong>
    </div>
    <div style="margin-top:12px">
      <label style="font-size:12px;font-weight:600;color:var(--gray-600);text-transform:uppercase;letter-spacing:0.5px;display:block;margin-bottom:6px">Abertura do Caixa</label>
      <div style="font-size:13px;color:var(--gray-600);background:var(--gray-50);padding:10px;border-radius:var(--radius-sm)">${formatDateTime(new Date(state.caixa?.abertura))}</div>
    </div>
  `;
  
  openModal('modal-fechar-caixa');
}

function confirmarFecharCaixa() {
  const vendas = load('vendas', []).filter(v => v.data >= state.caixa?.abertura && v.status === 'concluida');
  
  const fechamento = {
    ...state.caixa,
    status: 'fechado',
    fechamento: new Date().toISOString(),
    vendas: vendas.length,
    totalVendas: vendas.reduce((s,v)=>s+v.total,0)
  };
  
  const historicoCaixas = load('historicoCaixas', []);
  historicoCaixas.push(fechamento);
  save('historicoCaixas', historicoCaixas);
  save('caixaAtual', null);
  
  state.caixa = null;
  state.cart = [];
  state.currentCustomer = null;
  save('session', null);
  
  closeModal('modal-fechar-caixa');
  showToast('Caixa fechado com sucesso!', 'success');
  
  setTimeout(() => showScreen('screen-login'), 500);
}

// ===== DASHBOARD (nova funcionalidade) =====
function loadDashboard() {
  const vendas = load('vendas', []).filter(v => v.status === 'concluida');
  const today = new Date();
  const todayKey = today.toISOString().slice(0,10);
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = yesterday.toISOString().slice(0,10);

  const todayVendas = vendas.filter(v => v.data.slice(0,10) === todayKey);
  const yesterdayVendas = vendas.filter(v => v.data.slice(0,10) === yesterdayKey);

  const todayTotal = todayVendas.reduce((sum, v) => sum + v.total, 0);
  const yesterdayTotal = yesterdayVendas.reduce((sum, v) => sum + v.total, 0);
  const todayCount = todayVendas.length;
  const yesterdayCount = yesterdayVendas.length;

  const diffMoney = todayTotal - yesterdayTotal;
  const diffCount = todayCount - yesterdayCount;

  const productSales = {};
  todayVendas.forEach(v => {
    v.itens.forEach(i => {
      const key = i.nome;
      if (!productSales[key]) productSales[key] = {qty:0, valor:0};
      productSales[key].qty += i.qty;
      productSales[key].valor += i.qty * i.preco;
    });
  });

  const paymentSales = {};
  todayVendas.forEach(v => {
    const key = v.pagamentoLabel || paymentLabel(v.pagamento);
    paymentSales[key] = (paymentSales[key] || 0) + v.total;
  });

  const hourlySales = {};
  todayVendas.forEach(v => {
    const hour = new Date(v.data).toLocaleTimeString('pt-BR', {hour:'2-digit', minute:'2-digit'}).slice(0,2) + 'h';
    hourlySales[hour] = (hourlySales[hour] || 0) + v.total;
  });

  const topProducts = Object.entries(productSales).sort((a,b) => b[1].qty - a[1].qty).slice(0, 8);
  const paymentEntries = Object.entries(paymentSales).sort((a,b) => b[1] - a[1]);
  const hourlyEntries = Object.entries(hourlySales).sort((a,b) => a[0].localeCompare(b[0], 'pt-BR'));

  const maxProductQty = Math.max(1, ...topProducts.map(([,data]) => data.qty));
  const maxPayment = Math.max(1, ...paymentEntries.map(([,value]) => value));
  const maxHourly = Math.max(1, ...hourlyEntries.map(([,value]) => value));

  document.getElementById('dashboard-content').innerHTML = `
    <div class="kpi-grid" style="grid-column:1/-1">
      <div class="kpi-card">
        <div class="kpi-label">Faturamento de hoje</div>
        <div class="kpi-value">${formatMoney(todayTotal)}</div>
        <div class="kpi-change ${diffMoney >= 0 ? 'kpi-up' : 'kpi-down'}">${diffMoney >= 0 ? '▲' : '▼'} ${formatMoney(Math.abs(diffMoney))} vs. ontem</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Vendas de hoje</div>
        <div class="kpi-value">${todayCount}</div>
        <div class="kpi-change ${diffCount >= 0 ? 'kpi-up' : 'kpi-down'}">${diffCount >= 0 ? '▲' : '▼'} ${Math.abs(diffCount)} vs. ontem</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Ticket médio</div>
        <div class="kpi-value">${formatMoney(todayCount ? todayTotal / todayCount : 0)}</div>
        <div class="kpi-change">Baseado nas vendas concluídas de hoje</div>
      </div>
    </div>

    <div class="chart-card">
      <div class="chart-title">Comparativo hoje x ontem</div>
      <div class="compare-strip">
        <div class="compare-box">
          Hoje (${todayKey})
          <strong>${formatMoney(todayTotal)}</strong>
          <small>${todayCount} venda(s)</small>
        </div>
        <div class="compare-box">
          Ontem (${yesterdayKey})
          <strong>${formatMoney(yesterdayTotal)}</strong>
          <small>${yesterdayCount} venda(s)</small>
        </div>
      </div>
    </div>

    <div class="chart-card">
      <div class="chart-title">Produtos mais vendidos</div>
      <div class="bar-list">
        ${topProducts.length ? topProducts.map(([nome, data]) => `
          <div class="bar-row">
            <div class="bar-label">${nome}</div>
            <div class="bar-track"><div class="bar-fill" style="width:${(data.qty/maxProductQty)*100}%"></div></div>
            <div class="bar-value">${data.qty} un</div>
          </div>
        `).join('') : '<div class="navigator-empty">Nenhuma venda concluída hoje.</div>'}
      </div>
    </div>

    <div class="chart-card">
      <div class="chart-title">Formas de pagamento</div>
      <div class="bar-list">
        ${paymentEntries.length ? paymentEntries.map(([forma, valor]) => `
          <div class="bar-row">
            <div class="bar-label">${forma}</div>
            <div class="bar-track"><div class="bar-fill" style="width:${(valor/maxPayment)*100}%"></div></div>
            <div class="bar-value">${formatMoney(valor)}</div>
          </div>
        `).join('') : '<div class="navigator-empty">Sem pagamentos registrados hoje.</div>'}
      </div>
    </div>

    <div class="chart-card" style="grid-column:1/-1">
      <div class="chart-title">Vendas por horário</div>
      <div class="bar-list">
        ${hourlyEntries.length ? hourlyEntries.map(([hora, valor]) => `
          <div class="bar-row">
            <div class="bar-label">${hora}</div>
            <div class="bar-track"><div class="bar-fill" style="width:${(valor/maxHourly)*100}%"></div></div>
            <div class="bar-value">${formatMoney(valor)}</div>
          </div>
        `).join('') : '<div class="navigator-empty">Ainda não há vendas para montar o gráfico de horários.</div>'}
      </div>
    </div>
  `;
}

function imprimirRelatorioDia() {
  const content = document.getElementById('dashboard-content').innerHTML;
  const printWin = window.open('', '_blank');
  printWin.document.write(`
    <html><head><title>Relatório do Dia</title>
    <style>body{font-family:sans-serif;padding:40px;}table{width:100%;border-collapse:collapse}th,td{border:1px solid #ccc;padding:8px}</style>
    </head><body><h1>Relatório do Dia - ${new Date().toLocaleDateString('pt-BR')}</h1>${content}</body></html>
  `);
  printWin.document.close();
  printWin.print();
}

// ===== HISTORICO =====
function loadHistorico() {
  filtrarHistorico();
}

function filtrarHistorico() {
  let vendas = load('vendas', []);
  const dataIni = document.getElementById('filter-data-ini')?.value;
  const dataFim = document.getElementById('filter-data-fim')?.value;
  const cliente = document.getElementById('filter-cliente')?.value?.toLowerCase();
  
  if (dataIni) vendas = vendas.filter(v => v.data.slice(0,10) >= dataIni);
  if (dataFim) vendas = vendas.filter(v => v.data.slice(0,10) <= dataFim);
  if (cliente) vendas = vendas.filter(v => (v.cliente?.nome || '').toLowerCase().includes(cliente));
  
  const tbody = document.getElementById('historico-tbody');
  if (!tbody) return;
  
  if (!vendas.length) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:32px;color:var(--gray-400)">Nenhuma venda encontrada</td></tr>`;
    return;
  }
  
  tbody.innerHTML = [...vendas].reverse().map(v => `
    <tr>
      <td><span class="font-mono" style="font-size:12px">#${String(v.num).padStart(4,'0')}</span></td>
      <td>${formatDateTime(new Date(v.data))}</td>
      <td>${v.cliente?.nome || '<span class="text-muted">—</span>'}</td>
      <td>${v.itens.reduce((s,i)=>s+i.qty,0)} itens</td>
      <td><span class="badge badge-blue">${v.pagamentoLabel}</span></td>
      <td><strong class="font-mono">${formatMoney(v.total)}</strong></td>
      <td><span class="badge ${v.status==='cancelada'?'badge-red':'badge-green'}">${v.status==='cancelada'?'Cancelada':'Concluída'}</span></td>
      <td>
        <button class="btn btn-sm btn-secondary" onclick="verVenda('${v.id}')">Ver</button>
        ${v.status!=='cancelada'?`<button class="btn btn-sm btn-outline" onclick="cancelarVenda('${v.id}')" style="margin-left:4px">Cancelar</button>`:''}
      </td>
    </tr>
  `).join('');
}

function limparFiltros() {
  document.getElementById('filter-data-ini').value = '';
  document.getElementById('filter-data-fim').value = '';
  document.getElementById('filter-cliente').value = '';
  filtrarHistorico();
}

function verVenda(id) {
  const venda = load('vendas', []).find(v => String(v.id) === String(id));
  if (!venda) return;
  
  document.getElementById('venda-detail-body').innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">
      <div><div class="text-sm text-muted">Número</div><strong class="font-mono">#${String(venda.num).padStart(6,'0')}</strong></div>
      <div><div class="text-sm text-muted">Data/Hora</div><strong>${formatDateTime(new Date(venda.data))}</strong></div>
      <div><div class="text-sm text-muted">Cliente</div><strong>${venda.cliente?.nome || '—'}</strong></div>
      <div><div class="text-sm text-muted">Pagamento</div><strong>${venda.pagamentoLabel}</strong></div>
    </div>
    <div class="divider"></div>
    <table style="width:100%">
      <thead><tr><th>Produto</th><th class="text-right">Qtd</th><th class="text-right">Unit.</th><th class="text-right">Total</th></tr></thead>
      <tbody>${venda.itens.map(i=>`<tr><td>${i.nome}</td><td class="text-right font-mono">${i.qty}</td><td class="text-right font-mono">${formatMoney(i.preco)}</td><td class="text-right font-mono"><strong>${formatMoney(i.qty*i.preco)}</strong></td></tr>`).join('')}</tbody>
    </table>
    <div class="divider"></div>
    <div style="text-align:right;font-size:18px;font-family:var(--mono);font-weight:700">Total: ${formatMoney(venda.total)}</div>
    ${venda.troco>0?`<div style="text-align:right;font-size:13px;color:var(--gray-500)">Recebido: ${formatMoney(venda.recebido)} | Troco: ${formatMoney(venda.troco)}</div>`:''}
  `;
  
  document.getElementById('venda-detail-footer').innerHTML = `
    <button class="btn btn-secondary" onclick="closeModal('modal-venda-detail')">Fechar</button>
    <button class="btn btn-primary" onclick="reimprimir('${venda.id}')">🖨️ Reimprimir</button>
  `;
  
  openModal('modal-venda-detail');
}

function reimprimir(id) {
  const venda = load('vendas', []).find(v => String(v.id) === String(id));
  if (!venda) return;
  closeModal('modal-venda-detail');
  gerarCupom(venda);
}

function cancelarVenda(id) {
  if (!confirm('Confirmar cancelamento desta venda?')) return;
  const vendas = load('vendas', []);
  const idx = vendas.findIndex(v => String(v.id) === String(id));
  if (idx >= 0) {
    vendas[idx].status = 'cancelada';
    save('vendas', vendas);
    filtrarHistorico();
    showToast('Venda cancelada', 'warning');
  }
}

// ===== CONFIGURAÇÕES =====
function loadConfiguracoes() {
  const e = state.empresa;
  document.getElementById('config-nome').value = e.nome || '';
  document.getElementById('config-tel').value = e.telefone || '';
  document.getElementById('config-end').value = e.endereco || '';
  document.getElementById('config-msg').value = e.mensagem || '';
  renderProductsList();
  populateCategoryDatalist();
}

function switchTab(tab) {
  document.querySelectorAll('.settings-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.settings-tab-content').forEach(t => t.classList.remove('active'));
  const tabBtn = Array.from(document.querySelectorAll('.settings-tab')).find(btn => btn.getAttribute('onclick')?.includes(`'${tab}'`) || btn.getAttribute('onclick')?.includes(`"${tab}"`) || btn.textContent.toLowerCase().includes(tab));
  if (tabBtn) tabBtn.classList.add('active');
  document.getElementById('tab-'+tab).classList.add('active');
  if (tab === 'produtos') renderProductsList();
}

function salvarEmpresa() {
  state.empresa = {
    nome: document.getElementById('config-nome').value,
    telefone: document.getElementById('config-tel').value,
    endereco: document.getElementById('config-end').value,
    mensagem: document.getElementById('config-msg').value
  };
  save('empresa', state.empresa);
  updateHeader();
  showToast('Configurações salvas!', 'success');
}

function renderProductsList() {
  const el = document.getElementById('products-list');
  if (!el) return;

  const groups = {};
  state.products.forEach(p => {
    if (!groups[p.categoria]) groups[p.categoria] = {};
    if (!groups[p.categoria][p.subcategoria]) groups[p.categoria][p.subcategoria] = [];
    groups[p.categoria][p.subcategoria].push(p);
  });

  if (!state.products.length) {
    el.innerHTML = '<div style="text-align:center;padding:24px;color:var(--gray-400)">Nenhum produto cadastrado</div>';
    return;
  }

  el.innerHTML = `
    <div class="settings-organizer">
      <h4>Visualização rápida em botões flutuantes</h4>
      ${Object.entries(groups).sort((a,b)=>a[0].localeCompare(b[0],'pt-BR')).map(([categoria, subcats]) => `
        <div class="settings-group">
          <div class="navigator-label">${categoria}</div>
          <div class="floating-buttons" style="margin-bottom:8px">
            ${Object.keys(subcats).sort((a,b)=>a.localeCompare(b,'pt-BR')).map(sub => `<span class="float-btn">${sub} <span class="float-meta">${subcats[sub].length}</span></span>`).join('')}
          </div>
          <div class="floating-buttons">
            ${Object.values(subcats).flat().slice(0, 12).map(p => `
              <span class="float-btn product-float-btn" style="cursor:default">
                <span class="product-info">
                  <span class="product-name">${p.nome}</span>
                  <span class="product-code">${p.codigo}</span>
                </span>
                <span class="product-price">${formatMoney(p.preco)}</span>
              </span>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>

    <div class="product-list-item" style="font-size:11px;font-weight:700;text-transform:uppercase;color:var(--gray-400);padding-bottom:8px">
      <span>Produto</span><span>Categoria</span><span>Preço</span><span>Ações</span>
    </div>
    ${state.products.map(p => `
      <div class="product-list-item">
        <div>
          <div style="font-weight:600;font-size:13px">${p.nome}</div>
          <div style="font-size:11px;color:var(--gray-400)">${p.codigo} · ${p.subcategoria}</div>
        </div>
        <div style="font-size:12px;color:var(--gray-500)">${p.categoria}</div>
        <div style="font-family:var(--mono);font-weight:700;color:var(--success)">${formatMoney(p.preco)}</div>
        <div style="display:flex;gap:6px">
          <button class="btn btn-sm btn-secondary" onclick="editProduct('${p.id}')">✏️</button>
          <button class="btn btn-sm btn-danger" onclick="deleteProduct('${p.id}')">🗑️</button>
        </div>
      </div>
    `).join('')}
  `;
}

function openAddProduct() {
  state.editingProductId = null;
  document.getElementById('add-product-title').textContent = '➕ Novo Produto';
  ['prod-codigo','prod-nome','prod-categoria','prod-subcategoria'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('prod-preco').value = '';
  populateCategoryDatalist();
  openModal('modal-add-product');
}

function editProduct(id) {
  const p = state.products.find(p => p.id === id);
  if (!p) return;
  state.editingProductId = id;
  document.getElementById('add-product-title').textContent = '✏️ Editar Produto';
  document.getElementById('prod-codigo').value = p.codigo;
  document.getElementById('prod-nome').value = p.nome;
  document.getElementById('prod-categoria').value = p.categoria;
  document.getElementById('prod-subcategoria').value = p.subcategoria;
  document.getElementById('prod-preco').value = p.preco;
  populateCategoryDatalist();
  openModal('modal-add-product');
}

function deleteProduct(id) {
  if (!confirm('Excluir este produto?')) return;
  state.products = state.products.filter(p => p.id !== id);
  save('products', state.products);
  renderProductsList();
  buildCategories();
  populateCategoryDatalist();
  showToast('Produto excluído', 'success');
}

function salvarProduto() {
  const nome = document.getElementById('prod-nome').value.trim();
  if (!nome) { showToast('Informe o nome do produto', 'error'); return; }
  
  const preco = parseFloat(document.getElementById('prod-preco').value);
  if (isNaN(preco) || preco < 0) { showToast('Informe um preço válido', 'error'); return; }
  
  const prod = {
    id: state.editingProductId || 'p'+Date.now(),
    codigo: document.getElementById('prod-codigo').value || 'P'+Date.now(),
    nome,
    categoria: document.getElementById('prod-categoria').value || 'OUTROS',
    subcategoria: document.getElementById('prod-subcategoria').value || 'Geral',
    preco
  };
  
  if (state.editingProductId) {
    state.products = state.products.map(p => p.id === state.editingProductId ? prod : p);
  } else {
    state.products.push(prod);
  }
  
  save('products', state.products);
  renderProductsList();
  buildCategories();
  populateCategoryDatalist();
  closeModal('modal-add-product');
  showToast('Produto salvo!', 'success');
}

function alterarSenha() {
  const atual = document.getElementById('senha-atual').value;
  const nova = document.getElementById('senha-nova').value;
  const conf = document.getElementById('senha-conf').value;
  
  const users = load('users', [{username:'admin', password:'admin123', name:'Administrador'}]);
  const user = users.find(u => u.username === state.currentUser?.username);
  
  if (!user || user.password !== atual) { showToast('Senha atual incorreta', 'error'); return; }
  if (nova.length < 4) { showToast('Nova senha muito curta (mínimo 4 caracteres)', 'error'); return; }
  if (nova !== conf) { showToast('Senhas não coincidem', 'error'); return; }
  
  user.password = nova;
  save('users', users);
  document.getElementById('senha-atual').value = '';
  document.getElementById('senha-nova').value = '';
  document.getElementById('senha-conf').value = '';
  showToast('Senha alterada com sucesso!', 'success');
}

// ===== BACKUP JSON (mantido) =====
function exportarDados() {
  const data = {
    exportado: new Date().toISOString(),
    empresa: state.empresa,
    produtos: state.products,
    vendas: load('vendas', []),
    historicoCaixas: load('historicoCaixas', [])
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `pdv-backup-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  showToast('Dados exportados!', 'success');
}

function importarDados(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      if (data.empresa) { state.empresa = data.empresa; save('empresa', data.empresa); }
      if (data.produtos) { state.products = data.produtos; save('products', data.produtos); }
      if (data.vendas) save('vendas', data.vendas);
      showToast('Dados importados com sucesso!', 'success');
      loadConfiguracoes();
      populateCategoryDatalist();
    } catch { showToast('Erro ao importar dados', 'error'); }
  };
  reader.readAsText(file);
}

// ===== EXCEL / CSV (nova funcionalidade) =====
function exportarVendasExcel() {
  const vendas = load('vendas', []);
  let csv = 'Número,Data,Hora,Cliente,Total,Pagamento,Itens\n';
  vendas.forEach(v => {
    const itensStr = v.itens.map(i => `${i.nome} (${i.qty})`).join(' | ');
    csv += `${v.num},${v.data.split('T')[0]},${v.data.split('T')[1].slice(0,5)},${v.cliente?.nome || ''},${v.total},${v.pagamentoLabel},"${itensStr}"\n`;
  });
  downloadCSV(csv, `vendas_${new Date().toISOString().slice(0,10)}.csv`);
}

function exportarProdutosExcel() {
  let csv = 'Código,Nome,Categoria,Subcategoria,Preço\n';
  state.products.forEach(p => {
    csv += `${p.codigo},${p.nome},${p.categoria},${p.subcategoria},${p.preco}\n`;
  });
  downloadCSV(csv, `produtos_${new Date().toISOString().slice(0,10)}.csv`);
}

function downloadCSV(csvContent, filename) {
  const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  showToast('Arquivo CSV gerado (abra no Excel)', 'success');
}

function importarProdutosCSV(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const text = String(ev.target.result || '').trim();
      const rows = text.split(/\r?\n/);
      if (rows.length < 2) throw new Error('CSV vazio');
      const header = rows.shift().split(',').map(v => v.trim().toLowerCase());
      let novos = 0;

      rows.forEach((row, idx) => {
        if (!row.trim()) return;
        const cols = row.split(',').map(c => c.trim().replace(/^"|"$/g, ''));
        const get = (names) => {
          const foundIndex = header.findIndex(h => names.includes(h));
          return foundIndex >= 0 ? cols[foundIndex] : '';
        };

        const codigo = get(['código', 'codigo']);
        const nome = get(['item', 'nome']) || `Produto ${idx+1}`;
        const categoria = get(['categoria']) || 'OUTROS';
        const subcategoria = get(['subcategoria']) || 'Geral';
        const precoTxt = get(['preço (r$)', 'preço', 'preco']);
        const preco = parseFloat(String(precoTxt).replace(',', '.')) || 0;

        if (!codigo || preco <= 0) return;
        const exists = state.products.some(p => String(p.codigo).trim().toLowerCase() === String(codigo).trim().toLowerCase());
        if (exists) return;

        state.products.push({
          id: 'p' + Date.now() + Math.random().toString(36).slice(2,7),
          codigo,
          nome,
          categoria,
          subcategoria,
          preco
        });
        novos++;
      });

      save('products', state.products);
      renderProductsList();
      buildCategories();
      populateCategoryDatalist();
      showToast(`${novos} produtos importados do CSV!`, 'success');
    } catch(err) {
      console.error(err);
      showToast('Erro ao importar CSV', 'error');
    }
  };
  reader.readAsText(file);
}

function limparTodosDados() {
  if (!confirm('⚠️ ATENÇÃO: Isso apagará TODOS os dados! Tem certeza?')) return;
  if (!confirm('Última confirmação: apagar tudo?')) return;
  ['pdv_products','pdv_empresa','pdv_vendas','pdv_caixaAtual','pdv_historicoCaixas','pdv_vendaNum','pdv_users','pdv_session'].forEach(k => localStorage.removeItem(k));
  showToast('Dados apagados', 'warning');
  setTimeout(() => location.reload(), 1000);
}

// ===== MODAL HELPERS =====
function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add('visible');
  modal.style.display = 'flex';
}
function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('visible');
  modal.style.display = 'none';
}

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});

// ===== TOAST =====
let toastTimer;
function showToast(msg, type = 'success') {
  const toast = document.getElementById('toast');
  const icons = { success:'✓', error:'✕', warning:'⚠️' };
  document.getElementById('toast-icon').textContent = icons[type] || '✓';
  document.getElementById('toast-msg').textContent = msg;
  toast.className = `toast ${type} show`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== UTILS =====
function getCartTotal() {
  return state.cart.reduce((sum, item) => {
    const subtotal = item.qty * item.preco;
    let desc = 0;
    if (item.tipoDesconto === 'percent') desc = subtotal * (item.desconto || 0) / 100;
    else desc = item.desconto || 0;
    return sum + Math.max(0, subtotal - desc);
  }, 0);
}

function formatMoney(val) {
  return 'R$ ' + (val || 0).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function formatDateTime(d) {
  if (!(d instanceof Date) || isNaN(d)) return '—';
  return d.toLocaleDateString('pt-BR') + ' ' + d.toLocaleTimeString('pt-BR', {hour:'2-digit',minute:'2-digit'});
}

// ===== START =====
init();

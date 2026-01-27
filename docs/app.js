// Questionnaire Definitions
const QUESTIONNAIRES = {
  'sus': {
    id: 'sus', abbr: 'SUS', name: 'System Usability Scale',
    citation: 'Brooke, J. (1996)',
    scaleMin: 1, scaleMax: 5, scoreMin: 0, scoreMax: 100,
    labels: ['Strongly Disagree', 'Strongly Agree'],
    questions: [
      { id: 1, text: 'I think that I would like to use this system frequently.', r: false },
      { id: 2, text: 'I found the system unnecessarily complex.', r: true },
      { id: 3, text: 'I thought the system was easy to use.', r: false },
      { id: 4, text: 'I think that I would need the support of a technical person to be able to use this system.', r: true },
      { id: 5, text: 'I found the various functions in this system were well integrated.', r: false },
      { id: 6, text: 'I thought there was too much inconsistency in this system.', r: true },
      { id: 7, text: 'I would imagine that most people would learn to use this system very quickly.', r: false },
      { id: 8, text: 'I found the system very cumbersome to use.', r: true },
      { id: 9, text: 'I felt very confident using the system.', r: false },
      { id: 10, text: 'I needed to learn a lot of things before I could get going with this system.', r: true }
    ]
  },
  'umux': {
    id: 'umux', abbr: 'UMUX', name: 'Usability Metric for User Experience',
    citation: 'Finstad, K. (2010)',
    scaleMin: 1, scaleMax: 7, scoreMin: 0, scoreMax: 100,
    labels: ['Strongly Disagree', 'Strongly Agree'],
    questions: [
      { id: 1, text: "This system's capabilities meet my requirements.", r: false },
      { id: 2, text: 'Using this system is a frustrating experience.', r: true },
      { id: 3, text: 'This system is easy to use.', r: false },
      { id: 4, text: 'I have to spend too much time correcting things with this system.', r: true }
    ]
  },
  'umux-lite': {
    id: 'umux-lite', abbr: 'UMUX-L', name: 'UMUX-Lite',
    citation: 'Lewis, J.R. et al. (2013)',
    scaleMin: 1, scaleMax: 7, scoreMin: 0, scoreMax: 100,
    labels: ['Strongly Disagree', 'Strongly Agree'],
    questions: [
      { id: 1, text: "This system's capabilities meet my requirements.", r: false },
      { id: 2, text: 'This system is easy to use.', r: false }
    ]
  },
  'csuq': {
    id: 'csuq', abbr: 'CSUQ', name: 'Computer System Usability Questionnaire',
    citation: 'Lewis, J.R. (1995)',
    scaleMin: 1, scaleMax: 7, scoreMin: 1, scoreMax: 7,
    labels: ['Strongly Disagree', 'Strongly Agree'],
    subscales: {
      sysuse: { name: 'System Usefulness', items: [1,2,3,4,5,6] },
      infoqual: { name: 'Information Quality', items: [7,8,9,10,11,12] },
      intqual: { name: 'Interface Quality', items: [13,14,15,16] }
    },
    questions: [
      { id: 1, text: 'Overall, I am satisfied with how easy it is to use this system.', r: false, sub: 'sysuse' },
      { id: 2, text: 'It was simple to use this system.', r: false, sub: 'sysuse' },
      { id: 3, text: 'I could effectively complete my work using this system.', r: false, sub: 'sysuse' },
      { id: 4, text: 'I was able to complete my work quickly using this system.', r: false, sub: 'sysuse' },
      { id: 5, text: 'I was able to efficiently complete my work using this system.', r: false, sub: 'sysuse' },
      { id: 6, text: 'I felt comfortable using this system.', r: false, sub: 'sysuse' },
      { id: 7, text: 'It was easy to learn to use this system.', r: false, sub: 'infoqual' },
      { id: 8, text: 'I believe I could become productive quickly using this system.', r: false, sub: 'infoqual' },
      { id: 9, text: 'The system gave error messages that clearly told me how to fix problems.', r: false, sub: 'infoqual' },
      { id: 10, text: 'Whenever I made a mistake using the system, I could recover easily and quickly.', r: false, sub: 'infoqual' },
      { id: 11, text: 'The information provided with this system was clear.', r: false, sub: 'infoqual' },
      { id: 12, text: 'It was easy to find the information I needed.', r: false, sub: 'infoqual' },
      { id: 13, text: 'The information was effective in helping me complete my work.', r: false, sub: 'intqual' },
      { id: 14, text: 'The organization of information on the system screens was clear.', r: false, sub: 'intqual' },
      { id: 15, text: 'The interface of this system was pleasant.', r: false, sub: 'intqual' },
      { id: 16, text: 'I liked using the interface of this system.', r: false, sub: 'intqual' }
    ]
  },
  'pssuq': {
    id: 'pssuq', abbr: 'PSSUQ', name: 'Post-Study System Usability Questionnaire',
    citation: 'Lewis, J.R. (2002)',
    scaleMin: 1, scaleMax: 7, scoreMin: 1, scoreMax: 7,
    // FIX: standard presentation is Disagree -> Agree (so higher is better)
    labels: ['Strongly Disagree', 'Strongly Agree'],
    subscales: {
      sysuse: { name: 'System Usefulness', items: [1,2,3,4,5,6] },
      infoqual: { name: 'Information Quality', items: [7,8,9,10,11,12] },
      intqual: { name: 'Interface Quality', items: [13,14,15,16] }
    },
    questions: [
      { id: 1, text: 'Overall, I am satisfied with how easy it is to use this system.', r: false, sub: 'sysuse' },
      { id: 2, text: 'It was simple to use this system.', r: false, sub: 'sysuse' },
      { id: 3, text: 'I was able to complete the tasks and scenarios quickly using this system.', r: false, sub: 'sysuse' },
      { id: 4, text: 'I felt comfortable using this system.', r: false, sub: 'sysuse' },
      { id: 5, text: 'It was easy to learn to use this system.', r: false, sub: 'sysuse' },
      { id: 6, text: 'I believe I could become productive quickly using this system.', r: false, sub: 'sysuse' },
      { id: 7, text: 'The system gave error messages that clearly told me how to fix problems.', r: false, sub: 'infoqual' },
      { id: 8, text: 'Whenever I made a mistake using the system, I could recover easily and quickly.', r: false, sub: 'infoqual' },
      { id: 9, text: 'The information provided with this system was clear.', r: false, sub: 'infoqual' },
      { id: 10, text: 'It was easy to find the information I needed.', r: false, sub: 'infoqual' },
      { id: 11, text: 'The information provided for the system was easy to understand.', r: false, sub: 'infoqual' },
      { id: 12, text: 'The information was effective in helping me complete the tasks.', r: false, sub: 'infoqual' },
      { id: 13, text: 'The organization of information on the system screens was clear.', r: false, sub: 'intqual' },
      { id: 14, text: 'The interface of this system was pleasant.', r: false, sub: 'intqual' },
      { id: 15, text: 'I liked using the interface of this system.', r: false, sub: 'intqual' },
      { id: 16, text: 'Overall, I am satisfied with this system.', r: false, sub: 'intqual' }
    ]
  },
  'seq': {
    id: 'seq', abbr: 'SEQ', name: 'Single Ease Question',
    citation: 'Sauro, J. & Dumas, J.S. (2009)',
    scaleMin: 1, scaleMax: 7, scoreMin: 1, scoreMax: 7,
    labels: ['Very Difficult', 'Very Easy'],
    questions: [
      { id: 1, text: 'Overall, how difficult or easy was the task to complete?', r: false }
    ]
  },
  'asq': {
    id: 'asq', abbr: 'ASQ', name: 'After-Scenario Questionnaire',
    citation: 'Lewis, J.R. (1991)',
    scaleMin: 1, scaleMax: 7, scoreMin: 1, scoreMax: 7,
    labels: ['Strongly Disagree', 'Strongly Agree'],
    questions: [
      { id: 1, text: 'Overall, I am satisfied with the ease of completing this task.', r: false },
      { id: 2, text: 'Overall, I am satisfied with the amount of time it took to complete this task.', r: false },
      { id: 3, text: 'Overall, I am satisfied with the support information when completing this task.', r: false }
    ]
  },
  'use': {
    id: 'use', abbr: 'USE', name: 'USE Questionnaire',
    citation: 'Lund, A.M. (2001)',
    scaleMin: 1, scaleMax: 7, scoreMin: 1, scoreMax: 7,
    labels: ['Strongly Disagree', 'Strongly Agree'],
    subscales: {
      usefulness: { name: 'Usefulness', items: [1,2,3,4,5,6,7,8] },
      easeofuse: { name: 'Ease of Use', items: [9,10,11,12,13,14,15,16,17,18,19] },
      easeoflearning: { name: 'Ease of Learning', items: [20,21,22,23] },
      satisfaction: { name: 'Satisfaction', items: [24,25,26,27,28,29,30] }
    },
    questions: [
      { id: 1, text: 'It helps me be more effective.', r: false, sub: 'usefulness' },
      { id: 2, text: 'It helps me be more productive.', r: false, sub: 'usefulness' },
      { id: 3, text: 'It is useful.', r: false, sub: 'usefulness' },
      { id: 4, text: 'It gives me more control over the activities in my life.', r: false, sub: 'usefulness' },
      { id: 5, text: 'It makes the things I want to accomplish easier to get done.', r: false, sub: 'usefulness' },
      { id: 6, text: 'It saves me time when I use it.', r: false, sub: 'usefulness' },
      { id: 7, text: 'It meets my needs.', r: false, sub: 'usefulness' },
      { id: 8, text: 'It does everything I would expect it to do.', r: false, sub: 'usefulness' },
      { id: 9, text: 'It is easy to use.', r: false, sub: 'easeofuse' },
      { id: 10, text: 'It is simple to use.', r: false, sub: 'easeofuse' },
      { id: 11, text: 'It is user friendly.', r: false, sub: 'easeofuse' },
      { id: 12, text: 'It requires the fewest steps possible to accomplish what I want to do.', r: false, sub: 'easeofuse' },
      { id: 13, text: 'It is flexible.', r: false, sub: 'easeofuse' },
      { id: 14, text: 'Using it is effortless.', r: false, sub: 'easeofuse' },
      { id: 15, text: 'I can use it without written instructions.', r: false, sub: 'easeofuse' },
      { id: 16, text: "I don't notice any inconsistencies as I use it.", r: false, sub: 'easeofuse' },
      { id: 17, text: 'Both occasional and regular users would like it.', r: false, sub: 'easeofuse' },
      { id: 18, text: 'I can recover from mistakes quickly and easily.', r: false, sub: 'easeofuse' },
      { id: 19, text: 'I can use it successfully every time.', r: false, sub: 'easeofuse' },
      { id: 20, text: 'I learned to use it quickly.', r: false, sub: 'easeoflearning' },
      { id: 21, text: 'I easily remember how to use it.', r: false, sub: 'easeoflearning' },
      { id: 22, text: 'It is easy to learn to use it.', r: false, sub: 'easeoflearning' },
      { id: 23, text: 'I quickly became skillful with it.', r: false, sub: 'easeoflearning' },
      { id: 24, text: 'I am satisfied with it.', r: false, sub: 'satisfaction' },
      { id: 25, text: 'I would recommend it to a friend.', r: false, sub: 'satisfaction' },
      { id: 26, text: 'It is fun to use.', r: false, sub: 'satisfaction' },
      { id: 27, text: 'It works the way I want it to work.', r: false, sub: 'satisfaction' },
      { id: 28, text: 'It is wonderful.', r: false, sub: 'satisfaction' },
      { id: 29, text: 'I feel I need to have it.', r: false, sub: 'satisfaction' },
      { id: 30, text: 'It is pleasant to use.', r: false, sub: 'satisfaction' }
    ]
  },
  'tam': {
    id: 'tam', abbr: 'TAM', name: 'Technology Acceptance Model',
    citation: 'Davis, F.D. (1989)',
    scaleMin: 1, scaleMax: 7, scoreMin: 1, scoreMax: 7,
    labels: ['Strongly Disagree', 'Strongly Agree'],
    subscales: {
      pu: { name: 'Perceived Usefulness', items: [1,2,3,4,5,6] },
      peou: { name: 'Perceived Ease of Use', items: [7,8,9,10,11,12] }
    },
    questions: [
      { id: 1, text: 'Using this system would enable me to accomplish tasks more quickly.', r: false, sub: 'pu' },
      { id: 2, text: 'Using this system would improve my job performance.', r: false, sub: 'pu' },
      { id: 3, text: 'Using this system would increase my productivity.', r: false, sub: 'pu' },
      { id: 4, text: 'Using this system would enhance my effectiveness.', r: false, sub: 'pu' },
      { id: 5, text: 'Using this system would make it easier to do my job.', r: false, sub: 'pu' },
      { id: 6, text: 'I would find this system useful.', r: false, sub: 'pu' },
      { id: 7, text: 'Learning to operate this system would be easy for me.', r: false, sub: 'peou' },
      { id: 8, text: 'I would find it easy to get this system to do what I want.', r: false, sub: 'peou' },
      { id: 9, text: 'My interaction with this system would be clear and understandable.', r: false, sub: 'peou' },
      { id: 10, text: 'I would find this system to be flexible to interact with.', r: false, sub: 'peou' },
      { id: 11, text: 'It would be easy for me to become skillful at using this system.', r: false, sub: 'peou' },
      { id: 12, text: 'I would find this system easy to use.', r: false, sub: 'peou' }
    ]
  },
  'csat': {
    id: 'csat', abbr: 'CSAT', name: 'Customer Satisfaction Score',
    citation: 'Industry Standard',
    scaleMin: 1, scaleMax: 5, scoreMin: 0, scoreMax: 100,
    labels: ['Very Dissatisfied', 'Very Satisfied'],
    questions: [
      { id: 1, text: 'Overall, how satisfied are you with this product/service?', r: false },
      { id: 2, text: 'How well did this product/service meet your expectations?', r: false },
      { id: 3, text: 'How would you rate the quality of this product/service?', r: false },
      { id: 4, text: 'How satisfied are you with the value for money?', r: false },
      { id: 5, text: 'How likely are you to continue using this product/service?', r: false }
    ]
  },
  'learnability': {
    id: 'learnability', abbr: 'SRL', name: 'Self-Reported Learnability',
    citation: 'Generic Assessment',
    scaleMin: 1, scaleMax: 7, scoreMin: 1, scoreMax: 7,
    labels: ['Strongly Disagree', 'Strongly Agree'],
    questions: [
      { id: 1, text: 'I found it easy to learn how to use this system.', r: false },
      { id: 2, text: 'I was able to explore features without fear of making mistakes.', r: false },
      { id: 3, text: "The system's interface helped me understand its functionality.", r: false },
      { id: 4, text: 'I felt confident in my ability to learn the system quickly.', r: false },
      { id: 5, text: 'The learning curve for this system was manageable.', r: false },
      { id: 6, text: 'I could accomplish tasks after minimal instruction or exploration.', r: false }
    ]
  },
  'basic-ux': {
    id: 'basic-ux', abbr: 'BUX', name: 'Basic UX Satisfaction Survey',
    citation: 'Generic Assessment',
    scaleMin: 1, scaleMax: 5, scoreMin: 1, scoreMax: 5,
    labels: ['Strongly Disagree', 'Strongly Agree'],
    questions: [
      { id: 1, text: 'The system was easy to navigate.', r: false },
      { id: 2, text: 'I found the visual design appealing.', r: false },
      { id: 3, text: 'The system responded quickly to my inputs.', r: false },
      { id: 4, text: 'I could find what I was looking for easily.', r: false },
      { id: 5, text: 'The system behaved as I expected.', r: false },
      { id: 6, text: 'I felt in control when using the system.', r: false },
      { id: 7, text: 'I would use this system again.', r: false },
      { id: 8, text: 'Overall, I am satisfied with this system.', r: false }
    ]
  }
};

// Scoring Algorithms
const SCORING = {
  sus(resp, q) {
    let sum = 0;
    q.questions.forEach(item => {
      const val = resp[item.id];
      if (val !== undefined) sum += item.r ? (5 - val) : (val - 1);
    });
    const score = sum * 2.5;
    return {
      overall: Math.round(score * 10) / 10,
      interpretation: score >= 85 ? 'Excellent usability. Users find the system exceptionally easy to use.' :
                     score >= 72 ? 'Good usability. The system is above average.' :
                     score >= 52 ? 'Acceptable usability with room for improvement.' : 'Poor usability. Significant redesign needed.',
      grade: score >= 84 ? 'A' : score >= 72 ? 'B' : score >= 52 ? 'C' : score >= 38 ? 'D' : 'F'
    };
  },

  umux(resp, q) {
    let sum = 0;
    q.questions.forEach(item => {
      const val = resp[item.id];
      if (val !== undefined) sum += item.r ? (7 - val) : (val - 1);
    });
    const score = (sum / 24) * 100;
    return {
      overall: Math.round(score * 10) / 10,
      interpretation: score >= 80 ? 'Excellent usability.' : score >= 68 ? 'Good usability.' : score >= 50 ? 'Acceptable.' : 'Poor usability.',
      grade: score >= 80 ? 'A' : score >= 68 ? 'B' : score >= 50 ? 'C' : 'D'
    };
  },

  'umux-lite'(resp, q) {
    let sum = 0;
    q.questions.forEach(item => {
      const val = resp[item.id];
      if (val !== undefined) sum += val; // raw 1..7
    });
    const score = ((sum - 2) / 12) * 100;
    return {
      overall: Math.round(score * 10) / 10,
      interpretation: score >= 80 ? 'Excellent usability.' : score >= 68 ? 'Good usability.' : score >= 50 ? 'Acceptable.' : 'Poor usability.',
      grade: score >= 80 ? 'A' : score >= 68 ? 'B' : score >= 50 ? 'C' : 'D'
    };
  },

  csat(resp, q) {
    let sum = 0, count = 0;
    q.questions.forEach(item => {
      const val = resp[item.id];
      if (val !== undefined) { sum += val; count++; }
    });
    const avg = sum / count;
    const score = ((avg - 1) / 4) * 100;
    return {
      overall: Math.round(score * 10) / 10,
      averageScore: Math.round(avg * 100) / 100,
      interpretation: score >= 80 ? 'Excellent satisfaction.' : score >= 60 ? 'Good satisfaction.' : score >= 40 ? 'Moderate satisfaction.' : 'Poor satisfaction.',
      grade: score >= 80 ? 'A' : score >= 60 ? 'B' : score >= 40 ? 'C' : 'D'
    };
  },

  average(resp, q) {
    let sum = 0, count = 0;
    const subscaleData = {};
    q.questions.forEach(item => {
      const val = resp[item.id];
      if (val !== undefined) {
        sum += val; count++;
        if (item.sub && q.subscales) {
          if (!subscaleData[item.sub]) subscaleData[item.sub] = { sum: 0, count: 0 };
          subscaleData[item.sub].sum += val;
          subscaleData[item.sub].count++;
        }
      }
    });

    const avg = sum / count; // raw average on the questionnaire scale
    const overall = Math.round(avg * 100) / 100;

    // FIX: scale-aware interpretation/grade using normalized % of the scale range
    const pct = ((avg - q.scaleMin) / (q.scaleMax - q.scaleMin)) * 100;

    const subscales = {};
    if (q.subscales) {
      Object.keys(q.subscales).forEach(key => {
        const d = subscaleData[key];
        subscales[key] = {
          name: q.subscales[key].name,
          score: d ? Math.round((d.sum / d.count) * 100) / 100 : 0,
          max: q.scaleMax
        };
      });
    }

    return {
      overall,
      subscales,
      interpretation: pct >= 80 ? 'Excellent.' : pct >= 65 ? 'Good.' : pct >= 50 ? 'Moderate.' : 'Needs improvement.',
      grade: pct >= 80 ? 'A' : pct >= 65 ? 'B' : pct >= 50 ? 'C' : pct >= 35 ? 'D' : 'F'
    };
  },

  calculate(id, resp, q) {
    return this[id] ? this[id](resp, q) : this.average(resp, q);
  }
};

// State
let currentQ = null, responses = {}, results = null;

// Helpers
const $ = id => document.getElementById(id);
const scrollTop = () => window.scrollTo({ top: 0, behavior: 'instant' });

// Sections
function showSection(section, { scroll = true } = {}) {
  ['home', 'questionnaire', 'results'].forEach(s => {
    $(`${s}-section`).classList.toggle('hidden', s !== section);
  });
  if (scroll) scrollTop();
}

const showHome = (opts) => showSection('home', opts);
const showQuestionnaire = (opts) => showSection('questionnaire', opts);
const showResults = (opts) => showSection('results', opts);
const backToQuestionnaire = () => showQuestionnaire();

// Questionnaire load
function loadQuestionnaire(id) {
  currentQ = QUESTIONNAIRES[id];
  responses = {};
  results = null;

  $('q-abbr').textContent = currentQ.abbr;
  $('q-title').textContent = currentQ.name;
  $('q-citation').textContent = currentQ.citation;
  $('system-name').value = '';

  renderQuestions();
  showQuestionnaire();
}

// --------------------
// Query-string routing
// --------------------
// Supports:
//   /                -> home
//   /?q=sus          -> questionnaire for sus
//   /?q=umux-lite    -> questionnaire for umux-lite
//
// Also supports a loose format if you really want: /?sus
// (i.e. param key with no value)
function getRouteId() {
  // 1) Prefer clean path: /sus/, /asq/, etc.
  // normalize: "/asq/" -> "asq"
  const path = location.pathname.replace(/^\/+|\/+$/g, ''); // trim leading/trailing slashes
  if (path && QUESTIONNAIRES[path]) return path;

  // 2) fallback to explicit override if set by subpage index.html
  if (window.__ROUTE_ID__ && QUESTIONNAIRES[window.__ROUTE_ID__]) return window.__ROUTE_ID__;

  // 3) fallback to query string: ?q=asq
  const params = new URLSearchParams(location.search);
  const q = (params.get('q') || '').trim().toLowerCase();
  if (q && QUESTIONNAIRES[q]) return q;

  return '';
}

function setRoute(id = '') {
  const url = new URL(location.href);

  // clear query
  url.search = '';

  if (id) {
    url.pathname = `/${id}/`;   // <— clean route
  } else {
    url.pathname = `/`;
  }

  history.pushState({}, '', url);
  applyRoute();
}

function applyRoute() {
  const id = getRouteId();

  if (id && QUESTIONNAIRES[id]) {
    loadQuestionnaire(id);
    return;
  }

  // Home view (don’t force scroll if user used an anchor link)
  showHome();
}

// Navigation actions helpers
function go(id = '') {
  setRoute(id);
}
function goHome() {
  setRoute('');
}

// About should always work, regardless of current view
function goAbout() {
  // Ensure home is visible, then scroll to #about
  setRoute('');           // clears ?q=
  showHome({ scroll: false });

  // let layout update before scrolling
  requestAnimationFrame(() => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
}

// Back/forward support
addEventListener('popstate', applyRoute);

// Initial load
addEventListener('DOMContentLoaded', () => {
  applyRoute();

  // Form submit (kept as-is)
  const form = $('questionnaire-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!currentQ) return alert('No questionnaire loaded.');
      if (Object.keys(responses).length < currentQ.questions.length) {
        alert(`Please answer all ${currentQ.questions.length} questions.`);
        return;
      }
      results = SCORING.calculate(currentQ.id, responses, currentQ);
      displayResults();
    });
  }
});

// Render Questions
function renderQuestions() {
  const container = $('questions-container');
  container.innerHTML = '';
  currentQ.questions.forEach(q => {
    const div = document.createElement('div');
    div.id = 'question-' + q.id;
    div.className = 'question-card';
    div.innerHTML = `
      <div class="q-text">
        <span class="q-num">Q${q.id}</span>
        <p>${q.text}${q.r ? ' <span class="rev">(reverse-scored)</span>' : ''}</p>
      </div>
      ${renderLikert(q)}
    `;
    container.appendChild(div);
  });
}

function renderLikert(q) {
  const { scaleMin, scaleMax, labels } = currentQ;
  let opts = '';
  for (let i = scaleMin; i <= scaleMax; i++) {
    opts += `<div class="likert-opt">
      <input type="radio" name="q${q.id}" id="q${q.id}_${i}" value="${i}" onchange="handleResponse(${q.id}, ${i})">
      <label for="q${q.id}_${i}">${i}</label>
    </div>`;
  }
  return `
    <div class="scale-labels"><span>${labels[0]}</span><span>${labels[1]}</span></div>
    <div class="likert" style="grid-template-columns: repeat(${scaleMax - scaleMin + 1}, 1fr);">${opts}</div>
  `;
}

function handleResponse(qId, val) {
  responses[qId] = val;
  $('question-' + qId).classList.add('answered');
}

function resetForm() {
  responses = {};
  document.querySelectorAll('#questionnaire-form input[type="radio"]').forEach(r => r.checked = false);
  document.querySelectorAll('[id^="question-"]').forEach(q => q.classList.remove('answered'));
  $('system-name').value = '';
}

function displayResults() {
  if (!results || !currentQ) return;

  $('main-score').textContent = results.overall;
  $('score-max').textContent = currentQ.scoreMax === 100 ? '/100' : '/' + currentQ.scoreMax;
  $('score-label').textContent = 'Overall Score';
  $('interpretation-text').textContent = results.interpretation;
  $('grade-badge').textContent = 'Grade: ' + results.grade;

  // Animate score circle
  const progress = $('score-progress');
  const circumference = 339.292;
  let pct = currentQ.scoreMax === 100 ? results.overall / 100 :
    (results.overall - currentQ.scoreMin) / (currentQ.scoreMax - currentQ.scoreMin);
  setTimeout(() => { progress.style.strokeDashoffset = circumference - (pct * circumference); }, 100);

  // Subscales
  const subContainer = $('subscales-container');
  subContainer.innerHTML = '';
  if (results.subscales && Object.keys(results.subscales).length) {
    Object.entries(results.subscales).forEach(([_, s]) => {
      subContainer.innerHTML += `
        <div class="subscale-card">
          <p>${s.name}</p>
          <p class="score">${s.score}<span>/${s.max}</span></p>
          <div class="subscale-bar"><div class="subscale-fill" style="width:${(s.score / s.max) * 100}%"></div></div>
        </div>
      `;
    });
  }

  // Table (SUS adjusted is contribution 0..4, but kept your label)
  const tbody = $('responses-tbody');
  tbody.innerHTML = currentQ.questions.map(q => {
    const resp = responses[q.id];
    const adj = currentQ.id === 'sus' ? (q.r ? 5 - resp : resp - 1) : '-';
    return `<tr><td>Q${q.id}</td><td>${q.text}${q.r ? ' <em>(R)</em>' : ''}</td><td>${resp}</td><td>${adj}</td></tr>`;
  }).join('');

  showResults();
}

// Export Functions
const stamp = () => new Date().toISOString().slice(0, 10);
const sysName = () => $('system-name').value || 'Unnamed System';
const baseName = () => `${currentQ.abbr}_Results_${stamp()}`;

function saveBlob(blob, filename) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

async function downloadPDF() { saveBlob(await generatePDF(sysName()), baseName() + '.pdf'); }
function downloadCSV() { saveBlob(new Blob([generateCSV(sysName())], { type: 'text/csv' }), baseName() + '.csv'); }
function downloadTXT() { saveBlob(new Blob([generateTXT(sysName())], { type: 'text/plain' }), baseName() + '.txt'); }

async function sharePDF() {
  if (!navigator.share) return alert('Sharing not supported.');
  if (!currentQ || !results) return alert('Generate results first.');
  const blob = await generatePDF(sysName());
  const file = new File([blob], baseName() + '.pdf', { type: 'application/pdf' });
  if (navigator.canShare && !navigator.canShare({ files: [file] })) return downloadPDF();
  await navigator.share({ files: [file], title: baseName() + '.pdf' });
}

async function exportResults() {
  const pdf = $('export-pdf').checked;
  const csv = $('export-csv').checked;
  const txt = $('export-txt').checked;
  if (!pdf && !csv && !txt) return alert('Select at least one format for ZIP export.');
  const zip = new JSZip();
  const base = baseName();
  const system = sysName();
  if (pdf) zip.file(base + '.pdf', await generatePDF(system));
  if (csv) zip.file(base + '.csv', generateCSV(system));
  if (txt) zip.file(base + '.txt', generateTXT(system));
  saveBlob(await zip.generateAsync({ type: 'blob' }), base + '.zip');
}

function generatePDF(systemName) {
  return new Promise(resolve => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    let y = 20;
    doc.setFillColor(26, 54, 93);
    doc.rect(0, 0, 210, 40, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('UX Scale Labs', 20, 18);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Questionnaire Results', 20, 26);
    doc.text('Generated: ' + new Date().toLocaleDateString(), 20, 34);
    y = 55;
    doc.setTextColor(26, 54, 93);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(currentQ.abbr + ' - ' + currentQ.name, 20, y);
    y += 8;
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.setFont('helvetica', 'normal');
    doc.text('System: ' + systemName, 20, y);
    y += 15;
    doc.setFillColor(247, 250, 252);
    doc.roundedRect(20, y, 170, 35, 3, 3, 'F');
    doc.setTextColor(183, 121, 31);
    doc.setFontSize(32);
    doc.setFont('helvetica', 'bold');
    doc.text(String(results.overall), 35, y + 25);
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(10);
    doc.text(currentQ.scoreMax === 100 ? '/100' : '/' + currentQ.scoreMax, 70, y + 25);
    doc.text('Grade: ' + results.grade, 140, y + 25);
    y += 45;
    doc.setTextColor(26, 54, 93);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Interpretation', 20, y);
    y += 7;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    const lines = doc.splitTextToSize(results.interpretation, 170);
    doc.text(lines, 20, y);
    y += lines.length * 5 + 10;
    doc.setTextColor(26, 54, 93);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Responses', 20, y);
    y += 8;
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    currentQ.questions.forEach(q => {
      if (y > 270) { doc.addPage(); y = 20; }
      doc.setTextColor(183, 121, 31);
      doc.text('Q' + q.id, 20, y);
      doc.setTextColor(60, 60, 60);
      const txt = q.text.length > 80 ? q.text.substring(0, 77) + '...' : q.text;
      doc.text(txt, 30, y);
      doc.text(String(responses[q.id]), 180, y);
      y += 6;
    });
    resolve(doc.output('blob'));
  });
}

function generateCSV(systemName) {
  let lines = [
    'UX Scale Labs Results',
    'Questionnaire,' + currentQ.abbr + ' - ' + currentQ.name,
    'System,' + systemName,
    'Date,' + new Date().toISOString(),
    '',
    'SCORES',
    'Overall,' + results.overall,
    'Grade,' + results.grade,
    '',
    'RESPONSES',
    'Item,Question,Response,Reversed'
  ];
  currentQ.questions.forEach(q => {
    lines.push(q.id + ',"' + q.text.replace(/"/g, '""') + '",' + responses[q.id] + ',' + (q.r ? 'Yes' : 'No'));
  });
  return lines.join('\n');
}

function generateTXT(systemName) {
  const div = '='.repeat(60);
  let lines = [
    div,
    '  UX SCALE LABS - RESULTS REPORT',
    div,
    '',
    'Questionnaire: ' + currentQ.abbr + ' - ' + currentQ.name,
    'System: ' + systemName,
    'Date: ' + new Date().toLocaleString(),
    '',
    '-'.repeat(60),
    '  SCORE SUMMARY',
    '-'.repeat(60),
    '',
    '  Overall Score: ' + results.overall + (currentQ.scoreMax === 100 ? '/100' : '/' + currentQ.scoreMax),
    '  Grade: ' + results.grade,
    '',
    '  ' + results.interpretation,
    '',
    '-'.repeat(60),
    '  RESPONSES',
    '-'.repeat(60),
    ''
  ];
  currentQ.questions.forEach(q => {
    lines.push('  Q' + q.id + '. ' + q.text);
    lines.push('      Response: ' + responses[q.id] + (q.r ? ' (reversed)' : ''));
    lines.push('');
  });
  lines.push(div);
  return lines.join('\n');
}

// Print Questionnaire
function printQuestionnaire(id) {
  const q = QUESTIONNAIRES[id];
  if (!q) return;

  let html = `
    <div class="print-page">
      <div class="print-header">
        <h1>${q.abbr} – ${q.name}</h1>
        <p>${q.citation}</p>
      </div>
      <div class="print-meta">
        <div><label>Participant ID:</label><div class="line"></div></div>
        <div><label>System/Product:</label><div class="line"></div></div>
        <div><label>Date:</label><div class="line"></div></div>
      </div>
      <p style="font-size:0.85rem;color:#444;margin-bottom:1rem;">
        Please rate each statement on a scale from <strong>${q.scaleMin}</strong> (${q.labels[0]}) to <strong>${q.scaleMax}</strong> (${q.labels[1]}).
      </p>
  `;

  q.questions.forEach(item => {
    html += `<div class="print-q"><div class="print-q-text"><span>${item.id}.</span><p>${item.text}</p></div>`;
    const boxes = [];
    for (let i = q.scaleMin; i <= q.scaleMax; i++) boxes.push(`<div class="box">${i}</div>`);
    html += `<div class="print-scale"><span>${q.labels[0]}</span><div class="boxes">${boxes.join('')}</div><span>${q.labels[1]}</span></div>`;
    html += `</div>`;
  });

  html += `<div class="print-footer">Generated by UX Scale Labs • uxscalelabs.online</div></div>`;

  $('print-template').innerHTML = html;
  window.print();
  setTimeout(() => { $('print-template').innerHTML = ''; }, 1000);
}

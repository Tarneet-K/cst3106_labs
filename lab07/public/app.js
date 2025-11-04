// app.js

const DICE_COUNT = 5;
const diceRow = document.getElementById('diceRow');
const rollBtn = document.getElementById('rollBtn');

// build 5 dice (each die has 9 pip positions p1..p9)
function createDie() {
  const d = document.createElement('div');
  d.className = 'die';
  for (let i = 1; i <= 9; i++) {
    const pip = document.createElement('div');
    pip.className = `pip p${i}`;
    d.appendChild(pip);
  }
  d.dataset.value = '1';
  return d;
}

const diceEls = Array.from({ length: DICE_COUNT }, createDie);
diceEls.forEach(el => diceRow.appendChild(el));

function showValues(values) {
  values.forEach((v, i) => {
    diceEls[i].dataset.value = String(v);
  });
}

async function roll() {
  rollBtn.disabled = true;
  try {
    const res = await fetch('/roll-dices');
    if (!res.ok) throw new Error(`Server returned ${res.status}`);
    const data = await res.json();
    // expects { values: [n,n,n,n,n] }
    if (!data || !Array.isArray(data.values) || data.values.length !== DICE_COUNT) {
      throw new Error('Bad response shape');
    }
    showValues(data.values);
  } catch (err) {
    alert('Error: could not roll dice. Please try again.');
    console.error(err);
  } finally {
    rollBtn.disabled = false;
  }
}

rollBtn.addEventListener('click', roll);

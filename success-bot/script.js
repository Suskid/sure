// Charlotte Trading Dashboard Engine

const signalData = [
  {
    pair: "EURUSD",
    type: "TYPE 1 BUY",
    bias: "Bullish",
    entry: "1.08210",
    sl: "1.08090",
    tp: "1.08450",
  },

  {
    pair: "GBPUSD",
    type: "TYPE 2 SELL",
    bias: "Bearish",
    entry: "1.27450",
    sl: "1.27700",
    tp: "1.26900",
  },

  {
    pair: "XAUUSD",
    type: "TYPE 1 BUY",
    bias: "Bullish",
    entry: "3350.00",
    sl: "3338.00",
    tp: "3378.00",
  },

  {
    pair: "NZDUSD",
    type: "TYPE 2 BUY",
    bias: "Bullish",
    entry: "0.59420",
    sl: "0.59280",
    tp: "0.59750",
  },
];

// HTML Elements
const pair = document.getElementById("pair");
const signalType = document.getElementById("signalType");
const bias = document.getElementById("bias");
const entry = document.getElementById("entry");
const stopLoss = document.getElementById("stopLoss");
const takeProfit = document.getElementById("takeProfit");

// Change signal every 5 seconds
let currentSignal = 0;

function updateSignal() {
  const signal = signalData[currentSignal];

  pair.textContent = signal.pair;
  signalType.textContent = signal.type;
  bias.textContent = signal.bias;

  entry.textContent = signal.entry;
  stopLoss.textContent = signal.sl;
  takeProfit.textContent = signal.tp;

  // Change color
  if (signal.bias === "Bullish") {
    bias.className =
      "bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm";
  } else {
    bias.className =
      "bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm";
  }

  currentSignal++;

  if (currentSignal >= signalData.length) {
    currentSignal = 0;
  }
}

// First load
updateSignal();

// Auto change every 5 seconds
setInterval(updateSignal, 5000);
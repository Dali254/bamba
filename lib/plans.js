/* =====================================================================
   EDIT THIS FILE to change herd sizes and fees.
   These are the REAL prices customers pay — the server uses this list,
   so a customer cannot change the amount from their browser.

     cows -> herd size (also used as the plan id)
     fee  -> amount charged on M-Pesa, in the currency below
   ===================================================================== */
const FALLBACK_PLANS = [
  { cows: 3000, fee: 149 },
  { cows: 7500, fee: 189 },
  { cows: 10000, fee: 250 },
  { cows: 12500, fee: 300 },
  { cows: 16000, fee: 400 },
  { cows: 20000, fee: 700 },
  { cows: 30000, fee: 1000 },
  { cows: 40000, fee: 1500 },
  { cows: 50000, fee: 2500 },
  { cows: 100000, fee: 5000 }
];

const SETTINGS = {
  programName: "Fuliza limit",
  currency:    "KES",
  waitHours:   24,
};

function findPlan(cows) {
  return PLANS.find(function (p) { return p.cows === Number(cows); }) || null;
}

module.exports = { PLANS, SETTINGS, findPlan };

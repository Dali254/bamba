/* =====================================================================
   EDIT THIS FILE to change herd sizes and fees.
   These are the REAL prices customers pay — the server uses this list,
   so a customer cannot change the amount from their browser.

     cows -> herd size (also used as the plan id)
     fee  -> amount charged on M-Pesa, in the currency below
   ===================================================================== */

const PLANS = [
  { cows: 5000,  fee: 149  },
  { cows: 10000,  fee: 250  },
  { cows: 15000,  fee: 500  },
  { cows: 20000,  fee: 1000  },
  { cows: 25000,  fee: 1500  },
  { cows: 30000, fee: 2500 },
  { cows: 35000, fee: 3500  },
  { cows: 45000, fee: 5000  },
  { cows: 50000, fee: 7500 },
  { cows: 60000, fee: 9000 },
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

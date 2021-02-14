const axios = require('axios');
// you can request by uf,ivp,dolar,euro,ipc, imacec, utm, tpm, libra_cobre,tasa_desempleo, bitcoin 
function getIndicator(indicator) {
  return axios.get(`https://mindicador.cl/api/${indicator}`);
}

module.exports = { getIndicator };

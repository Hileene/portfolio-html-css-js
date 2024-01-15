// config.js
const config = {
  email: process.env.EMAIL || 'fallback@example.com',
}

// Permet d'exporter l'objet "config" et de le rendre disponible à d'autres scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config
}

const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
   async index(request, response) {
      let ongs = await connection('ongs').select('*');

      return response.json(ongs);
   },

   async create(request, response) {
      let { name, email, whatsapp, city, uf } = request.body;

      let id = crypto.randomBytes(4).toString('HEX');

      await connection('ongs').insert({
         id,
         name,
         email,
         whatsapp,
         city,
         uf
      });

      return response.json({ id });
   }

}
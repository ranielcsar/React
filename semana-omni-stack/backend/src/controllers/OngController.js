const connection = require('../database/connection');
const generateUniqueID = require('../utils/generateUniqueID');

module.exports = {
   async index(request, response) {
      let ongs = await connection('ongs').select('*');

      return response.json(ongs);
   },

   async create(request, response) {
      let { name, email, whatsapp, city, uf } = request.body;

      let id = generateUniqueID();

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
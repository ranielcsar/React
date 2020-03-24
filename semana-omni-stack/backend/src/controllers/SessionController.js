const connection = require('../database/connection');

module.exports = {
   async create(resquest, response) {
      let { id } = resquest.body;

      let ong = await connection('ongs')
         .where('id', id)
         .select('name')
         .first();

      if (!ong)
      {
         return response.status(400).json({ error: 'No ONG found with this ID' });
      }

      return response.json(ong);
   }
}
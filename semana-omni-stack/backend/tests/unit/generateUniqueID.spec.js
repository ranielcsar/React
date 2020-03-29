const generateUniqueID = require('../../src/utils/generateUniqueID');

describe('Generate Unique ID', () => {
   it('should generate an unique ID', () => {
      let id = generateUniqueID();

      expect(id).toHaveLength(8);
   });
});
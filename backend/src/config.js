module.exports = {
  privateKey: '2f639018-7c65-44df-a3a2-a070bd2a10a8',
  // connectionUrlDatabase: 'mongodb://127.0.0.1:27017/car-sales',
  connectionUrlDatabase: 'mongodb+srv://bruno:costa@carssalesdb.3gv45m9.mongodb.net/cars-sales?retryWrites=true&w=majority',
  apiPort: 8080,
  corsOptions: {
    origin: ['http://127.0.0.1:4200', 'http://localhost:4200'],
  },
};
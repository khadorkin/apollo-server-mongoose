const {
  MONGODB_URI,
  NODE_ENV,
  PORT,
} = process.env;

// export default {
//   env: NODE_ENV || 'development',
//   database: {
//     uri: MONGODB_URI || 'mongodb://localhost:27017/enso'
//   },
//   server: {
//     port: PORT || 5000
//   }
// };
export default {
  env: NODE_ENV || 'development',
  database: {
    uri: MONGODB_URI || 'mongodb://restaurants:fusetest@ds028679.mlab.com:28679/restaurants',
  },
  server: {
    port: PORT || 5000,
  },
};

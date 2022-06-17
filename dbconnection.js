const mssql = require('mssql');
class DBConnection {
  async getConnection() {
     try {
       return await mssql.connect({
              user: 'sa',
              password: '@aCLSkT5D@KQk6DQ',
              server: '91.236.239.56',
              database: 'getFastSQL',
              port: 1433,
              options: {
                encrypt: false,
                trustServerCertificate: true,
                }
       });
    }
    catch(error) {
      console.log(error);
    }
  }
}
module.exports = new DBConnection();
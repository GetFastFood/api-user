const mssqlcon = require('../../database/database');
class UserMSSql {
  async getAllUsers() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().query('SELECT * FROM db_users');
    return res.recordset;
  }
  async addUser(prod) {

    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("firstname", prod.firstname)
    .input("lastname", prod.lastname)
    .input("password", prod.password)
    .input("email", prod.email)
    .input("address", prod.address)
    .input("tel", prod.tel)
    .input("status", prod.status)
    .input("role", prod.role)
    .execute("dbo.addUser");
    return res;
 }
 async updateUser(prod) {
   const conn = await mssqlcon.getConnection();
   const res = await conn.request()
    .input("ID", prod.ID)
    .input("firstname", prod.firstname)
    .input("lastname", prod.lastname)
    .input("password", prod.password)
    .input("email", prod.email)
    .input("address", prod.address)
    .input("tel", prod.tel)
    .input("status", prod.status)
    .input("role", prod.role)
    .execute("updateUser");
   return res;
 }

 async deleteUser(id) {
   const conn = await mssqlcon.getConnection();
   const res = await conn.request()
   .input("ID", id)
   .execute("deleteUser");
   return res;
 }
}

module.exports = new UserMSSql();
const mssqlcon = require('../../dbconnection');
class UserMSSql {
  async getAllUsers() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().query('SELECT * FROM db_users');
    return res.recordset;
  }
//   async addProduct(prod) {
//     const conn = await mssqlcon.getConnection();
//     const res = await conn.request()
//     .input("product_name", prod.product_name)
//     .input("product_price", prod.product_price)
//     .input("product_description", prod.product_description)
//     .input("product_qty", prod.product_qty)
//     .execute("addProduct");
//     return res;
//  }
//  async updateProduct(prod) {
//    const conn = await mssqlcon.getConnection();
//    const res = await conn.request()
//    .input("product_id", prod.product_id)
//    .input("product_name", prod.product_name)
//    .input("product_price", prod.product_price)
//    .input("product_description", prod.product_description)
//    .input("product_qty", prod.product_qty)
//    .execute("updateProduct");
//    return res;
//  }
//  async deleteProduct(id) {
//    const conn = await mssqlcon.getConnection();
//    const res = await conn.request()
//    .input("product_id", id)
//    .execute("deleteProduct");
//    return res;
//  }
}
module.exports = new UserMSSql();
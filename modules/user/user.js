const userMssql = require('./user.mssql');
class user {
  async getAllUsers(req, res) {
      try {
       const output = await userMssql.getAllUsers();
       res.send(output);
     }
     catch (error) {
        console.log(error);
     }
  }
//  async addProduct(req, res) {
//   try {
//     const output = await productMssql.addProduct(req.body);
//     res.send(output);
//   }
//   catch (error) {
//    console.log(error);
//   }
// }
// async updateProduct(req, res) {
//   try {
//     const output = await productMssql.updateProduct(req.body);
//     res.send(output);
//  }
//  catch (error) {
//  console.log(error);
// }
// }
// async deleteProduct(req, res) {
//    const id = req.params.id;
//    try {
//     if (!id) {
//      console.log('id is not passed');
//     }
//     const output = await productMssql.deleteProduct(id);
//     res.send(output);
//    }
//    catch (error) {
//     console.log(error);
//    }
//  }
}
module.exports = new user();
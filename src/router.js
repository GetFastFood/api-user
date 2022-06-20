const userMssql = require('../modules/user/user.mssql');
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
 async addUser(req, res) {
  try {
    const output = await userMssql.addUser(req.body);
    res.send(output);
  }
  catch (error) {
   console.log(error);
  }
}
async updateUser(req, res) {
  try {
    const output = await userMssql.updateUser(req.body);
    res.send(output);
 }
 catch (error) {
 console.log(error);
}
}
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
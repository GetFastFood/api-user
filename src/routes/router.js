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

  async getUsers(req, res){
    try
    {
      const id = req.params.id;
      if (!id) {
        console.log('id is not passed');
      }
      const output = await userMssql.getUsers(id);
      res.send(output);
    }catch(error){
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

async updateUsers(req, res) {
  try {
    const id = req.params.id;
    if (!id) {
      console.log('id is not passed');
    }

    const output = await userMssql.updateUsers(id, req.body);
    res.send(output);
  }
  catch (error) {
    console.log(error);
  }
}

async deleteUser(req, res) {
   const id = req.params.id;
   try {
    if (!id) {
     console.log('id is not passed');
    }
    const output = await userMssql.deleteUser(id);
    res.send(output);
   }
   catch (error) {
    console.log(error);
   }
 }
}

module.exports = new user();
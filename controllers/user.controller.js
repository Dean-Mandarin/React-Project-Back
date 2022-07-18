const db = require('../db');

class UserController{
  async createUser(req, res){
    const {name, phoneNumber} = req.body;
    const newPerson = await db.query('INSERT INTO customers (name, phone_number) values ($1, $2) RETURNING *',
                                      [name, phoneNumber]);

    res.json(newPerson.rows[0]);
  }

}

module.exports = new UserController();
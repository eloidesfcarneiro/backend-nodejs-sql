const Users = require('../models/User')

const getUsers = async (req,res)=>{
    try {
        const users = await Users.findAll()
        res.json(users)
      } catch (error) {
        console.error(error)
        res.status(500).send('Server Error')
      }
}

const addUser = async (req,res)=>{
  try {
    const { name, email, cidade, password } = req.body
    const user = await Users.create({
      name,
      email,
      cidade,
      password
    });
    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
  }
}

Users.beforeCreate(async (user) => {    
  const passwordHash = await bcrypt.hash(user.password, 10)  
  user.password = passwordHash
})

module.exports={getUsers,addUser}
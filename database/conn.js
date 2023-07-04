const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodejs-infnet', 'root', 'password', {
    host: 'localhost',
    port: 3307,
    dialect: 'mariadb',
    define: {        
        freezeTableName: true
    }
   
  })

  
try{
    sequelize.authenticate()
    console.log('Connection Succefully')    
}
catch(err)
{
    console.log('Connection error')
}


module.exports = sequelize
const userController =require('../controller/useController')

module.exports=(app)=>{
app.route('/api/register').post(userController.register)
}
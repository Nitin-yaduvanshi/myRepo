const router = require('express').Router()
const controller = require('./controllers')
function init(){
    company()
    user()
}

function company(){
    router.get('/company',controller.getCompanyAction)
    router.post('/company',controller.createCompanyAction)
    router.delete('/company/:id',controller.deleteCompanyAction)
    router.put('/company/id',controller.updateCompanyAction)
}
function user(){
    router.get('/user',controller.getUserAction)
    router.post('/user',controller.createUserAction)
    router.put('/user/:id',controller.updateUserAction)
    router.delete('/user/:id',controller.deleteUserAction)
    router.post('/user/login',controller.userLoginAction)
}
init()
module.exports = router
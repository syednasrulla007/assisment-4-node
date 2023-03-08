var express = require('express');
var router = express.Router();
const logincontroller = require('../controller/login')
const registercontroller = require('../controller/register')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  console.log('login')
  res.send('LoginPage');
});

router.post('/login',logincontroller.userLoginController);

router.get('/register',(req,res)=>{
  console.log('RegisterPage')
  res.send('RegisterPage')
})

router.post('/register',registercontroller.useRegisterController)

module.exports = router;

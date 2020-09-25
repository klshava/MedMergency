const express = require('express')
const path = require('path')
const mainRoutes = express.Router()
//const config = require('./config.js')
//const AmazonCognitoIdentity = require('amazon-cognito-identity-js')

// const poolData = 
// {
//     userPoolId: config.cognito.userPoolId,
//     clientId: config.cognito.clientId
// }

// const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData)



// GET home page
mainRoutes.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'index.html'))
})

mainRoutes.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'index.html'))
})

// GET sign up page
mainRoutes.get('/register.html', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'register.html'))
})

mainRoutes.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'register.html'))
})

// mainRoutes.post('/register', (req, res) => {
// //res.send(req.body)

// const email = req.body.email;
// const password = req.body.password;
// const confirm_password = req.body.confirm_password;

// if(password !== confirm_password)
// {
//   return res.redirect('/register');
// }

// const emailData = {
//   Name: 'email',
//   Value: 'email'
// };

// const emailAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(emailData);

// userPool.signUp(email, password, [emailAttribute], null, (err, data) => {
//   if(err) {
//     return console.error(err);
//   }
//   res.send(data.user) 
  
// });

// });

// GET login page
mainRoutes.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'login.html'))
})

// GET T&C page
mainRoutes.get('/services.html', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'services.html'))
})

// GET main page
mainRoutes.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'about.html'))
})


// mainRoutes.post('/', (req, res, next) => {
//   passport.authenticate('local', {
//     successRedirect: 'signup',
//     failureRedirect: '/',
//     failureFlash: true
//   })(req, res, next)
// })


module.exports = mainRoutes



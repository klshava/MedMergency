const express = require('express')
const path = require('path')
const mainRoutes = express.Router()
const userRouter = require(path.join(__dirname, 'routes', 'api', 'usersRoutes'))
const profileRouter = require(path.join(__dirname, 'routes', 'api', 'profileRoutes'))

const passport = require('passport')
const db = require('./models/db')

const { ensureAuthenticated } = require('./auth/auth')
const { deleteSession } = require('./auth/auth')

// GET home page
mainRoutes.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

mainRoutes.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

// GET sign up page
mainRoutes.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'signup.html'))
})

// GET login page
mainRoutes.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'))
})

// GET T&C page
mainRoutes.get('/terms', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'terms.html'))
})

// GET T&C page
mainRoutes.get('/chatbot',ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'chatbox.html'))
})

// GET main page
mainRoutes.get('/main', ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'main.html'))
})

mainRoutes.get('/prescription', ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'docs', 'prescription.pdf'))
})

// GET about page
mainRoutes.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'))
})

// GET main page
mainRoutes.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'services.html'))
})

mainRoutes.get('/forum', ensureAuthenticated,(req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'forum.html'))
})
// GET Google Map  page
mainRoutes.get('/map', ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'new_map_.html'))
})

// GET Google Map cardio page
mainRoutes.get('/cardio_map', ensureAuthenticated,(req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cardio_map.html'))
})

mainRoutes.get('/location_map',ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'map.html'))
})

// GET Google Map dental  page
mainRoutes.get('/dental_map',ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'dental_map.html'))
})

// GET Google Map gastro page
mainRoutes.get('/gastro_map',ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'gastro_map.html'))
})

mainRoutes.get('/specialistfind', ensureAuthenticated,(req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'specialistfind.html'))
})

// GET Google Map medlab page
mainRoutes.get('/medlab_map', ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'medlab_map.html'))
})

// GET Google Map neuro  page
mainRoutes.get('/neuro_map',ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'neuro_map.html'))
})

// GET Google Map opthal page
mainRoutes.get('/opthal_map', ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'opthal_map.html'))
})

mainRoutes.get('/results', ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'result1.html'))
})

mainRoutes.post('/results', ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'result1.html'))
})


// GET Google Map ortho page
mainRoutes.get('/orthop_map', ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'orthop_map.html'))
})

// GET Google Map pediatry page
mainRoutes.get('/pediatry_map', ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'pediatry_map.html'))
})

// GET Google Map  page
mainRoutes.get('/surgery_map', ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'surgery_map.html'))
})

// GET Google Map  page
mainRoutes.get('/pharma_map', ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'pharmacies_map.html'))
})





mainRoutes.get('/questionnaire', ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'questionnaire', 'qindex.html'))
})

mainRoutes.get('/cardiogram', ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'cardiogram.html'))
})

mainRoutes.get('/editProfile', ensureAuthenticated,  (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'editProfile.html'))
})

mainRoutes.get('/userProfile', ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'userProfile.html'))
})

mainRoutes.get('/userProUpdated', ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'userProUpdated.html'))
})





// const db = require('./models/db')
db.sequelize.sync()

mainRoutes.post('/', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: 'signup',
    failureRedirect: '/',
    failureFlash: true
  })(req, res, next)
})

mainRoutes.get('/logout', deleteSession, function (req, res) {
  req.logout()
  res.redirect('/')
})
// GET logout page
mainRoutes.get('/logout', deleteSession, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'logout.html'))
})

// change user password before login in
mainRoutes.get('/changepassword', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'changePword.html'))
})

mainRoutes.use('/api/user', userRouter)
mainRoutes.use('api/user', profileRouter)
module.exports = mainRoutes

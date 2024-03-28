const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5001;

// Middleware Includes
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route Includes
const userRouter = require('./routes/user.router');
const characterRouter = require('./routes/character.router');
const racesRouter = require('./routes/races.router');
const classesRouter = require('./routes/classes.router');
const backgroundsRouter = require('./routes/backgrounds.router');

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

// Passport Session Configuration
app.use(sessionMiddleware);

// Start Passport Sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/user', userRouter);
app.use('/api/characters', characterRouter);
app.use('/api/races', racesRouter);
app.use('/api/classes', classesRouter);
app.use('/api/backgrounds', backgroundsRouter);

// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

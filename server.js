const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');


const chatcontacts = require('./routes/chatcontacts')
const guilds = require('./routes/guilds')
const guildTeams = require('./routes/guildTeams')
const icons = require('./routes/icons')
const loggedInUser = require('./routes/loggedInUser')
const messages = require('./routes/messages')
const myguilds = require('./routes/myguilds')
const results = require('./routes/results')
const users = require('./routes/users')


const PORT = process.env.PORT || 8080;

// connect to db
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});
mongoose.connection.on('error', (error) => {
    console.log(error);
});


const app = express();


// Data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//


app.use(express.static(path.join(__dirname, 'client/build')));


// HTTP request logger
app.use(morgan('tiny'));
app.use('/api/chatcontacts', chatcontacts)
app.use('/api/guilds', guilds)
app.use('/api/guildTeams', guildTeams )
app.use('/api/icons', icons)
app.use('/api/loggedInUser',loggedInUser )
app.use('/api/messages',messages )
app.use('/api/myguilds',myguilds)
app.use('/api/results', results)
app.use('/api/users', users)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
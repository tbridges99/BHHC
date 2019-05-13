mongoose = require('mongoose');
express = require('express');
path = require('path');
config = require('./config/database.js');
bodyparser = require('body-parser');
cors = require('cors');

//Express middleware to handle routing and RESTful apis
const app = express();

//Port for the backend to listen on
const port = 3000;

//Routes for pages displaying reasons
const reasons = require('./routes/reasons');

//establish a cconnection to database
mongoose.connect(config.database, {useNewUrlParser: true});
database = mongoose.connection;

//output error on database connection failure
database.on('error', console.error.bind(console, 'connection error:'));

//output message if connected to database
database.once('open', function() {
    console.log('connected!');
});

//static folder
app.use((express.static(path.join(__dirname, 'client'))));

//Enable body-parser middleware on all JSON requests to extract the body
app.use(bodyparser.json());

//Enable Cross origin resource sharing on all requests so the backend and frontend can communicate
app.use(cors());

//Use routes defined in the reasons.js file for requests pertaining to the reasons data
app.use('/reasons', reasons);

//Default route
app.get('/', function(req, res){
    res.send('Welcome to the backend');
});

app.listen(port, () => {
    console.log('Backend server started on port 3000');
})

if(!process.env.NODE_ENV || process.env.NODE_ENV === "development"){
    require('dotenv').config();
}
const errorHandler = require('./middleware/errorHandler')
const authentication = require('./middleware/authentication')
const express = require('express');
const routes = require('./routers/index')
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/user',routes.user);
app.use(authentication);
app.use('/api/question', routes.question);

app.use(errorHandler)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
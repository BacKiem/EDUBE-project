const express = require('express');
const morgan = require('morgan');
///========================handle bars
const handlebars = require('express-handlebars');
const path = require('path');
const { urlencoded } = require('express');
////====method-override / chuyen doi http put or path
const methodOverride = require('method-override')

////requie file
const db=require('./config/db/index')
const route=require("./routes")
const app = express();
const port = 3000;
///cai  thu muc tinh~
app.use( express.static(path.join(__dirname, 'public')));
///method override
app.use(methodOverride('_method'));
////body-parser
app.use(express.urlencoded());
app.use(express.json());
app.use(morgan('combined'));
// ==============================handlebars
app.engine('hbs', handlebars.engine({extname:'.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));
//==================Conect to db
db.connect();
//=====================================rOUTER init=
route(app)




app.listen(port, () => {
  console.log(`APP listening on port ${port}`)
})

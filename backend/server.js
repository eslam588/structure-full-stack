const express=require("express");
const path= require('path');
const cors = require('cors');
require("dotenv").config()
require("./src/database/connection")



const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, './static')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))



const port= process.env.PORT || 5000;
app.listen(port , console.log(`server started listen at port ${port} successfully ..................`));
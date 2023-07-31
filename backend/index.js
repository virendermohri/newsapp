const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { Result } = require('express-validator');
const app = express();
app.use(cors());
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Instagram');
    console.log('db connected')

}
app.use(express.json())
app.use("/api/auth", require('./routes/auth'))
app.listen(8900, () => {
    console.log("server started at 8000...")
})
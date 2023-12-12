const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const userRoutes = require('./routes/usersRoutes.js');
const middlewareLogRequest = require('./middleware/logs.js');
const upload = require('./middleware/multer.js');


const app = express();

const PORT = process.env.PORT || 4000;


app.use(bodyParser.json());

app.use(middlewareLogRequest);
app.use(express.json());

//ENDPOINT USERS
app.use('/users', userRoutes);
//ENDPOINT ASSETS
app.use('/assets', express.static('public/images'));
//ENDPOINT UPLOAD IMAGES
app.post('/upload', upload.single('photo') ,(req,res) => {
    res.json({
        message: 'Upload Berhasil'
    });
});

//ERROR HANDLEING
app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.listen(PORT, () => {
    console.log(`Server sedang berjalan di port ${PORT}`);
});
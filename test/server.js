require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();


const PORT = process.env.PORT;

app.get('/home', (req, res) => {


	return res.status(200).json({ status: true, message: "successfull" });

})

app.listen(PORT, () => {


	console.log(`server is running on ${PORT}`);
})
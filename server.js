const express = require('express'),
	path = require('path')

const app = express();

app.use(express.static('./dist/ahorcado-angular'));


app.get('/*',(req, res) =>{
	res.sendFile(path.join(__dirname, '/dist/ahorcado-angular/index.html'));
});

app.listen(process.env.PORT || 8080, () =>{
	console.log('Server started');
})
const express = require('express');
const bodyParser =  require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers',(req, res)=>{
    res.send([
        {
            id:'1',
            image:'https://placeimg.com/64/64/any',
            name: '안현진',
            birthday: '911206',
            gender: 'male',
            job: 'programmer'

	    },
  	    {
            id:'2',
            image:'https://placeimg.com/64/64/2',
            name: '이순신',
            birthday: '951206',
            gender: 'male',
            job: 'student'
  	    },
  	    {
            id:'3',
            image:'https://placeimg.com/64/64/3',
            name: '손님',
            birthday: '941206',
            gender: 'male',
            job: 'student'  
	    }        
    ]);
});

app.listen(port, ()=> console.log(`listening on port ${port}`));
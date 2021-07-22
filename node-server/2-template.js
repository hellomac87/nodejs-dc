const http = require('http');
// const http2 = require('http2'); // https
const fs = require('fs');
const ejs = require('ejs');


const name = 'Dobby';
const courses = [{name:'HTML'},{name:'CSS'},{name:'JS'},{name:'Node'},{name:'FE'}];
const server = http.createServer((req, res) => {
    
    const url = req.url;
    if(url === '/'){
        ejs.renderFile('./template/index.ejs', {name})
        .then(data => res.end(data));
    }else if(url === '/courses'){
        ejs.renderFile('./template/courses.ejs', {courses})
        .then(data => res.end(data));
    }else{
        ejs.renderFile('./template/not-found.ejs', {name})
        .then(data => res.end(data));
    }
    
    
});

server.listen(8080)
const express=require('express');
const path=require('path');
const app=express();

app.use(express.static(__dirname+'/dist/codengdetail'));

app.listen(process.env.PORT || 8080);

app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/codengdetail/index.html'))
})

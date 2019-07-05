//jshint esvertion:6

const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");

const app=express();
let items=[];
let workItems=[];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true})
);
app.use(express.static("public"));



app.get("/",function(req,res){

  let today=new Date();
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  res.render("list",{ListTitle:today.toLocaleDateString("en-US",options),items:items});

});

app.post("/",function(req,res){
  console.log(req.body);
    let item=req.body.newitem;
    if (req.body.list==="Work"){
      workItems.push(item);
      res.redirect("/work");
    }
    else {
    items.push(item);
    res.redirect("/");}
})

app.get("/work",function(req,res){
  res.render("list",{ListTitle:"Work List",items:workItems});
});

app.listen(3000,function(){
  console.log("Server running on port 3000.");
});

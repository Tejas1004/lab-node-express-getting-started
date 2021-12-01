//Express
const express=require("express");
const app=express();

app.get("/" , (req,res)=>{
    res.send("Hello from Express World")
})

.listen(3000,() => console.log("Server is running in 3000"))


//node server
const http=require("http");
http.createServer((req, res) => {
    if (req.url === "/") {
      res.write("hello from node");
      res.end();
    } else {
      res.write("404");
      res.end();
    }
  })
  .listen(3000, () => console.log("Server is running in 3000"));
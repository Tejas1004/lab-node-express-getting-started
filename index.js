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
      res.write("<h1> hello from node </h1>");
      res.end();
    } else {
      res.write("404");
      res.end();
    }
  })
  .listen(4000, () => console.log("Server is running in 4000"));
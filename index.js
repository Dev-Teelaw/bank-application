const express =require("express");
const app =express();


app.get("/",(req,res) =>{ 
    const result ="ok:true"
    res.send(result)
})


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
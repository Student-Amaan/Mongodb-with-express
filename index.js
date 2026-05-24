const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path")
const Chat = require("./models/chat.js")

app.set("views", path.join(__dirname , "views"))
app.set("view engine", "ejs")
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let chat1 = new Chat ({
    from: "danish",
    to: "Aman",
    msg: "Hello How i can get a gpa in exam",
    created_at: new Date(),
})

chat1.save().then((res)=> {
    console.log("chat is successfully delivered",res)
})

app.get("/", (req, res) => {
  res.send("app is working");
});

app.listen(8080, () => {
  console.log("server is running on port 8080...");
});

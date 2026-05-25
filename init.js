const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "danish",
    to: "Aman",
    msg: "Hello How i can get a gpa in exam",
    created_at: new Date(),
  },
  {
    from: "waqas",
    to: "Aman",
    msg: "Hello How i can get a gpa in exam",
    created_at: new Date(),
  },
  {
    from: "danish",
    to: "zawar",
    msg: "Hello How i can get a gpa in exam",
    created_at: new Date(),
  },
  {
    from: "danish",
    to: "awais",
    msg: "Hello How i can get a gpa in exam",
    created_at: new Date(),
  },
  {
    from: "zain",
    to: "Aman",
    msg: "Hello How i can get a gpa in exam",
    created_at: new Date(),
  },
  {
    from: "Shayan",
    to: "Aman",
    msg: "Hello How i can get a gpa in exam",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats)


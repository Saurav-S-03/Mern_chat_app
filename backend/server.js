const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dotenv.config();

connectDB();
const app = express();

app.use(express.json()); //To accept JSON data

app.get('/', (req,res) => {
    res.send("API is running");
});

// app.get('/api/chat', (req,res) => {
//     res.send(chats);
// });

// app.get("/api/chat/:id", (req,res) => {
//     // console.log(req.params.id);
//     const singleChat = chats.find((c) => c._id===req.params.id)
//     res.send(singleChat);
// })

app.use('/api/user',userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000

app.listen(5000,console.log(`Server started onn PORT ${PORT}`));
const express = require("express");
const app = express();
const connectMongoDB = require('./config');

connectMongoDB();
app.use(express.json({ extented: false, limit: '50mb'}));

app.use("/api/post", require("./route/post"));
app.use("/api/feed", require("./route/feed"));

app.use(express.static('client/build'));
app.get("*", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`)
});
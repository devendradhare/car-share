const path = require("path")

const express = require("express")
const app = express()
const PORT = 4000
console.log(__dirname);

app.use(express.static(path.join(__dirname, "../client/build")))

app.get("*", (req, res) => {
    res.send("hello world")
})

app.listen(PORT, () => {
  console.log("listening on port", PORT);
//   console.log("listening on port", PORT, "http://localhost:" + PORT)
});

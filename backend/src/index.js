const app = require("./app");
const connectDB = require("./db");

const PORT = process.env.PORT || 3000;

app.get("/",(req,res,next)=>{
res.json({
  success:true,
  message:"Server is perfect running"
})
})

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running is http://localhost:${PORT}`);
  });
});


const app = require("./app");
const connectDB = require("./db");

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running is http://localhost:${PORT}`);
  });
});


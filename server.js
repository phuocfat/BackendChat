const app = require("./app");
const config = require("./config/index")
const PORT = config.app.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
import "dotenv/config";
import { myExpressApp } from "./App.js";
import { PORT } from "./config/express.config.js";

myExpressApp.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


myExpressApp.on("error", (error) => {
  switch (error.code) {
    case "EADDRINUSE":
      console.error(`Port ${PORT} is already in use`);
      break;
  }
});




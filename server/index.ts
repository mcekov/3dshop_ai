import * as dotenv from "dotenv";
dotenv.config();
import config from "./config";

import app from "./src/server";

app.listen(config.port, () => {
  console.log(
    `Server is running in ${config.env} environment on http://localhost:${config.port}`
  );
});

const fs = require("fs");

fs.writeFileSync("./.env", `KEY_API=${process.env.KEY_API}\n`);
fs.writeFileSync("./.env", `URL_API=${process.env.URL_API}\n`);

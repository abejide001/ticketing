import app from "./app";
import dbConfig from "./database/dbConfig";


const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log(`app listeniing on ${port}`);
});
dbConfig();

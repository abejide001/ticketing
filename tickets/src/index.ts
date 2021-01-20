import { natsWrapper } from './nats-wrapper';
import app from "./app";
import dbConfig from "./database/dbConfig";


const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log(`app listeniing on ${port}`);
});
async function connectNats () {
  await natsWrapper.connect('ticketing', 'lasfa', 'http://nats-srv:4222')
  natsWrapper.client.on("close", () => {
    console.log("NATS connection closed");
    process.exit();
  });
  process.on("SIGINT", () => natsWrapper.client.close());
  process.on("SIGTERM", () => natsWrapper.client.close());
}
connectNats()
dbConfig();

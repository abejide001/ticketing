import request from "supertest";
import app from "../../app";

const createTicket = () => {
  return request(app)
    .post("/api/tickets")
    .set("Cookie", global.signin())
    .send({ title: "abababa", price: 20 });
};
it("can fetch a list of ticket", async () => {
  await createTicket();
  await createTicket();
  await createTicket();

  const response = await request(app).get("/api/tickets").send();
  expect(response.body.data.length).toEqual(3);
});

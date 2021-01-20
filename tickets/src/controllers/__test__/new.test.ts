import request from "supertest";
import app from "../../app";
import Ticket from "../../models/Ticket";

jest.mock('../../__mocks__/nats-wrapper.ts')

it("returns 200 if the route exist", async () => {
  const response = await request(app).post("/api/tickets").send({});
  expect(response.status).not.toEqual(404);
});

it("can only be accessed if the user is signed in", async () => {
  await request(app).post("/api/tickets").send({}).expect(401);
});

it("returns a status other than 401 if the user is signed in", async () => {
  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signin())
    .send({});
  expect(response.status).not.toEqual(401);
});

it("returns an error if an invalid title is provided", async () => {
  await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signin())
    .send({ title: "", price: "10" })
    .expect(422);
});

it("returns an error if an invalid title or price is provided", async () => {
  await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signin())
    .send({ title: "thi is a mate", price: "" })
    .expect(422);
});

it('creates a ticket with valid inputs', async () => {
  let tickets = await Ticket.find({});
  expect(tickets.length).toEqual(0);

  const title = 'asldkfj';

  await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({
      title,
      price: 20,
    })
    .expect(201);

  tickets = await Ticket.find({});
  expect(tickets.length).toEqual(1);
  expect(tickets[0].price).toEqual(20);
  expect(tickets[0].title).toEqual(title);
});
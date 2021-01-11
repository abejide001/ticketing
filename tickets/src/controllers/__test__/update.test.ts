import mongoose from "mongoose";
import request from "supertest";
import app from "../../app";

it("returns a 404 if the provided id does not exist", async () => {
  const id = mongoose.Types.ObjectId().toHexString();
  await request(app)
    .put(`/api/tickets/${id}`)
    .set("Cookie", global.signin())
    .send({
      title: "abejide",
      price: 20,
    })
    .expect(404);
});

it("returns a 401 if the user does not own the ticket", async () => {
  const response = await request(app)
    .post("/api/tickets")
    .set("Cookie", global.signin())
    .send({ title: "abejide", price: 20 });
  await request(app)
    .put(`/api/tickets/${response.body.data.id}`)
    .set("Cookie", global.signin())
    .send({
      title: "aabababa",
      price: 1000,
    })
    .expect(403);
});

it('returns 422 if the user provided an invalid title or price', async () => {
  const cookie = global.signin()
  const response = await request(app).post('/api/tickets').set("Cookie", cookie).send({
    title: "abcded",
    price: 10
  })

  const res = await request(app).put(`/api/tickets/${response.body.data.id}`).set("Cookie", cookie).send({
    title: "",
    price: 20
  })
  expect(res.status).toEqual(422)
})

it("updates the ticket with valid inputs", async () => {
  const cookie = global.signin()
  const response = await request(app).post('/api/tickets').set("Cookie", cookie).send({
    title: "abcded",
    price: 10
  })

  const res = await request(app).put(`/api/tickets/${response.body.data.id}`).set("Cookie", cookie).send({
    title: "this is the update",
    price: 20
  })
  expect(res.status).toEqual(200)
})
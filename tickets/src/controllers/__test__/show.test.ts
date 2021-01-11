import mongoose from 'mongoose';
import request from "supertest"
import app from "../../app"

it("returns a 404 if the ticket is not found", async () => {
  const id = new mongoose.Types.ObjectId().toHexString()
  await request(app).get(`/api/tickets/${id}`).set("Cookie", global.signin()).send().expect(404)
})

it("returns the ticket if the ticket is found", async () => {
  const title = "dele"
  const id = new mongoose.Types.ObjectId().toHexString()
  const response = await request(app).post('/api/tickets').set("Cookie", global.signin()).send({
    id,
    title,
    price: 20
  })
  const ticketResponse = await request(app).get(`/api/tickets/${response.body.data.id}`).set("Cookie", global.signin())
  expect(ticketResponse.body.data.title).toEqual(title)
})
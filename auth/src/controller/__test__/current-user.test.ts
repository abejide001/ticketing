import request from "supertest";
import app from "../../app";

it("returns a 201 on successful signup", async () => {
  const authResponse = await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@gmail.com",
      password: "sdfsfsg",
    })
    .expect(201);
  const cookie = authResponse.get('Set-Cookie')
  const response = await request(app).get("/api/users/currentUser").set('Cookie', cookie).send().expect(200)
  expect(response.body.currentUser.email).toEqual('test@gmail.com')
});

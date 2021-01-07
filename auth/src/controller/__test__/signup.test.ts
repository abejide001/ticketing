import request from "supertest";
import app from "../../app";

it("returns a 201 on successful signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@gmail.com",
      password: "sdfsfsg",
    })
    .expect(201);
});

it("returns 422 with a bad password", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@gmail.com",
      password: "s",
    })
    .expect(422);
});

it("returns 422 with an invalid email", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test",
      password: "ssss",
    })
    .expect(422);
});

it("returns 422 with no email and password", async () => {
  return request(app).post("/api/users/signup").send({}).expect(422);
});

it("disallows duplicated email", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@gmail.com",
      password: "sfsss",
    })
    .expect(201);
  
    await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@gmail.com",
      password: "sfsss",
    })
    .expect(400);
})

it("sets a cookie after successful signup", async() => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email: "test1@gmail.com",
      password: "sfssss",
    })
  expect(response.get('Set-Cookie')).toBeDefined()
})
import request from "supertest";
import app from "../../app";

it("fails when the account does not exist", async () => {
  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@gmail.com",
      password: "asff",
    })
    .expect(400);
});

it("fails when an incorrect password is supplied", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@gmail.com",
      password: "sdfsfsg",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@gmail.com",
      password: "sdfssf",
    })
    .expect(400);
});

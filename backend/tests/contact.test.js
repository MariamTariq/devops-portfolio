const request = require("supertest");
const express = require("express");
const contactRoutes = require("../routes/contact");

const app = express();
app.use(express.json());
app.use("/api/contact", contactRoutes);

describe("POST /api/contact", () => {
  it("should return 200 and success message for valid input", async () => {
    const res = await request(app)
      .post("/api/contact")
      .send({
        name: "Mariam",
        email: "mariam@test.com",
        message: "This is a test message"
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toMatch(/Your message has been received. Excited to connect with you!/i);
  });

  it("should return 400 for invalid input", async () => {
    const res = await request(app)
      .post("/api/contact")
      .send({
        name: "M",
        email: "invalidemail",
        message: "short"
      });

    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toMatch(/Validation failed/i);
  });
});

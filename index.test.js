const request = require("supertest");
const { app, server } = require("./index");

describe("GET /time", () => {
  afterAll((done) => {
    server.close(done);
  });

  it("should return the current time in UTC", async () => {
    const response = await request(app).get("/time");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("currentTime");
  });

  it("should return the adjusted time when a valid timezone is provided", async () => {
    const response = await request(app).get("/time?timezone=America/New_York");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("adjustedTime");
  });

  it("should return an error when an invalid timezone is provided", async () => {
    const response = await request(app).get("/time?timezone=Invalid/Timezone");
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error", "Invalid timezone");
  });
});

const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("responds with Hello Nadim!", (done) => {
        request(app).get("/").expect("Hello Nadim!", done);
    })
});
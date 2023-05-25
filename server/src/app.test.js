const request = require("supertest");
const app = require("./app");

describe("app", () => {
  test("POST /properties creates a new property", async () => {
    // arrange
    const expectedStatus = 201;
    const body = {
      askingPrice: "$876330.57",
      description: "Large Executive townhouse bordering On Town Centre",
      address: "2 Bowman Avenue",
      title: "Bowman Brilliance – Style and Value!",
      img: "https://placeimg.com/642/482/arch",
    };

    // act
    await request(app)
      .post("/properties")
      .send(body)
      // assert
      .expect(expectedStatus)
      .expect((response) => {
        expect(response.body).toEqual(expect.objectContaining(body));
        expect(response.body.id).toBeTruthy();
      });
  });

  test("GET /properties returns a list of properties", async () => {
    // arrange
    const expectedStatus = 200;
    const expectedBody = [
      {
        address: "8 Shasta Pass",
        askingPrice: "$891822.26",
        description:
          "An easy living, conveniently located, brick & tile home on a highly desirable street and surrounded by quality homes.",
        id: "61480db44ab0cf7175467757",
        img: "https://placeimg.com/640/480/arch",
        title: "A Beauty on Shasta",
      },
      {
        address: "2 Bowman Avenue",
        askingPrice: "$876330.57",
        description: "Large Executive townhouse bordering On Town Centre",
        id: "61480db44ab0cf7175467755",
        img: "https://placeimg.com/642/482/arch",
        title: "Bowman Brilliance – Style and Value!",
      },
      {
        address: "8237 Moland Hill",
        askingPrice: "$946446.87",
        description: "Combining contemporary comforts with a functional layout",
        id: "61480db44ab0cf7175467756",
        img: "https://placeimg.com/644/484/arch",
        title: "Rare Moland Hill Stunner",
      },
    ];

    // act
    await request(app)
      .get("/properties")
      // assert
      .expect(expectedStatus)
      .expect((response) => {
        expect(response.body).toEqual(expectedBody);
      });
  });

  test("GET /properties/:id returns a single property", async () => {
    // arrange
    const expectedStatus = 200;
    const expectedBody = {
      askingPrice: "$876330.57",
      description: "Large Executive townhouse bordering On Town Centre",
      address: "2 Bowman Avenue",
      title: "Bowman Brilliance – Style and Value!",
      img: "https://placeimg.com/642/482/arch",
      id: "61480db44ab0cf7175467755",
    };

    // act
    await request(app)
      .get("/properties/61480db44ab0cf7175467755")
      // assert
      .expect(expectedStatus)
      .expect((response) => {
        expect(response.body).toEqual(expectedBody);
      });
  });

  test("Get /properties/:id returns 404 when you supply an id that doesn’t exist in the database", async () => {
    // arrange
    const expectedStatus = 404;

    // act
    await request(app)
      .get("/properties/61480db44ab0cf7175467753")
      // assert
      .expect(expectedStatus);
  });

  test("Get /properties/:id returns 400 when you supply an invalid id", async () => {
    // arrange
    const expectedStatus = 400;

    // act
    await request(app)
      .get("/properties/bad-id")
      // assert
      .expect(expectedStatus);
  });
});

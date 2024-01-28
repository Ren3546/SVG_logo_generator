const {Circle, Triangle, Square} = require("../shapes");

describe("Circle", () => {
  it("should return an svg file given user parameters colour, shape, text colour, text",()=>{
    const testCircle = new Circle('blue', 'white', 'THX')
    expect(testCircle.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">THX</text>
        </svg>` 
        );
    });
  });

describe("Triangle", () => {
    it("should return an svg file given user parameters colour, shape, text colour, text",()=>{
      const testTriangle = new Triangle('blue', 'white', 'THX')
      expect(testTriangle.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon height="100%" width="100%" points="150, 18 244, 182 56, 182" fill="blue" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">THX</text>
      </svg>`
          );
      });
    });

describe("Square", () => {
  it("should return an svg file given user parameters colour, shape, text colour, text",()=>{
    const testSquare = new Square('blue', 'white', 'THX')
    expect(testSquare.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">THX</text>
        </svg>` 
        );
    });
  });
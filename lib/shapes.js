//Contructors for all shapes
//returns code depending on the type of shape
class Circle {
    constructor(colour, textCol, text) {
        this.colour=colour;
        this.textCol=textCol;
        this.text=text;
    }
    render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.colour}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textCol}">${this.text}</text>
        </svg>` 
    }

}

class Square {
    constructor(colour, textCol, text) {
        this.colour=colour;
        this.textCol=textCol;
        this.text=text;
    }

    render() {
     return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="${this.colour}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textCol}">${this.text}</text>
        </svg>` 
    }

}


class Triangle {
    constructor(colour, textCol, text) {
      this.colour = colour;
      this.textCol = textCol;
      this.text = text;
    }
  
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon height="100%" width="100%" points="150, 18 244, 182 56, 182" fill="${this.colour}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textCol}">${this.text}</text>
      </svg>`
    }
  }



module.exports = {Circle, Square, Triangle};
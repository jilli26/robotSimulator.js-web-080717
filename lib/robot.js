'use strict';

function Robot() {
  this.coordinates = [0, 0]
  this.direction = 'north'

  Robot.prototype.orient = function(direction) {
    var directions = [ 'east', 'west', 'north', 'south' ]
    if (directions.includes(direction)) {
      this.bearing = direction
    } else {
      throw new Error("Invalid Robot Bearing")
    }
  }

  Robot.prototype.turnRight = function() {
    if (this.bearing === 'north') {
        this.bearing = 'east'
    } else if (this.bearing === 'east') {
        this.bearing = 'south'
    } else if (this.bearing === 'south') {
        this.bearing = 'west'
    } else if (this.bearing === 'west') {
        this.bearing ='north'
    }
  }


  Robot.prototype.turnLeft = function() {
    if (this.bearing === 'north') {
        this.bearing = 'west'
    } else if (this.bearing === 'west') {
        this.bearing = 'south'
    } else if (this.bearing === 'south') {
        this.bearing = 'east'
    } else if (this.bearing === "east") {
        this.bearing = 'north'
    }
  }

  Robot.prototype.at = function(x, y) {
    this.coordinates = [x,y]
  }

  Robot.prototype.instructions = function(instructions) {
    let array = []
    instructions.split("").forEach(function(letter) {
      if (letter === "L") {
        array.push("turnLeft")
      } else if (letter === "R") {
        array.push("turnRight")
      } else if (letter === "A") {
        array.push("advance")
      } else {

      }
    })
    return array
  }

  Robot.prototype.advance = function() {
    if (this.bearing === 'north') {
      this.coordinates[1] += 1
    } else if (this.bearing === 'east') {
      this.coordinates[0] += 1
    } else if (this.bearing === 'south') {
      this.coordinates[1] -= 1
    } else if (this.bearing === 'west') {
      this.coordinates[0] -= 1
    }
  }

  Robot.prototype.place = function(args) {
    this.coordinates = [args.x, args.y]
    this.bearing = args.direction
  }

  Robot.prototype.evaluate = function(instructions) {
    let moveRobot = this.instructions(instructions)
    for (let i=0; i < moveRobot.length; i++){
      if (moveRobot[i] === "turnLeft") {
        this.turnLeft()
      } else if (moveRobot[i] === "turnRight") {
        this.turnRight()
      } else if (moveRobot[i] === "advance") {
        this.advance()
      }
    }
  }





}

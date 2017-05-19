export class Rover {
  constructor(x, y, direction, grid) {
    this.x = x;
    this.y = y;
    this.grid = grid;
    this.direction = direction;
    this.availableDirections = ['N', 'E', 'S', 'W'];
    this.availableTurns = ['R', 'L'];
  }

  receiveCommand(commands) {
    commands = commands.split('');
    commands.forEach(command => {
      if (command === 'M') {
        this.move();
      } else if (this._validateTurns(command)) {
        this.turn(command)
      } else {
        console.log(command, 'command is not valid');
      }
    });
  }

  turn(where) {
    let newDirectionIndex = this.availableDirections.indexOf(this.direction) + (where === 'R' ? +1 : -1);
    if (newDirectionIndex >= this.availableDirections.length) newDirectionIndex = 0;
    if (newDirectionIndex < 0) newDirectionIndex = (this.availableDirections.length - 1);
    this.direction = this.availableDirections[newDirectionIndex];
  }

  move() {
    if (typeof this['_move' + this.direction] === "function") {
      this['_move' + this.direction]()
    }
    console.log('new Position : ', this.x, this.y, this.direction)
  }

  getPosition() {
    return [this.x, this.y, this.direction]
  }

  _validateTurns(command) {
    let regExp = new RegExp(`^(${this.availableTurns.join('|')})$`, 'g');
    return !!command.match(regExp);
  }

  _validateMoves({x, y}) {
    x = x || this.x;
    y = y || this.y;
    let isBigger = (x > this.grid.x || y > this.grid.y);
    let isSmaller = (x < 0 || y < 0);
    return !(isBigger || isSmaller);
  }

  _moveN() {
    if (this._validateMoves({y: this.y + 1})) {
      this.y = this.y + 1;
    } else {
      console.log('cannot move because out of grid');
    }
  }

  _moveS() {
    if (this._validateMoves({y: this.y - 1})) {
      this.y = this.y - 1;
    } else {
      console.log('cannot move because out of grid');
    }
  }

  _moveE() {
    if (this._validateMoves({x: this.x + 1})) {
      this.x = this.x + 1;
    } else {
      console.log('cannot move because out of grid');
    }
  }

  _moveW() {
    if (this._validateMoves({x: this.x - 1})) {
      this.x = this.x - 1;
    } else {
      console.log('cannot move because out of grid');
    }
  }
}
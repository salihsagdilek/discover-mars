import {Rover} from './rover';
export class MarsRover {
  constructor(xSize, ySize) {
    this.activeRover = null;
    this.retiredRovers = [];
    this.grid = {
      x: xSize,
      y: ySize
    }
  }

  addRover(x, y, direction) {
    this._retireActiveRover();
    this.activeRover = new Rover(x, y, direction, this.grid)
  }

  sendCommand(commands) {
    this.activeRover.receiveCommand(commands)
  }

  _retireActiveRover() {
    if (this.activeRover) {
      this.retiredRovers.push(this.activeRover);
    }
    this.activeRover = null;
  }

  getFinalPositions() {
    this._retireActiveRover();
    let positions = [];
    this.retiredRovers.forEach(rover => positions.push(rover.getPosition().join(' ')));
    console.log(positions)
  }
}
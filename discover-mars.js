import {MarsRover} from './mars-rover';

const marsRover = new MarsRover(5, 5);
marsRover.addRover(1, 2, 'N');
marsRover.sendCommand('LMLMLMLMM');
marsRover.addRover(3, 3, 'E');
marsRover.sendCommand('MMRMMRMRRM');
marsRover.getFinalPositions();
const DIRECTION_COUNT = 4;
// cardinal directions
const NORTH = 0;
const EAST = 1;
const SOUTH = 2;
const WEST = 3;
// local directions
const FORWARD = 0;
const LEFT = 3;
const RIGHT = 1;
const BACK = 2;

class Turtle {
    maze;
    startingX;
    startingY;
    x;
    y;
    startTouchCount = 0;
    hasLeftStart = false;
    hasUsedLeftWay = false;
    hasUsedRightWay = false;
    facing;

    constructor(maze, startingX = 0, startingY = 0, facing = EAST) {
        this.maze = maze;
        this.startingX = startingX;
        this.startingY = startingY;
        this.x = startingX;
        this.y = startingY;
        this.facing = facing;
    }

    getCellValue(x, y) {
        if (this.maze[y] == undefined || this.maze[y][x] == undefined)
            return 'W';
        return this.maze[y][x];
    }
    
    isInFinish() {
        if (this.x == this.maze[0].length - 1 &&
            this.y == this.maze.length - 1)
            return true;
        return false;
    }

    isCycled() {
        return this.startTouchCount > DIRECTION_COUNT;
    }

    hasTouchedStart() {
        return this.x == this.startingX && this.y == this.startingY;
    }

    checkLeftWay() {
        return this.x == this.startingX + 1 && this.y == this.startingY;
    }

    checkLeftWay() {
        return this.x == this.startingX && this.y == this.startingY + 1;
    }

    setTurtleWayFlags() {
        if (this.hasTouchedStart())
            this.startTouchCount++;
        if (this.checkLeftWay())
            this.hasUsedLeftWay = true;
        if (this.checkLeftWay())
            this.hasUsedRightWay = true;
    }

    isReturnedToStart() {
        if (this.isCycled())
            return true;
        if (this.hasTouchedStart() &&
            this.hasLeftStart &&
            this.hasUsedLeftWay &&
            this.hasUsedRightWay)
            return true;
        this.setTurtleWayFlags();
        return false;
    }

    localToCardinal(localDirection) {
        return (localDirection + this.facing) % DIRECTION_COUNT;
    }

    getXYModifier(localDirection) {
        let cardinalDirection = this.localToCardinal(localDirection);
        switch (cardinalDirection) {
            case NORTH:
                return [0, -1];
            case EAST:
                return [1, 0];
            case SOUTH:
                return [0, 1];
            case WEST:
                return [-1, 0];
        }
    }

    isFreeWay(localDirection) {
        let [modifierX, modifierY] = this.getXYModifier(localDirection);
        if (this.getCellValue(this.x + modifierX, this.y + modifierY) == '.')
            return true;
        return false;
    }

    turnLeft() {
        this.facing = (this.facing + 3) % DIRECTION_COUNT;
    }

    turnRight() {
        this.facing = (this.facing + 1) % DIRECTION_COUNT;
    }

    forward() {
        if (!this.hasLeftStart)
            this.hasLeftStart = true;
        let [modifierX, modifierY] = this.getXYModifier(FORWARD);
        this.x = this.x + modifierX;
        this.y = this.y + modifierY;
    }
}

function toMatrixMaze(maze) {
    let matrix = [];
    for (let e of maze.split('\n')) {
        matrix.push(e.split(''));
    }
    return matrix;
}

function pathFinder(maze){
    maze = toMatrixMaze(maze);
    let turtle = new Turtle(maze, 0, 0);
    while (true) {
        if (turtle.isInFinish())
            return true;
        if (turtle.isReturnedToStart())
            return false;
        if (turtle.isFreeWay(LEFT))
            turtle.turnLeft();
        if (turtle.isFreeWay(FORWARD)) {
            turtle.forward();
        }
        else
            turtle.turnRight();   
    }
}

let maze1 = `.W.
.W.
...`;

let maze2 = `.W....
WWW...
...W.W
.W.WWW
.W....
......`;

let maze3 = `..W.
.W..
...W
.W..`;

console.log(pathFinder(maze1));
console.log(pathFinder(maze2));
console.log(pathFinder(maze3));
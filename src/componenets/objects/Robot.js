export default class Robot {

    constructor(grid) {

        this.position = { x: null, y: null };
        this.direction = null;
        this.grid = grid
        this.onGrid = false
        this.moves = ['LEFT', 'RIGHT']
        this.directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

    }

    parseInput(input) {

        let commands = input.split('\n')
        let report = ''

        commands.forEach((command) => {

            if (command.indexOf('PLACE') > -1) {

                this.placeRobot(command)

            }

            if (this.onGrid) {

                if (command === 'MOVE') {
                    this.moveRobot()
                } else if (this.moves.includes(command)) {
                    this.turnRobot(command)
                } else if (command === 'REPORT') {
                    report = this.report()
                    
                }
                
            }

        })

        return report

    }

    placeRobot(positionInput) {

        const initialPosition = positionInput.split(' ')
        const gridPositionDirection = initialPosition[1].split(',')
        this.position.x = parseInt(gridPositionDirection[0])
        this.position.y = parseInt(gridPositionDirection[1])
        this.direction = gridPositionDirection[2]

        if (this.grid.checkPosition(this.position)) {
            this.onGrid = true
        }

    }

    turnRobot(direction) {

        let directionIndex = this.directions.indexOf(this.direction);

        if (direction === 'LEFT') {
            directionIndex = directionIndex - 1

            this.direction = (directionIndex >= 0) ? this.directions[directionIndex] : this.directions[(this.directions.length - 1)]

        } else {

            directionIndex = directionIndex + 1
            this.direction = (directionIndex > this.directions.length - 1) ? this.directions[0] : this.directions[directionIndex]
        }

    }

    moveRobot() {
        let newPosition = { ...this.position }

        if (this.direction === "NORTH") {
            newPosition.y = this.position.y + 1
        } else if (this.direction === "SOUTH") {
            newPosition.y = this.position.y - 1
        } else if (this.direction === "EAST") {
            newPosition.x = this.position.x + 1
        } else if (this.direction === "WEST") {
            newPosition.x = this.position.x - 1
        }

        if (!this.grid.checkPosition(newPosition)) {
            console.log('FALSE MOVE')
        } else {
            this.position = { ...newPosition }
        }
    }

    report() {
        return `${this.position.x},${this.position.y},${this.direction}`
    }

}
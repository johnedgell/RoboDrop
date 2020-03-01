import Robot from './Robot'
import TableTop from './TableTop'

let tabletop = new TableTop(5, 5)
const robot = new Robot(tabletop)
let robotPlaced = null

test(' it should return false of the robot is placed in an invalid square ', () => {


    robotPlaced = robot.placeRobot('PLACE 6,6,EAST')
    expect(robotPlaced).toBe(false);

})

test(' it should return true of the robot is placed in the valid square ', () => {


    robotPlaced = robot.placeRobot('PLACE 2,2,EAST')
    expect(robotPlaced).toBe(true);

})

describe('rotate clockwise', () => {
    test('NORTH', () => {
        robot.placeRobot('PLACE 2,2,WEST');
        robot.turnRobot("RIGHT")
        expect(robot.direction).toBe("NORTH");
    });
    test('EAST', () => {
        robot.placeRobot('PLACE 2,2,NORTH');
        robot.turnRobot("RIGHT")
        expect(robot.direction).toBe("EAST");
    });
    test('SOUTH', () => {
        robot.placeRobot('PLACE 2,2,EAST');
        robot.turnRobot("RIGHT")
        expect(robot.direction).toBe("SOUTH");
    });
    test('WEST', () => {
        robot.placeRobot('PLACE 2,2,SOUTH');
        robot.turnRobot("RIGHT")
        expect(robot.direction).toBe("WEST");
    });
});

describe('rotate anti-clockwise', () => {
    test('NORTH', () => {
        robot.placeRobot('PLACE 2,2,EAST');
        robot.turnRobot("LEFT")
        expect(robot.direction).toBe("NORTH");
    });
    test('WEST', () => {
        robot.placeRobot('PLACE 2,2,NORTH');
        robot.turnRobot("LEFT")
        expect(robot.direction).toBe("WEST");
    });
    
    test('SOUTH', () => {
        robot.placeRobot('PLACE 2,2,WEST');
        robot.turnRobot("LEFT")
        expect(robot.direction).toBe("SOUTH");
    });
    test('EAST', () => {
        robot.placeRobot('PLACE 2,2,SOUTH');
        robot.turnRobot("LEFT")
        expect(robot.direction).toBe("EAST");
    });
});


test(' it should  move north', () => {
    robot.placeRobot('PLACE 2,2,NORTH')
    robot.moveRobot()
    expect(robot.position.y).toBe(3)

})

test(' it should not move north if the move is out of bounds', () => {
    robot.placeRobot('PLACE 1,4,NORTH')
    robot.moveRobot()
    expect(robot.position.y).toBe(4)

})

test(' it should  move south', () => {
    robot.placeRobot('PLACE 2,2,SOUTH')
    robot.moveRobot()

    expect(robot.position.y).toBe(1)
})

test(' it should not move south if the move is out of bounds', () => {
    robot.placeRobot('PLACE 2,0,SOUTH')
    robot.moveRobot()
    expect(robot.position.y).toBe(0)
})

test(' it should  move east', () => {
    robot.placeRobot('PLACE 2,2,EAST')
    robot.moveRobot()
    expect(robot.position.x).toBe(3)

})

test(' it should not move east if the move is out of bounds', () => {
    robot.placeRobot('PLACE 4,4,EAST')
    robot.moveRobot()
    expect(robot.position.x).toBe(4)
})

test(' it should  move west', () => {
    robot.placeRobot('PLACE 2,2,WEST')
    robot.moveRobot()
    expect(robot.position.x).toBe(1)
})

test(' it should not move west if the move is out of bounds', () => {
    robot.placeRobot('PLACE 0,2,WEST')
    robot.moveRobot()
    expect(robot.position.x).toBe(0)
})


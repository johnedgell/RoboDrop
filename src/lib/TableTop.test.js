import TableTop from './TableTop'


test('should return an error string if coordinates are not integers ', () => {

    const errorString = new TableTop('nope', 'double nope')

    expect(errorString.errorMessage).toBe('SizeX and sizeY must be integers');

})

let  tableTopObject = null
beforeEach(() => {
    tableTopObject  = new TableTop(5, 5) 
});


test('should set SizeX and sizeY to the right size ', () => {

    expect(tableTopObject.sizeX === 4 && tableTopObject.sizeY === 4).toBe(true);

})

test('should return false if the grid position is out of bounds ', () => {
    let gridCheckResult = tableTopObject.checkPosition({x: 6, y: 7})
    expect(gridCheckResult).toBe(false);
})

test('should return true if the grid position is in bounds ', () => {
    let gridCheckResult = tableTopObject.checkPosition({x: 2, y: 3})
    expect(gridCheckResult).toBe(true);

})
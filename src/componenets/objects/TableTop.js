export default class TableTop {
    constructor(sizeX, sizeY) {
      this.sizeX = sizeX -1;
      this.sizeY = sizeY -1;
    }


    checkPosition(position){
        const {x, y} = position
         return (x > -1 && x <= this.sizeX) && (y > -1 && x <= this.sizeY)
    }

    
  }
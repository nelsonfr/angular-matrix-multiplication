export class Matrix {
    width:number;
    height:number;
    data: number[][] | undefined;
  
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.update(width, height);
    }
  
    update(width: number, height: number): void {
        this.width = width;
        this.height = height;
        const newMatrix = [];

        for (let i = 0; i < height; i++) {
          const newRow = [];
          for (let j = 0; j < width; j++) {
            newRow.push(0); 
          }
          newMatrix.push(newRow);
        }

        this.data = newMatrix;
        console.log(this.data);
    }
  }
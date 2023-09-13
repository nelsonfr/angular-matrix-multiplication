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
        this.data = new Array(height).fill(0).map(() => new Array(width).fill(0));
    }
  }
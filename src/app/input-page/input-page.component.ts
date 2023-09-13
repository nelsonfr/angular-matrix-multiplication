import { Component } from '@angular/core';
import { Matrix } from '../models/matrix';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css']
})
export class InputPageComponent {
  sizeOpts:number[] = [1,2,3,4,5];
  matrixAWidth:number = 1;
  matrixAHeight:number = 1;
  matrixBWidth:number = 1;
  matrixBHeight:number = 1;
  matrixA:Matrix = new Matrix(this.matrixAWidth,this.matrixAHeight);
  matrixB:Matrix = new Matrix(this.matrixBWidth,this.matrixBHeight);
 
  
  resetMatrixA(){
    this.matrixA.update(this.matrixAWidth, this.matrixAHeight);
  }
  
  resetMatrixB(){
    this.matrixB.update(this.matrixBWidth, this.matrixBHeight);
  }

}

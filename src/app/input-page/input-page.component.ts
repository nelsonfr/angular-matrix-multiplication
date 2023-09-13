import { Component } from '@angular/core';
import { Matrix } from '../models/matrix';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css']
})
export class InputPageComponent {
  sizeOpts:number[] = [1,2,3,4,5];
  matrixA:Matrix = new Matrix(2,3);
  matrixB:Matrix = new Matrix(4,9);
 
  
  /**
   *
   */
  

}

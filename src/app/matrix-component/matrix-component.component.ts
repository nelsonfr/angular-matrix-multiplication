import { Component, Input } from '@angular/core';
import { Matrix } from '../models/matrix';

@Component({
  selector: 'app-matrix-component',
  templateUrl: './matrix-component.component.html',
  styleUrls: ['./matrix-component.component.css']
})
export class MatrixComponentComponent {
  @Input() matrixData:number[][];
  @Input() matrixName:string;
  validateInput(i:number, j:number){   
    var value = this.matrixData[i][j];
    if (!value) {
      this.matrixData[i][j] = 0;
    }
  }

  trackByFn(index, item) {
    return index; 
  }
}

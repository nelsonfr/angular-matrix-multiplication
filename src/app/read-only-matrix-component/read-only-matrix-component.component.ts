import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-read-only-matrix-component',
  templateUrl: './read-only-matrix-component.component.html',
  styleUrls: ['./read-only-matrix-component.component.css']
})
export class ReadOnlyMatrixComponentComponent {
  @Input() matrixData:number[][];
}

import { Injectable } from '@angular/core';
import { Matrix } from '../models/matrix';
import { MatrixOperationResponse } from '../models/matrixOperationResponse';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor() { 
  }

  matrixOperationResponse:MatrixOperationResponse;

  setMatrixOperationData(matrixOperationResponse:MatrixOperationResponse){
    this.matrixOperationResponse = matrixOperationResponse;
  }

  getMatrixOperationData():MatrixOperationResponse{   
    return this.matrixOperationResponse;
    
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Matrix } from '../models/matrix';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { MatrixOperationResponse } from '../models/matrixOperationResponse';

@Injectable({
  providedIn: 'root'
})
export class MatrixService {

  constructor(private http:HttpClient) { }

  multiply(matrixA:Matrix, matrixB:Matrix):Observable<any>{

    var headers = new HttpHeaders({'Content-Type':'application/json'});

    var body = {
      matrixA,
      matrixB
    };

    return this.http.post<MatrixOperationResponse>('http://localhost:5037/matrix/multiply', body, {headers});
  }

}

import { Matrix } from "./matrix";

export class MatrixOperationResponse{
    matrixA:Matrix;
    matrixB:Matrix;
    result:Matrix;

    /**
     *
     */
    constructor(matrixA:Matrix, matrixB:Matrix, result:Matrix) {
        this.matrixA = matrixA;
        this.matrixB = matrixB;
        this.result = result;
        
    }
}
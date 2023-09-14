import { Matrix } from "./matrix";

export class MatrixOperationResponse{
    public matrixA:Matrix;
    public matrixB:Matrix;
    public result:Matrix;

    /**
     *
     */
    constructor(matrixA:Matrix, matrixB:Matrix, result:Matrix) {
        this.matrixA = matrixA;
        this.matrixB = matrixB;
        this.result = result;
        
    }
}
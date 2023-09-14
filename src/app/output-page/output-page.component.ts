import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';
import { MatrixOperationResponse } from '../models/matrixOperationResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-output-page',
  templateUrl: './output-page.component.html',
  styleUrls: ['./output-page.component.css']
})
export class OutputPageComponent implements OnInit {

  dataResponse:MatrixOperationResponse;
   
  constructor(private dataSharing:DataSharingService, private router:Router){
    
    
  }
  ngOnInit(): void {
    this.dataResponse = this.dataSharing.getMatrixOperationData();

    if(!this.dataResponse){
      this.router.navigate(['']);
    }
  }

}

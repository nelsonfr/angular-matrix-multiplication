import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputPageComponent } from './input-page/input-page.component';
import { OutputPageComponent } from './output-page/output-page.component';
import { MatrixComponentComponent } from './matrix-component/matrix-component.component';
import { FormsModule} from  '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http'
import { MatrixService } from './services/matrix.service';
import { DataSharingService } from './services/data-sharing.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    InputPageComponent,
    OutputPageComponent,
    MatrixComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [MatrixService, DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

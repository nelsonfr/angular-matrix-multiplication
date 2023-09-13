import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputPageComponent } from './input-page/input-page.component';
import { OutputPageComponent } from './output-page/output-page.component';
import { MatrixComponentComponent } from './matrix-component/matrix-component.component';
import { FormsModule} from  '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    InputPageComponent,
    OutputPageComponent,
    MatrixComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

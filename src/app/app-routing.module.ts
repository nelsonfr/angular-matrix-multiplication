import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { InputPageComponent } from './input-page/input-page.component';
import { OutputPageComponent } from './output-page/output-page.component';
import { CommonModule } from '@angular/common';



const routes:Routes = [
  {path: '', component:InputPageComponent},
  {path: 'output', component:OutputPageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

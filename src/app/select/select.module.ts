import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModelSelectComponent } from './ng-model-select/ng-model-select.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveSelectComponent } from './reactive-select/reactive-select.component';




@NgModule({
  declarations: [NgModelSelectComponent, ReactiveSelectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: NgModelSelectComponent},
      {path: 'reactive', component: ReactiveSelectComponent},
    ]),
    FormsModule,
    ReactiveFormsModule,
    // FormsModule,

  ]
})
export class SelectModule { }

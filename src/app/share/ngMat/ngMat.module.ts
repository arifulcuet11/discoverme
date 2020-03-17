import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button' 
import {MatAutocompleteModule} from '@angular/material/autocomplete' 
import {MatCheckboxModule} from '@angular/material/checkbox' 
import {MatInputModule} from '@angular/material/input' 
import {MatCardModule} from '@angular/material/card' 
    import { from } from 'rxjs';




@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NgMatModule { }
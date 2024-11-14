import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-basic-page',
    templateUrl: './basicPage.component.html',
})
export class BasicPageComponent {

    public myForm: any

    constructor( private fb: FormBuilder){
    
        this.myForm = this.fb.group({
            name: [''] ,
            price: [0] ,
            inStorage: [0] ,
        })
    }


 }

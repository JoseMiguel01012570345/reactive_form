import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators } from '@angular/forms';

@Component({
    selector: 'app-basic-page',
    templateUrl: './basicPage.component.html',
})
export class BasicPageComponent {

    public myForm: any

    constructor( private fb: FormBuilder){
    
        this.myForm = this.fb.group({
            name: ['' , [ Validators.required , Validators.minLength(3) ]] ,
            price: [0 , ] ,
            inStorage: [0 , [Validators.required , Validators.min(0)]] ,
        })
    }


 }

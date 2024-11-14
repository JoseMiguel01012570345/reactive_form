import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators } from '@angular/forms';

@Component({
    selector: 'app-basic-page',
    templateUrl: './basicPage.component.html',
})
export class BasicPageComponent {

    public myForm: FormGroup

    constructor( private fb: FormBuilder){
    
        this.myForm = this.fb.group({
            name: ['' , [ Validators.required , Validators.minLength(3) ]] ,
            price: [0 , [Validators.required , Validators.min(0)] ] ,
            inStorage: [0 , [Validators.required , Validators.min(0)]] ,
        })
    }

    isValidField( field:string ): boolean | null {            
        
        return this.myForm.controls[field].errors && 
        this.myForm.controls[field].touched
    } 

    getFieldError(field:string):string | null {
        
        if( !this.myForm.controls[field]) return null

        const errors = this.myForm.controls[field].errors || {} 

        for (const key of Object.keys(errors)) {
            switch(key){
                case 'required':
                return 'this field is required'
                case 'minlength':
                    return `minimum required ${errors['minlength'].requiredLength} caracters.`
                case 'min':
                    return 'minimum is 0'
            }
        }
        return null
    }
 }

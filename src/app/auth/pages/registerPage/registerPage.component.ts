import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validatorService } from '../../../shared/serivice/validators.service';

@Component({
    selector: 'app-register-page',
    templateUrl: './registerPage.component.html',
})
export class RegisterPageComponent {

    public myForm:FormGroup;

    constructor(
        private fb: FormBuilder ,
        private validatorService: validatorService 
    ){

        this.myForm = fb.group({
            name:[ '', [Validators.required , Validators.pattern(this.validatorService.firstNameAndLastnamePattern) ] ],
            email:[ '', [Validators.required , Validators.pattern(this.validatorService.emailPattern) ] ],
            username:[ '', [Validators.required  , this.validatorService.cantBeStrider] ],
            password:[ '', [Validators.required , Validators.minLength(6) ] ],
            password2:[ '', [Validators.required ] ],
        })

    }

    isValidField(field:string){
        return this.validatorService.isValidField( this.myForm , field )
    }

    onSubmit(field:string){
        this.myForm.markAllAsTouched()
    }

 }

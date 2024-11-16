import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider, emailPattern, firstNameAndLastnamePattern } from '../../../shared/validators/validators';

@Component({
    selector: 'app-register-page',
    templateUrl: './registerPage.component.html',
})
export class RegisterPageComponent {

    public myForm:FormGroup;

    constructor(private fb: FormBuilder){

        this.myForm = fb.group({
            name:[ '', [Validators.required , Validators.pattern(firstNameAndLastnamePattern) ] ],
            email:[ '', [Validators.required , Validators.pattern(emailPattern) ] ],
            username:[ '', [Validators.required  , cantBeStrider] ],
            password:[ '', [Validators.required , Validators.minLength(6) ] ],
            password2:[ '', [Validators.required ] ],
        })

    }

    onSubmit(field:string){
        this.myForm.markAllAsTouched()
    }

 }

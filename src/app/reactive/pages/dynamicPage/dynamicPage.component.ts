import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-dynamic-page',
    templateUrl: './dynamicPage.component.html',
})
export class DynamicPageComponent { 

    
    public myForm: FormGroup
    
    constructor(
        private fb: FormBuilder
    ){
       let myForm = this.fb.group(
           {
            name:[ '' , [Validators.required , Validators.minLength(3)] ],
            favoriteGames: this.fb.array([
                ['Stellaris' , Validators.required],
                ['Heart of Iron IV' , Validators.required],
            ])
        }
    )

    this.myForm = myForm
    }

    isValidFieldInArray( formArray:FormArray , i: number )    {
        return formArray.controls[i].errors &&
         formArray.controls[i].touched 
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

    get favoriteGames(){
        return this.myForm.get('favoriteGames') as FormArray
    }

    onSubmit(): void{

        if( this.myForm.invalid){
            this.myForm.markAllAsTouched()
            return
        }
        this.myForm.reset()
    }


}

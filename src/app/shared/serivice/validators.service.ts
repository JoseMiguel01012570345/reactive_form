import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class validatorService {
    
    public firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)'
    public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
   
    constructor() { }
    
    public cantBeStrider( control:FormControl ):ValidationErrors | null {

        const value:string = (control.value as string).toLocaleLowerCase()
        
        if(value === 'strider'){
            return {
                notStrider:true
            }
        }
        return  null
    }

    public isValidField(myForm:FormGroup ,  field: string){
        return myForm.controls[field].errors && 
        myForm.controls[field].touched
    }

    public isFieldOneEqualFieldTwo( field1: string , field2:string ) {

        return ( FormGroup:FormGroup ): ValidationErrors | null  => {
            const fieldValue1 = FormGroup.get(field1)?.value
            const fieldValue2 = FormGroup.get(field2)?.value

            if (fieldValue1 !== fieldValue2 ){
             FormGroup.get(field2)?.setErrors({ notEqual: true })
             return { notEqual: true }
            }

            FormGroup.get(field2)?.setErrors(null)
            
            return null
        }

    }
}
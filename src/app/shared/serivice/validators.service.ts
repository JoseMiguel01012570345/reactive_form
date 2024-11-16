import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

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
}
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class emailValidator implements AsyncValidator {
    
    constructor() { }
    
    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        
        const email = control.value

        return of({
            emailTaken:true
        })
    }
    registerOnValidatorChange?(fn: () => void): void {
        throw new Error('Method not implemented.');
    }
    
}
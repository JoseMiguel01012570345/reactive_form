import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class emailValidator implements AsyncValidator {
    
    constructor() { }
    
    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        
        const email = control.value

        return new Observable<ValidationErrors|null>(( suscriber ) =>{

            if( email === 'jmperezperez25@gmail.com' )
            {
                suscriber.next( {
                    emailTaken: true
                })
                suscriber.complete()
            }

            suscriber.next(null)
            suscriber.complete()
            
        })
    }
    registerOnValidatorChange?(fn: () => void): void {
        throw new Error('Method not implemented.');
    }
    
}
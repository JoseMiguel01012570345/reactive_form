import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-switches-page',
    templateUrl: './switchesPage.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchesPageComponent { 

    public myForm: FormGroup 

    constructor(private fb:FormBuilder){
        
        this.myForm =  this.fb.group({
            gender:['M' , Validators.required] ,
            wantNotificactions: [ true , Validators.required ],
            termAndConditions: [ false , Validators.requiredTrue ],
        })

    }

    onSave(){
        if(this.myForm.invalid) return
        this.myForm.markAllAsTouched()
        console.log('xx')
        this.myForm.reset()
        
        
    }

    

}

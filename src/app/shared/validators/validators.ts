import { FormControl, ValidationErrors } from "@angular/forms";

export const cantBeStrider = ( control:FormControl ):ValidationErrors | null => {

    const value:string = (control.value as string).toLocaleLowerCase()
    
    if(value === 'strider'){
        return {
            notStrider:true
        }
    }
    return  null
}
import { FormControl } from "@angular/forms";

export const cantBeStrider = ( control:FormControl ) => {

    const value:string = (control.value as string).toLocaleLowerCase()

    if(value === 'strider'){
        return {
            notStrider:true
        }
    }
    return  null
}
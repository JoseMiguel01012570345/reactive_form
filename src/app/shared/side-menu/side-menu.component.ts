import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Menu{

    title: string;
    route: string; 

}


@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
})
export class SideMenuComponent { 

    public reactiveMenu:Menu[] = [

        { title: 'Basic' , route: './reactive/basic' } ,
        { title: 'dynamic' , route: './reactive/dynamic' } ,
        { title: 'switches' , route: './reactive/switches' } ,

    ]
    
    public authMenu:Menu[] = [
        { title: 'auth' , route: './auth' } ,
    ]


}

import { NgModule } from '@angular/core';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './component/error404/error404.component';


@NgModule({
    declarations:[
        NavBarComponent,
        Error404Component
    ],
    imports:[
        RouterModule.forChild([
            {
                // Essa rota será para quando não achar a pagina
                path: '**', component: Error404Component
            }
        ])
    ],
    exports:[
        NavBarComponent,
        Error404Component
    ]
})

export class CoreModule{

}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country/pages/country/country.component';
import { RegionComponent } from './country/pages/region/region.component';
import { CapitalComponent } from './country/pages/capital/capital.component';
import { SeeCountryComponent } from './country/pages/see-country/see-country.component';

//definicion de rutas
const routes: Routes = [
    {    //ruta principal
        path: '',
        component: CountryComponent,
        pathMatch: 'full'
    }, {
        path: 'region',
        component: RegionComponent,
    }, {
        path: 'capital',
        component: CapitalComponent
    }, {
        path: 'country/:id',
        component: SeeCountryComponent
    }, {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [//forRoot por que no tenemos otras rutas principales
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
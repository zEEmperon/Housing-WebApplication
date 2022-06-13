import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AddPropertyComponent} from "../core/property/add-property/add-property.component";
import {PropertyListComponent} from "../core/property/property-list/property-list.component";
import {PropertyDetailComponent} from "../core/property/property-detail/property-detail.component";

const routes: Routes = [
  {path: '', component: PropertyListComponent},
  {path: 'add-property', component: AddPropertyComponent},
  {path: 'property-detail/:id', component: PropertyDetailComponent},
  {path: 'rent-property', component: PropertyListComponent},
  //{path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

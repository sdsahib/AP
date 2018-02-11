import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {SearchPageComponent} from './search-page/search-page.component';
import {ParentComponent} from './parent/parent.component'


const routes: Routes = [
  { path: 'search', component: SearchPageComponent },
  { path: 'parent/:id', component: ParentComponent }];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
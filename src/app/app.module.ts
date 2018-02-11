import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ParentService } from './parent.service';
import { HttpModule } from '@angular/http';
import { RatingComponent } from './rating/rating.component';
import {AllskillComponent} from './allskill/allskill.component';
import {DataService} from './data.service';
import { SkillService } from './skill.service';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchPageComponent } from './search-page/search-page.component';
//import { RatingComponent } from './rating/rating.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillNavComponent } from './skill-nav/skill-nav.component';
import { MyskillComponent } from './myskill/myskill.component';
import { DashLayoutComponent } from './dash-layout/dash-layout.component';
import { GetDataPipe } from './myskill/extractdata.pipe';
const appExplore: Routes = [
 // { path: '', redirectTo: '/skillnav', pathMatch: 'full' },
  {path:'skillnav',component:SkillNavComponent,
  children:[
          {path: '', redirectTo:'myskill',pathMatch: 'full'},
          {path:'myskill', component:MyskillComponent,},
          {path:'allskill',component:AllskillComponent,},
          {path:'search', component: SearchPageComponent,},
          { path: 'explore', component: ParentComponent },
          ]
  },
 
];

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    RatingComponent,
    AllskillComponent,
    SearchListComponent,
    SearchPageComponent,
    SkillNavComponent,
    MyskillComponent,
    DashLayoutComponent,
    GetDataPipe
    
  ],
  imports: [
    RouterModule.forRoot(appExplore),
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ ParentService,DataService,SkillService],
  bootstrap: [AppComponent]
})
export class AppModule { }

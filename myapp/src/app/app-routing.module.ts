import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { BookmanagerComponent } from './bookmanager/bookmanager.component';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
const routes: Routes = [
  {path:"",redirectTo:"bookmark", pathMatch:"full"},
  {path:"add",component:BookmanagerComponent},
  {path:"bookmark",component:BookmarkListComponent}
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [
    
  ]
 
})
export class AppRoutingModule { }

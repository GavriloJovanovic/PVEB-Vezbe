import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AddGoalComponent } from './add-goal/add-goal.component';

const routes: Routes = [
  { path : '', component : MainComponent},
  { path : 'add-goal', component : AddGoalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

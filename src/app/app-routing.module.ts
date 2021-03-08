import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticeComponent} from './practice/practice.component';
import { FirstComponent} from './first/first.component';
import { SecondComponent} from './second/second.component';

const routes: Routes = [
  { path: 'practice', component: PracticeComponent },
  { path: 'first', component: FirstComponent},
  { path: 'second', component: SecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

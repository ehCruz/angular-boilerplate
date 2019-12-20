import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { PostsComponent } from './components/posts/posts.component';

const appRoutes: Routes = [
  { path: 'gestao-usuario', component: UserPanelComponent },
  { path: 'gestao-posts', component: PostsComponent },
  { path: '', component: UserPanelComponent },
  { path: '**', redirectTo: 'gestao-usuario', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

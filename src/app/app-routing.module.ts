import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicListPagesComponent } from './components/dynamic-list-pages/dynamic-list-pages.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'dynamic-list-pages', component: DynamicListPagesComponent },
  { path: 'item', loadChildren: () => import('./components/item-pages/item/item.module').then(m => m.ItemModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

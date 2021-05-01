import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { AccessComponent } from './access/access.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'panel', component: PanelComponent },
  { path: '', redirectTo: '/panel', pathMatch: 'full' },
  { path: 'access/admin', component: AccessComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

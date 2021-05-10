import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel/panel.component';
import { AccessComponent } from './access/access.component';
import { AdminComponent } from './admin/admin.component';
import { FamiliaComponent } from './familia/familia.component';

const routes: Routes = [
  { path: 'panel', component: PanelComponent },
  { path: '', redirectTo: '/panel', pathMatch: 'full' },
  { path: 'access', component: AccessComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'family/:id', component: FamiliaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

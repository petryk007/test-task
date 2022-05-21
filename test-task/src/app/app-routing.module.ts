import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NbpComponent } from './nbp/nbp.component';

const routes: Routes = [
  { path: 'nbp', component: NbpComponent},
  {
    path: '**',
    redirectTo: '/nbp',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

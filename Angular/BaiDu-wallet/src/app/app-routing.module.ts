import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { PagesIndexComponent } from './pages-index/pages-index.component'

const routes: Routes = [
  { path: 'index', component: PagesIndexComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

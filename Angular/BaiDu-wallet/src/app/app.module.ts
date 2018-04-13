import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PagesIndexComponent } from './pages-index/pages-index.component';
import { PagesFooterComponent } from './pages-footer/pages-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    PagesIndexComponent,
    PagesFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

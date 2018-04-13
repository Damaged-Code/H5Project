import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './core/app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { CompleteComponent } from './pages/complete/complete.component';
import { StoreModule } from '@ngrx/store';
import { petTagReducer } from './core/pet-tag.reducer';
import { TagShapeComponent } from './pages/create/tag-shape/tag-shape.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    CompleteComponent,
    TagShapeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.provideStore({ petTag: petTagReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

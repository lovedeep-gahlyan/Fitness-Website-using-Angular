import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { QueryFormComponent } from './components/query-form/query-form.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { PlaceAppointmentComponent } from './pages/place-appointment/place-appointment.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AppointmentFormComponent,
    QueryFormComponent,
    AppointmentComponent,
    ContactusComponent,
    PlaceAppointmentComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

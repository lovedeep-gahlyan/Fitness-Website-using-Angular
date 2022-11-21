import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { PlaceAppointmentComponent } from './pages/place-appointment/place-appointment.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'bookappointments',
    component: PlaceAppointmentComponent,
  },
  {
    path: 'appointments',
    component: AppointmentComponent,
  },
  {
    path: 'contactus',
    component: ContactusComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

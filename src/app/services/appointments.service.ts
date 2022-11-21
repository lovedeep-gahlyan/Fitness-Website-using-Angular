import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Appointment } from 'src/model/Appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  appointments: Appointment[];
  constructor() {
    this.appointments = [
      {
        id: '1',
        name: 'Lovedeep',
        age: 23,
        email: '08lovedeep@gmail.com',
        mobile: '9306122944',
        address: 'Electronic City',
        city: 'BLR',
        state: 'Karnataka',
        country: 'India',
        pincode: '560100',
        trainerPreference: 'None',
        physiotherapist: 'Yes',
        package: 5,
        weeks: 4,
        amount: 5000,
      },
    ];
  }

  getAppointments() {
    return of(this.appointments);
  }

  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
  }
}

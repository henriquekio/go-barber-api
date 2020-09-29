import Appointment from '../models/Appointment';
import { isEqual } from 'date-fns';

interface CreateAppointmentDto {
  provider: string;
  date: Date;
}

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public create({ provider, date }: CreateAppointmentDto): Appointment {
    const appointment = new Appointment({ provider, date });
    this.appointments.push(appointment);

    return appointment;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointments = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );
    return findAppointments || null;
  }
}

export default AppointmentsRepository;
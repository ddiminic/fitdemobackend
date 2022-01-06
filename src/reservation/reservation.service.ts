import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reservation } from 'src/database/schemas/reservation.schema';
import { ReservationDto } from 'src/dtos/reservation';

@Injectable()
export class ReservationService {
  constructor(
    @InjectModel('Reservation')
    private readonly reservationModel: Model<Reservation>,
  ) {}
  async create(reservationDto: ReservationDto): Promise<Reservation> {
    const createdReservation = new this.reservationModel(reservationDto);
    return createdReservation.save();
  }
  async findAll(): Promise<Reservation[]> {
    return this.reservationModel.find().exec();
  }
  async removeReservation(id: string): Promise<boolean> {
    let deleted = false;
    await this.reservationModel
      .deleteOne({ _id: id })
      .then(() => {
        deleted = true;
      })
      .catch((err) => {
        console.log(`Error deleting: ${err}`);
        deleted = false;
      });
    return deleted;
  }
}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Reservation } from 'src/database/schemas/reservation.schema';
import { ReservationDto } from 'src/dtos/reservation';
import { ReservationService } from './reservation.service';

@Controller('reservation')
export class ReservationController {
  constructor(private reservationService: ReservationService) {}

  @Get('/getReservations')
  async getReservations(): Promise<Reservation[]> {
    return this.reservationService.findAll();
  }

  @Post('/createReservation')
  async createReservation(
    @Body() createReservation: ReservationDto,
  ): Promise<Reservation> {
    return this.reservationService.create(createReservation);
  }

  @Get('/removeReservation/:id')
  async removeReservation(@Param('id') id: string): Promise<boolean> {
    return this.reservationService.removeReservation(id);
  }
}

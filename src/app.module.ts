import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { SportModule } from './sport/sport.module';
import { ConfigModule } from '@nestjs/config';
import { ReservationModule } from './reservation/reservation.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot(),
    SportModule,
    ReservationModule,
  ],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Sport, SportSchema } from 'src/database/schemas/sport.schema';
import { SportController } from './sport.controller';
import { SportService } from './sport.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sport.name, schema: SportSchema }]),
  ],
  controllers: [SportController],
  providers: [SportService],
  exports: [SportService],
})
export class SportModule {}

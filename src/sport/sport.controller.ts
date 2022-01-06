import { Controller, Get } from '@nestjs/common';
import { Sport } from 'src/database/schemas/sport.schema';
import { SportService } from './sport.service';

@Controller('sport')
export class SportController {
  constructor(private sportService: SportService) {}

  @Get('/getAllSports')
  async getAllSports(): Promise<Sport[]> {
    return this.sportService.findAll();
  }
}

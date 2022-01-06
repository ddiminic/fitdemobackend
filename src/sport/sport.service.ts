import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sport, SportDocument } from 'src/database/schemas/sport.schema';
import { SportDto } from 'src/dtos/sport';

@Injectable()
export class SportService {
  constructor(
    @InjectModel(Sport.name) private sportModel: Model<SportDocument>,
  ) {}

  async create(createSportDto: SportDto): Promise<Sport> {
    const createdSport = new this.sportModel(createSportDto);
    return createdSport.save();
  }

  async findAll(): Promise<Sport[]> {
    return this.sportModel.find().exec();
  }
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateNinjaDto } from './create-ninjs.dto';

export class UpdateNinjaDto extends PartialType(CreateNinjaDto) {}

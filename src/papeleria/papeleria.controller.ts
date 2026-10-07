import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PapeleriaService } from './papeleria.service.js';
import { CreatePapeleriaDto } from './dto/create-papeleria.dto.js';
import { UpdatePapeleriaDto } from './dto/update-papeleria.dto.js';

@Controller('papeleria')
export class PapeleriaController {
  constructor(private readonly papeleriaService: PapeleriaService) {}

  @Post()
  create(@Body() createPapeleriaDto: CreatePapeleriaDto) {
    return this.papeleriaService.create(createPapeleriaDto);
  }

  @Get()
  findAll() {
    return this.papeleriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.papeleriaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePapeleriaDto: UpdatePapeleriaDto) {
    return this.papeleriaService.update(+id, updatePapeleriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.papeleriaService.remove(+id);
  }
}

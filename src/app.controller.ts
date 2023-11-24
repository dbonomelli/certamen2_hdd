import { Controller, Get } from '@nestjs/common';
import { FeriadoService } from './services/feriado.service';
import { Feriado } from './model/feriado';

@Controller()
export class AppController {
  constructor(private readonly feriadoService: FeriadoService) {}

  @Get("/feriados")
  GetFeriados():Promise<Feriado[]> {
    return this.feriadoService.getFeriado();
  }
  @Get("/feriados/irrenunciables")
  GetFeriadosIrrenunciables():Promise<Feriado[]> {
    return this.feriadoService.getFeriadoIrrenunciable();
  }
  
}

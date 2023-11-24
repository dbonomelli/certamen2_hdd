import { Test, TestingModule } from '@nestjs/testing';
import { FeriadoService } from './feriado.service';

describe('FeriadoService', () => {
  let service: FeriadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeriadoService],
    }).compile();

    service = module.get<FeriadoService>(FeriadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

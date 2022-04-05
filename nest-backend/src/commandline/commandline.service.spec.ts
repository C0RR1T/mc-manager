import { Test, TestingModule } from '@nestjs/testing';
import { CommandlineService } from './commandline.service';

describe('CommandlineService', () => {
  let service: CommandlineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommandlineService],
    }).compile();

    service = module.get<CommandlineService>(CommandlineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { Sanitizer } from './sanitizer';

describe('Sanitizer', () => {
    let provider: Sanitizer;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [Sanitizer],
        }).compile();

        provider = module.get<Sanitizer>(Sanitizer);
    });

    it('should be defined', () => {
        expect(provider).toBeDefined();
    });
});

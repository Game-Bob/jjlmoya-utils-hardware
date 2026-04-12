import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { hardwareCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 3 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(3);
    });

    it('hardwareCategory should be defined', () => {
      expect(hardwareCategory).toBeDefined();
      expect(hardwareCategory.i18n).toBeDefined();
    });
  });
});


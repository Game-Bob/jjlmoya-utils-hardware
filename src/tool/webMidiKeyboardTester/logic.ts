export interface MidiNote {
  number: number;
  name: string;
  octave: number;
  isBlack: boolean;
}

export interface MidiRange {
  min: number;
  max: number;
}

const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const blackNotes = new Set([1, 3, 6, 8, 10]);

export function midiNoteName(note: number): string {
  return `${noteNames[note % 12]}${Math.floor(note / 12) - 1}`;
}

export function midiOctave(note: number): number {
  return Math.floor(note / 12) - 1;
}

export function buildMidiKeyboard(range: MidiRange): MidiNote[] {
  const min = Math.max(0, Math.min(127, range.min));
  const max = Math.max(min, Math.min(127, range.max));

  return Array.from({ length: max - min + 1 }, (_, index) => {
    const number = min + index;
    const pitchClass = number % 12;
    return {
      number,
      name: midiNoteName(number),
      octave: midiOctave(number),
      isBlack: blackNotes.has(pitchClass),
    };
  });
}

export function rangeFromSeenNotes(notes: number[]): MidiRange {
  if (notes.length === 0) return { min: 48, max: 83 };

  const minNote = Math.min(...notes);
  const maxNote = Math.max(...notes);
  const minOctaveStart = Math.max(0, Math.floor(minNote / 12) * 12);
  const maxOctaveEnd = Math.min(127, Math.floor(maxNote / 12) * 12 + 11);

  return { min: minOctaveStart, max: Math.max(maxOctaveEnd, minOctaveStart + 23) };
}

export function normalizePitchBend(lsb: number, msb: number): number {
  const raw = (msb << 7) + lsb;
  return Math.max(-1, Math.min(1, (raw - 8192) / 8192));
}

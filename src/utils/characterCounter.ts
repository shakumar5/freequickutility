export interface CharCountResult {
  total: number;
  withoutSpaces: number;
  letters: number;
  digits: number;
  spaces: number;
  specialChars: number;
  lines: number;
}

export function countCharacters(text: string): CharCountResult {
  return {
    total: text.length,
    withoutSpaces: text.replace(/\s/g, '').length,
    letters: (text.match(/[a-zA-Z]/g) || []).length,
    digits: (text.match(/\d/g) || []).length,
    spaces: (text.match(/\s/g) || []).length,
    specialChars: (text.match(/[^a-zA-Z0-9\s]/g) || []).length,
    lines: text ? text.split('\n').length : 0,
  };
}

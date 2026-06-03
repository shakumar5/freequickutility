export interface WordCountResult {
  words: number;
  characters: number;
  charactersNoSpaces: number;
  sentences: number;
  paragraphs: number;
  readingTime: string;
  speakingTime: string;
}

export function countWords(text: string): WordCountResult {
  const trimmed = text.trim();

  if (!trimmed) {
    return {
      words: 0,
      characters: 0,
      charactersNoSpaces: 0,
      sentences: 0,
      paragraphs: 0,
      readingTime: '0 min',
      speakingTime: '0 min',
    };
  }

  const words = trimmed.split(/\s+/).filter((w) => w.length > 0).length;
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, '').length;
  const sentences = trimmed.split(/[.!?]+/).filter((s) => s.trim().length > 0).length;
  const paragraphs = trimmed.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length;

  const readingMinutes = Math.ceil(words / 200);
  const speakingMinutes = Math.ceil(words / 130);

  return {
    words,
    characters,
    charactersNoSpaces,
    sentences,
    paragraphs,
    readingTime: readingMinutes <= 1 ? '< 1 min' : `${readingMinutes} min`,
    speakingTime: speakingMinutes <= 1 ? '< 1 min' : `${speakingMinutes} min`,
  };
}

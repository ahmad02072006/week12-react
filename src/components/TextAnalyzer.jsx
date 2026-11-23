import { useState } from 'react';

const SAMPLE =
  'React state is a component\'s private memory. When the setter runs, React re-renders! Never mutate state directly. Always create a new copy instead.';

// Everything below is DERIVED from `text`, so it needs no state of its own.
function analyze(text) {
  const trimmed = text.trim();
  const wordList = trimmed === '' ? [] : trimmed.split(/\s+/);
  const sentences =
    trimmed === '' ? 0 : (trimmed.match(/[^.!?]+[.!?]*/g) || []).filter((s) => s.trim() !== '').length;
  const longest = wordList
    .map((w) => w.replace(/[^\p{L}\p{N}'-]/gu, ''))
    .reduce((a, w) => (w.length > a.length ? w : a), '');

  return {
    characters: text.length,
    charactersNoSpaces: text.replace(/\s/g, '').length,
    words: wordList.length,
    sentences,
    readingMinutes: wordList.length === 0 ? 0 : Math.max(1, Math.ceil(wordList.length / 200)),
    longest,
  };
}

function TextAnalyzer() {
  const [text, setText] = useState('');
  const stats = analyze(text);

  return (
    <section className="section" aria-labelledby="analyzer-title">
      <h2 id="analyzer-title">Live Text Analyzer</h2>
      <p className="muted">One state variable (text). Every number below is computed from it on each render.</p>

      <textarea
        className="input"
        rows={6}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste some text..."
        aria-label="Text to analyze"
      />

      <div className="row">
        <button className="btn" onClick={() => setText(SAMPLE)}>Load sample</button>
        <button className="btn" onClick={() => setText('')} disabled={text === ''}>Clear</button>
      </div>

      <dl className="stats">
        <div><dt>Words</dt><dd>{stats.words}</dd></div>
        <div><dt>Characters</dt><dd>{stats.characters}</dd></div>
        <div><dt>No spaces</dt><dd>{stats.charactersNoSpaces}</dd></div>
        <div><dt>Sentences</dt><dd>{stats.sentences}</dd></div>
        <div><dt>Reading time</dt><dd>{stats.readingMinutes} min</dd></div>
        <div><dt>Longest word</dt><dd>{stats.longest || '—'}</dd></div>
      </dl>
    </section>
  );
}

export default TextAnalyzer;

import { useState } from 'react';

function WordCount() {
  const [text, setText] = useState('');
  const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  return (
    <div>
      <textarea
        className="input"
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        aria-label="Text to count"
      />
      <p className="muted">
        {words} words · {text.length} characters
      </p>
    </div>
  );
}

export default WordCount;
import { useState, useEffect } from 'react';

const START = 2 * 86400 + 6 * 3600 + 4 * 60 + 50; // 02d 06h 04m 50s
const pad = (n) => String(n).padStart(2, '0');

function Countdown() {
  const [left, setLeft] = useState(START);

  useEffect(() => {
    const id = setInterval(() => setLeft((prev) => (prev > 0 ? prev - 1 : 0)), 1000);
    return () => clearInterval(id); // cleanup on unmount
  }, []);

  const d = Math.floor(left / 86400);
  const h = Math.floor((left % 86400) / 3600);
  const m = Math.floor((left % 3600) / 60);
  const s = left % 60;

  return (
    <div className="countdown">
      <small>Offer ends in:</small>
      <strong>
        {pad(d)}d : {pad(h)}h : {pad(m)}m : {pad(s)}s
      </strong>
    </div>
  );
}

export default Countdown;
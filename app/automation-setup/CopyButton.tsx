'use client';

import { useState } from 'react';

export default function CopyButton({ text }: { text: string }) {
  const [done, setDone] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Older browsers: select the text in a hidden box and copy it
      const box = document.createElement('textarea');
      box.value = text;
      document.body.appendChild(box);
      box.select();
      document.execCommand('copy');
      document.body.removeChild(box);
    }
    setDone(true);
    setTimeout(() => setDone(false), 2000);
  }

  return (
    <button type="button" className="as-copy" onClick={copy} aria-live="polite">
      {done ? 'Copied!' : 'Copy prompt'}
    </button>
  );
}

import content from './content.json';
import CopyButton from './CopyButton';

type Step = {
  id: string;
  title: string;
  do: string[];
  tip?: string;
  prompt?: string;
  prompt_id?: string;
};

type Chapter = {
  num: number;
  title: string;
  intro: string;
  steps: Step[];
};

const chapters = content.chapters as Chapter[];

export default function AutomationSetup() {
  return (
    <main className="as-wrap">
      <header className="as-hero">
        <h1>Automation Setup for Creators</h1>
        <p>
          Build your own AI system that edits, posts and boosts your videos on Instagram, Facebook and YouTube.
          <br />
          You shoot. AI does the rest. Follow the steps below along with the video.
        </p>
        <p style={{ fontSize: '13px', color: '#777' }}>
          Stuck on a step? Click <strong>Copy prompt</strong>, paste it into your AI (Claude Code in VS Code), and it will do that part of the setup with you.
        </p>
      </header>

      <nav className="as-chips" aria-label="Chapters">
        {chapters.map((c) => (
          <a key={c.num} href={`#chapter-${c.num}`}>
            {c.num}. {c.title}
          </a>
        ))}
      </nav>

      {chapters.map((c) => (
        <section key={c.num} id={`chapter-${c.num}`} className="as-chapter">
          <h2>
            <span className="as-num">Chapter {c.num}:</span> {c.title}
          </h2>
          <p className="as-intro">{c.intro}</p>

          {c.steps.map((s) => (
            <article key={s.id} id={`step-${s.id.replace('.', '-')}`} className="as-step">
              <div className="as-sid">Chapter {c.num} · Step {s.id}</div>
              <h3>{s.title}</h3>
              <ul>
                {s.do.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
              {s.tip && <div className="as-tip">{s.tip}</div>}
              {s.prompt && (
                <div className="as-prompt">
                  <div className="as-prompt-head">
                    <span>Prompt {s.prompt_id?.replace('P', '')}</span>
                    <CopyButton text={s.prompt} />
                  </div>
                  <pre>{s.prompt}</pre>
                </div>
              )}
            </article>
          ))}
        </section>
      ))}

      <p className="as-note">
        All names in the examples are made up. Never paste your real tokens, passwords or keys into a chat or a website.
        <br />
        Prices and menu names can change, so check the official pages.
      </p>
    </main>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automation Setup for Creators',
  description:
    'Step-by-step setup for creators: build an AI system that edits, posts and boosts your videos on Instagram, Facebook and YouTube. Every step, with copy-paste prompts for your AI.',
};

export default function AutomationSetupLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', background: 'transparent', fontFamily: "'Poppins', sans-serif" }}>
      <style>{`
        .as-wrap { max-width: 860px; margin: 0 auto; padding: 56px 20px 80px; }
        .as-hero { text-align: center; margin-bottom: 32px; }
        .as-hero h1 { font-size: clamp(30px,6vw,46px); font-weight: 900; color: #111; letter-spacing: -1px; line-height: 1.15; }
        .as-hero p { font-size: 15px; color: #555; margin-top: 14px; line-height: 1.7; }
        .as-chips { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin: 28px 0 40px; }
        .as-chips a { font-size: 12px; font-weight: 600; color: #0F9E86; background: #fff; border: 1px solid rgba(15,158,134,0.35); border-radius: 999px; padding: 7px 14px; text-decoration: none; }
        .as-chips a:hover { background: #0F9E86; color: #fff; }
        .as-chapter { margin-bottom: 56px; scroll-margin-top: 24px; }
        .as-chapter > h2 { font-size: clamp(22px,4vw,28px); font-weight: 800; color: #111; }
        .as-chapter > .as-intro { font-size: 14px; color: #666; margin: 6px 0 20px; }
        .as-num { color: #0F9E86; }
        .as-step { border: 1px solid rgba(0,0,0,0.06); background: #fff; border-radius: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.04); padding: 22px 24px; margin-bottom: 14px; scroll-margin-top: 24px; }
        .as-sid { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #0F9E86; }
        .as-step h3 { font-size: 17px; font-weight: 700; color: #111; margin: 4px 0 10px; }
        .as-step ul { padding-left: 20px; display: flex; flex-direction: column; gap: 7px; }
        .as-step li { font-size: 14px; color: #444; line-height: 1.7; }
        .as-tip { margin-top: 14px; background: #fff8e6; border-left: 4px solid #f5a623; border-radius: 8px; padding: 10px 14px; font-size: 13px; color: #6b4e00; line-height: 1.6; }
        .as-prompt { margin-top: 16px; border: 1px solid rgba(15,158,134,0.4); background: #f2fbf9; border-radius: 12px; overflow: hidden; }
        .as-prompt-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 8px 12px; background: #e3f6f2; }
        .as-prompt-head span { font-size: 12px; font-weight: 700; color: #0b7a67; }
        .as-copy { font: inherit; font-size: 12px; font-weight: 700; color: #fff; background: #0F9E86; border: 0; border-radius: 8px; padding: 7px 14px; cursor: pointer; }
        .as-copy:hover { background: #0b7a67; }
        .as-prompt pre { white-space: pre-wrap; word-break: break-word; font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 12.5px; line-height: 1.65; color: #1c3b36; padding: 14px; margin: 0; }
        .as-note { text-align: center; font-size: 12px; color: #888; line-height: 1.7; margin-top: 40px; }
        @media (max-width: 520px) { .as-step { padding: 18px 16px; } }
      `}</style>
      {children}
    </div>
  );
}

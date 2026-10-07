'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ProjectsPage() {
  const [loaded, setLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const gymWebsite = {
    images: [
      "/images/projects/adiyash-gym-home.png",
      "/images/projects/adiyash-gym-offer.png",
      "/images/projects/adiyash-gym-locations.png"
    ],
    url: "https://www.adiyashgym.in/"
  };

  const skills = [
    { group: "Web", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
    { group: "Backend & Data", items: ["Python", "FastAPI", "Supabase", "MongoDB"] },
    { group: "Automation & AI", items: ["AI-assisted development", "WhatsApp Business API", "Meta Graph API", "YouTube API", "Remotion"] },
    { group: "Deploy & Tools", items: ["Railway", "Vercel", "Netlify", "Docker", "Git"] },
    { group: "Marketing", items: ["Paid ads", "Lead tracking", "Video editing", "Photo editing"] }
  ];

  const projects = [
    {
      name: "Info Hub: AI Video Automation",
      color: "#EF4444",
      tint: "rgba(239, 68, 68, 0.1)",
      tintBorder: "rgba(239, 68, 68, 0.25)",
      description:
        "A personal project: a faceless video channel that runs itself. It writes the scripts, makes the voice-over and visuals, builds vertical videos, and posts them to Instagram, Facebook and YouTube on a daily schedule. It has an approval dashboard and a status report that tracks growth.",
      tech: ["Python", "FastAPI", "Remotion", "Meta Graph API", "YouTube API", "Docker", "Railway"]
    },
    {
      name: "This Website (TOZI)",
      color: "#111111",
      tint: "rgba(17, 17, 17, 0.06)",
      tintBorder: "rgba(17, 17, 17, 0.2)",
      description:
        "My own site: fitness journey with scroll-story animations, marketing services, and this portfolio. Built mobile-first with smooth scroll motion and no animation libraries.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Netlify"]
    },
    {
      name: "Meta Leads Tracker + Follow-up Report",
      color: "#3B82F6",
      tint: "rgba(59, 130, 246, 0.1)",
      tintBorder: "rgba(59, 130, 246, 0.25)",
      description:
        "Every lead used to land in three different places — Instagram DMs, the website, and Meta ads. I built a Google Sheets + Apps Script system that pulls them all into one live tracker with automatic follow-up reports, so no enquiry falls through the cracks and the team always knows who to call next.",
      tech: ["Google Sheets", "Apps Script", "Meta Business", "Instagram"]
    },
    {
      name: "Gym Website (adiyash-gym-website)",
      color: "#2DD4BF",
      tint: "rgba(45, 212, 191, 0.1)",
      tintBorder: "rgba(45, 212, 191, 0.25)",
      description:
        "The marketing site for all 7 branches of the gym chain, built to convert visitors into leads, not just look nice. It has a branch locator, live offers, and WhatsApp-routed enquiries, all in one fast, mobile-first site.",
      tech: ["Next.js", "Tailwind CSS"],
      hasDemo: true
    },
    {
      name: "CRM (adiyash-crm)",
      color: "#8B5CF6",
      tint: "rgba(139, 92, 246, 0.1)",
      tintBorder: "rgba(139, 92, 246, 0.25)",
      description:
        "The system that actually runs the gym day-to-day — member profiles, enquiries, subscriptions, billing, attendance, and staff, all in one place. Built on Next.js and Supabase, it replaced spreadsheets and paper registers across all 7 branches with one real-time source of truth.",
      tech: ["Next.js", "Supabase", "TypeScript"]
    },
    {
      name: "Biometric Integration",
      color: "#F59E0B",
      tint: "rgba(245, 158, 11, 0.1)",
      tintBorder: "rgba(245, 158, 11, 0.25)",
      description:
        "Connected eSSL fingerprint machines at every branch to the CRM through custom ESP32 relay boards, so a member's attendance is logged the instant they scan in — no manual entry, no end-of-day reconciliation. Attendance went from a guessing game to a live number the business can actually trust.",
      tech: ["eSSL", "ESP32", "IoT"]
    },
    {
      name: "Automation Software (adiyashauto)",
      color: "#25D366",
      tint: "rgba(37, 211, 102, 0.1)",
      tintBorder: "rgba(37, 211, 102, 0.25)",
      description:
        "A WhatsApp automation engine wired into Meta's WhatsApp Business API that sends bill receipts, renewal reminders, balance-due nudges, and re-engages inactive members automatically. It also follows up on enquiries — work that used to eat hours of staff time every day now happens without anyone lifting a finger.",
      tech: ["FastAPI", "MongoDB", "WhatsApp Business API"]
    },
    {
      name: "Integrations & APIs",
      color: "#EC4899",
      tint: "rgba(236, 72, 153, 0.1)",
      tintBorder: "rgba(236, 72, 153, 0.25)",
      description:
        "The connective tissue holding everything together — Meta Cloud API, Supabase, MongoDB, Railway, and Vercel, all wired to talk to each other so leads, payments, attendance, and messages flow between systems without manual re-entry. This is what turns six separate tools into one working ecosystem.",
      tech: ["Meta Cloud API", "Supabase", "MongoDB", "Railway", "Vercel"]
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #f7f7f8 0%, #ececee 55%, #e2e2e6 100%)',
      padding: '80px 24px 60px',
      fontFamily: "'Poppins', sans-serif"
    }}>

      {/* Back Button */}
      <Link
        href="/"
        style={{
          position: 'fixed',
          top: '32px',
          left: '32px',
          fontSize: '12px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#999',
          textDecoration: 'none',
          zIndex: 50,
          transition: 'color 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#222'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#999'}
      >
        ← Back
      </Link>

      {/* Main Content */}
      <div style={{
        maxWidth: '820px',
        margin: '0 auto',
        transition: 'all 0.7s ease',
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(20px)'
      }}>

        {/* About Me Section */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 16px',
            borderRadius: '100px',
            background: 'rgba(45, 212, 191, 0.1)',
            border: '1px solid rgba(45, 212, 191, 0.2)',
            marginBottom: '20px'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#2DD4BF',
              display: 'inline-block'
            }} />
            <span style={{
              fontSize: '10px',
              color: '#2DD4BF',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: 500
            }}>
              The builder behind this
            </span>
          </div>
          <h1 style={{
            fontSize: 'clamp(36px, 7vw, 64px)',
            fontWeight: 900,
            color: '#111',
            letterSpacing: '-0.02em',
            marginBottom: '20px',
            lineHeight: 1.05
          }}>
            VIBE <span style={{ color: '#2DD4BF' }}>CODER</span>
          </h1>
        </div>

        <div data-reveal style={{
          background: '#ffffff',
          border: '1px solid rgba(0,0,0,0.06)',
          borderRadius: '20px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
          padding: '28px 32px',
          marginBottom: '20px'
        }}>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.8, margin: 0 }}>
            I'm Saleem Shaikh — <strong style={{ color: '#111' }}>Tozi</strong>. I started with zero coding
            background. No degree, no bootcamp, just curiosity and a lot of trial and error. I build real,
            working software by describing what I want to AI and reviewing and directing the results, not by
            writing code myself. That's what I mean by <strong style={{ color: '#0F9E86' }}>Vibe Coder</strong>.
          </p>
        </div>

        <div data-reveal style={{
          background: '#ffffff',
          border: '1px solid rgba(0,0,0,0.06)',
          borderRadius: '20px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
          padding: '28px 32px',
          marginBottom: '40px'
        }}>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.8, margin: 0 }}>
            Today I run the entire tech stack behind my family's gym business — a 7-branch chain in Mumbai.
            Lead tracking, the marketing website, the CRM, biometric attendance, WhatsApp automation, and all
            the integrations wiring it together. Everything below is live and actually running the business,
            not a portfolio exercise.
          </p>
        </div>

        <div data-reveal style={{
          background: '#ffffff',
          border: '1px solid rgba(0,0,0,0.06)',
          borderRadius: '20px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
          padding: '28px 32px',
          marginBottom: '20px'
        }}>
          <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.8, margin: 0 }}>
            My marketing journey started the same way, with curiosity. I taught myself digital marketing from
            YouTube, social media and hands-on experiments, and applied every idea in real time: websites,
            automation, paid ads, video and photo editing. Today I combine all of it with AI. My approach is
            simple: <strong style={{ color: '#0F9E86' }}>learn, test, adapt, and execute</strong>.
          </p>
        </div>

        <div data-reveal style={{
          background: '#ffffff',
          border: '1px solid rgba(0,0,0,0.06)',
          borderRadius: '20px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
          padding: '28px 32px',
          marginBottom: '40px'
        }}>
          <div style={{ fontSize: '11px', color: '#0F9E86', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Skills</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {skills.map((s) => (
              <div key={s.group} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '130px', fontSize: '12px', fontWeight: 600, color: '#111' }}>{s.group}</span>
                {s.items.map((item) => (
                  <span key={item} style={{ padding: '4px 12px', fontSize: '11px', fontWeight: 500, color: '#0F9E86', background: 'rgba(45, 212, 191, 0.1)', border: '1px solid rgba(45, 212, 191, 0.25)', borderRadius: '100px' }}>{item}</span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div style={{
          width: '48px',
          height: '2px',
          background: 'rgba(45, 212, 191, 0.4)',
          margin: '0 auto 40px'
        }} />

        {/* Projects Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 16px',
            borderRadius: '100px',
            background: 'rgba(45, 212, 191, 0.1)',
            border: '1px solid rgba(45, 212, 191, 0.2)',
            marginBottom: '16px'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#2DD4BF',
              display: 'inline-block'
            }} />
            <span style={{
              fontSize: '10px',
              color: '#2DD4BF',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: 500
            }}>
              Personal and client work
            </span>
          </div>
          <h2 data-reveal style={{
            fontSize: 'clamp(28px, 5vw, 44px)',
            fontWeight: 800,
            color: '#111',
            letterSpacing: '-0.02em',
            marginBottom: '8px'
          }}>
            MY <span style={{ color: '#2DD4BF' }}>WORK</span>
          </h2>
          <p style={{ fontSize: '14px', color: '#888' }}>A showcase of what I've built and shipped</p>
        </div>

        {/* Project Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {projects.map((project, idx) => (
            <div
              key={idx}
              data-reveal
              style={{
                background: '#ffffff',
                border: '1px solid rgba(0,0,0,0.06)',
                borderLeft: `4px solid ${project.color}`,
                borderRadius: '16px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = `0 12px 32px ${project.tint}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.04)';
              }}
            >
              {project.hasDemo && (
                <div
                  onClick={() => setSelectedImage(gymWebsite.images[0])}
                  style={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '48%',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                >
                  <img
                    src={gymWebsite.images[0]}
                    alt={project.name}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    fontSize: '10px',
                    color: 'rgba(255,255,255,0.7)',
                    background: 'rgba(0,0,0,0.5)',
                    padding: '4px 12px',
                    borderRadius: '100px'
                  }}>
                    Click to expand
                  </div>
                </div>
              )}

              {project.hasDemo && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '4px',
                  padding: '4px'
                }}>
                  {gymWebsite.images.slice(1).map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedImage(img)}
                      style={{
                        position: 'relative',
                        paddingTop: '48%',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        borderRadius: '8px'
                      }}
                    >
                      <img
                        src={img}
                        alt={`Screenshot ${i + 2}`}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}

              <div style={{ padding: '24px 28px 28px' }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#111',
                  marginBottom: '10px',
                  letterSpacing: '-0.01em'
                }}>
                  {project.name}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#555',
                  lineHeight: '1.7',
                  marginBottom: '16px'
                }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: project.hasDemo ? '20px' : 0 }}>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '4px 14px',
                        fontSize: '11px',
                        fontWeight: 500,
                        color: project.color,
                        background: project.tint,
                        border: `1px solid ${project.tintBorder}`,
                        borderRadius: '100px'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.hasDemo && (
                  <a
                    href={gymWebsite.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 24px',
                      background: project.color,
                      color: '#fff',
                      fontSize: '14px',
                      fontWeight: 500,
                      borderRadius: '12px',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = `0 8px 24px ${project.tint}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    Visit live site →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <a href="https://www.instagram.com/saatozi" target="_blank" rel="noopener noreferrer" style={{ padding: '10px 20px', borderRadius: '10px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none', border: '1px solid rgba(0,0,0,0.08)', background: '#fff', color: '#0F9E86' }}>Instagram</a>
            <a href="https://wa.me/918657282577" target="_blank" rel="noopener noreferrer" style={{ padding: '10px 20px', borderRadius: '10px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none', border: '1px solid rgba(0,0,0,0.08)', background: '#fff', color: '#0F9E86' }}>WhatsApp</a>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.9)',
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              style={{
                position: 'fixed',
                top: '32px',
                left: '32px',
                zIndex: 101,
                fontSize: '12px',
                letterSpacing: '2px',
                color: '#888',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s'
              }}
              onClick={() => setSelectedImage(null)}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#888'}
            >
              ← CLOSE
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '12px'
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </div>
  );
}

'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ProjectsPage() {
  const [loaded, setLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const project = {
    name: "Adiyash Gym — Multi-Branch Fitness Website",
    description:
      "A multi-location gym website for 7 branches across Mumbai, featuring online booking, a branch locator, and WhatsApp lead routing.",
    tech: ["Next.js", "Tailwind CSS"],
    images: [
      "/images/projects/adiyash-gym-home.png",
      "/images/projects/adiyash-gym-offer.png",
      "/images/projects/adiyash-gym-locations.png"
    ],
    url: "https://www.adiyashgym.in/"
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #f7f7f8 0%, #ececee 55%, #e2e2e6 100%)',
      padding: '80px 24px 60px'
    }}>
      
      {/* Back Button */}
      <Link
        href="/marketing-services"
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
        maxWidth: '960px',
        margin: '0 auto',
        transition: 'all 0.7s ease',
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(20px)'
      }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
              Client Work
            </span>
          </div>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 800,
            color: '#111',
            letterSpacing: '-0.02em',
            marginBottom: '8px'
          }}>
            MY <span style={{ color: '#2DD4BF' }}>WORK</span>
          </h1>
          <p style={{ fontSize: '14px', color: '#888' }}>A showcase of projects I've built</p>
          <div style={{
            width: '48px',
            height: '2px',
            background: 'rgba(45, 212, 191, 0.4)',
            margin: '16px auto 0'
          }} />
        </div>

        {/* Project Card */}
        <div style={{
          background: '#ffffff',
          border: '1px solid rgba(0,0,0,0.06)',
          borderRadius: '20px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          cursor: 'default'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(45, 212, 191, 0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.04)';
        }}>
          
          {/* Main Image */}
          <div
            onClick={() => setSelectedImage(project.images[0])}
            style={{
              position: 'relative',
              width: '100%',
              paddingTop: '56.25%',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
          >
            <img
              src={project.images[0]}
              alt={project.name}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
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

          {/* Secondary Images Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4px',
            padding: '4px'
          }}>
            {project.images.slice(1).map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(img)}
                style={{
                  position: 'relative',
                  paddingTop: '56.25%',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  borderRadius: '8px'
                }}
              >
                <img
                  src={img}
                  alt={`Screenshot ${idx + 2}`}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            ))}
          </div>

          {/* Project Details */}
          <div style={{ padding: '24px 28px 32px' }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#111',
              marginBottom: '12px',
              letterSpacing: '-0.01em'
            }}>
              {project.name}
            </h2>
            <p style={{
              fontSize: '14px',
              color: '#555',
              lineHeight: '1.7',
              marginBottom: '16px'
            }}>
              {project.description}
            </p>

            {/* Tech Tags */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '20px'
            }}>
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: '4px 14px',
                    fontSize: '11px',
                    fontWeight: 500,
                    color: '#0F9E86',
                    background: 'rgba(45, 212, 191, 0.1)',
                    border: '1px solid rgba(45, 212, 191, 0.2)',
                    borderRadius: '100px'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Live Site Button */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: '#2DD4BF',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 500,
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#26bfab';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(45, 212, 191, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#2DD4BF';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Visit live site →
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ fontSize: '12px', color: '#aaa' }}>More projects coming soon</p>
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
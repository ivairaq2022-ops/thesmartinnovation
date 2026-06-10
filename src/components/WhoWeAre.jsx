import React, { useState } from 'react';
import { Target, Eye, Activity, Terminal } from 'lucide-react';

const WhoWeAre = () => {
  const [activeConsoleTab, setActiveConsoleTab] = useState('SEC_PROTOCOL');

  const consoleContent = {
    SEC_PROTOCOL: {
      title: 'SECURITY_PROTOCOL_v4.2.1',
      status: 'SHIELD ACTIVE',
      logs: [
        'INITIATING THREAT MATRIX SCAN...',
        'COMPLIANCE: NIST/ISO-27001 STATUS OK',
        'ZERO-TRUST ARCHITECTURE: ENFORCED',
        'FIREWALLS & WAF: OPERATIONAL [100%]',
        'PENETRATION DETECT: STAGE 1 CLEAN'
      ],
      desc: 'Layered defense, real-time threat telemetry, compliance alignment, and corporate cyber awareness programs.'
    },
    AI_CORE: {
      title: 'AI_INTELLIGENCE_CORE_v2.0',
      status: 'NEURAL NODE ONLINE',
      logs: [
        'SYNAPSE INDEXING COMPLETE...',
        'MODEL INFERENCE LATENCY: 12ms',
        'PROCESS AUTO: 84% REDUCTION IN OVERHEAD',
        'PREDICTIVE TELEMETRY: ACCURACY 98.4%',
        'REDUNDANCY NODES: OPERATIONAL'
      ],
      desc: 'Responsible machine learning integration, process automation, predictive workflows, and custom LLM interfaces.'
    },
    IT_INFRA: {
      title: 'IT_INFRASTRUCTURE_v9.8',
      status: 'GRID INTEGRITY 100%',
      logs: [
        'CLOUD INSTANCE SYNC: OK',
        'WAN/LAN TOPOLOGY: STABLE',
        'VIRTUAL CLUSTERS: ACTIVE [x48]',
        'AUTOMATED BACKUP INDEXING: SUCCESS',
        'HELP DESK SERVICE CHANNELS: READY'
      ],
      desc: 'High-availability server infrastructure, enterprise cloud architecture, systems integration, and helpdesk support.'
    }
  };

  return (
    <section className="section" id="who-we-are">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Who We Are</span>
          <h2>Your partner in digital transformation</h2>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <div className="about-text">
              <p>
                <strong>The Smart Innovation</strong> is a technology company dedicated to helping
                businesses thrive in a connected world. We combine deep expertise in information
                technology, proactive cybersecurity, and artificial intelligence to deliver solutions
                that are secure, scalable, and aligned with your goals.
              </p>
              <p>
                From infrastructure and cloud to threat protection and intelligent automation, our team
                works alongside you to design, implement, and support systems you can trust.
              </p>
            </div>

            {/* Premium Cyber Capabilities Console */}
            <div style={{
              background: '#020306',
              border: '1px solid rgba(0, 240, 255, 0.2)',
              borderRadius: '4px',
              padding: '20px',
              marginTop: '32px',
              fontFamily: 'var(--font-mono)',
              position: 'relative'
            }} className="cyber-corners">
              <div style={{
                display: 'flex',
                gap: '8px',
                borderBottom: '1px solid rgba(0, 240, 255, 0.1)',
                paddingBottom: '12px',
                marginBottom: '16px',
                overflowX: 'auto'
              }}>
                {Object.keys(consoleContent).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveConsoleTab(tab)}
                    style={{
                      background: activeConsoleTab === tab ? 'var(--color-cyan-dim)' : 'transparent',
                      border: `1px solid ${activeConsoleTab === tab ? 'var(--color-cyan)' : 'rgba(255,255,255,0.08)'}`,
                      color: activeConsoleTab === tab ? 'var(--color-cyan)' : 'var(--text-muted)',
                      padding: '4px 12px',
                      fontSize: '11px',
                      cursor: 'pointer',
                      borderRadius: '2px',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.2s'
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '8px' }}>
                  <span style={{ color: '#fff', fontWeight: 'bold' }}>{consoleContent[activeConsoleTab].title}</span>
                  <span style={{
                    color: activeConsoleTab === 'AI_CORE' ? 'var(--color-purple)' : 'var(--color-cyan)',
                    fontSize: '10px'
                  }}>
                    [{consoleContent[activeConsoleTab].status}]
                  </span>
                </div>
                
                <div style={{
                  background: 'rgba(0,0,0,0.4)',
                  padding: '12px',
                  borderRadius: '3px',
                  fontSize: '11px',
                  color: '#94a3b8',
                  borderLeft: '2px solid rgba(0, 240, 255, 0.3)',
                  marginBottom: '12px'
                }}>
                  {consoleContent[activeConsoleTab].desc}
                </div>

                <div style={{ fontSize: '11px', color: 'rgba(0, 240, 255, 0.7)', lineHeight: '1.5' }}>
                  {consoleContent[activeConsoleTab].logs.map((log, i) => (
                    <div key={i} style={{ display: 'flex', gap: '8px' }}>
                      <span style={{ color: 'rgba(255,255,255,0.2)' }}>[{i}]</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="about-cards">
            <article className="value-card">
              <span className="value-icon">
                <Target size={28} style={{ color: 'var(--color-purple)' }} />
              </span>
              <div>
                <h3>Mission</h3>
                <p>Empower organizations with smart, secure technology that drives lasting innovation.</p>
              </div>
            </article>

            <article className="value-card" style={{ borderLeftColor: 'var(--color-cyan)', borderImage: 'none' }}>
              <span className="value-icon">
                <Eye size={28} style={{ color: 'var(--color-cyan)' }} />
              </span>
              <div>
                <h3>Vision</h3>
                <p>Be the trusted partner for IT, cybersecurity, and AI excellence across every industry we serve.</p>
              </div>
            </article>

            <article className="value-card">
              <span className="value-icon">
                <Activity size={28} style={{ color: 'var(--color-purple)' }} />
              </span>
              <div>
                <h3>Values</h3>
                <p>Integrity, expertise, and continuous improvement in everything we deliver.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

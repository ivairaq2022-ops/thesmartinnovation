import React, { useState } from 'react';
import { ShieldCheck, Cpu, Terminal, Zap, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'
  const [nodeCount, setNodeCount] = useState(5);
  const [activeFaq, setActiveFaq] = useState(null);

  const plans = [
    {
      id: 'basic',
      name: 'SENTINEL_BASIC',
      price: billingCycle === 'monthly' ? 199 : 159,
      desc: 'Essential threat intelligence and managed network security monitoring.',
      features: [
        '8/5 Managed Threat Monitoring',
        'Standard Edge Firewall Audits',
        '1 Core AI Automation Node',
        'Weekly Offline Backups',
        'Email SLA Response < 12 Hours'
      ],
      icon: <Terminal size={24} style={{ color: 'var(--color-cyan)' }} />,
      featured: false
    },
    {
      id: 'pro',
      name: 'AEGIS_PRO',
      price: billingCycle === 'monthly' ? 499 : 399,
      desc: '24/7 endpoint detection, response engineering, and neural-net insights.',
      features: [
        '24/7 Security Operations Center (SOC)',
        'Zero-Day Threat Defense Arrays',
        '5 Core AI Neural Nodes',
        'Real-Time Cloud Replication',
        'Priority Hot-Fix SLA < 1 Hour',
        'Compliance Readiness Reports'
      ],
      icon: <ShieldCheck size={24} style={{ color: 'var(--color-purple)' }} />,
      featured: true
    },
    {
      id: 'enterprise',
      name: 'QUANTUM_ENT',
      price: 'CUSTOM',
      desc: 'Complete zero-trust transformation, custom AI models, and dedicated engineers.',
      features: [
        'Custom Zero-Trust Architectures',
        'On-Prem / Private Cloud LLM Tuning',
        'Dedicated DevSecOps Team Node',
        'Continuous Automated Penetration Scans',
        'Direct Audio Hotline Support 24/7/365',
        'Unlimited Node Integration'
      ],
      icon: <Cpu size={24} style={{ color: 'var(--color-cyan)' }} />,
      featured: false
    }
  ];

  const faqs = [
    {
      question: 'How are secure nodes scaled inside systems?',
      answer: 'Nodes represent secure virtual environments, server containers, or user workstations. You can increase or decrease your active node allocation dynamically through the admin dashboard, and prices scale linearly.'
    },
    {
      question: 'What is the standard threat response SLA?',
      answer: 'For SENTINEL_BASIC, support is triggered within 12 hours. For AEGIS_PRO, our team responds to incident packets within 1 hour. QUANTUM_ENTERPRISE features active automated containment within seconds and direct engineer response.'
    },
    {
      question: 'Do you support air-gapped on-premises deployments?',
      answer: 'Yes. QUANTUM_ENTERPRISE licenses allow full containerized deployments behind physical firewalls, including local offline fine-tuning of machine learning models to prevent external data leaks.'
    }
  ];

  // Calculate dynamic node cost
  const calculateNodeCost = () => {
    const baseNodePrice = billingCycle === 'monthly' ? 45 : 36;
    return nodeCount * baseNodePrice;
  };

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>License Activation</span>
          <h2>Nodes & Systems Subscriptions</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '16px auto 0' }}>
            Select your threat intelligence response SLA, neural-net automation capacity, and core node infrastructure.
          </p>
        </div>

        {/* Billing Cycle Switch */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '48px',
          fontFamily: 'var(--font-mono)'
        }}>
          <button
            onClick={() => setBillingCycle('monthly')}
            style={{
              background: billingCycle === 'monthly' ? 'var(--color-cyan-dim)' : 'transparent',
              border: `1px solid ${billingCycle === 'monthly' ? 'var(--color-cyan)' : 'rgba(255,255,255,0.08)'}`,
              color: billingCycle === 'monthly' ? 'var(--color-cyan)' : 'var(--text-muted)',
              padding: '8px 20px',
              fontSize: '12px',
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'all 0.2s'
            }}
          >
            CYCLE: MONTHLY
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            style={{
              background: billingCycle === 'yearly' ? 'var(--color-purple-dim)' : 'transparent',
              border: `1px solid ${billingCycle === 'yearly' ? 'var(--color-purple)' : 'rgba(255,255,255,0.08)'}`,
              color: billingCycle === 'yearly' ? 'var(--color-purple)' : 'var(--text-muted)',
              padding: '8px 20px',
              fontSize: '12px',
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'all 0.2s',
              position: 'relative'
            }}
          >
            CYCLE: YEARLY
            <span style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              background: 'var(--color-red)',
              color: '#fff',
              fontSize: '8px',
              padding: '1px 6px',
              borderRadius: '10px',
              boxShadow: '0 0 6px var(--color-red-glow)'
            }}>
              -20%
            </span>
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="services-grid" style={{ marginBottom: '80px' }}>
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`service-card ${plan.featured ? 'featured' : ''}`}
              style={{ padding: '36px 28px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{
                  background: 'rgba(255,255,255,0.03)',
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}>
                  {plan.icon}
                </div>
                {plan.featured && (
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    color: 'var(--color-purple)',
                    background: 'var(--color-purple-dim)',
                    padding: '2px 10px',
                    border: '1px solid var(--color-purple)',
                    borderRadius: '2px',
                    boxShadow: '0 0 6px var(--color-purple-glow)'
                  }}>
                    RECOMMENDED_NODE
                  </span>
                )}
              </div>

              <h3 style={{ fontSize: '18px', color: '#fff', marginBottom: '8px' }}>{plan.name}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px', minHeight: '40px' }}>
                {plan.desc}
              </p>

              {/* Price display */}
              <div style={{ marginBottom: '28px' }}>
                {typeof plan.price === 'number' ? (
                  <div style={{ display: 'flex', alignItems: 'baseline', fontFamily: 'var(--font-mono)' }}>
                    <span style={{ fontSize: '18px', color: 'rgba(255,255,255,0.3)', marginRight: '4px' }}>$</span>
                    <span style={{ fontSize: '40px', fontWeight: 'bold', color: '#fff', textShadow: plan.featured ? '0 0 10px var(--color-purple-glow)' : '0 0 10px var(--color-cyan-glow)' }}>
                      {plan.price}
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '6px' }}>/ cycle</span>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'baseline', fontFamily: 'var(--font-mono)', height: '60px' }}>
                    <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#fff', letterSpacing: '1px' }}>
                      {plan.price}
                    </span>
                  </div>
                )}
              </div>

              <ul style={{ marginBottom: '28px' }}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} style={{ fontSize: '13px', marginBottom: '10px' }}>{feature}</li>
                ))}
              </ul>

              <button
                className={`btn btn-sm ${plan.featured ? 'btn-primary' : 'btn-outline'}`}
                style={{ marginTop: 'auto' }}
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const msgField = document.getElementById('message');
                    if (msgField) {
                      msgField.value = `I would like to activate license plan: "${plan.name}" (${billingCycle === 'monthly' ? 'monthly' : 'yearly'} cycle). Please initiate client onboarding protocols.`;
                    }
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {plan.price === 'CUSTOM' ? 'REQUEST COMMS LINK' : 'ACTIVATE NODE'}
              </button>
            </article>
          ))}
        </div>

        {/* Dynamic Calculator Widget */}
        <div style={{
          background: 'rgba(9, 12, 21, 0.6)',
          border: '1px solid rgba(0, 240, 255, 0.15)',
          padding: '40px',
          borderRadius: '6px',
          marginBottom: '80px',
          position: 'relative'
        }} className="cyber-corners">
          <div style={{
            position: 'absolute',
            top: '-11px',
            left: '20px',
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            color: 'var(--color-cyan)',
            background: 'var(--bg-deep)',
            padding: '0 8px',
            border: '1px solid rgba(0, 240, 255, 0.2)'
          }}>
            SYSTEM_WIDGET: INTEGRITY_CALCULATOR_v1.0
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '40px',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '18px', color: '#fff', marginBottom: '12px' }}>
                Dynamic Node Deployment Estimator
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '28px' }}>
                Deploy custom node counts for your cloud architecture or employee terminals. Drag the controller slider below to dynamically allocate licensing overhead.
              </p>

              {/* Slider Input */}
              <div style={{ fontFamily: 'var(--font-mono)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--color-cyan)', marginBottom: '8px' }}>
                  <span>ALLOCATED NODES:</span>
                  <span style={{ fontWeight: 'bold' }}>{nodeCount} ACTIVE NODES</span>
                </div>
                
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={nodeCount}
                  onChange={(e) => setNodeCount(parseInt(e.target.value))}
                  style={{
                    width: '100%',
                    height: '6px',
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: '3px',
                    outline: 'none',
                    appearance: 'none',
                    cursor: 'pointer'
                  }}
                  className="cyber-slider"
                />

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: 'var(--text-muted)', marginTop: '6px' }}>
                  <span>01_NODE</span>
                  <span>25_NODES</span>
                  <span>50_NODES</span>
                </div>
              </div>
            </div>

            <div style={{
              background: '#030509',
              border: '1px solid rgba(189, 0, 255, 0.2)',
              padding: '24px',
              borderRadius: '4px',
              textAlign: 'center',
              fontFamily: 'var(--font-mono)'
            }}>
              <span style={{ fontSize: '10px', color: 'var(--color-purple)', display: 'block', marginBottom: '8px', letterSpacing: '1px' }}>
                ESTIMATED_RUN_COST
              </span>
              
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', marginBottom: '4px' }}>
                <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.2)', marginRight: '4px' }}>$</span>
                <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#fff', textShadow: '0 0 10px var(--color-purple-glow)' }}>
                  {calculateNodeCost()}
                </span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginLeft: '4px' }}>/mo</span>
              </div>
              
              <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)', display: 'block', marginBottom: '20px' }}>
                * Billed {billingCycle === 'monthly' ? 'monthly' : 'annually'}
              </span>

              <button
                className="btn btn-outline btn-sm btn-full"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const msgField = document.getElementById('message');
                    if (msgField) {
                      msgField.value = `Hello! We are looking to allocate a cluster of ${nodeCount} active security nodes. Please provide a detailed quote and architecture proposal.`;
                    }
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                PROVISION NODE CLUSTER
              </button>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', color: '#fff', marginBottom: '32px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <HelpCircle size={20} style={{ color: 'var(--color-cyan)' }} />
            <span>LICENSING FAQ / PROTOCOLS</span>
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  style={{
                    background: 'rgba(9, 12, 21, 0.4)',
                    border: `1px solid ${isOpen ? 'var(--color-cyan)' : 'rgba(255,255,255,0.05)'}`,
                    borderRadius: '4px',
                    overflow: 'hidden',
                    transition: 'all 0.2s'
                  }}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    style={{
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      padding: '20px 24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      textAlign: 'left',
                      cursor: 'pointer',
                      color: isOpen ? 'var(--color-cyan)' : '#fff',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: '600',
                      fontSize: '15px'
                    }}
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  
                  {isOpen && (
                    <div style={{
                      padding: '0 24px 20px',
                      color: 'var(--text-muted)',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      borderTop: '1px solid rgba(0, 240, 255, 0.1)',
                      paddingTop: '16px',
                      background: '#04060b',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px'
                    }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

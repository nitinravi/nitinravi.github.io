import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Frame, Rule } from './Sheet';
import { EASE } from '../lib/motion';

const EMAIL = 'nitinravi18@gmail.com';

const LINKS = [
  { label: 'GitHub', value: 'github.com/nitinravi', href: 'https://github.com/nitinravi' },
  { label: 'LinkedIn', value: 'linkedin.com/in/nitin-ravi', href: 'https://linkedin.com/in/nitin-ravi' },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const reduce = useReducedMotion();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — the mailto link beside it still works.
    }
  };

  return (
    <section id="contact" className="scroll-mt-16">
      <Frame>
        <Rule weight="thick" />
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 pt-5 pb-20">
          <div className="col-span-12 md:col-span-2">
            <p className="field text-ink/45">05 / End</p>
          </div>

          <div className="col-span-12 md:col-span-10">
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: EASE }}
              style={{ fontStretch: '88%' }}
              className="font-display font-bold text-ink text-[clamp(2rem,5.5vw,3.75rem)] leading-[1.02] tracking-[-0.02em] max-w-[18ch]"
            >
              If it&rsquo;s early and nobody is quite sure what to build yet, that&rsquo;s the part
              I like.
            </motion.h2>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
              className="mt-12 grid grid-cols-12 gap-x-6 gap-y-8"
            >
              {/* Email, as a line of the sheet rather than a pill. */}
              <div className="col-span-12 lg:col-span-7">
                <p className="field pb-2 border-b border-ink/70">Email</p>
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 mt-3">
                  <a
                    href={`mailto:${EMAIL}`}
                    style={{ fontStretch: '88%' }}
                    className="font-display font-medium text-ink text-[clamp(1.25rem,3.2vw,1.9rem)] underline decoration-rule underline-offset-[6px] hover:decoration-accent hover:text-accent transition-colors"
                  >
                    {EMAIL}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="field text-accent hover:text-ink transition-colors"
                  >
                    {copied ? '✓ Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              <dl className="col-span-12 lg:col-span-5">
                <p className="field pb-2 border-b border-ink/70">Elsewhere</p>
                <div className="mt-3 space-y-2">
                  {LINKS.map((link) => (
                    <div key={link.label} className="grid grid-cols-[5rem_1fr] gap-3">
                      <dt className="field pt-0.5">{link.label}</dt>
                      <dd>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-[0.8125rem] text-ink underline decoration-rule underline-offset-4 hover:decoration-accent hover:text-accent transition-colors"
                        >
                          {link.value}
                        </a>
                      </dd>
                    </div>
                  ))}
                </div>
              </dl>
            </motion.div>
          </div>
        </div>
      </Frame>
    </section>
  );
};

export default Contact;

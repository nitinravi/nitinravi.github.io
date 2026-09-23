import { motion } from 'framer-motion';
import { EASE } from '../lib/motion';

/* The sheet's shared vocabulary. Every section is built from these three
   pieces, so the rules, gutters and markers line up down the whole page. */

/* A hairline that draws itself left-to-right — the page's one motion idea. */
export const Rule = ({ className = '', delay = 0, weight = 'thin' }) => (
  <motion.div
    aria-hidden="true"
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.9, ease: EASE, delay }}
    className={`origin-left w-full ${weight === 'thick' ? 'h-px bg-ink/70' : 'h-px bg-rule'} ${className}`}
  />
);

/* Page gutter. One wrapper owns the side padding so nothing else has to. */
export const Frame = ({ children, className = '' }) => (
  <div className={`mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>
);

/* A titled section: the marker sits in the left gutter and stays put while
   the section's contents scroll past it. */
export const Section = ({ id, marker, title, children }) => (
  <section id={id} className="scroll-mt-16">
    <Frame>
      <Rule weight="thick" />
      <div className="grid grid-cols-12 gap-x-6 gap-y-8 pt-5 pb-24 md:pb-32">
        <div className="col-span-12 md:col-span-2">
          <div className="md:sticky md:top-24">
            <p className="field text-ink/45">{marker}</p>
            <h2 className="font-display wdth-cond font-semibold text-ink text-[1.35rem] leading-none tracking-tight mt-2 uppercase">
              {title}
            </h2>
          </div>
        </div>
        <div className="col-span-12 md:col-span-10">{children}</div>
      </div>
    </Frame>
  </section>
);

/* label / value pair — the spec sheet's atom. */
export const Field = ({ label, children }) => (
  <div className="grid grid-cols-[7.5rem_1fr] gap-4 py-2.5 border-b border-rule/60 last:border-b-0">
    <dt className="field pt-1">{label}</dt>
    <dd className="font-mono text-[0.8125rem] text-ink leading-relaxed">{children}</dd>
  </div>
);

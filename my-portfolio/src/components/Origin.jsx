import { motion, useReducedMotion } from 'framer-motion';
import { Section } from './Sheet';
import { EASE } from '../lib/motion';

/* The same behaviour, four decades of hardware. This is a genuine sequence,
   which is what earns it an ordered structure. */
const PHASES = [
  {
    when: 'As a kid',
    what: 'Explore',
    detail:
      'A shared family PC running Windows 98. My brother and I wanted the games and didn’t have the password, so we went looking for a way in rather than asking for it.',
  },
  {
    when: 'As a teenager',
    what: 'Modify',
    detail:
      'Blogger sites about technology. Faceless YouTube tutorials, and video editing learned only because the videos needed to be better. Then Inspect Element, and webpages stopped being things you just read.',
  },
  {
    when: 'As a student',
    what: 'Build',
    detail:
      'Discord bots, tutorial projects rebuilt from scratch, open source, and eventually a CS degree, because by then building things properly needed it.',
  },
  {
    when: 'Now',
    what: 'Decide',
    detail:
      'The same habit pointed at AI systems, agent workflows and product interfaces, and lately at the question of what is worth building at all.',
  },
];

const Origin = () => {
  const reduce = useReducedMotion();

  return (
    <Section id="origin" marker="01 / Through-line" title="Origin">
      <div className="grid grid-cols-12 gap-x-6 gap-y-12">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="col-span-12 lg:col-span-7"
        >
          <p
            style={{ fontStretch: '88%' }}
            className="font-display font-bold text-ink text-[clamp(1.6rem,3.6vw,2.6rem)] leading-[1.12] tracking-[-0.02em] max-w-[20ch]"
          >
            Curiosity became building. Building became engineering. Engineering became product.
          </p>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="col-span-12 lg:col-span-4 lg:col-start-9 self-end"
        >
          <p className="font-serif text-[1.05rem] leading-[1.7] text-muted">
            I&rsquo;ve spent most of my life working out what computers can do by trying to make them
            do things. The technology kept changing. The habit didn&rsquo;t.
          </p>
        </motion.div>

        {/* The progression, as a row of four states. */}
        <div className="col-span-12 grid grid-cols-12 gap-x-6 gap-y-10 pt-2">
          {PHASES.map((phase, i) => (
            <motion.div
              key={phase.what}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.07 }}
              className="col-span-12 sm:col-span-6 lg:col-span-3"
            >
              <div className="flex items-baseline justify-between pb-2 border-b border-ink/70">
                <p className="field">{phase.when}</p>
                <p className="field text-accent tnum">0{i + 1}</p>
              </div>
              <h3
                style={{ fontStretch: '74%' }}
                className="font-display font-bold uppercase text-ink text-[2rem] leading-none mt-4"
              >
                {phase.what}
              </h3>
              <p className="font-serif text-[1rem] leading-[1.65] text-muted mt-3">{phase.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Origin;

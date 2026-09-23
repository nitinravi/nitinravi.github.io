import { motion, useReducedMotion } from 'framer-motion';
import { Section } from './Sheet';
import { EASE } from '../lib/motion';

/* Chronological, so the years in the gutter carry information rather than
   decoration. The LogicFlo entry keeps its own role progression, since the
   move into product happened in steps. */
const ENTRIES = [
  {
    year: '2021',
    period: 'Aug 2021 – May 2025',
    org: 'Amrita Vishwa Vidyapeetham',
    role: 'B.Tech, Computer Science & Engineering',
    place: 'Coimbatore',
    stat: 'GPA 8.1 / 10',
    notes: [
      'First Class with Distinction.',
      'Core team member of the iDEA Club, and organised 15+ technical events for Anokha 2023.',
    ],
  },
  {
    year: '2022',
    period: 'Dec 2022 – Apr 2024',
    org: 'Virtual Labs, Ministry of Education',
    role: 'Lead Software Engineer',
    place: 'Coimbatore',
    stat: '300+ students',
    href: 'https://core-labs-cbe.github.io/digilabs/',
    notes: [
      'Led a team of five building the cryptography lab modules for a national Ministry of Education platform.',
      'Built the OOP and network security modules, which went out to more than 300 students.',
    ],
  },
  {
    year: '2024',
    period: 'May 2024, Sep 2025',
    org: 'Research',
    role: 'Two published papers',
    place: 'Peer-reviewed',
    stat: 'IEEE, ISBM',
    notes: [
      '“Augmenting Virtual Labs With Artificial Intelligence for Hybrid Learning”, IEEE EDUCON, May 2024.',
      '“Code Reviews Using Traditional Methods vs Hybrid Models”, ISBM, September 2025.',
    ],
  },
  {
    year: '2024',
    period: 'Aug 2024 – Present',
    org: 'LogicFlo AI',
    role: 'Seed-funded ($2.7M) · Bangalore · agent-driven content for pharma',
    place: 'First hire',
    stat: 'Engineer to product',
    current: true,
    notes: [
      'Joined before there was much of a team, and worked directly with both founders across engineering, product and customers.',
      'Product was not a jump. The engineering work kept turning into questions about users and workflows, and I followed them.',
    ],
    stages: [
      { when: 'Aug 2024 – Jun 2025', what: 'Software Developer Intern' },
      { when: 'Jul 2025 – Jul 2026', what: 'Software Development Engineer, founding team and first hire' },
      { when: 'Jul 2026 – Present', what: 'Associate Product Manager, founding team' },
    ],
  },
];

const Entry = ({ entry }) => {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: EASE }}
      className="grid grid-cols-12 gap-x-6 gap-y-4 py-9 border-t border-rule first:border-t-0 first:pt-0"
    >
      <div className="col-span-12 sm:col-span-3 lg:col-span-2">
        <p
          style={{ fontStretch: '74%' }}
          className="font-display font-bold text-ink text-[2.75rem] leading-none tnum"
        >
          {entry.year}
        </p>
        <p className="field mt-1.5 tnum normal-case tracking-[0.08em]">{entry.period}</p>
      </div>

      <div className="col-span-12 sm:col-span-9 lg:col-span-7 relative sm:pl-8 sm:border-l sm:border-rule">
        <span
          aria-hidden="true"
          className={`hidden sm:block absolute -left-[3.5px] top-2 w-1.5 h-1.5 rounded-full ${
            entry.current ? 'bg-accent ring-4 ring-accent/15' : 'bg-rule'
          }`}
        />
        <div className="flex items-baseline gap-3 flex-wrap">
          <h3
            style={{ fontStretch: '88%' }}
            className="font-display font-semibold text-ink text-[1.55rem] leading-tight tracking-[-0.01em]"
          >
            {entry.org}
          </h3>
          {entry.href && (
            <a
              href={entry.href}
              target="_blank"
              rel="noreferrer"
              className="field text-accent hover:text-ink transition-colors"
            >
              Live ↗
            </a>
          )}
        </div>
        <p className="font-mono text-[0.8125rem] text-accent mt-1.5">{entry.role}</p>

        <ul className="mt-4 space-y-2.5">
          {entry.notes.map((note) => (
            <li
              key={note}
              className="relative pl-5 font-serif text-[1.0625rem] leading-[1.65] text-muted max-w-[62ch]"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-[0.65em] w-1.5 h-1.5 bg-accent/60"
              />
              {note}
            </li>
          ))}
        </ul>

        {entry.stages && (
          <ol className="mt-6 border-t border-rule">
            {entry.stages.map((stage, i) => (
              <li
                key={stage.what}
                className="grid grid-cols-[10.5rem_1fr] gap-4 py-2.5 border-b border-rule"
              >
                <span className="field tnum normal-case tracking-[0.08em]">{stage.when}</span>
                <span
                  className={`font-mono text-[0.8125rem] ${
                    i === entry.stages.length - 1 ? 'text-accent' : 'text-ink'
                  }`}
                >
                  {stage.what}
                </span>
              </li>
            ))}
          </ol>
        )}
      </div>

      <div className="col-span-12 lg:col-span-3 lg:text-right flex lg:block gap-6">
        <p className="field text-ink/45">{entry.place}</p>
        <p className="font-mono text-[0.8125rem] text-ink mt-0 lg:mt-1.5">{entry.stat}</p>
        {entry.current && (
          <p className="field text-accent mt-0 lg:mt-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-1.5 align-middle" />
            Current
          </p>
        )}
      </div>
    </motion.article>
  );
};

const Trajectory = () => (
  <Section id="trajectory" marker="02 / Path" title="Trajectory">
    {ENTRIES.map((entry) => (
      <Entry key={entry.org} entry={entry} />
    ))}
  </Section>
);

export default Trajectory;

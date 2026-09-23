import { motion, useReducedMotion } from 'framer-motion';
import { Section } from './Sheet';
import { EASE } from '../lib/motion';

/* Grouped by what each area is for, rather than listed as one run of nouns. */
const GROUPS = [
  {
    label: 'Product',
    items: [
      'Product operations',
      'Program management',
      'Roadmap prioritisation',
      'Sprint planning',
      'Intake & triage',
      'Launch coordination',
      'Product reporting',
    ],
  },
  {
    label: 'AI',
    items: ['LLM agents', 'RAG', 'MCP', 'Vector databases', 'Workflow automation'],
  },
  {
    label: 'Build',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'React', 'Next.js', 'Node.js', 'Django', 'Spring Boot'],
  },
  {
    label: 'Data',
    items: ['PostgreSQL', 'MongoDB'],
  },
  {
    label: 'Infra',
    items: ['AWS', 'Docker', 'Git'],
  },
  {
    label: 'Day to day',
    items: ['Slack', 'Notion', 'Figma', 'Canva', 'Agile/Scrum'],
  },
];

const Toolkit = () => {
  const reduce = useReducedMotion();

  return (
    <Section id="toolkit" marker="04 / Depth" title="Toolkit">
      <p className="font-serif text-[1.15rem] leading-[1.6] text-ink max-w-[54ch] mb-10">
        What I work with, grouped by what it&rsquo;s for rather than listed alphabetically.
      </p>

      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        {GROUPS.map((group, i) => (
          <motion.div
            key={group.label}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
            className="col-span-6 md:col-span-4 lg:col-span-2"
          >
            <p className="field pb-2 border-b border-ink/70">{group.label}</p>
            <ul className="mt-3 space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="font-mono text-[0.8125rem] text-ink leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Toolkit;

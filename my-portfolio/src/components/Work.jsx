import { motion, useReducedMotion } from 'framer-motion';
import drip from '../assets/drip.png';
import { Section } from './Sheet';
import { EASE } from '../lib/motion';

/* LogicFlo's customers, data and implementation are confidential, so these sit
   at the level of the problem. Deliberately says nothing about how far each
   one went or what shape it ended up in. */
const CASES = [
  {
    n: '01',
    kind: 'Documents',
    title: 'Reading documents nobody wants to read',
    context: 'LogicFlo AI · Document parsing',
    problem:
      'A lot of pharma still lives in scanned paper: records, protocols, reports, much of it photocopied years ago. Before a model can do anything useful with that, something has to turn the scan into text that still knows which column it came from and which row it belonged to.',
    hard:
      'Accuracy is a misleading number here. A page can come back 98% correct and still be useless if the missing 2% is a batch number or a table header. Tables break across pages, two-column layouts get read straight across, and stamps sit on top of the text.',
    did: [
      'Focused on where parsing broke rather than on average accuracy, and judged approaches against the pages that actually caused trouble.',
      'Worked through a ladder of approaches rather than betting on one tool.',
      'Made the output easy for the rest of the team to inspect and compare.',
    ],
    stack: ['OCR', 'Layout parsing', 'Python', 'Evaluation'],
  },
  {
    n: '02',
    kind: 'Product',
    title: 'Agents that can show their work',
    context: 'LogicFlo AI · Content platform',
    problem:
      'Medical teams write content that has to survive review. A generated draft is only worth anything if every claim in it can be walked back to whatever it came from. Most writing tools stop once there is text on the page, which is roughly where the actual work starts.',
    hard:
      'Claims and sources do not line up neatly. One paragraph can rest on three papers and quietly disagree with a fourth. Getting an agent to write well is not the difficult part. Getting it to keep a record of why it wrote something, and showing that to a reviewer without slowing them down, is.',
    did: [
      'Worked on evidence tracking, so a claim points back at the passage behind it rather than at a document as a whole.',
      'Helped shape the agent harness: what runs on its own, where it has to stop, and what it records as it goes.',
      'Worked with engineering on an editing experience built around how pharma content is actually reviewed.',
      'Turned customer feedback, bugs and requests into a backlog that got fixed in a sensible order.',
    ],
    stack: ['RAG', 'Vector databases', 'LLM agents', 'MCP', 'React'],
  },
  {
    n: '03',
    kind: 'Automation',
    title: 'Keeping the CRM honest',
    context: 'LogicFlo AI · Sales operations',
    problem:
      'A small team selling into pharma has its pipeline spread across LinkedIn, inboxes, calls and a CRM that only knows what someone remembers to type into it. The CRM is the record everyone plans from, and it was always a few conversations behind.',
    hard:
      'The tools that should connect these things either did not exist or did not fit. There was no clean way to get a LinkedIn conversation into Zoho CRM without copying it across by hand, and every manual step is one that gets skipped on a busy day.',
    did: [
      'Built a Chrome extension that logs a LinkedIn profile or conversation into Zoho CRM in one click, since nothing on the market did it.',
      'Set up automations and sync between the CRM and the tools the team already worked in, so records filled themselves in.',
      'Cut down the number of places someone had to remember to update.',
    ],
    stack: ['Chrome extensions', 'Zoho CRM API', 'Automation', 'JavaScript'],
  },
  {
    n: '04',
    kind: 'Exploration',
    title: 'Working inside PowerPoint',
    context: 'LogicFlo AI · Office add-ins',
    problem:
      'Pharma content ends up in slides. Meeting people inside PowerPoint, instead of asking them to come to another app, looked like the obvious move.',
    hard:
      'The Office add-in APIs are far narrower than PowerPoint itself. A lot of what a person can do with a mouse, a script cannot, and what is possible varies between desktop, web and Mac.',
    did: [
      'Experimented with PowerPoint add-ins to see how much of the workflow could live inside the deck.',
      'Mapped what the Office APIs could and could not do, which reshaped where that work should sit.',
    ],
    stack: ['Office.js', 'Add-ins', 'TypeScript'],
  },
];

/* Kept short. This is context for the rest of the page, not a catalogue. */
const EARLIER = [
  {
    name: 'Connect',
    year: '2024–25',
    note: 'University collaboration platform in React and Spring Boot, with RAG and MCP chatbots.',
    href: 'https://github.com/nitinravi/connect-frontend',
  },
  {
    name: 'GRE Mock Test',
    year: '2025',
    note: 'Open-source timed mock test platform. Tests are generated by an LLM into JSON, so new sets do not need new code.',
    href: 'https://github.com/nitinravi/gre-prep',
  },
  {
    name: 'DRIP',
    year: '2023',
    note: 'Full-stack storefront that generates its own product artwork. Mentored the junior developers on it.',
    image: drip,
    href: 'https://github.com/nitinravi/drip',
  },
  {
    name: 'Hackathons & CTFs',
    year: '2021–22',
    note: 'Early college. Hackathon entries included vehicle pooling, a music note identifier, and an app connecting restaurants’ surplus food with people who need it.',
  },
];

const Bullet = () => (
  <span aria-hidden="true" className="absolute left-0 top-[0.65em] w-1.5 h-1.5 bg-accent/60" />
);

const Case = ({ item }) => {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.6, ease: EASE }}
      className="grid grid-cols-12 gap-x-6 gap-y-6 py-11 border-t border-rule first:border-t-0 first:pt-0"
    >
      <div className="col-span-12 lg:col-span-4">
        <div className="lg:sticky lg:top-24">
          <div className="flex items-baseline gap-3">
            <p className="field text-accent tnum">{item.n}</p>
            <p className="field text-ink/40">{item.kind}</p>
          </div>
          <h3
            style={{ fontStretch: '88%' }}
            className="font-display font-bold text-ink text-[1.9rem] leading-[1.05] tracking-[-0.015em] mt-2"
          >
            {item.title}
          </h3>
          <p className="font-mono text-[0.8125rem] text-muted mt-2.5">{item.context}</p>
          <p className="field text-ink/40 mt-4 leading-[1.7]">{item.stack.join(' · ')}</p>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-8 space-y-6">
        <div>
          <p className="field pb-1.5 border-b border-rule">The problem</p>
          <p className="font-serif text-[1.0625rem] leading-[1.65] text-ink mt-3 max-w-[64ch]">
            {item.problem}
          </p>
        </div>
        <div>
          <p className="field pb-1.5 border-b border-rule">Why it was hard</p>
          <p className="font-serif text-[1.0625rem] leading-[1.65] text-muted mt-3 max-w-[64ch]">
            {item.hard}
          </p>
        </div>
        <div>
          <p className="field pb-1.5 border-b border-rule">What I did</p>
          <ul className="mt-3 space-y-2.5">
            {item.did.map((d) => (
              <li
                key={d}
                className="relative pl-5 font-serif text-[1.0625rem] leading-[1.65] text-muted max-w-[64ch]"
              >
                <Bullet />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
};

const Work = () => {
  const reduce = useReducedMotion();

  return (
    <Section id="work" marker="03 / Case studies" title="Work">
      <p className="font-serif italic text-[1.05rem] leading-[1.6] text-muted max-w-[62ch] mb-12">
        LogicFlo&rsquo;s customers, data and implementation are confidential, so these stay at the
        level of the problem. Nothing proprietary here.
      </p>

      {CASES.map((item) => (
        <Case key={item.title} item={item} />
      ))}

      <div className="border-t border-ink/70 pt-8 mt-6">
        <p className="field mb-7">Earlier builds</p>
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 lg:col-span-7">
            {EARLIER.map((e, i) => {
              const Tag = e.href ? 'a' : 'div';
              return (
                <motion.div
                  key={e.name}
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.45, ease: EASE, delay: i * 0.05 }}
                >
                  <Tag
                    {...(e.href ? { href: e.href, target: '_blank', rel: 'noreferrer' } : {})}
                    className="group grid grid-cols-12 gap-x-4 gap-y-1 py-4 border-b border-rule"
                  >
                    <div className="col-span-12 sm:col-span-4 flex items-baseline gap-2.5">
                      <h4
                        style={{ fontStretch: '88%' }}
                        className="font-display font-semibold text-ink text-[1.15rem] leading-none group-hover:text-accent transition-colors"
                      >
                        {e.name}
                      </h4>
                      {e.href && (
                        <span
                          aria-hidden="true"
                          className="text-accent text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          ↗
                        </span>
                      )}
                    </div>
                    <p className="col-span-3 sm:col-span-2 field tnum text-ink/40 self-baseline">
                      {e.year}
                    </p>
                    <p className="col-span-12 sm:col-span-6 font-serif text-[1rem] leading-[1.6] text-muted">
                      {e.note}
                    </p>
                  </Tag>
                </motion.div>
              );
            })}
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9 self-start">
            {EARLIER.filter((e) => e.image).map((e) => (
              <motion.figure
                key={e.name}
                initial={reduce ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={e.image}
                  alt={e.name}
                  className="w-full aspect-[4/3] object-contain bg-surface p-3 border border-rule"
                />
                <figcaption className="field mt-1.5 text-ink/40">Fig. 2 &middot; {e.name}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Work;

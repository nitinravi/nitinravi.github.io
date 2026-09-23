import { motion, useReducedMotion } from 'framer-motion';
import drip from '../assets/drip.png';
import { Section } from './Sheet';
import { EASE } from '../lib/motion';

/* LogicFlo's customers, data and implementation are confidential, so these sit
   at the level of the problem. Two of the three were exploratory: they are
   written as what was found out, not as things that shipped. */
const CASES = [
  {
    n: '01',
    kind: 'Internal tool',
    title: 'Reading documents nobody wants to read',
    context: 'LogicFlo AI · Document parsing',
    problem:
      'A lot of pharma still lives in scanned paper. GMP records, protocols, reports, much of it photocopied years ago. Before a model can do anything useful with that, something has to turn the scan into text that still knows which column it came from and which row it belonged to.',
    hard:
      'Accuracy is a misleading number here. A page can come back 98% correct and still be useless if the missing 2% is a batch number or a table header. Tables break across pages, two-column layouts get read straight across, stamps and signatures sit on top of the text, and plenty of pages are slightly rotated.',
    did: [
      'Spent the time on where parsing broke rather than on average accuracy, and collected the pages that actually caused trouble to test against.',
      'Worked through a ladder instead of one tool: native text where the PDF had it, layout-aware parsing next, OCR only when there was nothing else to go on.',
      'Built an internal tool so anyone on the team could push a document through, see what each stage produced, and compare them side by side.',
      'Fed the failures back in, so it improved against the documents we were actually getting rather than against a benchmark.',
    ],
    stack: ['OCR', 'Layout parsing', 'Python', 'Evaluation'],
  },
  {
    n: '02',
    kind: 'Feasibility work',
    title: 'Talking to an avatar',
    context: 'LogicFlo AI · Exploration',
    problem:
      'The idea was an AI avatar an HCP could talk to on video: ask a question out loud, get an answer back in speech with a face attached. It sounded good in a room. The point of looking at it was to find out whether it held up before anyone spent months on it.',
    hard:
      'Latency is most of the experience. Speech in, model, speech out, lip sync, and it stops feeling like a conversation somewhere under a second. The harder problem is that speech has nowhere to put a citation. In this industry a claim that cannot be traced is a liability, and a spoken sentence is gone the moment it is said. An avatar also raises questions text does not: whose face it is, what it does with an off-label question, and when it should stop and hand over to a person.',
    did: [
      'Mapped the pipeline end to end, streaming TTS through to viseme-driven lip sync, to work out where the delay actually accumulated and where it could be bought back.',
      'Proposed keeping the answer and its sources on screen beside the avatar, so anything spoken still had something a viewer could check.',
      'Argued for holding it to approved, retrieved content only, with an obvious route to a human once it reached the edge of that.',
      'Concluded it was buildable, but that the value rested on questions we had not answered yet. It stayed a prototype, which was the right outcome.',
    ],
    stack: ['TTS', 'Real-time lip sync', 'Streaming', 'Latency budgeting'],
  },
  {
    n: '03',
    kind: 'Product work',
    title: 'Agents that can show their work',
    context: 'LogicFlo AI · Content platform',
    problem:
      'Medical teams write content that has to survive review. A generated draft is only worth anything if every claim in it can be walked back to whatever it came from. Most writing tools stop once there is text on the page, which is roughly where the actual work starts.',
    hard:
      'Claims and sources do not line up neatly. One paragraph can rest on three papers, lean on a subgroup analysis, and quietly disagree with a fourth. Getting an agent to write well is not the difficult part. Getting it to keep a record of why it wrote something, and then showing that record to a reviewer without slowing them down, is.',
    did: [
      'Worked on evidence tracking, so a generated claim points back at the passage behind it rather than at a document as a whole.',
      'Helped shape the agent harness: what runs on its own, where it has to stop, and what it writes down as it goes.',
      'Worked with engineering on a custom editing interface built around how pharma content is actually reviewed, rather than a chat box bolted onto a document.',
      'Took in customer feedback, bugs and requests, and triaged them into the backlog so the things that were wrong got fixed in a sensible order.',
      'Put together prototypes to test ideas with customers before engineering time went into them.',
    ],
    stack: ['RAG', 'Vector databases', 'LLM agents', 'MCP', 'React'],
  },
];

/* Kept short. This is context for the rest of the page, not a catalogue. */
const EARLIER = [
  {
    name: 'Connect',
    year: '2024–25',
    note: 'University collaboration platform in React and Spring Boot, with RAG and MCP chatbots.',
  },
  {
    name: 'GRE Mock Test',
    year: '2025',
    note: 'Open-source timed mock test platform. Tests are generated by an LLM into JSON, so new sets do not need new code.',
  },
  {
    name: 'DRIP',
    year: '2023',
    note: 'Full-stack storefront that generates its own product artwork. Mentored the junior developers on it.',
    image: drip,
    href: 'https://github.com/nitinravi/drip',
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

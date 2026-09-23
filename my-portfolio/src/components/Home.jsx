import { motion, useReducedMotion } from 'framer-motion';
import Portrait from '../assets/moonji.jpg';
import Resume from '../assets/Resume.pdf';
import { Field, Frame } from './Sheet';
import { EASE } from '../lib/motion';

/* "NITIN" sets about 16% wider than "RAVI" at a common size, so RAVI is pushed
   out along Archivo's width axis until the two lines rag flush. The axis is
   doing typesetting here, not decoration. */
const LOCKUP = [
  { text: 'Nitin', stretch: '100%' },
  { text: 'Ravi', stretch: '116%' },
];

const Home = () => {
  const reduce = useReducedMotion();

  // The one orchestrated moment on the page: the sheet draws itself in.
  const wipe = (delay) =>
    reduce
      ? {}
      : {
          initial: { clipPath: 'inset(0 100% 0 0)' },
          animate: { clipPath: 'inset(0 0% 0 0)' },
          transition: { duration: 1, ease: EASE, delay },
        };

  const rise = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: EASE, delay },
  });

  return (
    <section id="home" className="pt-28 md:pt-32">
      <Frame>
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 pb-4"
        >
          <p className="field text-ink/45">Product &middot; AI &middot; Engineering</p>
          <p className="field text-ink/45">Bangalore, India</p>
          <p className="field text-accent">LogicFlo AI</p>
        </motion.div>

        <div className="h-px w-full bg-ink/70" aria-hidden="true" />

        <h1 className="pt-6 pb-2" aria-label="Nitin Ravi">
          {LOCKUP.map(({ text, stretch }, i) => (
            <motion.span
              key={text}
              {...wipe(0.15 + i * 0.12)}
              style={{ fontStretch: stretch }}
              className="block font-display font-extrabold uppercase text-ink leading-[0.82] tracking-[-0.02em] text-[clamp(3.75rem,17.5vw,12.5rem)]"
            >
              {text}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.5 }}
          className="origin-left h-px w-full bg-accent"
          aria-hidden="true"
        />

        <div className="grid grid-cols-12 gap-x-6 gap-y-12 pt-10 pb-24 md:pb-28">
          <motion.div {...rise(0.55)} className="col-span-12 md:col-span-6 lg:col-span-5">
            <p className="font-serif text-[1.45rem] leading-[1.45] text-ink max-w-[32ch]">
              I work on AI products for pharma teams, at the point where the workflow and the
              engineering meet.
            </p>
            <p className="font-serif text-[1.05rem] leading-[1.7] text-muted mt-5 max-w-[48ch]">
              I&rsquo;m an associate product manager on the founding team at LogicFlo AI. I joined as
              an engineer and moved into product as the team grew, so I still spend most of my time
              close to how things actually get built.
            </p>
            <p className="font-serif text-[1.05rem] leading-[1.7] text-muted mt-4 max-w-[48ch]">
              None of that was planned. I&rsquo;ve been pulling computers apart since my family&rsquo;s
              first Windows&nbsp;98 PC, and the habit kept finding new things to point at.
            </p>

            {/* The resume, as something you can actually find. */}
            <a
              href={Resume}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 mt-8 border border-ink/25 px-5 py-3 hover:bg-ink hover:border-ink transition-colors"
            >
              <span className="field text-ink group-hover:text-ground transition-colors">
                Résumé
              </span>
              <span className="font-mono text-[0.75rem] text-muted group-hover:text-ground/70 transition-colors">
                PDF
              </span>
              <span
                aria-hidden="true"
                className="text-accent group-hover:text-ground transition-colors"
              >
                ↗
              </span>
            </a>
          </motion.div>

          <motion.dl
            {...rise(0.68)}
            className="col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-7 self-start"
          >
            <Field label="Now">Associate Product Manager, founding team</Field>
            <Field label="Company">LogicFlo AI, seed-funded ($2.7M)</Field>
            <Field label="Domain">Agent-driven content for pharma</Field>
            <Field label="Before">Software engineer, founding team and first hire</Field>
            <Field label="Studied">B.Tech CSE, Amrita Vishwa Vidyapeetham</Field>
            <Field label="Email">
              <a
                href="mailto:nitinravi18@gmail.com"
                className="underline decoration-rule underline-offset-4 hover:decoration-accent hover:text-accent transition-colors"
              >
                nitinravi18@gmail.com
              </a>
            </Field>
          </motion.dl>

          <motion.figure
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="col-span-12 lg:col-span-2 lg:col-start-11 self-start"
          >
            <img
              src={Portrait}
              alt="Nitin Ravi"
              className="w-28 lg:w-full aspect-square object-cover grayscale contrast-[1.05] hover:grayscale-0 transition-[filter] duration-500 border border-rule"
            />
            <figcaption className="field mt-2 text-ink/40">Fig. 1 &middot; N. Ravi</figcaption>
          </motion.figure>
        </div>
      </Frame>
    </section>
  );
};

export default Home;

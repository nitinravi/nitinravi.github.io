import { Frame } from './Sheet';

/* A colophon, which a specimen sheet earns: the page names the faces it is
   set in. All three statements are true of this build. */
const Footer = () => (
  <footer className="border-t border-ink/70">
    <Frame>
      <div className="grid grid-cols-12 gap-x-6 gap-y-4 py-7">
        <p className="field col-span-12 md:col-span-4 text-ink/45 tnum">
          &copy; {new Date().getFullYear()} Nitin Ravi
        </p>
        <p className="field col-span-12 md:col-span-5 text-ink/45">
          Set in Archivo, Newsreader &amp; IBM Plex Mono
        </p>
        <p className="field col-span-12 md:col-span-3 md:text-right text-ink/45">
          Built with React &amp; Vite
        </p>
      </div>
    </Frame>
  </footer>
);

export default Footer;

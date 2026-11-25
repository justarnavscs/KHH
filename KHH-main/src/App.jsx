import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight, Code2, ShieldCheck, BookOpen, Lightbulb,
  Terminal, GraduationCap, PenLine, Cpu, Layers3, Menu, X
} from 'lucide-react';
import { BrandWatermark, SpinningCoin, StartupIntro } from './components/BrandAnimations';
import { JARVIS_PROJECT_URL, PUBLISHED_BOOKS, SOCIAL_LINKS } from './config/site';

const skills = [
  { icon: Code2, title: 'Programming & Development', text: 'Building useful digital experiences, experimenting with code, and turning ideas into working projects.' },
  { icon: ShieldCheck, title: 'Cybersecurity', text: 'Exploring security concepts, secure development practices, and the mindset needed to build safer systems.' },
  { icon: BookOpen, title: 'eBook Writing', text: 'Researching, structuring, and writing digital books that make ideas easier to understand.' },
  { icon: Lightbulb, title: 'Entrepreneurship', text: 'Finding problems worth solving, thinking independently, and learning by building.' },
];

const focusAreas = [
  { icon: Terminal, title: 'Code with purpose', text: 'Practical programming, experimentation, and continuous improvement.' },
  { icon: ShieldCheck, title: 'Think securely', text: 'A security-first approach to technology, systems, and digital responsibility.' },
  { icon: PenLine, title: 'Write to explain', text: 'Turning research and complex topics into clear, useful written work.' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f3ef] text-[#20201f] selection:bg-[#b89b72]/30">
      <StartupIntro />
      <BrandWatermark />
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f5f3ef]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#home" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <img src="/logo.png" alt="The Studio ArnX monogram" className="h-11 w-11 rounded-full object-cover" />
            <span className="text-sm font-black uppercase tracking-[0.2em]">The Studio ArnX</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a className="hover:text-[#98764e]" href="#home">Home</a>
            <a className="hover:text-[#98764e]" href="#about">About Me</a>
            <a className="hover:text-[#98764e]" href="#expertise">Expertise</a>
            <a className="hover:text-[#98764e]" href="#interests">My Interests</a>
            <a className="hover:text-[#98764e]" href="#projects">Projects</a>
            <a className="hover:text-[#98764e]" href="#writing">Writing</a>
            <a className="hover:text-[#98764e]" href="#contact">Connect</a>
          </nav>
          <a href="https://github.com/justarnavscs" target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-[#252421] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#98764e] sm:inline-flex">
            <Code2 size={15} /> GitHub <ArrowUpRight size={14} />
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 md:hidden"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-black/10 bg-[#f5f3ef] px-6 py-5 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm font-bold">
              {[
                ['Home', '#home'], ['About Me', '#about'], ['Expertise', '#expertise'],
                ['My Interests', '#interests'], ['Projects', '#projects'], ['Writing', '#writing'], ['Connect', '#contact']
              ].map(([label, href]) => (
                <a key={href} href={href} className="py-1" onClick={() => setMenuOpen(false)}>{label}</a>
              ))}
              <a href="https://github.com/justarnavscs" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 text-[#98764e]">
                GitHub <ArrowUpRight size={14} />
              </a>
            </div>
          </nav>
        )}
      </header>

      <main id="home" className="relative z-10">
        <section className="relative overflow-hidden border-b border-black/10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-[32rem] w-[32rem] rounded-full bg-[#c5a77f]/20 blur-3xl" />
          <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.3fr_.7fr]">
            <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
              <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#b89b72]/50 bg-white/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[.22em] text-[#806342]">
                <span className="h-2 w-2 rounded-full bg-[#9b805e]" /> Student • Entrepreneur • Programmer • Writer
              </p>
              <h1 className="max-w-4xl text-5xl font-black leading-[1.04] tracking-[-.055em] sm:text-6xl lg:text-7xl">
                I’m Arnav Agarwal<span className="text-[#a88a65]">.</span><br />
                <span className="font-serif font-medium italic tracking-[-.04em] text-[#8d7659]">Curious by nature.</span>
                <br />Builder by choice.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#68645e]">
                I’m a student, entrepreneur, programmer, cybersecurity enthusiast, and eBook writer. I enjoy exploring ideas, understanding technology, solving problems, and turning curiosity into meaningful work.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#projects" className="inline-flex items-center gap-3 rounded-full bg-[#252421] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#98764e]">Explore My Work <ArrowUpRight size={17}/></a>
                <a href="#about" className="rounded-full border border-black/20 px-7 py-4 text-sm font-bold transition hover:border-[#98764e] hover:text-[#806342]">Get to know me</a>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.15}} className="relative mx-auto flex w-full max-w-md items-center justify-center">
              <div className="absolute aspect-square w-full rounded-full border border-[#b89b72]/40" />
              <div className="absolute aspect-[4/5] w-[78%] rotate-[-8deg] rounded-[2rem] border border-black/10 bg-gradient-to-br from-white/80 to-[#d8c3a6]/60 shadow-2xl" />
              <div className="relative flex aspect-[4/5] w-[78%] rotate-[3deg] flex-col items-center justify-center rounded-[2rem] border border-white/70 bg-[#e9dfd1] p-8 text-center shadow-xl">
                <SpinningCoin className="mb-8 h-32 w-32" />
                <p className="text-xs font-bold uppercase tracking-[.35em] text-[#8d7659]">Logic in every layer</p>
                <div className="mt-6 h-px w-16 bg-[#b89b72]" />
                <p className="mt-6 font-serif text-2xl italic text-[#4a433a]">Ideas into impact.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.25em] text-[#98764e]">01 / About</p>
              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">A student.<br/>A maker.<br/><span className="font-serif font-medium italic text-[#98764e]">A work in progress.</span></h2>
            </div>
            <div className="max-w-3xl space-y-6 text-lg leading-8 text-[#68645e]">
              <p>I’m Arnav Agarwal. I’m curious about how technology works, how businesses grow, and how thoughtful ideas become useful products. My journey brings together learning, creativity, programming, entrepreneurship, and writing.</p>
              <p>I believe in continuous improvement, independent thinking, and learning through experimentation. This website is a space to document my journey and share the things I create.</p>
            </div>
          </div>
        </section>

        <section id="expertise" className="scroll-mt-24 border-y border-black/10 bg-[#ece7df] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-xs font-bold uppercase tracking-[.25em] text-[#98764e]">02 / Areas of interest</p>
            <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">Different disciplines.<br/><span className="font-serif font-medium italic text-[#98764e]">One curious mind.</span></h2>
              <p className="max-w-sm text-sm leading-7 text-[#68645e]">A snapshot of the fields I’m exploring and developing through learning, practice, and independent projects.</p>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map(({icon:Icon,title,text},i)=>(
                <motion.article key={title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="rounded-2xl border border-black/10 bg-[#f8f6f2] p-7 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e7dac8] text-[#806342]"><Icon size={23}/></div>
                  <h3 className="text-lg font-extrabold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#68645e]">{text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="interests" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24">
          <p className="text-xs font-bold uppercase tracking-[.25em] text-[#98764e]">03 / My Interests</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Always learning.<br/><span className="font-serif font-medium italic text-[#98764e]">Always building.</span></h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {focusAreas.map(({icon:Icon,title,text},i)=>(
              <article key={title} className="group border-t-2 border-[#b89b72] bg-white/50 p-7 transition hover:bg-white">
                <div className="flex items-center justify-between"><Icon size={27} className="text-[#98764e]"/><span className="text-xs font-bold text-[#a49b8e]">0{i+1}</span></div>
                <h3 className="mt-10 text-2xl font-extrabold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#68645e]">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-3xl bg-[#252421] p-8 text-white sm:p-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.25em] text-[#c7a77e]">Currently growing</p>
                <h3 className="mt-4 text-3xl font-black">Student today. Better builder tomorrow.</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">My portfolio will grow as I publish writing, complete projects, and develop my technical skills. The goal is progress backed by real work.</p>
              </div>
              <GraduationCap size={56} className="shrink-0 text-[#c7a77e]"/>
            </div>
          </div>
        </section>

        <section className="border-y border-black/10 bg-[#ece7df] py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
            <div className="flex gap-4"><Cpu className="mt-1 shrink-0 text-[#98764e]"/><div><h3 className="font-extrabold">Technology</h3><p className="mt-2 text-sm leading-6 text-[#68645e]">Understanding how systems work and how to make them better.</p></div></div>
            <div className="flex gap-4"><Layers3 className="mt-1 shrink-0 text-[#98764e]"/><div><h3 className="font-extrabold">Entrepreneurial thinking</h3><p className="mt-2 text-sm leading-6 text-[#68645e]">Connecting ideas with real needs and practical solutions.</p></div></div>
            <div className="flex gap-4"><BookOpen className="mt-1 shrink-0 text-[#98764e]"/><div><h3 className="font-extrabold">Writing & research</h3><p className="mt-2 text-sm leading-6 text-[#68645e]">Exploring topics and sharing knowledge through eBooks and writing.</p></div></div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24">
          <p className="text-xs font-bold uppercase tracking-[.25em] text-[#98764e]">04 / Projects</p>
          <div className="mt-5 grid items-end gap-8 md:grid-cols-[1fr_auto]">
            <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Ideas becoming<br/><span className="font-serif font-medium italic text-[#98764e]">real things.</span></h2>
            <span className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-[#98764e]">Work in progress</span>
          </div>
          <div className="mt-12 rounded-[2rem] border border-black/10 bg-white/50 p-8 sm:p-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[.2em] text-[#98764e]">Featured project</p>
                <h3 className="mt-4 text-2xl font-black">JARVIS I Robot</h3>
                <p className="mt-3 text-sm leading-7 text-[#68645e]">A larger technology project associated with ArnX.me. Visit its dedicated website for the project’s own information and developments.</p>
              </div>
              <a href={JARVIS_PROJECT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#252421] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#98764e]">Explore ArnX.me <ArrowUpRight size={16}/></a>
            </div>
          </div>
        </section>

        <section id="writing" className="scroll-mt-24 border-y border-black/10 bg-[#ece7df] py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[.75fr_1.25fr] md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.25em] text-[#98764e]">05 / Writing</p>
              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Research.<br/><span className="font-serif font-medium italic text-[#98764e]">Structure. Clarity.</span></h2>
            </div>
            <div className="rounded-[2rem] border border-black/10 bg-[#f8f6f2] p-8 sm:p-10">
              <BookOpen size={32} className="text-[#98764e]" />
              <h3 className="mt-6 text-2xl font-black">Published books by Arnav Agarwal</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#68645e]">The following titles are listed in my Google Play Books catalogue. Publication links and detailed descriptions will be added when their public listing URLs are available.</p>
              <ol className="mt-6 grid gap-3 sm:grid-cols-2">
                {PUBLISHED_BOOKS.map((book, index) => <li key={book} className="flex gap-3 border-b border-black/10 pb-3 text-sm leading-6 text-[#4f4a43]"><span className="font-bold text-[#98764e]">{String(index + 1).padStart(2, '0')}</span><span>{book}</span></li>)}
              </ol>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24">
          <div className="rounded-[2rem] border border-[#b89b72]/40 bg-gradient-to-br from-white to-[#e9dfd1] p-9 sm:p-16">
            <p className="text-xs font-bold uppercase tracking-[.25em] text-[#98764e]">06 / Connect</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">Have an idea?<br/><span className="font-serif font-medium italic text-[#98764e]">Let’s make it real.</span></h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#68645e]">For conversations about technology, programming, creative ideas, projects, or collaboration, connect with me through GitHub.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="inline-flex items-center gap-2 rounded-full bg-[#252421] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#98764e]">{social.name}<ArrowUpRight size={14}/></a>)}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-black/10 bg-[#252421] px-6 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div><p className="text-sm font-black uppercase tracking-[.2em]">The Studio ArnX</p><p className="mt-2 text-xs text-white/55">Logic in every layer.</p><div className="mt-4 flex flex-wrap gap-4">{SOCIAL_LINKS.map((social) => <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-xs text-white/70 transition hover:text-white">{social.name}</a>)}<a href={JARVIS_PROJECT_URL} target="_blank" rel="noopener noreferrer" className="text-xs text-white/70 transition hover:text-white">JARVIS I Robot</a></div></div>
          <p className="text-xs text-white/55">Built and Run by Arnav Agarwal</p>
        </div>
      </footer>
    </div>
  );
}

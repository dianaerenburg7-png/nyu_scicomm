import { Search } from 'lucide-react';
import { MobileMenu } from '@/components/mobile-menu';
import { publications } from '@/lib/publications';

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">Skip to content</a>
      <header className="masthead">
        <div className="brand-lockup">
          <a className="brand" href="#top" aria-label="NYU Science Communication home">
            SCI<span className="brand-light">COMM</span>
          </a>
          <p>A GRADUATE STUDENT PUBLICATION AT NEW YORK UNIVERSITY</p>
        </div>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#publications">PUBLICATIONS</a>
          <a href="#about">ABOUT</a>
          <a href="#participate">PARTICIPATE</a>
          <button aria-label="Search" disabled><Search size={18} /></button>
          <MobileMenu />
        </nav>
      </header>

      <section className="feature" id="top" aria-labelledby="empty-title">
        <img src="/biomedical-hero.png" alt="Fluorescence microscopy-inspired image of branching neurons and cell nuclei" />
        <div className="feature-shade" />
        <div className="feature-copy">
          <p>NYU SCIENCE COMMUNICATION</p>
          <h1 id="empty-title">No publications yet</h1>
        </div>
      </section>

      <div id="content">
        <section className="publication-section" id="publications">
          <div className="section-title"><h2>Latest publications</h2></div>
          {publications.length === 0 ? (
            <div className="publication-empty">
              <p>This publication has not released any articles yet.</p>
            </div>
          ) : (
            <div className="publication-grid">
              {publications.map((publication) => (
                <article className="publication-card" key={publication.slug}>
                  <img src={publication.image} alt={publication.imageAlt} />
                  <a className="card-topic" href={`#${publication.topic.toLowerCase()}`}>{publication.topic}</a>
                  <h3>{publication.title}</h3>
                  <p>{publication.subtitle}</p>
                  <span>By {publication.author} · {publication.published}</span>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="topics-section" id="topics">
          <div className="section-title inverse"><h2>Topics</h2></div>
          <div className="topic-grid">
            <a className="topic" href="#publications"><span>Science in the News 2026</span><b aria-hidden="true">→</b></a>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-title"><h2>About</h2></div>
          <div className="about-copy">
            <p className="about-lede">NYU SciComm is a graduate student-run publication where students can write, learn, and discuss science across disciplines. We publish accessible and engaging stories about research at NYU and beyond.</p>
          </div>
        </section>

        <section className="contribute-section" id="participate">
          <p>PARTICIPATE</p><h2>Interested in writing or editing?</h2>
          <span>Please reach out to <a href="mailto:bella.ranieri@nyulangone.org">bella.ranieri@nyulangone.org</a>, <a href="mailto:diana.erenburg@nyulangone.org">diana.erenburg@nyulangone.org</a>, or <a href="mailto:theo.durand@nyulangone.org">theo.durand@nyulangone.org</a>.</span>
        </section>
      </div>

      <footer>
        <div className="footer-brand">NYU SCICOMM</div>
        <p>A graduate student science publication at New York University.</p>
        <p>© {new Date().getFullYear()} NYU SciComm</p>
      </footer>
    </main>
  );
}

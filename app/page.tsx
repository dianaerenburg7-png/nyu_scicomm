import { Menu, Search } from 'lucide-react';
import { publications } from '@/lib/publications';

const topics = ['Biology', 'Neuroscience', 'Medicine & Health', 'Genetics', 'Bioengineering', 'Public Health'];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">Skip to content</a>
      <header className="masthead">
        <div className="brand-lockup">
          <a className="brand" href="#top" aria-label="NYU Biomedical Science Communication home">
            <span>NYU</span> BIOMED<span className="brand-light">SCI</span>
          </a>
          <p>BIOMEDICAL SCIENCE, FROM THE PEOPLE WHO STUDY IT</p>
          <small>A graduate student publication at New York University</small>
        </div>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#topics">TOPICS <span aria-hidden="true">⌄</span></a>
          <a href="#publications">PUBLICATIONS</a>
          <a href="#about">ABOUT</a>
          <a href="#contribute">CONTRIBUTE</a>
          <button aria-label="Search" disabled><Search size={18} /></button>
          <button className="mobile-menu" aria-label="Open menu"><Menu size={22} /></button>
        </nav>
      </header>

      <section className="feature" id="top" aria-labelledby="empty-title">
        <img src="/biomedical-hero.png" alt="Fluorescence microscopy-inspired image of branching neurons and cell nuclei" />
        <div className="feature-shade" />
        <div className="feature-copy">
          <p>NYU BIOMEDICAL SCIENCE COMMUNICATION</p>
          <h1 id="empty-title">No publications yet</h1>
          <h2>Our first stories are in development.</h2>
        </div>
      </section>

      <div id="content">
        <section className="publication-section" id="publications">
          <div className="section-title"><span>01</span><h2>Latest publications</h2></div>
          {publications.length === 0 ? (
            <div className="publication-empty">
              <p>This publication has not released any articles yet.</p>
              <p>New reporting from NYU graduate students will appear here.</p>
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
          <div className="section-title inverse"><span>02</span><h2>Topics</h2></div>
          <div className="topic-grid">
            {topics.map((topic) => <div className="topic" key={topic}><span>{topic}</span><b aria-hidden="true">→</b></div>)}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-title"><span>03</span><h2>About</h2></div>
          <div className="about-copy">
            <p className="about-lede">We translate biomedical research into stories for curious readers.</p>
            <p>Written and edited by graduate students at New York University, this publication explores biology, neuroscience, medicine, genetics, bioengineering, and public health with clarity and care.</p>
          </div>
        </section>

        <section className="contribute-section" id="contribute">
          <p>CONTRIBUTE</p><h2>Have a biomedical story to tell?</h2><span>Contributor information will be added before submissions open.</span>
        </section>
      </div>

      <footer>
        <div className="footer-brand">NYU BIOMEDSCI</div>
        <p>A graduate student biomedical science publication at New York University.</p>
        <p>© {new Date().getFullYear()} NYU Biomedical SciComm</p>
      </footer>
    </main>
  );
}

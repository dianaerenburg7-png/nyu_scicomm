import { Search } from 'lucide-react';
import { MobileMenu } from '@/components/mobile-menu';
import { publications } from '@/lib/publications';

const articleSections = [
  { id: 'close-to-home', title: 'Close to Home: Science at NYU' },
  { id: 'interviews', title: 'Interviews' },
  { id: 'op-eds', title: 'Op-Eds' },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">Skip to content</a>
      <header className="masthead">
        <div className="brand-lockup">
          <a className="brand" href="#top" aria-label="The Bench home">
            <span className="brand-light">THE</span>
            <span className="brand-primary">BENCH</span>
          </a>
          <p>A GRADUATE STUDENT-LED JOURNAL AT NYU VILCEK INSTITUTE OF GRADUATE BIOMEDICAL SCIENCES</p>
        </div>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#publications">ARTICLES</a>
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
          <p>THE BENCH</p>
          <h1 id="empty-title">No articles yet</h1>
        </div>
      </section>

      <div id="content">
        <section className="publication-section" id="publications">
          <div className="section-title"><h2>Latest articles</h2></div>
          <div className="article-sections">
            {articleSections.map((section) => {
              const sectionArticles = publications.filter((publication) => publication.topic === section.title);

              return (
                <section className="article-subsection" id={section.id} key={section.id}>
                  <div className="article-subsection-heading">
                    <h3>{section.title}</h3>
                    <span>{sectionArticles.length === 0 ? 'No articles yet' : `${sectionArticles.length} ${sectionArticles.length === 1 ? 'article' : 'articles'}`}</span>
                  </div>
                  {sectionArticles.length === 0 ? (
                    <p className="article-subsection-empty">No articles have been published in this section yet.</p>
                  ) : (
                    <div className="publication-grid">
                      {sectionArticles.map((publication) => (
                        <article className="publication-card" key={publication.slug}>
                          <img src={publication.image} alt={publication.imageAlt} />
                          <a className="card-topic" href={`#${section.id}`}>{publication.topic}</a>
                          <h3>{publication.title}</h3>
                          <p>{publication.subtitle}</p>
                          <span>By {publication.author} · {publication.published}</span>
                        </article>
                      ))}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
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
            <p className="about-lede">The Bench is a graduate student-led journal that publishes accessible and engaging stories about research at NYU and beyond.</p>
          </div>
        </section>

        <section className="contribute-section" id="participate">
          <p>PARTICIPATE</p><h2>Interested in writing or editing?</h2>
          <span>Please reach out to <a href="mailto:isabella.ranieri@nyulangone.org">isabella.ranieri@nyulangone.org</a>, <a href="mailto:diana.erenburg@nyulangone.org">diana.erenburg@nyulangone.org</a>, or <a href="mailto:theo.durand@nyulangone.org">theo.durand@nyulangone.org</a>.</span>
        </section>
      </div>

      <footer>
        <div className="footer-brand">THE BENCH</div>
        <p>A graduate student-led science journal at NYU Vilcek Institute of Graduate Biomedical Sciences.</p>
        <p>© {new Date().getFullYear()} The Bench</p>
      </footer>
    </main>
  );
}

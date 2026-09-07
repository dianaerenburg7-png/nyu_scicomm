import { ArrowRight, FlaskConical, Menu, Search } from 'lucide-react';
import { publications } from '@/lib/publications';

const topics = ['Health', 'Environment', 'Technology', 'Life Sciences', 'Space & Physics'];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="NYU Science Communication Club home"><span className="mark"><FlaskConical aria-hidden="true" size={21} strokeWidth={1.8} /></span><span>NYU <b>SciComm</b></span></a>
        <nav className="desktop-nav" aria-label="Main navigation"><a href="#publications">Publications</a><a href="#topics">Topics</a><a href="#about">About</a><a href="#join">Join us</a></nav>
        <div className="header-actions"><button className="search-button" type="button" aria-label="Search publications" disabled><Search size={18} aria-hidden="true" /></button><button className="menu-button" type="button" aria-label="Open navigation"><Menu size={22} aria-hidden="true" /></button></div>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">Science, clearly told</p>
        <h1>Stories from the people<br />doing the research.</h1>
        <p className="hero-copy">An independent publication by NYU graduate students, making research accessible, engaging, and relevant to everyday life.</p>
        <a className="text-link" href="#about">Learn about our mission <ArrowRight size={16} aria-hidden="true" /></a>
        <div className="orbit" aria-hidden="true"><span className="orbit-core" /><span className="orbit-ring ring-one" /><span className="orbit-ring ring-two" /><span className="orbit-dot dot-one" /><span className="orbit-dot dot-two" /></div>
      </section>

      <section className="publication-section" id="publications">
        <div className="section-heading"><p className="section-label">The latest</p><h2>Publications</h2></div>
        {publications.length === 0 ? (
          <div className="empty-state"><div className="empty-icon"><FlaskConical size={30} strokeWidth={1.45} aria-hidden="true" /></div><h3>No publications yet</h3><p>Our first stories are currently in development. Please check back soon.</p></div>
        ) : (
          <div className="publication-grid">
            {publications.map((publication) => (
              <article className="publication-card" key={publication.slug}>
                <img src={publication.image} alt={publication.imageAlt} />
                <p className="card-topic">{publication.topic}</p>
                <h3>{publication.title}</h3>
                <p>{publication.subtitle}</p>
                <span>By {publication.author} · {publication.published}</span>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="topics-section" id="topics">
        <p className="section-label">Explore</p><h2>Topics we cover</h2>
        <div className="topic-list">{topics.map((topic, index) => <div className="topic" key={topic}><span>0{index + 1}</span><h3>{topic}</h3><ArrowRight size={18} aria-hidden="true" /></div>)}</div>
      </section>

      <section className="about-section" id="about">
        <p className="section-label">Our mission</p>
        <div className="about-grid"><h2>Connecting NYU science<br />with curious minds.</h2><div><p>We are a graduate student-led science communication club at New York University. We give emerging researchers a place to practice clear, responsible storytelling and share science beyond the university.</p><span className="contact-note">Contact information will be added before launch.</span></div></div>
      </section>

      <section className="join-section" id="join">
        <p className="section-label">Write with us</p><h2>Have a story to tell?</h2><p>NYU graduate students from every field are welcome to contribute.</p><span className="contact-note dark-note">Contributor information is coming soon.</span>
      </section>

      <footer><div className="wordmark footer-mark"><span className="mark"><FlaskConical aria-hidden="true" size={19} strokeWidth={1.8} /></span><span>NYU <b>SciComm</b></span></div><p>Graduate student science communication at New York University.</p><p>© {new Date().getFullYear()} NYU Science Communication Club</p></footer>
    </main>
  );
}

import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h2 className="greeting">Hello, I'm</h2>
          <h1 className="name">Azra Talib</h1>
          <h2 className="title">WEB DEVELOPER</h2>
          <p className="description">
             I’m Azra, a skilled web developer specializing in HTML, CSS, JavaScript, TypeScript, and Next.js. Welcome to my portfolio
          </p>
          <div className="cta-buttons">
            <button className="hire-me">Hire Me</button>
            <a className="see-work" href="/about">See my work</a>
          </div>
        </div>
      </section>
    </main>
  )
}
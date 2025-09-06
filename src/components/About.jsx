export default function About() {
  return (
    <section id="about" className="section bg-slate-50 py-16">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        {/* About Image */}
        <img
          src="https://picsum.photos/seed/about/700/450"
          alt="Our Team"
          className="rounded-2xl shadow-xl ring-1 ring-slate-200"
        />

        {/* About Content */}
        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            We’re a Team of Builders & Designers 🚀
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            At <span className="font-semibold">Branco</span>, we combine{" "}
            <span className="font-medium">strategy, creativity, and technology</span>{" "}
            to craft digital experiences that deliver **real business impact**.
            Our mission is simple: help brands grow, scale, and inspire trust
            through cutting-edge solutions.
          </p>

          {/* Values Section */}
          <div className="mt-6 grid gap-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-700">💡 Innovation First</h3>
              <p className="text-slate-600">
                We don’t follow trends—we set them. Our solutions are designed to
                evolve with your business.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-700">🤝 Collaboration</h3>
              <p className="text-slate-600">
                From startups to enterprises, we work as an extension of your team,
                aligning with your goals at every step.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-700">⚡ Excellence in Delivery</h3>
              <p className="text-slate-600">
                With agile practices, QA automation, and CI/CD pipelines, we ensure
                quality at speed.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="/services"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow"
            >
              Explore Our Services →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

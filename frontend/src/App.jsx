import "./App.css";
import JobCard from "./components/JobCard";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const jobs = [
  {
    id: 1,
    title: "Junior Web Developer",
    company: "Punjab Tech Solutions",
    type: "Full-time",
    location: "Mohali, Punjab",
    salary: "₹3–5 LPA",
    description: "Build and maintain modern web applications.",
    applyUrl: "https://example.com/jobs",
  },
  {
    id: 2,
    title: "React Developer Intern",
    company: "Digital Punjab",
    type: "Internship",
    location: "Chandigarh",
    salary: "₹12,000/month",
    description: "Learn React while contributing to real projects.",
    applyUrl: "https://example.com/internships",
  },
  {
    id: 3,
    title: "Technical Support Associate",
    company: "North India Services",
    type: "Full-time",
    location: "Ludhiana, Punjab",
    salary: "₹2.5–4 LPA",
    description: "Help customers troubleshoot technical issues.",
    applyUrl: "https://example.com/careers",
  },
];
const filteredJobs = jobs.filter((job) => {
  const query = searchTerm.toLowerCase().trim();

  return (
    job.title.toLowerCase().includes(query) ||
    job.company.toLowerCase().includes(query) ||
    job.location.toLowerCase().includes(query)
  );
});
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">P</div>
          <div>
            <h2>PGRKAM</h2>
            <span>Smart Job Finder</span>
          </div>
        </div>

        <nav className="navigation">
          <p className="nav-label">MENU</p>

          <button className="nav-item active">
            <span>▦</span> Dashboard
          </button>

          <button className="nav-item">
            <span>⌕</span> Find Jobs
          </button>

          <button className="nav-item">
            <span>♡</span> Saved Jobs
          </button>

          <button className="nav-item">
            <span>◉</span> Nearby Opportunities
          </button>

          <button className="nav-item">
            <span>▤</span> Skill Development
          </button>
        </nav>

        <div className="sidebar-footer">
          <p>Punjab Government</p>
          <span>Employment Opportunities</span>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">PUNJAB ROZGAR</p>
            <h2>Job Seeker Dashboard</h2>
          </div>

          <div className="profile">
            <div className="avatar">A</div>
            <div>
              <strong>Job Seeker</strong>
              <span>Candidate Account</span>
            </div>
          </div>
        </header>

        <section className="welcome">
          <div>
            <p className="eyebrow">YOUR NEXT OPPORTUNITY STARTS HERE</p>
            <h1>Find work that moves you forward.</h1>
            <p>
              Explore jobs, discover local opportunities, and build
              skills for your future.
            </p>
          </div>
          <form
  className="job-search"
  onSubmit={(event) => event.preventDefault()}
>
  <input
    type="search"
    placeholder="Search by job title, company, or location..."
    value={searchTerm}
    onChange={(event) => setSearchTerm(event.target.value)}
    aria-label="Search jobs by title, company, or location"
  />

  <button type="submit">Search Jobs</button>
</form>
        </section>

        <section className="stats">
          <article className="stat-card">
            <span>Available Jobs</span>
            <h2>120+</h2>
            <p>Explore opportunities</p>
          </article>

          <article className="stat-card">
            <span>Nearby Jobs</span>
            <h2>24</h2>
            <p>Discover your area</p>
          </article>

          <article className="stat-card">
            <span>Skill Programs</span>
            <h2>18</h2>
            <p>Learn something new</p>
          </article>
        </section>

        <section className="section-heading">
          <div>
            <h2>Explore opportunities</h2>
            <p>Discover your next career move.</p>
          </div>
        </section>

        <section className="quick-links">
          <article className="quick-card">
            <div className="quick-icon">⌕</div>
            <h3>Find a Job</h3>
            <p>Browse employment opportunities matching your interests.</p>
          </article>

          <article className="quick-card">
            <div className="quick-icon">◎</div>
            <h3>Jobs Near You</h3>
            <p>Explore opportunities based on your location.</p>
          </article>

          <article className="quick-card">
            <div className="quick-icon">↗</div>
            <h3>Build Your Skills</h3>
            <p>Discover training and career development programs.</p>
          </article>
        </section>
        <section className="jobs-section">
  <div className="section-heading">
    <h2>Featured Opportunities</h2>
    <p>Explore roles that could be your next career move.</p>
  </div>

  <div className="jobs-grid">
    {filteredJobs.length > 0 ? (
  filteredJobs.map((job) => (
    <JobCard key={job.id} job={job} />
  ))
) : (
  <p className="no-results">
    No jobs found. Try a different search.
  </p>
)}
  </div>
</section>
      </main>
    </div>
  );
}

export default App;

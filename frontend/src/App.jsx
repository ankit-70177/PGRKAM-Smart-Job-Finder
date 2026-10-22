
import "./App.css";
import { useState } from "react";
import JobCard from "./components/JobCard";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [savedJobIds, setSavedJobIds] = useState(() => {
    try {
      const saved = localStorage.getItem("pgrkam-saved-jobs");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [showSavedOnly, setShowSavedOnly] = useState(false);

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
      skills: ["HTML", "CSS", "JavaScript", "React"],
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
      skills: ["React", "JavaScript", "HTML"],
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
      skills: ["Communication", "Troubleshooting", "Networking"],
    },
  ];

  function toggleSavedJob(jobId) {
    setSavedJobIds((previousIds) => {
      const nextIds = previousIds.includes(jobId)
        ? previousIds.filter((id) => id !== jobId)
        : [...previousIds, jobId];

      try {
        localStorage.setItem(
          "pgrkam-saved-jobs",
          JSON.stringify(nextIds)
        );
      } catch (error) {
        console.error("Could not save jobs:", error);
      }

      return nextIds;
    });
  }

  function addCandidateSkill(event) {
  event.preventDefault();

  const skill = skillInput.trim();

  if (!skill) return;

  const alreadyExists = candidateSkills.some(
    (existingSkill) =>
      existingSkill.toLowerCase() === skill.toLowerCase()
  );

  if (alreadyExists) {
    setSkillInput("");
    return;
  }

  const updatedSkills = [...candidateSkills, skill];

  setCandidateSkills(updatedSkills);

  localStorage.setItem(
    "pgrkam-candidate-skills",
    JSON.stringify(updatedSkills)
  );

  setSkillInput("");
}

function removeCandidateSkill(skillToRemove) {
  const updatedSkills = candidateSkills.filter(
    (skill) => skill !== skillToRemove
  );

  setCandidateSkills(updatedSkills);

  localStorage.setItem(
    "pgrkam-candidate-skills",
    JSON.stringify(updatedSkills)
  );
}

function getJobMatch(job) {
  if (candidateSkills.length === 0) return 0;

  const candidateSkillSet = new Set(
    candidateSkills.map((skill) => skill.toLowerCase())
  );

  const matchedSkills = job.skills.filter((skill) =>
    candidateSkillSet.has(skill.toLowerCase())
  );

  return Math.round(
    (matchedSkills.length / job.skills.length) * 100
  );
}

  const [candidateSkills, setCandidateSkills] = useState(() => {
  try {
    return JSON.parse(localStorage.getItem("pgrkam-candidate-skills")) || [];
  } catch {
    return [];
  }
});

const [skillInput, setSkillInput] = useState("");

  const filteredJobs = jobs.filter((job) => {
  const query = searchTerm.toLowerCase().trim();

  const matchesSearch =
    job.title.toLowerCase().includes(query) ||
    job.company.toLowerCase().includes(query) ||
    job.location.toLowerCase().includes(query);

  const matchesSaved =
    !showSavedOnly || savedJobIds.includes(job.id);

  const matchesCategory =
    selectedCategory === "All" ||
    job.type === selectedCategory;

  return matchesSearch && matchesSaved && matchesCategory;
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

          <button
            className={`nav-item ${!showSavedOnly ? "active" : ""}`}
            onClick={() => setShowSavedOnly(false)}
          >
            <span>▦</span> Dashboard
          </button>

          <button
            className="nav-item"
            onClick={() => {
              setShowSavedOnly(false);
              document.querySelector(".jobs-section")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            <span>⌕</span> Find Jobs
          </button>

          <button
            className={`nav-item ${showSavedOnly ? "active" : ""}`}
            onClick={() => setShowSavedOnly((current) => !current)}
          >
            <span>♡</span>
            {showSavedOnly ? "All Jobs" : "Saved Jobs"}
          </button>

          <button
            className="nav-item"
            onClick={() =>
              alert("Nearby opportunities will be available in the next feature.")
            }
          >
            <span>◉</span> Nearby Opportunities
          </button>

          <button
            className="nav-item"
            onClick={() =>
              alert("Skill development programs will be added in the next feature.")
            }
          >
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
            <p className="eyebrow">
              YOUR NEXT OPPORTUNITY STARTS HERE
            </p>
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

            <section className="skills-section">
  <div className="section-heading">
    <div>
      <h2>My Skills Profile</h2>
      <p>Add your skills to prepare for personalized job recommendations.</p>
    </div>
  </div>

  <form className="skills-form" onSubmit={addCandidateSkill}>
    <input
      type="text"
      value={skillInput}
      onChange={(event) => setSkillInput(event.target.value)}
      placeholder="Enter a skill (e.g. React, Python)"
      aria-label="Enter a skill"
    />

    <button type="submit">Add Skill</button>
  </form>

  <div className="skills-list">
    {candidateSkills.length > 0 ? (
      candidateSkills.map((skill) => (
        <span className="skill-tag" key={skill}>
          {skill}

          <button
            type="button"
            onClick={() => removeCandidateSkill(skill)}
            aria-label={`Remove ${skill}`}
          >
            ×
          </button>
        </span>
      ))
    ) : (
      <p className="no-results">
        No skills added yet. Add your first skill above.
      </p>
    )}
  </div>
</section>

        <section className="stats">
          <article className="stat-card">
            <span>Available Jobs</span>
            <h2>{jobs.length}</h2>
            <p>Explore opportunities</p>
          </article>

          <article className="stat-card">
            <span>Saved Jobs</span>
            <h2>{savedJobIds.length}</h2>
            <p>Your bookmarked opportunities</p>
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
            <p>
              Browse employment opportunities matching your interests.
            </p>
          </article>

          <article className="quick-card">
            <div className="quick-icon">◎</div>
            <h3>Jobs Near You</h3>
            <p>
              Explore opportunities based on your location.
            </p>
          </article>

          <article className="quick-card">
            <div className="quick-icon">↗</div>
            <h3>Build Your Skills</h3>
            <p>
              Discover training and career development programs.
            </p>
          </article>
        </section>

        <section className="jobs-section">
          <div className="section-heading">
            <div>
              <h2>
                {showSavedOnly
                  ? "Your Saved Jobs"
                  : "Featured Opportunities"}
              </h2>
              <p>
                {showSavedOnly
                  ? "Opportunities you've bookmarked."
                  : "Explore roles that could be your next career move."}
              </p>
            </div>
          </div>

          <div className="category-filters">
  {["All", "Full-time", "Internship"].map((category) => (
    <button
      key={category}
      className={`category-button ${
        selectedCategory === category ? "active" : ""
      }`}
      onClick={() => setSelectedCategory(category)}
    >
      {category}
    </button>
  ))}
</div>

          <div className="jobs-grid">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  isSaved={savedJobIds.includes(job.id)}
                  onToggleSave={toggleSavedJob}
                  onViewDetails={setSelectedJob}
                  jobMatch={getJobMatch(job)}
                />
              ))
            ) : (
              <p className="no-results">
                {showSavedOnly
                  ? "No saved jobs yet. Save a job to see it here."
                  : "No jobs found. Try a different search."}
              </p>
            )}
          </div>
        </section>
        {selectedJob && (
  <div className="job-modal-overlay" onClick={() => setSelectedJob(null)}>
    <div
      className="job-modal"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        className="modal-close"
        onClick={() => setSelectedJob(null)}
      >
        ✕
      </button>

      <span className="job-type">{selectedJob.type}</span>
      <h2>{selectedJob.title}</h2>
      <p className="company-name">{selectedJob.company}</p>

      <div className="job-details">
        <span>📍 {selectedJob.location}</span>
        <span>💰 {selectedJob.salary}</span>
      </div>

      <h3>About this opportunity</h3>
      <p>{selectedJob.description}</p>

      <a
        className="apply-link"
        href={selectedJob.applyUrl}
        target="_blank"
        rel="noreferrer"
      >
        Apply Now ↗
      </a>

      <p className="modal-note">
        Demo opportunity — verify the employer and application link before applying.
      </p>
    </div>
  </div>
)}
      </main>
    </div>
  );
}

export default App;

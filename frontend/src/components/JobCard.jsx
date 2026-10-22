function JobCard({ job, isSaved, onToggleSave, onViewDetails }) {
  return (
    <article className="job-card">
      <div className="job-card-top">
        <div className="company-logo">{job.company.charAt(0)}</div>
        <span className="job-type">{job.type}</span>
      </div>

      <h3>{job.title}</h3>
      <p className="company-name">{job.company}</p>

      <div className="job-details">
        <span>📍 {job.location}</span>
        <span>💰 {job.salary}</span>
      </div>

      <p className="job-description">{job.description}</p>

      <div className="job-card-actions">
        <button
          type="button"
          className="apply-link"
          onClick={() => onViewDetails(job)}
        >
          View Opportunity ↗
        </button>

        <button
          type="button"
          className={`save-button ${isSaved ? "saved" : ""}`}
          onClick={() => onToggleSave(job.id)}
          aria-label={isSaved ? "Remove saved job" : "Save job"}
        >
          {isSaved ? "♥ Saved" : "♡ Save"}
        </button>
      </div>
    </article>
  );
}

export default JobCard;

function JobCard({ job }) {
  return (
    <article className="job-card">
      <div className="job-card-top">
        <div className="company-logo">
          {job.company.charAt(0)}
        </div>

        <span className="job-type">{job.type}</span>
      </div>

      <h3>{job.title}</h3>
      <p className="company-name">{job.company}</p>

      <div className="job-details">
        <span>📍 {job.location}</span>
        <span>💰 {job.salary}</span>
      </div>

      <p className="job-description">{job.description}</p>

      <a
        className="apply-link"
        href={job.applyUrl}
        target="_blank"
        rel="noreferrer"
      >
        View Opportunity ↗
      </a>
    </article>
  );
}

export default JobCard;

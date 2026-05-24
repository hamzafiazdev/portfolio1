import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate & Matriculation</h4>
                <h5>High Academic Standing</h5>
              </div>
              <h3>2018 - 2022</h3>
            </div>
            <p>
              Completed intermediate education with 912/1100 marks and matriculation with 1050/1100 marks. Built excellent foundational logic and analytical skills that paved the way for my computing degree.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS in Computer Science</h4>
                <h5>COMSATS University Islamabad, Sahiwal Campus</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              Pursuing a Bachelor of Science in Computer Science with a CGPA of 3.05 / 4.00. Gaining a strong foundation in core computer science subjects, algorithms, and databases while actively building projects in AI, automation, and full-stack development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Aspiring AI Engineer Intern</h4>
                <h5>Seeking Opportunities</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Driven to secure an AI or software engineering internship where I can apply full-stack web development, prompt engineering, LLM integration, and database management skills to build production-grade, intelligent solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

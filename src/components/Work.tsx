import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { assetPath } from "../utils/assetPath";

const projects = [
  {
    title: "Laravel Hotel Project - Hostily",
    category: "AI-Powered Hotel Booking Platform",
    description:
      "Built a Laravel-based hotel booking platform with smart guest assistance, instant support, and personalized room recommendations for a smoother booking experience.",
    tools: "Laravel, AI chatbot integration, recommendation algorithms",
    image: assetPath("images/hotel-website-image.png"),
    link: "https://github.com/hamzafiazdev/laravel-hotel-project",
  },
  {
    title: "AI Voice Agent",
    category: "Voice-Enabled Conversational Assistant",
    description:
      "Created a real-time AI voice assistant that handles natural conversations with speech input and spoken responses through flexible agent workflows.",
    tools:
      "Python, OpenAI Agents SDK, speech-to-text, text-to-speech, Textual",
    image: assetPath("images/ai-voice-agent-live.png"),
    link: "https://hamza-va.streamlit.app/",
  },
  {
    title: "AI Resume Analyzer",
    category: "Intelligent Resume Screening Tool",
    description:
      "Developed an AI resume screening app that compares resumes with job descriptions and returns fast compatibility insights through automated matching.",
    tools: "Streamlit, PDF parsing, text similarity techniques",
    image: assetPath("images/ai-resume-analyzer-live.png"),
    link: "https://hamza-ra.streamlit.app/",
  },
  {
    title: "Image Caption Generator",
    category: "Streamlit App with Google Gemini",
    description:
      "Built a Streamlit-based image caption generator that accepts JPG, JPEG, and PNG uploads, combines them with an optional prompt, and sends the request to Google Gemini for descriptive caption generation.",
    tools:
      "Python, Streamlit, Google Gemini, .env API key configuration, pyproject.toml, app.py",
    image: assetPath("images/image-caption-generator.jpeg"),
    link: "https://hamza-ig.streamlit.app/",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <a
              className="work-box"
              key={index}
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Project summary</h4>
                <p>{project.description}</p>
                <h4>Stack and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

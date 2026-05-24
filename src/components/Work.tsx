import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { assetPath } from "../utils/assetPath";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Laravel Hotel Project - Hostily",
    category: "AI-Powered Hotel Booking Platform",
    description:
      "Built a Laravel-based hotel booking platform with smart guest assistance, instant support, and personalized room recommendations for a smoother booking experience.",
    tools: "Laravel, AI chatbot integration, recommendation algorithms",
    image: assetPath("images/hostily-project.png"),
  },
  {
    title: "AI Voice Agent",
    category: "Voice-Enabled Conversational Assistant",
    description:
      "Created a real-time AI voice assistant that handles natural conversations with speech input and spoken responses through flexible agent workflows.",
    tools:
      "Python, OpenAI Agents SDK, speech-to-text, text-to-speech, Textual",
    image: assetPath("images/ai-voice-agent.png"),
  },
  {
    title: "AI Resume Analyzer",
    category: "Intelligent Resume Screening Tool",
    description:
      "Developed an AI resume screening app that compares resumes with job descriptions and returns fast compatibility insights through automated matching.",
    tools: "Streamlit, PDF parsing, text similarity techniques",
    image: assetPath("images/ai-resume-analyzer.png"),
  },
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    if (box.length === 0) return;
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

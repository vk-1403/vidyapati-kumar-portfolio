import { useEffect, useRef } from "react";

export default function SkillsSection() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach((bar) => {
              const width = bar.getAttribute('data-width');
              if (width) {
                (bar as HTMLElement).style.width = width + '%';
              }
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: [
        { name: "Python (pandas, NumPy, SciPy)", level: 95 },
        { name: "Vision Transformers", level: 90 },
        { name: "SHAP & Explainability", level: 88 }
      ]
    },
    {
      title: "Embedded Systems",
      icon: "⚡",
      skills: [
        { name: "ESP32 & Raspberry Pi", level: 92 },
        { name: "IoT Sensor Fusion", level: 85 },
        { name: "LiDAR & IMU Integration", level: 90 }
      ]
    },
    {
      title: "Computer Vision",
      icon: "👁️",
      skills: [
        { name: "YOLOv8 & OpenPose", level: 88 },
        { name: "Gait Analysis", level: 96 },
        { name: "Grad-CAM & Attention", level: 85 }
      ]
    },
    {
      title: "Biomechanics",
      icon: "🏃",
      skills: [
        { name: "OpenSim Analysis", level: 90 },
        { name: "Prosthetic Design", level: 95 },
        { name: "Gait Analysis", level: 92 }
      ]
    },
    {
      title: "Engineering Tools",
      icon: "⚙️",
      skills: [
        { name: "COMSOL (FEA)", level: 88 },
        { name: "MATLAB", level: 90 },
        { name: "CAD Design", level: 85 }
      ]
    },
    {
      title: "Web Development",
      icon: "💻",
      skills: [
        { name: "Streamlit", level: 85 },
        { name: "LangChain", level: 80 },
        { name: "Database Management", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50" ref={skillsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600">Expertise across multiple domains</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 text-sm">{skill.name}</span>
                      <span className="text-sm font-semibold text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="skill-bar bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        data-width={skill.level}
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

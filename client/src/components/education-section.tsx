export default function EducationSection() {
  const education = [
    {
      degree: "Ph.D. in Mechanical Engineering",
      institution: "IIT Kharagpur, India",
      year: "2025 (Pursuing)",
      cgpa: "8.5/10",
      description: "Specializing in AI-based biomechatronic systems, intelligent prosthetics, and wearable health applications."
    },
    {
      degree: "M.E. in Production Engineering",
      institution: "Jadavpur University, India",
      year: "2018",
      cgpa: "8.38/10",
      description: "Focused on advanced manufacturing processes and intelligent systems for production optimization."
    },
    {
      degree: "B.Tech in Mechanical Engineering",
      institution: "MAKAUT, India",
      year: "2016",
      cgpa: "9.19/10",
      description: "Strong foundation in mechanical engineering principles with focus on assistive technologies."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600">Academic journey and achievements</p>
        </div>
        <div className="relative">
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item pl-16">
                <div className="timeline-dot"></div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                      <p className="text-lg text-primary font-semibold">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-gray-700">{edu.year}</div>
                      <div className="text-sm text-gray-500">CGPA: {edu.cgpa}</div>
                    </div>
                  </div>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

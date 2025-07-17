export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate researcher exploring the intersection of AI, biomechatronics, and healthcare innovation
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a PhD candidate in Mechanical Engineering at IIT Kharagpur, currently working on AI-based biomechatronic systems, with a focus on intelligent prosthetics and wearable health applications. My work explores the integration of sensor data, embedded platforms, and machine learning for real-time decision-making in healthcare-related contexts.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I have been fortunate to contribute to interdisciplinary projects involving computer vision, physiological signal analysis, and assistive technologies. I'm genuinely interested in exploring collaborative research that brings together AI, human sensing, and healthcare innovation.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">22+</div>
                <div className="text-gray-600">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2</div>
                <div className="text-gray-600">Patents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">96%</div>
                <div className="text-gray-600">ML Accuracy</div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Advanced research laboratory with AI and robotics equipment"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

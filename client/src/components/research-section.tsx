export default function ResearchSection() {
  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Experience</h2>
          <p className="text-xl text-gray-600">Leading-edge research in AI-enhanced biomechatronics</p>
        </div>
        
        <div className="space-y-12">
          {/* Senior Research Fellow */}
          <div className="research-card bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Senior Research Fellow</h3>
                    <p className="text-lg text-primary font-semibold">AI-Enhanced Powered Ankle-Foot Prosthetic System</p>
                    <p className="text-gray-600">Indian Institute of Technology Kharagpur</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-700">Jul 2021 – Present</div>
                    <div className="text-sm text-gray-500">Kharagpur, India</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">Embedded IoT Systems & Sensor Fusion</h4>
                      <p className="text-sm text-gray-600">Designed microcontroller-based sensor fusion platform using ESP32 and Raspberry Pi for real-time terrain classification via LiDAR and IMU data.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">Machine Learning & Explainability</h4>
                      <p className="text-sm text-gray-600">Built comprehensive Python-based pipelines achieving over 90% accuracy in gait phase detection using SHAP values for interpretability.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">Computer Vision for Gait Analysis</h4>
                      <p className="text-sm text-gray-600">Implemented video-based kinematic analysis using Vision Transformers, YOLOv8, and OpenPose, achieving 96% accuracy in pathology classification.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-2">LLM-Driven Clinical Decision Support</h4>
                      <p className="text-sm text-gray-600">Developed CDS ProsthicX, an LLM-powered tool using LangChain and Streamlit for personalized prosthetic recommendations.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-80">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
                  alt="Advanced prosthetic leg device with sensors and electronics"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Project Mentor */}
          <div className="research-card bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Project Mentor</h3>
                    <p className="text-lg text-primary font-semibold">TIH Foundation for IoT and IoE (IIT Bombay)</p>
                    <p className="text-gray-600">IIT Bombay & DST (Government of India)</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-700">Feb 2024 – Present</div>
                    <div className="text-sm text-gray-500">Kharagpur, India</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Chanakya Fellowship Project</h4>
                    <p className="text-sm text-gray-600">Mentoring a prestigious project funded by DST, Government of India, titled "Development of Intelligent and User-Friendly Prosthetic for Real-World Applications".</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Leadership & Coordination</h4>
                    <p className="text-sm text-gray-600">Leading end-to-end IoT-enabled prosthetic system development, coordinating cross-functional teams, and mentoring students.</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-80">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
                  alt="Team of researchers collaborating on IoT devices and prosthetics"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

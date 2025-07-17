import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function PublicationsSection() {
  const publications = [
    {
      title: "Wearable sensor-based intent recognition for adaptive control of intelligent ankle-foot prosthetics",
      authors: "Kumar, V., Pratihar, D. K. (2025)",
      journal: "Measurement: Sensors, 39, 101865. Elsevier.",
      status: "Published",
      statusColor: "bg-green-100 text-green-800",
      highlights: [
        "Developed intent recognition system using wearable FSR and accelerometer data",
        "Achieved 96.3% accuracy using SBLSTM",
        "Outperformed CNN, KNN, and ANFIS in accuracy and inference speed (25 ms)"
      ]
    },
    {
      title: "Biomechanical material selection for ankle-foot prosthetics: An ensemble MCDM-FEA framework",
      authors: "Kumar, V., Pratihar, D. K. (2025)",
      journal: "International Journal on Interactive Design and Manufacturing.",
      status: "Published",
      statusColor: "bg-green-100 text-green-800",
      highlights: [
        "Developed hybrid MCDM-FEA model for material ranking",
        "Based on mechanical strength, fatigue, and damping properties"
      ]
    },
    {
      title: "ProsthetiX-AI: An LLM-based clinical decision support system for evidence-based prosthetic recommendations",
      authors: "Kumar, V., Pratihar, D.K. (2025)",
      journal: "Health Information Science and Systems.",
      status: "Under Review",
      statusColor: "bg-yellow-100 text-yellow-800",
      highlights: [
        "Designed LLM-integrated CDSS for prosthetic prescriptions",
        "Uses structured medical inputs and evidence-based guidelines"
      ]
    },
    {
      title: "Mechatronic and AI-driven framework for non-invasive screening of knee abnormalities",
      authors: "Kumar, V., Hrishikesh, M.V., Shijas, M., Pratihar, D.K. (2024)",
      journal: "Computer Methods in Biomechanics and Biomedical Engineering.",
      status: "Accepted",
      statusColor: "bg-blue-100 text-blue-800",
      highlights: [
        "Combined sEMG and goniometer data for knee abnormality detection",
        "Achieved 92.3% cross-validated accuracy with Extra Trees classifier"
      ]
    },
    {
      title: "Automated detection of gait disorders using interpretable vision transformer framework",
      authors: "Kumar, V., Prakash, R. R., Pratihar, D.K. (2024)",
      journal: "Health Information Science and Systems.",
      status: "Under Review",
      statusColor: "bg-yellow-100 text-yellow-800",
      highlights: [
        "Proposed ViTGA framework using Vision Transformer and Gait Energy Images",
        "Achieved 98% validation accuracy in 10 epochs"
      ]
    },
    {
      title: "Vision Transformer-based pose estimation for automated gait analysis",
      authors: "Kumar, V., Pratihar, D. K. (2024)",
      journal: "IEEE InCACCT Conference.",
      status: "Presented",
      statusColor: "bg-green-100 text-green-800",
      highlights: [
        "Benchmarked YOLOv8, DeepPose, and RTM Pose models",
        "Achieved MAE = 19.75, R² = 99.5%, 107.7 ms inference time"
      ]
    }
  ];

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Publications</h2>
          <p className="text-xl text-gray-600">Latest research contributions to the field</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub, index) => (
            <div key={index} className="publication-card bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <Badge className={pub.statusColor}>
                  {pub.status}
                </Badge>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {pub.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {pub.authors} {pub.journal}
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                {pub.highlights.map((highlight, idx) => (
                  <p key={idx}>• {highlight}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-primary text-white hover:bg-primary/90">
            View All Publications
          </Button>
        </div>
      </div>
    </section>
  );
}

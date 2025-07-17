import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export default function PatentsSection() {
  return (
    <section id="patents" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Patents & Copyrights</h2>
          <p className="text-xl text-gray-600">Innovative solutions with intellectual property protection</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Patent 1 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-lg">
            <div className="mb-6">
              <Badge className="bg-purple-100 text-purple-800">Patent</Badge>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              A Compact and Powered Ankle-Foot Prosthetic Device
            </h3>
            <p className="text-gray-600 mb-4">
              Indian Patent Application No. 202431037184 (Published & Under Examination)
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-1 h-5 w-5" />
                <p className="text-gray-700">Real-time foot height and ankle angle adjustments</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-1 h-5 w-5" />
                <p className="text-gray-700">Spring-loaded split forefoot for enhanced shock absorption</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-1 h-5 w-5" />
                <p className="text-gray-700">Hybrid actuation system (active + passive) for improved mobility</p>
              </div>
            </div>
            <div className="mt-6">
              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
                alt="Advanced prosthetic ankle device with mechanical components"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Copyright */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg">
            <div className="mb-6">
              <Badge className="bg-blue-100 text-blue-800">Copyright</Badge>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ProsthetiX-AI – Clinical Decision Support System
            </h3>
            <p className="text-gray-600 mb-4">
              Indian Copyright Application No. 9678/2025-CO/SW
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-1 h-5 w-5" />
                <p className="text-gray-700">LLM-powered clinical decision support tool</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-1 h-5 w-5" />
                <p className="text-gray-700">Integrates explainable AI and K-level logic</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mr-3 mt-1 h-5 w-5" />
                <p className="text-gray-700">Real-time academic citation justification</p>
              </div>
            </div>
            <div className="mt-6">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
                alt="AI-powered clinical decision support interface on computer screen"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

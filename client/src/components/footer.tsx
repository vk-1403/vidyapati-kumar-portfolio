import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const downloadCV = () => {
    // Download the actual CV file
    const link = document.createElement('a');
    link.href = '/CV_VK_DS_1752654302993.pdf';
    link.download = 'Vidyapati_Kumar_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Vidyapati Kumar</h3>
            <p className="text-gray-400">
              PhD Candidate in Mechanical Engineering, specializing in AI-based biomechatronic systems and intelligent prosthetics.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection("#about")}
                  className="hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#research")}
                  className="hover:text-white transition-colors"
                >
                  Research
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#publications")}
                  className="hover:text-white transition-colors"
                >
                  Publications
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("#contact")}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Download CV</h4>
            <Button 
              onClick={downloadCV}
              className="bg-primary hover:bg-primary/90"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Vidyapati Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

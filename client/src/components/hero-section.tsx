import { Button } from "@/components/ui/button";
import { Mail, FileText } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="gradient-bg text-white py-20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Vidyapati Kumar
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              PhD Candidate in Mechanical Engineering
            </p>
            <p className="text-lg text-blue-200 max-w-2xl">
              Specializing in AI-based biomechatronic systems, intelligent prosthetics, and wearable health applications. Currently developing cutting-edge solutions for healthcare innovation at IIT Kharagpur.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-white text-primary hover:bg-blue-50"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button
                onClick={() => scrollToSection("#research")}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary"
              >
                <FileText className="mr-2 h-4 w-4" />
                View Research
              </Button>
            </div>
            <div className="flex space-x-6 pt-4">
              <a
                href="mailto:vidyapatikumar.me@gmail.com"
                className="text-white hover:text-blue-200 transition-colors"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a
                href="https://in.linkedin.com/in/vidyapati-kumar-37332251"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.researchgate.net/profile/Vidyapati-Kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition-colors"
                aria-label="ResearchGate"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9.142 9.142 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9.163 9.163 0 0 0 .049.727 7.61 7.61 0 0 0 .077.53c.025.153.063.295.112.437.244.744.65 1.303 1.213 1.68.565.375 1.255.565 2.073.565.818 0 1.508-.19 2.073-.565.563-.377.97-.936 1.213-1.68.049-.142.087-.284.112-.437.025-.173.052-.348.077-.53a9.142 9.142 0 0 0 .05-.727 31.154 31.154 0 0 0 .014-1.017c0-.395-.003-.734-.014-1.016a9.163 9.163 0 0 0-.049-.727 7.61 7.61 0 0 0-.077-.53 3.193 3.193 0 0 0-.112-.437c-.244-.744-.65-1.303-1.213-1.68C21.094.19 20.404 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086C2.177 5.922.46 6.46.46 8.12c0 1.660 1.717 2.198 3.46 2.198 1.261 0 2.607-.086 4.297-.086 1.69 0 3.036.086 4.297.086 1.743 0 3.46-.538 3.46-2.198 0-1.66-1.717-2.198-3.46-2.198-1.261 0-2.607.086-4.297.086z"/>
                </svg>
              </a>
              <a
                href="https://scholar.google.com/citations?user=thYJjvAAAAAJ&hl=en&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 transition-colors"
                aria-label="Google Scholar"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.242 13.769L0.5 9.5 12 1l11.5 8.5-4.742 4.269C17.548 12.179 14.978 11.5 12 11.5s-5.548.679-6.758 2.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/profile-photo.png"
              alt="Vidyapati Kumar - PhD Candidate in Mechanical Engineering"
              className="rounded-full shadow-2xl w-80 h-80 object-cover border-8 border-white/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

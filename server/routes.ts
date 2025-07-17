import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          message: "All fields are required" 
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Invalid email format" 
        });
      }

      // In a real application, you would:
      // 1. Send an email notification
      // 2. Store the message in a database
      // 3. Send auto-reply to the sender
      
      console.log("Contact form submission:", {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
      });

      res.json({ 
        message: "Message sent successfully! I will get back to you soon." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        message: "Internal server error. Please try again later." 
      });
    }
  });

  // CV download endpoint
  app.get("/api/download-cv", (req, res) => {
    try {
      // In production, this would serve the actual CV file
      res.json({ 
        downloadUrl: "/assets/CV_VK_DS_1752654302993.pdf",
        filename: "Vidyapati_Kumar_CV.pdf"
      });
    } catch (error) {
      console.error("CV download error:", error);
      res.status(500).json({ 
        message: "Error downloading CV. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

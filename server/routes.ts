import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, message: "Message sent successfully!", contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Contact submission error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again." 
        });
      }
    }
  });

  // Get all contacts (admin endpoint)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Failed to retrieve contacts:", error);
      res.status(500).json({ message: "Failed to retrieve contacts" });
    }
  });

  // Discord server stats endpoint
  app.get("/api/discord/stats/:inviteCode", async (req, res) => {
    try {
      const { inviteCode } = req.params;
      
      // Fetch Discord server stats from public API
      const response = await fetch(
        `https://discord.com/api/v10/invites/${inviteCode}?with_counts=true`
      );
      
      if (!response.ok) {
        throw new Error(`Discord API returned ${response.status}`);
      }
      
      const data = await response.json();
      
      // Construct icon URL if available
      let iconUrl = null;
      if (data.guild?.icon) {
        const guildId = data.guild.id;
        const iconHash = data.guild.icon;
        iconUrl = `https://cdn.discordapp.com/icons/${guildId}/${iconHash}.png?size=256`;
      }
      
      res.json({
        totalMembers: data.approximate_member_count || 0,
        onlineMembers: data.approximate_presence_count || 0,
        serverName: data.guild?.name || "Unknown Server",
        serverIcon: iconUrl
      });
    } catch (error) {
      console.error("Failed to fetch Discord stats:", error);
      res.status(500).json({ 
        message: "Failed to fetch Discord server stats",
        totalMembers: 0,
        onlineMembers: 0,
        serverName: "Unknown Server",
        serverIcon: null
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

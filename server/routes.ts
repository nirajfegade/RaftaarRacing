import type { Express } from "express";
import { createServer, type Server } from "http";
// import { storage } from "./storage"; // Removed as the module does not exist

//export const storage = {}; // Placeholder for storage functionality
export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)


  const httpServer = createServer(app);
  

  return httpServer;
}

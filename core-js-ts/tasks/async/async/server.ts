import express, { Application, Request, Response } from "express";

export class SimpleServer {
  private server: any;
  private activeConnections: number = 0;
  private MAX_CONCURRENT_REQUESTS: number = 20;

  constructor(private readonly serverPort = 3000) {}

  public async startServer(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const app: Application = express();
      app.use(express.json());

      this.server = app.listen(this.serverPort, () => {
        console.log(`🚀 Server is running on http://localhost:${this.serverPort}`);
        resolve();
      });

      app.post("/send", async (req: Request, res: Response) => {
        if (this.activeConnections >= this.MAX_CONCURRENT_REQUESTS) {
          res.status(503).json({ error: "Server Overload", item: req.body });
          return;
        }

        this.activeConnections++;

        try {
          if (Math.random() < 0.1) {
            res.status(500).json({error: "Random Failure", item: req.body });
            return;
          }

          await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 1000) + 100));

          res.json({ success: true });
        } catch (error) {
          res.status(500).json({ error: (error as Error).message });
        } finally {
          this.activeConnections--;
        }
      });

      this.server.on("error", (err: any) => {
        reject(new Error(`❌ Server error: ${err.message}`));
      });
    });
  }

  public stopServer(): void {
    if (this.server) {
      this.server.close(() => {
        console.log("✅ Server stopped successfully.");
      });
      process.exit(0);
    } else {
      console.log("⚠️ Server is not running.");
    }
  }
}

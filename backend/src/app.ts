import schema from "@/schema";
import cors from "cors";
import {NextFunction, Response} from "express";
import {GraphQLServer, PubSub} from "graphql-yoga";
import helmet from "helmet";
import logger from "morgan";
import decodeJWT from "./utils/decodeJWT";

class App {
  public app: GraphQLServer;
  public pubSub: any;

  constructor() {
    this.pubSub = new PubSub();
    this.pubSub.ee.setMaxListeners(99);
    this.app = new GraphQLServer({
      schema,
      context: req => {
        return {
          req: req.request,
          pubSub: this.pubSub
        };
      }
    });
    this.middlewares();
  }

  private middlewares = (): void => {
    this.app.express.use(cors());
    this.app.express.use(logger("dev"));
    this.app.express.use(helmet());
    this.app.express.use(this.jwt);
  };

  private jwt = async (req, res: Response, next: NextFunction): Promise<void> => {
    const token = req.get('X-JWT');

    if (token) {
      const user = await decodeJWT(token);
      req.user = user;
    }

    next();
  }
}

export default new App().app;

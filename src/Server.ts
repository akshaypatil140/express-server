import * as express from 'express';
import * as bodyParser from 'body-parser';
import errorHandler from './lib/routes/errorHandler';
import notFoundRoute from './lib/routes/notFoundRoute';
import routes from '../src/route';
import Database from './lib/Database';
import Swagger from './lib/Swagger';

export default class Server {
    app: express.Express;
    /**
     * This is constructor
     * @param config
     */
    constructor(private config) {
        this.app = express();
    }
    /*
     * this show the route for health check
     */
    setupRoutes() {
        this.app.get('/health-check', (req: express.Request, res: express.Response, next: express.NextFunction) => {
            console.log('/health-check api called');
            res.send('I am OK');
        });
        this.app.use('/api', routes);
        this.app.use(notFoundRoute);
        this.app.use(errorHandler);
    }
    /*
    * initialize body parser
    */
    initBodyParser() {
        // parse application/x-www-form-urlencoded
        this.app.use(bodyParser.urlencoded({ extended: false }));

        // parse application/json
        this.app.use(bodyParser.json());
    }
    /**
     * Bootstrap method to run app
     */
    bootstrap() {
        this.initBodyParser();
        this.initSwagger();
        this.setupRoutes();
        return this;
    }
     public async run() {
        const {port, env, mongoURL } = this.config;
        try {
            await Database.open(mongoURL);
            this.app.listen(port, (err) => {
                if (err)console.log('Error in server setup');
                console.log(`app running on ${port} of ${env} successfully`);
        });
        }
        catch (error) {
            console.log('inside catch', error);

        }
        return this;
}
/**
 *  initialize swagger
 */
    private initSwagger() {
      const { swaggerDefinition, swaggerUrl }  = this.config;
      const swaggerSetup = new Swagger();
      // json route
      this.app.use(`${swaggerUrl}.json`, swaggerSetup.getRouter({
          swaggerDefinition,
     }));
      // UI route
      const {serve, setup } = swaggerSetup.getUI(swaggerUrl);
      this.app.use(swaggerUrl, serve, setup);
  }
}
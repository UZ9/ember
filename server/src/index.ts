import app from "./app";
import config from "./config/config";
import { BasicRobot } from "./game/models/BasicRobot";
import logger from "./middleware/logger";

//
const server = app.listen(parseInt(config.port), () => {
    logger.log("info", `Server is running on Port: ${config.port}`);

    const ai = new BasicRobot();
});

process.on("SIGTERM", () => {
    logger.info("SIGTERM signal received.");
    logger.info("Closing http server.");
    server.close((err) => {
        logger.info("Http server closed.");
        process.exit(err ? 1 : 0);
    });
});

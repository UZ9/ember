import app from "./app";
import config from "./config/config";
import { BasicAI } from "./game/models/BasicAI";
import logger from "./middleware/logger";

//
const server = app.listen(parseInt(config.port), () => {
    logger.log("info", `Server is running on Port: ${config.port}`);

    const ai = new BasicAI();

    ai.printState();

    ai.moveTo(3, 4);

    ai.printState();
});

process.on("SIGTERM", () => {
    logger.info("SIGTERM signal received.");
    logger.info("Closing http server.");
    server.close((err) => {
        logger.info("Http server closed.");
        process.exit(err ? 1 : 0);
    });
});

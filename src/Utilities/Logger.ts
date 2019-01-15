import { format, transports, createLogger } from "winston";
const Logger = createLogger({
    level: "debug",
    format: format.simple(),
    // You can also comment out the line above and uncomment the line below for JSON format
    // format: format.json(),
    transports: [new transports.Console()]
});

export { Logger };

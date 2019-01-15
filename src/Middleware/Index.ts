import { NextFunction, Request, Response } from "express";
import session from "express-session";
import uuid from "uuid/v4";

import { app } from "../Index";
import { Logger } from "../Utilities/Logger";
import { LoggerMiddleware } from "./Logger/Index";
import { Configuration } from "@config";
import { AuthMiddleware } from "./Auth/Index";
import { Db } from "typeorm-static";
import { TypeormStore, SessionEntity } from "typeorm-store";
import { Session } from "@entities/Session";
import { getConnection } from "typeorm";
export function BindMiddleware() {
    Logger.info("Binding middleware.");

    app.use(LoggerMiddleware);
    app.use(
        session({
            genid: () => {
                return uuid();
            },
            secret: Configuration.Web.Secret,
            resave: true,
            saveUninitialized: true,
            cookie: { httpOnly: false }
        })
    );
}

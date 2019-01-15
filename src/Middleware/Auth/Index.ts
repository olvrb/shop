import { Request, Response, NextFunction } from "express";
import { Logger } from "../../Utilities/Logger";
import session from "express-session";
import uuid from "uuid/v4";
import { Configuration } from "@config";
import { Db } from "typeorm-static";
import { TypeormStore, SessionEntity } from "typeorm-store";
import { Session } from "@entities/Session";
import { getConnection } from "typeorm";
export async function AuthMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    return;
}

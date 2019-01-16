import { Request, Response, NextFunction } from "express";
import { Category } from "@entities/Category";

/**
 * @api {get} /auth/login
 * @apiName Login.
 * @apiPermission anyone
 * @apiGroup anyone
 *
 * // TODO: update apiParams
 * @apiParam {string} [name] Name
 *
 * @apiSuccess (200) {Object} { success: true }
 * @apiFail (500) {Object} { success: false }
 */
export async function LoginGetHandler(req: Request, res: Response) {
    console.log("Inside GET /login callback function");
    console.log(req.sessionID);
    res.send(`You got the login page!\n`);
}

import { NextFunction, Request, Response } from "express";
import passport from "passport";

/**
 * @api {post} /auth/login
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
export async function LoginPostHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    // tslint:disable
    //console.log("Inside POST /login callback");
    passport.authenticate("local", (err, user, info) => {
        console.log("Inside passport.authenticate() callback");
        //console.log(
        //    `req.session.passport: ${JSON.stringify(req.session!.passport)}`
        //);
        //console.log(`req.user: ${JSON.stringify(req.user)}`);
        req.login(user, (err) => {
            console.log("Inside req.login() callback");
            console.log(
                `req.session.passport: ${JSON.stringify(req.session!.passport)}`
            );
            console.log(`req.user: ${JSON.stringify(req.user)}`);
            return res.send("You were authenticated & logged in!\n");
        });
    })(req, res, next);
}

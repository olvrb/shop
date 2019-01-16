import { Request, Response, NextFunction } from "express";
import { Category } from "@entities/Category";
import passport = require("passport");
import { User } from "@entities/User";

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
export async function SignupPostHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    // tslint:disable
    console.log("Inside POST /auth/signup callback");
    const user = new User();
    user.Email = req.body.email;
    user.Password = User.HashPassword(req.body.password);
    try {
        await user.save();
    } catch (error) {
        return res.status(403).json({ sucess: false });
    }
    return res.json({ success: true });
}

import { Request, Response, NextFunction } from "express";
import { Category } from "@entities/Category";

/**
 * @api {post} /api/v1/categories/create
 * @apiName Create new category.
 * @apiPermission admin
 * @apiGroup admin
 *
 * @apiParam {string} [name] Name
 *
 * @apiSuccess (200) {Object} { success: true }
 * @apiFail (500) {Object} { success: false }
 */
export async function CreateCategoryHandler(req: Request, res: Response) {
    const category = new Category();
    category.Name = req.body.name;
    try {
        await category.save();
    } catch {
        return res.status(500).json({ success: false });
    }
    return res.json({ success: true });
}

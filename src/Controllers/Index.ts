import { app } from "../Index";
import { ItemHandler } from "./api/v1/items";
import { CreateItemHandler } from "./api/v1/items/create";
import { CreateCategoryHandler } from "./api/v1/categories/create";
import { Logger } from "../Utilities/Logger";

export function BindControllers() {
    Logger.info("Binding controllers.");
    app.get("/api/v1/items", ItemHandler);
    app.post("/api/v1/items/create", CreateItemHandler);
    app.post("/api/v1/categories/create", CreateCategoryHandler);
}

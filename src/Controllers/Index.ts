import { app } from "../Index";
import { Logger } from "../Utilities/Logger";
import { CreateCategoryHandler } from "./api/v1/categories/create";
import { ItemHandler } from "./api/v1/items";
import { CreateItemHandler } from "./api/v1/items/create";
import { LoginGetHandler } from "./auth/login/get";
import { LoginPostHandler } from "./auth/login/post";
import { SignupPostHandler } from "./auth/signup.post";
import { E404Handler } from "./error/404";

export function BindControllers() {
    Logger.info("Binding controllers.");
    app.get("/api/v1/items", ItemHandler);
    app.post("/api/v1/items/create", CreateItemHandler);
    app.post("/api/v1/categories/create", CreateCategoryHandler);

    app.get("/auth/login", LoginGetHandler);
    app.post("/auth/login", LoginPostHandler);

    app.post("/auth/signup", SignupPostHandler);
    app.use(E404Handler);
}

import adminJS, { Dashboard } from "adminjs";
import adminJSexpress from "@adminjs/express"
import adminJSsequelize from "@adminjs/sequelize"
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import { locale } from "./locale";
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./branding";
import { authenticationOptions } from "./authentication";


adminJS.registerAdapter(adminJSsequelize)

export const adminjs = new adminJS({
    databases: [sequelize],
    rootPath: "/admin",
    resources: adminJsResources,
    branding: brandingOptions,
    dashboard: dashboardOptions,
    locale: locale,
    
})

// sistema de login admin
export const adminJsRouter = adminJSexpress.buildAuthenticatedRouter(adminjs, authenticationOptions,  null,
    { resave: false, saveUninitialized: false })
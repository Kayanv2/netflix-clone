import adminJS, { Dashboard } from "adminjs";
import adminJSexpress from "@adminjs/express"
import adminJSsequelize from "@adminjs/sequelize"
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import { category, course, episode, User } from "../models";
import bcrypt from 'bcrypt'
import { locale } from "./locale";
import AdminJS from "adminjs";


adminJS.registerAdapter(adminJSsequelize)

export const adminjs = new adminJS({
    databases: [sequelize],
    rootPath: "/admin",
    resources: adminJsResources,
    branding: {
        companyName: 'OneBitFlix',
    logo: '.././public/logoOnebitflix.svg',
    theme: {
        colors: {
            primary100: '#ff0043',
              primary80: '#ff1a57',
              primary60: '#ff3369',
              primary40: '#ff4d7c',
                primary20: '#ff668f',
              grey100: '#151515',
              grey80: '#333333',
              grey60: '#4d4d4d',
              grey40: '#666666',
              grey20: '#dddddd',
              filterBg: '#333333',
              accent: '#151515',
              hoverBg: '#151515',
          }
    }
    },
    dashboard: {
        component: AdminJS.bundle('./components/Dashboard'),
            handler: async (req, res, context) => {
          const Courses = await course.count()
          const Episodes = await episode.count()
          const Category = await category.count()
          const StandardUsers = await User.count({ where: { role: 'user' } })
    
          res.json({
            'Cursos': Courses,
            'Episódios': Episodes,
            'Categorias': Category,
            'Usuários': StandardUsers
          })
        },
      },
    locale: locale,
    
})

// sistema de login admin
export const adminJsRouter = adminJSexpress.buildAuthenticatedRouter(adminjs, {
    authenticate: async (email, password) => {
     const user = await User.findOne( {where: {email}})

     if(user && user.role === 'admin') {
        const matched = await bcrypt.compare(password, user.password)

        if(matched){ 
            return user
         }
     }

     return false
    },
    cookiePassword: 'senha-do-cookie'
}, null, {
    resave: false,
    saveUninitialized: false
})
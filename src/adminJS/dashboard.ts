import AdminJS, { PageHandler } from "adminjs"
import { category, course, episode, User } from "../models"

export const dashboardOptions: {
    handler?: PageHandler
    component?: string
  } = {
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
  }
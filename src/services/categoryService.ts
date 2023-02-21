import { category } from '../models'

export const categoryService = {
  findAllPaginated: async (page: number, perPage: number) => {
    const offset = (page - 1) * perPage

    const { count, rows } = await category.findAndCountAll({
      attributes: ['id', 'name', 'position'],
      order: [['position', 'ASC']],
      limit: perPage,
      offset
    })

    return {
      categories: rows,
      page,
      perPage,
      total: count
    }
  },

   findById: async (id: string) =>{
    const categoriesWithCourses = await category.findByPk(id, {
      attributes: ['id', 'name'],
      include: {
        association: 'courses',
        attributes: [
          'id',
          'name',
          'synopsis',
          ['thumbnail_url', 'htumbnailUrl']
        ]
      }
    })
    return categoriesWithCourses
   }

}
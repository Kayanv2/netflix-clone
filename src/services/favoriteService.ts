import { Favorite } from "../models"

export const favoriteService = {
    
    findById: async (userId: number) => {
        const favorites = await Favorite.findAll({
            attributes: [['user_id', 'userId']],
            where: {userId},
            include: {
                association: 'course',
                attributes: [
                    'id',
                    'name',
                    'synopsis',
                    ['thumbnail_url', 'thumbnailUrl']
                ]
            }
        })
        return {
            userId,
            courses: favorites.map(favorites => favorites.course)
        }
    },
    
    create:async (userId: number, courseId: number) => {
        const favorite = Favorite.create({
            userId,
            courseId
        })
        return favorite
    },

    delete:async (userId: number, courseId: number) => {
        await Favorite.destroy({
            where: {
                userId,
                courseId
            }
        })
    },

    isFavorited:async (userId: number, courseId: number) => {
        const favorited = await Favorite.findOne({
            where: {
                userId,
                courseId
            }
        })

        return favorited ? true : false
    }
}
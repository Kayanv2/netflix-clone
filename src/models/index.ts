import { category } from "./category";
import { course } from "./course";
import { episode } from "./episode";
import { Favorite } from "./favorite";
import { User } from "./User";

//associações
category.hasMany(course, { as: 'courses' })

course.belongsTo(category)
course.belongsToMany(User, {through: Favorite})
course.hasMany(episode)
course.hasMany(Favorite, { as: 'FavoritesUsers', foreignKey: 'course_id'})

episode.belongsTo(course)

Favorite.belongsTo(course)
Favorite.belongsTo(User)

User.belongsToMany(course, { through: Favorite})
User.hasMany(Favorite, { as: 'FavoritesCourses', foreignKey: 'user_id'})

export{
    category,
    course,
    episode,
    Favorite,
    User
}
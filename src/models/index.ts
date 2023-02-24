import { category } from "./category";
import { course } from "./course";
import { episode } from "./episode";
import { Favorite } from "./favorite";
import { Like } from "./like";
import { User } from "./User";
import { WatchTime } from "./watchTime";

//associações
category.hasMany(course, { as: 'courses' })

course.belongsTo(category)
course.belongsToMany(User, {through: Favorite})
course.belongsToMany(User, {through: Like})
course.hasMany(episode)
course.hasMany(Favorite, { as: 'FavoritesUsers', foreignKey: 'course_id'})

episode.belongsTo(course)
episode.belongsToMany(User, { through: WatchTime })

Favorite.belongsTo(course)
Favorite.belongsTo(User)

User.belongsToMany(course, { through: Favorite})
User.belongsToMany(course, {through: Like})
User.belongsToMany(episode, { through: WatchTime})
User.hasMany(Favorite, { as: 'FavoritesCourses', foreignKey: 'user_id'})

export{
    category,
    course,
    episode,
    Favorite,
    User,
    Like,
    WatchTime
}
import { category } from "./category";
import { course } from "./course";
import { episode } from "./episode";
import { User } from "./User";

//associações
category.hasMany(course)

course.belongsTo(category)
course.hasMany(episode)

episode.belongsTo(course)

export{
    category,
    course,
    episode,
    User
}
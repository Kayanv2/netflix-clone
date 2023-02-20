import {ResourceWithOptions} from 'adminjs'
import { category, course, episode, User } from '../../models'
import { categoryResourceOptions } from './category'
import { courseResourceOption } from './courses'
import { episodeResourceFeatures, episodeResourceOption } from './episode'
import { userResourceOptions } from './user'

export const adminJsResources: ResourceWithOptions[] = [
    {
        resource: category,
        options: categoryResourceOptions
    },
    {
        resource: course,
        options: courseResourceOption
    },
    {
        resource: episode,
        options: episodeResourceOption,
        features: episodeResourceFeatures
    },
    {
        resource: User,
        options: userResourceOptions
    }
]
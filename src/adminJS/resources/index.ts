import {ResourceWithOptions} from 'adminjs'
import { category, course, episode } from '../../models'
import { categoryResourceOptions } from './category'
import { courseResourceOption } from './courses'
import { episodeResourceFeatures, episodeResourceOption } from './episode'

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
    }
]
import {ResourceWithOptions} from 'adminjs'
import { category, course } from '../../models'
import { categoryResourceOptions } from './category'
import { courseResourceOption } from './courses'

export const adminJsResources: ResourceWithOptions[] = [
    {
        resource: category,
        options: categoryResourceOptions
    },
    {
        resource: course,
        options: courseResourceOption
    }
]
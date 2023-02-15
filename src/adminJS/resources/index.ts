import {ResourceWithOptions} from 'adminjs'
import { category } from '../../models'
import { categoryResourceOptions } from './category'

export const adminJsResources: ResourceWithOptions[] = [
    {
        resource: category,
        options: categoryResourceOptions
    }
]
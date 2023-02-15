import { Model, Optional } from "sequelize"

export interface course {
    id: number,
    name: string
    synopsis: string,
    thumbnailUrl: string,
    featured: boolean,
    categoryId: number
}

export interface courseCreationAttributes extends Optional <course, 'id' | 'thumbnailUrl' | 'featured' > {}

export interface courseInstance extends Model<course, courseCreationAttributes>, course {}


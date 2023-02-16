import { DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../database"

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

export const course = sequelize.define('course', {
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
  
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },

      synopsis: {
        allowNull:false,
        type: DataTypes.TEXT
      },
      thumbnail_url: {
        type: DataTypes.STRING
      },
      featured: {
        defaultValue: false,
        type: DataTypes.BOOLEAN
      },
      category_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'categories', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      created_at: {
        allowNull:false,
      type: DataTypes.DATE
    },
    updated_at: {
      allowNull:false,
      type: DataTypes.DATE
    }
})
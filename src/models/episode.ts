import {DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../database"


export interface episode {
    id: number,
    name: string
    synopsis: string,
    order: number,
    videoUrl: string,
    secondsLong: number,
    courseId: number
}

export interface episodeCreationAtributes extends Optional <episode, 'id' | 'videoUrl' | 'secondsLong'> {}

export interface episodeInstance extends Model <episode, episodeCreationAtributes>, episode {}

export const episode = sequelize.define('episode', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      synopsis: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      order: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      videoUrl: {
        type: DataTypes.STRING
      },
      secondsLong: {
        type: DataTypes.INTEGER
      },
      courseId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: 'courses', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      }
})
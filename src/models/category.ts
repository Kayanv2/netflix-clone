import { DataTypes, Model, Optional } from "sequelize/types";
import { sequelize } from "../database";
export interface category {
    id: number,
    name: string,
    position: number
}

export interface categoryCreationAtributes extends Optional<category, 'id'> {}

export interface categoryInstance extends Model<category, categoryCreationAtributes>, category{}

export const category = sequelize.define('category', {
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
      position: {
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER
      }
})
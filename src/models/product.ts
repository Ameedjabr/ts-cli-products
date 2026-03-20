import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

class Product extends Model {
  declare id: number;
  declare name: string;
  declare price: number;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Product",
    tableName: "products",
    timestamps: false,
  }
);

export default Product;
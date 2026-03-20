import { Command } from "commander";
import sequelize from "./config/db";
import Product from "./models/product";

const program = new Command();

program
  .name("ts-cli-products")
  .description("CLI to manage products")
  .version("1.0.0");

program
  .command("list")
  .description("List all products")
  .action(async () => {
    await sequelize.sync();
    const products = await Product.findAll();
    console.table(products.map(p => p.toJSON()));
    process.exit();
  });

program
  .command("add <name> <price>")
  .description("Add a new product")
  .action(async (name, price) => {
    await sequelize.sync();
    const product = await Product.create({ name, price: parseFloat(price) });
    console.log("Product added:", product.toJSON());
    process.exit();
  });

program
  .command("get <id>")
  .description("Get product by ID")
  .action(async (id) => {
    await sequelize.sync();
    const product = await Product.findByPk(parseInt(id));
    console.log(product ? product.toJSON() : "Product not found");
    process.exit();
  });

program
  .command("update <id> <name> <price>")
  .description("Update product by ID")
  .action(async (id, name, price) => {
    await sequelize.sync();
    const product = await Product.findByPk(parseInt(id));
    if (product) {
      product.name = name;
      product.price = parseFloat(price);
      await product.save();
      console.log("Product updated:", product.toJSON());
    } else {
      console.log("Product not found");
    }
    process.exit();
  });

program
  .command("delete <id>")
  .description("Delete product by ID")
  .action(async (id) => {
    await sequelize.sync();
    const deleted = await Product.destroy({ where: { id: parseInt(id) } });
    console.log(deleted ? "Product deleted" : "Product not found");
    process.exit();
  });

program.parse();
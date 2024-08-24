const axios = require("axios");

// Obtener todos los productos
exports.getAllProducts = async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
};

// Obtener un producto por ID
exports.getProductById = async (req, res) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${req.params.id}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product" });
  }
};

// Crear un nuevo producto
exports.createProduct = async (req, res) => {
  try {
    const response = await axios.post(
      "https://fakestoreapi.com/products",
      req.body
    );
    res.status(201).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
};

// Actualizar un producto
exports.updateProduct = async (req, res) => {
  try {
    const response = await axios.put(
      `https://fakestoreapi.com/products/${req.params.id}`,
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error updating product" });
  }
};

// Eliminar un producto
exports.deleteProduct = async (req, res) => {
  try {
    await axios.delete(`https://fakestoreapi.com/products/${req.params.id}`);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error deleting product" });
  }
};

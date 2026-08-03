import * as productService from "../services/productsServices.js";

export const getProducts = async (req, res) => {
    try {
        const products = await productService.getProducts();

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const createProduct = async(req, res) => {
    try {
        const product = await productService.createProduct(req.body);

        res.status(201).json(product);
    } catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const getProductByID = async(req, res) => {
    try {
        const product = await productService.getProductByID(req.params.id);

        res.status(200).json(product);
    } catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const updateProduct = async(req, res) => {
    try {
        const product = await productService.updateProduct(req.params.id, req.body);

        res.json(product);
    } catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const deleteProduct = async(req, res) => {
    try {
        const product = await productService.deleteProduct(req.params.id);

        res.status(200).json({
            message: 'Producto eliminado correctamente!'
        });
    } catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
};
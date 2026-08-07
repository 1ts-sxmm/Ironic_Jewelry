import * as productModel from "../models/productsModel.js";

export const getProducts = async() => {
    return await productModel.getProducts();
};

export const createProduct = async(data) => {
    if (!data.name) {
        throw new Error('El nombre es obligatorio!');
    }

    if (data.price <= 0) {
        throw new Error('El precio debe ser mayor a 0!')
    }

    return await productModel.createProduct(data);;
};

export const getProductByID = async(id) => {
    if (isNaN(id)) {
        throw new Error('El ID debe ser un número');
    }

    const product = await productModel.getProductByID(id);

    if (!product) {
        throw new Error('Producto no encontrado!');
    }

    return product;
};

export const updateProduct = async(id, data) => {
    if (isNaN(id)) {
        throw new Error('El ID debe ser un número!');
    }

    const product = await productModel.getProductByID(id);

    if (!product) {
        throw new Error('Producto no encontrado!');
    }

    return await productModel.updateProduct(id, data);
};

export const deleteProduct = async(id) => {
    if (isNaN(id)) {
        throw new Error('El ID debe ser un número!');
    }

    const product = await productModel.getProductByID(id);

    if (!product) {
        throw new Error('Producto no encontrado!');
    }

    return await productModel.deleteProduct(id);
}
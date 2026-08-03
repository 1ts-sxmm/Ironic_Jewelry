import pool from '../config/database.js';

export const getProducts = async() => {
    const { rows } = await pool.query(
        'SELECT * FROM products;'
    );

    return rows;
};

export const createProduct = async(product) => {
    const query = `
        INSERT INTO products
        (name, description, price, material, image, category)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
    `;

    const values = [
        product.name,
        product.description,
        product.price,
        product.material,
        product.image,
        product.category
    ];

    const { rows } = await pool.query(query, values);

    return rows[0];
};

export const getProductByID = async(id) => {
    const query = `
        SELECT *
        FROM products
        WHERE id = $1;
    `;

    const { rows } = await pool.query(query, [id]);

    return rows[0];
};

export const updateProduct = async(id, product) => {
    const query = `
        UPDATE products
        SET
            name = $1,
            description = $2,
            price = $3,
            material = $4,
            image = $5,
            category = $6
        WHERE id = $7
        RETURNING *;
    `;

    const values = [
        product.name,
        product.description,
        product.price,
        product.material,
        product.image,
        product.category,
        id
    ];

    const { rows } = await pool.query(query, values);

    return rows[0];

};

export const deleteProduct = async(id) => {
    const query = `
        DELETE FROM products
        WHERE id = $1
        RETURNING *;
    `;

    const { rows } = await pool.query(query, [id]);

    return rows[0];
}
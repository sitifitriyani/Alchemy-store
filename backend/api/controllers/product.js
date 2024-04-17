// import Product from "../models/modelProduct.js";
// import path from "path";
import { pool } from "../../db.js";

// export const getProducts = async (_req, res) => {
//     try {
//       const products = await Product.findAll();
//       res.json(products);
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   };
  
export const getProducts = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM Products")
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
};
// export const getProductById = async(req, res)=>{
//     try {
//         const response = await Product.findOne({
//             where:{
//                 id : req.params.id
//             }
//         });
//         res.json(response);
//     } catch (error) {
//         console.log(error.message);
//     }
// }
export const getProductById = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM Products WHERE id = $1", [
            req.params.id,
        ]);
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
};

export const search = async (req, res, next) => {
    const { name } = req.query;
    try {
      const result = await pool.query(
        'SELECT * FROM products WHERE name ILIKE $1',
        [`%${name}%`]
      );
      res.json(result.rows);
    } catch (error) {
      console.error('Error searching products:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
// export const saveProduct = (req, res)=>{
//     if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
//     const name = req.body.title;
//     const price = req.body.price;
//     const file = req.files.file;
//     const fileSize = file.data.length;
//     const ext = path.extname(file.name);
//     const fileName = file.md5 + ext;
//     const url = `${req.protocol}://${req.get("host")}/image/${fileName}`;
//     const allowedType = ['.png','.jpg','.jpeg'];

//     if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
//     if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

//     file.mv(`../frontend/public/image/${fileName}`, async(err)=>{
//         if(err) return res.status(500).json({msg: err.message});
//         try {
//             await Product.create({name: name, image: fileName, price: price, url: url});
//             res.status(201).json({msg: "Product Created Successfuly"});
//         } catch (error) {
//             console.log(error.message);
//         }
//     })

// }


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let products = [
  { id: 1, name: "Chair", brand: "Ikea", category: "Furniture", price: 120, imageUrl: "https://via.placeholder.com/150" },
  { id: 2, name: "Lamp", brand: "Philips", category: "Lighting", price: 60, imageUrl: "https://via.placeholder.com/150" },
  { id: 3, name: "Sofa", brand: "Ashley", category: "Furniture", price: 300, imageUrl: "https://via.placeholder.com/150" },
];

// GET: products with filtering, sorting, pagination
app.get('/products', (req, res) => {
  let { page=1, limit=10, sortBy, sortOrder, brand, category, minPrice, maxPrice } = req.query;
  page = parseInt(page); limit = parseInt(limit);

  let filtered = [...products];
  if (brand) filtered = filtered.filter(p => p.brand === brand);
  if (category) filtered = filtered.filter(p => p.category === category);
  if (minPrice) filtered = filtered.filter(p => p.price >= parseFloat(minPrice));
  if (maxPrice) filtered = filtered.filter(p => p.price <= parseFloat(maxPrice));

  if (sortBy) {
    filtered.sort((a,b) => sortOrder==='desc'? a[sortBy]<b[sortBy]?1:-1 : a[sortBy]>b[sortBy]?1:-1);
  }

  const start = (page-1)*limit;
  const paginated = filtered.slice(start, start+limit);

  res.json({ total: filtered.length, page, limit, data: paginated });
});

// POST: add product
app.post('/products', (req, res) => {
  const newProduct = { id: Date.now(), ...req.body };
  products.push(newProduct);
  res.json(newProduct);
});

// PUT: update product
app.put('/products/:id', (req,res)=>{
  const index = products.findIndex(p=>p.id==req.params.id);
  if(index!==-1){
    products[index] = {...products[index], ...req.body};
    res.json(products[index]);
  } else res.status(404).json({message:"Not found"});
});

// DELETE: delete product
app.delete('/products/:id', (req,res)=>{
  products = products.filter(p=>p.id != req.params.id);
  res.json({message:"Deleted"});
});

app.listen(5000,()=>console.log('Server running on 5000'));

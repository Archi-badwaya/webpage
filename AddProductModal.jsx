import React,{useState} from "react";
export default function AddProductModal({ onClose,onAdd }){
  const [product,setProduct] = useState({ name:"", brand:"", category:"", price:0, imageUrl:"https://via.placeholder.com/150"});
  return (
    <div style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.5)',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div style={{background:'#fff',padding:20,borderRadius:10,width:300,display:'flex',flexDirection:'column',gap:10}}>
        <h3>Add Product</h3>
        <input placeholder="Name" onChange={e=>setProduct({...product,name:e.target.value})} />
        <input placeholder="Brand" onChange={e=>setProduct({...product,brand:e.target.value})} />
        <input placeholder="Category" onChange={e=>setProduct({...product,category:e.target.value})} />
        <input type="number" placeholder="Price" onChange={e=>setProduct({...product,price:parseFloat(e.target.value)})} />
        <div style={{display:'flex',gap:10}}>
          <button onClick={()=>{onAdd(product); onClose();}}>Add</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

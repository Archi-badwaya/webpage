import React,{useState} from "react";
export default function UpdateProductModal({ product,onClose,onUpdate }){
  const [updated,setUpdated] = useState({...product});
  return (
    <div style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.5)',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div style={{background:'#fff',padding:20,borderRadius:10,width:300,display:'flex',flexDirection:'column',gap:10}}>
        <h3>Update Product</h3>
        <input value={updated.name} onChange={e=>setUpdated({...updated,name:e.target.value})} />
        <input value={updated.brand} onChange={e=>setUpdated({...updated,brand:e.target.value})} />
        <input value={updated.category} onChange={e=>setUpdated({...updated,category:e.target.value})} />
        <input type="number" value={updated.price} onChange={e=>setUpdated({...updated,price:parseFloat(e.target.value)})} />
        <div style={{display:'flex',gap:10}}>
          <button onClick={()=>{onUpdate(product.id,updated);onClose();}}>Update</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

import React,{useState} from 'react'

const Products = () => {
    const [name, setName]= useState('');
    const[price, setPrice]=useState('');
    const[quantity,setQuantity]=useState('');
    const[brand, setBrand] = useState('')

    const AddProduct= async()=>{
       let result=await fetch('http://localhost:7000/product',{
        method:"post",
        body:JSON.stringify({name,price,quantity,brand}),
        headers:{
            "Content-Type":"application/json"
        }

       });
       result = await result.json();
       console.log(result);
    }


  return (
    <div>
        <h1>Products Details</h1>
        <label for="name">Name</label>
        <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} placeholder="enter your product name"/><br/>
        <label for="name">Price</label>
        <input type="text"  onChange={(e)=>{setPrice(e.target.value)}} value={price}  placeholder="enter your price  name"/><br/>
        <label for="name">Quantity</label>
        <input type="text" onChange={(e)=>{setQuantity(e.target.value)}} value={quantity}  placeholder="enter your quantity name"/><br/>
        <label for="name">Brand</label>
        <input type="text" onChange={(e)=>{setBrand(e.target.value)}} value={brand} placeholder="enter your brand name"/><br/>
        <button onClick={AddProduct}>Submit</button>
    </div>
  )
}

export default Products
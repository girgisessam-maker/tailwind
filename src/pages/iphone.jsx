import { useRef, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";


export default function Iphone() {

    const [phone, setPhone] = useState ([
        {name:'iphone x', price:'1000', color:'black'},
        {name:'iphone 11', price:'2000', color:'white'},
   ]);

    const DeletePhone = (index) => {
        if (confirm("Are you sure you want to delete this phone?")) {
            const newPhone = [...phone];
            newPhone.splice(index, 1);
            setPhone(newPhone);
        }
    }
    
    const [showAddForm, setShowAddForm] = useState(false);

    //ref
    const nameRef = useRef();
    const priceRef = useRef();
    const colorRef = useRef();

    const AddPhone = () => {
        const newPhone = [...phone];
        newPhone.push({ name: nameRef.current.value, price: priceRef.current.value, color: colorRef.current.value });
        setPhone(newPhone);
        setShowAddForm(false);
    }





    return (
<div className="w-full h-screen flex flex-col justify-center items-center gap-10">
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100  ">
    
    <div className="text-3xl font-bold text-center p-5">
        <button className="btn btn-primary" onClick={()=>{setShowAddForm(true)}}>
            <IoMdAddCircleOutline />
            Add Iphone
        </button>
    </div>
    <table className="table">
        
        <thead>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Color</th>
            
        </tr>
        </thead>
        <tbody>
        {/* map() */}
        {phone.map((item, index) => {
        return (
            <tr key={index}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.price * 5}</td>
                <td>{item.color}</td>
            <td>
                <button className="btn btn-primary m-2">Edit</button>
                <button className="btn btn-error m-2" onClick={()=>{DeletePhone(index)}}>Delete</button>
            </td>
            </tr>
        )
    })}
        </tbody>
    </table>
    </div>
    {
        showAddForm && (   <div className="w-full h-dvh fixed top-0 left-0 bg-black/60 flex justify-center items-center">
    <div className="w-125 p-4 rounded bg-fuchsia-800/40 shadow border flex flex-col gap-4 animate__animated animate__fadeIn" >
        <h1 className="text-center ">Add New Phone</h1>
        <input type="text" placeholder="Name" className="input input-bordered w-full" ref={nameRef}  />
        <input type="text" placeholder="Price" className="input input-bordered w-full" ref={priceRef} />
        <input type="text" placeholder="Color" className="input input-bordered w-full" ref={colorRef} />
        <div className="flex justify-end gap-4">
            <button className="btn btn-primary" onClick={AddPhone}>Add</button>
            <button className="btn btn-error" onClick={()=>{setShowAddForm(false)}}>Cancel</button>
        </div>

    </div>
        
    </div>) 
    }

    </div>
  )
}

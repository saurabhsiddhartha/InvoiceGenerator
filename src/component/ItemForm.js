import { useRef, useState } from "react";

const ItemForm = (props) => {
  const item = useRef();
  const price = useRef();
  const quantity = useRef(); 

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredItem = item.current.value; // Use .current to access the value
    const enteredPrice = price.current.value;
    const enteredQuantity = quantity.current.value;    
    props.onSubmit(enteredItem ,enteredQuantity, enteredQuantity* enteredPrice)
    
  };

  return (
    <form className="space-y-5" onSubmit={submitHandler}>
      <div className="flex flex-col">
        <label>Item</label>
        <input
          type="text"
          name="item"
          id="item"
          className="border-[1px] border-black"
          ref={item}
        />
        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          className="border-[1px] border-black"
          ref={quantity}
        />
        <label>Price</label>
        <input
          type="number"
          name="price"
          id="price"
          className="border-[1px] border-black"
          ref={price}
        />
      </div>
      <button className="bg-green-500 rounded-3 w-40 text-white mb-5">
        Add Item
      </button>
    </form>
  );
};

export default ItemForm;

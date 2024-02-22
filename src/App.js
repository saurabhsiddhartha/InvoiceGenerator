import './App.css';
import Header from './component/Header'
import ListItem from './component/ListItem'
import { v4 } from 'uuid';
import ItemForm from './component/ItemForm'
import { useState } from 'react';
import jsPDF from 'jspdf'



function App() {
  const [items, setItem] = useState([])
  const [totalPrice , setTotalPrice] = useState(0)
  function submitHandler(item, quantity, price) {  
    setTotalPrice((prevTotal) => prevTotal + price);
    console.log(totalPrice)
    
    setItem(prevItem => ([
      ...prevItem,
      {
        id: v4(),
        item: item,
        quantity: quantity,
        price: price
      }
    ])) 
    
  }
  const downInvoice = () => {
    const doc = new jsPDF();
    doc.text('Invoice', 20, 20);
  
    items.forEach((item, index) => {
      const text = `
      Item: ${item.item}\n
      Quantity: ${item.quantity}\n
      Price: ${item.price}\n\n`;
      doc.text(text, 20, 30 + index * 30);
    });
  
    doc.save("Invoice.pdf");
  };

  return (
    <div className='w-[100%] md:w-[50%] flex flex-col px-5 justify-center mx-auto py-10 shadow-mid shadow-md'>
      <Header />
      <ItemForm onSubmit={submitHandler} />
      <h1 className="font-medium text-2xl">Item List</h1>
      {
        items.map((item, index) => (
          <ListItem
            key={index}
            item={item.item}
            quantity={item.quantity}
            price={item.price} />
        ))
      }
      <label>Total price : {totalPrice} </label>
      <button className="bg-red-500 w-30 rounded-sm text-white" onClick={downInvoice}>DownLoad Invoice</button>

    </div>
  );
}

export default App;

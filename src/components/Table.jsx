import React, { useState } from 'react';
import './style.css';

const Table = ({ handleKeyDown }) => {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [data, setData] = useState([]); 

  const handleEvent = (e) => {
    const { id, value } = e.target;
    if (id === 'id') {
      setId(value);
    } else if (id === 'name') {
      setName(value);
    } else if (id === 'address') {
      setCity(value);
    }
  };

  const addItem = (event) => {
    event.preventDefault();
    if (!id || !name || !city) {
      alert("Enter all details first!");
      return;
    }
    else{

      const newData = {
        id,
          name,
          city,
        };
        console.log("newData",newData)
        setData([...data, newData]);
        setName('');
        setId('');
        setCity('');
      }
  };

  console.log("state",id ,name , city)
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>TABLE!</h1>
      <table style={{ color: 'aqua', background: 'black' }}>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ textAlign: 'center' }}>{item.id}</td>
              <td style={{ textAlign: 'center' }}>{item.name}</td>
              <td style={{ textAlign: 'center' }}>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form>
        <div style={{ textAlign: 'center' }}>
          <input id='id' value={id} placeholder='id' onChange={handleEvent} style={{ textAlign: 'center' }} />
          <input id='name' value={name} placeholder='name' onChange={handleEvent} style={{ textAlign: 'center' }} />
          <input id='address' value={city} placeholder='address' onChange={handleEvent} style={{ textAlign: 'center' }} />
        </div>
        <button onClick={addItem} className='center'>
          submit
        </button>
      </form>
    </>
  );
};

export default Table;

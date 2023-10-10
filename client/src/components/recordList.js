import React, { useEffect, useState } from 'react';
import { getList, deleteItem, addItem } from '../apis/api';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './RecordList.css'; // Import your CSS file for custom styles
import { ControlledCheckbox } from 'checkbox.js';
export default function RecordList() {
  const [items, setItems] = useState([]);
  const [newItemText, setNewItemText] = useState('');

  useEffect(() => {
    loadItemList();
  }, []);

  function loadItemList() {
    getList()
      .then((data) => {
        setItems(data.data);
      })
      .catch((err) => console.log(err));
  }

  function handleDeleteItem(itemId) {
    deleteItem(itemId)
      .then(() => {
        setItems((prevItems) =>
          prevItems.filter((item) => item._id !== itemId)
        );
      })
      .catch((err) => console.log(err));
  }

  function handleAddItem() {
    if (newItemText.trim() !== '') {
      addItem({ item: newItemText })
        .then((response) => {
          console.log(response);
          setItems((prevItems) => [...prevItems, response]);
          setNewItemText('');
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className='record-list-container'>
      <div className='title'>
        <h1>ToDO List</h1>
      </div>

      <div className='horizontal-container'>
        <TextField
          required
          id='outlined-required'
          label='Add New Item'
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          className='text-box'
        />

        <Button
          variant='contained'
          color='primary'
          onClick={handleAddItem}
          className='add-button'
        >
          Add
        </Button>
      </div>
      <ul className='item-list'>
        {items.map((item) => (
          <li key={item._id} className='list-item'>
            {item.item}
            <button
              onClick={() => handleDeleteItem(item._id)}
              className='delete-button'
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

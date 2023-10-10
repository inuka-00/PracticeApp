import axios from 'axios';
import { HOST } from './config';

// get all data in the database
export async function getList() {
  try {
    const response = await axios.get(`${HOST}/data`);
    return response;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to get todo list!');
  }
}

// get all data in the database
export async function addItem(newItem) {
  try {
    const response = await axios.post(`${HOST}/data/add`, newItem);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to add to ToDo list!');
  }
}

// delete item from database
export async function deleteItem(newItem) {
  try {
    const response = await axios.post(`${HOST}/data/delete/${newItem}`);
    console.log(response);
  } catch (err) {
    console.log(err);
    return await Promise.reject('Failed to delete from ToDo list!');
  }
}

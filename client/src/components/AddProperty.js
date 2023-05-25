import "./AddProperty.css";
import { useState } from "react";

const AddProperty = () => {
  const [title, setTitle] = useState('');
  const [askingPrice, setAskingPrice] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const property = { title, askingPrice, description, address, imgUrl };

    fetch('http://localhost:5001/properties')
  }

  return (
    <>
      <h1>Add a new property</h1>
      <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        required
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label>Asking Price:</label>
      <input
        type="text"
        required
        value={askingPrice}
        onChange={(event) => setAskingPrice(event.target.value)}
      />
      <label>Description:</label>
      <input
        type="text"
        required
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <label>Address:</label>
      <input
        type="text"
        required
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <label>Image URL:</label>
      <input
        type="text"
        required
        value={imgUrl}
        onChange={(event) => setImgUrl(event.target.value)}
      />
      <button>Submit</button>
      </form>
    </>
  );
};

export default AddProperty;

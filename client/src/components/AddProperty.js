import "./AddProperty.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const AddProperty = () => {
  const [title, setTitle] = useState('');
  const [askingPrice, setAskingPrice] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [img, setImgUrl] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProperty = { title, askingPrice, description, address, img };

    setIsPending(true);

    fetch('http://localhost:5001/properties', {
      method:'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProperty)
    }).then(() => {
      setIsPending(false);
      navigate('/');
    })

    
  }

  return (
    <>
      <h1>Add a new property</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        required
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label htmlFor="askingPrice">Asking Price:</label>
      <input
        type="text"
        id="askingPrice"
        required
        value={askingPrice}
        onChange={(event) => setAskingPrice(event.target.value)}
      />
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        required
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        required
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <label htmlFor="img">Image URL:</label>
      <input
        type="text"
        id="img"
        required
        value={img}
        onChange={(event) => setImgUrl(event.target.value)}
      />
      { !isPending && <button>Submit</button> }
      { isPending && <button disabled>Submitting property...</button> }
      </form>
    </>
  );
}

export default AddProperty;

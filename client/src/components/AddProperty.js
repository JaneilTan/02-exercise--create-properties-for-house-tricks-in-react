import "./AddProperty.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const AddProperty = () => {
  const [title, setTitle] = useState('');
  const [askingPrice, setAskingPrice] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProperty = { title, askingPrice, description, address, imgUrl };

    setIsPending(true);

    fetch('http://localhost:5001/properties', {
      method:'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProperty)
    }).then(() => {
      setIsPending(false);
      
    })

    
  }

  return (
    <>
      <h1>Add a new property</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="Title">Title:</label>
      <input
        type="text"
        id="Title"
        required
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label htmlFor="Price">Asking Price:</label>
      <input
        type="text"
        id="Price"
        required
        value={askingPrice}
        onChange={(event) => setAskingPrice(event.target.value)}
      />
      <label htmlFor="Description">Description:</label>
      <input
        type="text"
        id="Description"
        required
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <label htmlFor="Address">Address:</label>
      <input
        type="text"
        id="Address"
        required
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <label htmlFor="ImgUrl">Image URL:</label>
      <input
        type="text"
        id="ImgUrl"
        required
        value={imgUrl}
        onChange={(event) => setImgUrl(event.target.value)}
      />
      { !isPending && <button onClick={() => navigate('/')}>Submit</button> }
      { isPending && <button disabled>Submitting property...</button> }
      </form>
    </>
  );
}

export default AddProperty;

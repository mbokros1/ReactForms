import { useState } from "react";
function AddRestaurant({ updateRestaurants }) {
const [formData, setFormData] = useState({
  name:"",
  address:"",
  phone:"",
  cuisine:"",
  rating:"",
  image:"",});


  const handleSubmit = (e) => {
    e.preventDefault();
    updateRestaurants(formData);
  };

  // This function will handle the change event for our form.

  //React takes care of events, so we just need to create a callback function to pass to React's onChange handler (which we'll do in the next step).

  //The handleChange function will accept the event as a parameter. We'll extract the name and value from the event's target, allowing us to capture both the input field's name and its current value.

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
  // Here we are copying in the current form data with the spread operator
  // We are then adding the new key value pair with [name]:value
    setFormData({ ...formData, [name]: value });
  };

  return (
     <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label>image:</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Cuisine:</label>
        <input
          type="text"
          name="cuisine"
          value={formData.cuisine}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          value={formData.rating}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit</button>

      </form>
  );
}

export default AddRestaurant;
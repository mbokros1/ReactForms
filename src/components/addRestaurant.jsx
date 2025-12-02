import { useState } from "react";
function AddRestaurant({ updateRestaurants }) {
[formData, setFormData] = useState({
  name:"",
  address:"",
  phone:"",
  cuisine:"",
  rating:"",
  image:""});


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

  );
}

export default AddRestaurant;
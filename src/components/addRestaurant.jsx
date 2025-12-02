import { useState } from "react";
function AddRestaurant({ updateRestaurants }) {



  const handleSubmit = (e) => {
    e.preventDefault();
    updateRestaurants(formData);
  };

  return (
  );
}

export default AddRestaurant;
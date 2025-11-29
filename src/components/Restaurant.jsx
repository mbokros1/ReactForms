function Restaurant({ restaurant }) {
  console.log(restaurant);
  return (
    <article className="restaurant">
      <img src={restaurant.image} alt={restaurant.name} />
      <h2>{restaurant.name}</h2>
      <ul>
        <li>{restaurant.address}</li>
        <li>{restaurant.phone}</li>
        <li>{restaurant.cuisine}</li>
        <li>Rating: {restaurant.rating}</li>
      </ul>
    </article>
  );
}
export default Restaurant;
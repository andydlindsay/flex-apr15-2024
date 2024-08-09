import {useState} from 'react';

const Pizza = () => {
  const [newTopping, setNewTopping] = useState('');

  // const [toppings, setToppings] = useState([]);
  // const [crustType, setCrustType] = useState('stuffed');

  const [pizza, setPizza] = useState({
    toppings: [],
    crustType: 'thin'
  });


  const addTopping = () => {
    // const copy = [ ...toppings, newTopping ];
    // setToppings(copy);

    const copy = {
      ...pizza,
      toppings: [ ...pizza.toppings, newTopping ]
    };
    setPizza(copy);
  };

  const updateCrust = (event) => {
    // setCrustType(event.target.value);

    const copy = {
      ...pizza,
      crustType: event.target.value
    };
    setPizza(copy);
  };

  const mappedToppings = pizza.toppings.map((topping, index) => {
    return <p key={index}>{topping}</p>;
  });

  return (
    <div>
      <h2>Create your own Pizza!</h2>

      <div>
        <label>Crust Type:</label>
        <input 
          value={pizza.crustType}
          onChange={updateCrust}
        />
        <h3>Crust Type: {pizza.crustType}</h3>
      </div>

      <div>
        <label>New topping:</label>
        {/* controlled component/input */}
        <input 
          placeholder='type your fave topping here....'
          value={newTopping}
          onChange={(event) => { setNewTopping(event.target.value) }}
        />
        <button onClick={addTopping}>Add</button>
      </div>

      <h2>Current toppings:</h2>
      { mappedToppings }
    </div>
  );
};

export default Pizza;

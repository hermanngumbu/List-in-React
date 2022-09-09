import { useState } from "react";

function App() {
  // 1. State (etat, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cérise" }
  ]);
  //2. Comportement
  const handleDelete = (id) => {
    // Copie du state
    const fruitsCopy = [...fruits];
    // Maniplation sur la copie du state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    // Modifier le state avec le setter
    setFruits(fruitsCopyUpdated);
  };
  //3. Affichage (render)

  return (
    <div>
      <h1>Listes des fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.nom}>
            {fruit.nom}{" "}
            <button
              onClick={(event) => {
                handleDelete(fruit.id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

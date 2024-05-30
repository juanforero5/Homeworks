import { useState } from 'react';


export const Categories = () => {
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const InputChange = (event) => {
    setCategory(event.target.value);
  };

  const AddCategory = () => {
    if (category === '') {
      alert('Ingrese una categoria');
    } else {
      setCategories([...categories, category]);
      setCategory('');
    }
  };

  const RemoveCategory = (index) => {
    const newCategories = [...categories];
    newCategories.splice(index, 1);
    setCategories(newCategories);
  };

  return (
    <div className="categoria-container">
      <h1 className="categoria-title">Lista de categorías</h1>
      <form className="categoria-form" onSubmit={(event) => event.preventDefault()}>
        <input
          className="categoria-input"
          type="text"
          placeholder="Ingrese una categoría"
          value={category}
          onChange={InputChange}
        />
        <button className="categoria-btn" onClick={AddCategory}>
          Agregar
        </button>
      </form>
      <ul className="categoria-list">
        {categories.map((category, index) => (
          <li key={index} className="categoria-item">
            {category}
            <button className="categoria-delete-btn" onClick={() => RemoveCategory(index)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

import { useState } from "react";

const Proyecto = () => {
    const [categories, setCategories] = useState(['Placeholder']);
    const [category, setCategory] = useState('');

    const OnAddCategory = () => {
        setCategories(list => [...list, category]);
        setCategory('');
        console.log('Funcionando')
    }

    const OnSetCategory = (evt) => {
        setCategory(evt.target.value);
        
    }

    return (
        <>
        <h1>GifExpert</h1>
        <input type="text" value={category} 
        onChange={(event) => OnSetCategory(event) } />
        <button onClick={() => OnAddCategory()}> Agregar </button>
        <ol>
            {
                categories.map(
                    (category, key) =>
                    {
                    return  <li key={key}> {category} </li>
                    }
                )
            }
        </ol> 
        </>
    )

}
export default Proyecto;

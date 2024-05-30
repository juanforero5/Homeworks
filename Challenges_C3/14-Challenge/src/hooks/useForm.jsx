import  {useState } from 'react'

export const useForm = (initialState = {}) => {
    const [formState, setFormState] = useState(initialState)

    const onInputChange = ({ evt }) => {
        const {name, value} = evt.target;
        setFormState({
            ...formState,
            [name]: value
        })

    }
    const onReset = () => {
        setFormState(initialState)
    }
    return {...formState,formState, onInputChange, onReset}
    
}
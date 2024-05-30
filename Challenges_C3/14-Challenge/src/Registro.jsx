import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from './hooks/useForm'
import { registerAuth } from './store/auth/slices/Thunks'
import { useEffect } from 'react'
import { auth } from './firebase/config'
import {onAuthStateChanged} from 'firebase/auth'
import { login,logout } from './store/auth/slices/AuthSlice'



export const Registro = () => {
    const dispatch = useDispatch()
    const { email,password,onInputChange, formState } = useForm({
        email: 'juan@gmail.com',
        password: '123456'
    })

    useEffect(() => {
        onAuthStateChanged(auth, async(user) => {
            if(user?.uid){
                dispatch(login(user.uid,user.displayName))
            }else{
                dispatch(logout())
            }
        })
    }, [])

      
    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
        dispatch(registerAuth(email,password))
    }

    return (
        <>
        
        <h1>Registro</h1>
        <hr />
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Email"
                name="email"
                className="form-control"
                autoComplete="off"
                onChange={(event) => onInputChange(event)} value={email}
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                className="form-control"
                onChange={(event) => onInputChange(event)} value={password}
            />
            <button
                type="submit"
                className="btn btn-primary mt-2"
            >
                Registrar
            </button>
        </form>

        </>
    )
    }


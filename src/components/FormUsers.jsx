import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUser.css'

const FormUsers = ({createNewUser, updateInfo, updateUserById, setUpdateInfo, setcloseForm }) => {

    console.log(updateInfo)

    useEffect (() => {
        reset(updateInfo)
    }, [updateInfo])

    const {register, reset, handleSubmit} = useForm()

    const submit = data => {
        if(updateInfo) {
            //actualizar informacion
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
        }else {
            //crear informacion
            createNewUser(data)
        }
        setcloseForm(true)
        
        reset({
            email: "",
            first_name: "",
            last_name:"",
            birthday:"",
            password:"",
        })
    } 

    return (
        <form className="form" onSubmit={handleSubmit(submit)}>
            <div onClick={() => setcloseForm(true)} className="form__x">x</div>
            <h2 className="form__title">{updateInfo ? 'Update User' : 'Create User '}</h2>
            <div className="form__div">
                <label className="form__label" htmlFor="email">E-Mail</label>
                <input className="form__input" type="email" id="email" {...register("email")} />
            </div>
            <div className="form__div">
                <label className="form__label" htmlFor="password" >Password</label>
                <input className="form__input" type="password" id="password" {...register("password")}/>
            </div>
            <div className="form__div">
                <label className="form__label" htmlFor="first_name">First Name</label>
                <input className="form__input" type="first_name" id="first_name" {...register("first_name")} />
            </div>
            <div className="form__div">
                <label className="form__label" htmlFor="last_name">Last Name</label>
                <input className="form__input" type="last_name" id="last_name" {...register("last_name")}/>
            </div>
            <div className="form__div">
                <label className="form__label" htmlFor="birthday">Birthday</label>
                <input className="form__input" type="date" id="birthday" {...register("birthday")} />
            </div>
            <button className="form__btn">Submit</button>
            
        </form>
    )
}

export default FormUsers
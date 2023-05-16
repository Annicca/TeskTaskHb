import { Controller, useForm } from "react-hook-form";
import Switch from "react-switch";

import '../css/Form.css'

export const FromPage = () =>{

    const { register,
         control,
         formState: {errors, isValid},
         handleSubmit } = useForm({mode: "onBlur"});

    const onSubmit = (data) =>{
        alert(JSON.stringify(data))
    }

    let options = ["Dropdown option", "Dropdown option 1", "Dropdown option 2"]

    return(
        <main className='main-container'>
            <form onSubmit={handleSubmit(onSubmit)} className='form-register'>
                <div className='form-register__container'>
                    <div className='form-register__group'>
                        <label className='form-register__label' for="username">Username</label>
                        <input 
                        {...register("username", { required: 'Username is required' })}
                        type="text" 
                        placeholder='Enter username' 
                        className='form-register__input'
                        id="username"/>
                        {errors?.username && <p className = 'form-register__message form-register__message_error'>{errors.username?.message}</p>}
                    </div>
                    <div className='form-register__group'>
                        <label className='form-register__label' for="password">Password</label>
                        <input 
                        {...register("password", 
                        { required: 'Password is required',
                        minLength:  {value: 4, message: 'Minimum length of 4 characters'},
                        maxLength:  {value: 12, message: 'Maximum length of 12 characters'}
                        })}
                        type="password" 
                        placeholder='Enter password' 
                        className='form-register__input'
                        id = "password"/>
                        {errors?.password ? 
                        <p className = 'form-register__message form-register__message_error'>{errors.password?.message}</p> :
                        <p className='form-register__message form-register__message_password'>Your password is between 4 and 12 characters</p>}
                    </div>
                    <div className='form-register__group'>
                        <label className='form-register__label' for="inputTextLabel">Input Text Label</label>
                        <input 
                        {...register("inputTextLabel", 
                        { required: 'Error message informing me of a problem'})}
                        type="text" 
                        placeholder='Type here' 
                        className='form-register__input'
                        id = "inputTextLabel"/>
                        {errors?.inputTextLabel && <p className = 'form-register__message form-register__message_error'>{errors.inputTextLabel?.message}</p>}
                    </div>
                    <div className='form-register__group'>
                        <input {...register("rememberMe")} 
                        type="checkbox" 
                        
                        className='form-register__checkbox'
                        id = "rememberMe" />
                        <label for="rememberMe">Remember me</label>
                    </div>
                    <div className='form-register__group form-register__group_inline'>
                        <Controller
                        control={control}
                        name="off"
                        render={({field:{onChange, value, ref}}) => 
                        <>
                            <Switch 
                            onChange={onChange}
                            inputRef={ref}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            checked={value}
                            handleDiameter={18}
                            onColor="#7A5CFA"
                            onHandleColor="#fff"
                            className="form-register__switch"
                            id = "off"
                            />
                            <label for="off">{value ? <span>On</span> : <span>Off</span>}</label>
                        </>}
                        />
                    </div>
                    <div className='form-register__group form-register__group_inline'>
                        
                            <input {...register("radioSelection")} 
                                        className='form-register__radio' 
                                        type="radio" 
                                        value ={"Radio Selection 1"} 
                                        id={"radioSelection1"} />
                            <label for={"radioSelection1"}>Radio Selection 1</label>
                    </div>
                    <div className='form-register__group form-register__group_inline'>
                        
                            <input {...register("radioSelection")} 
                                        className='form-register__radio' 
                                        type="radio" 
                                        value ={"Radio Selection 2"} 
                                        id={"radioSelection2"} />
                            <label for={"radioSelection2"}>Radio Selection 2</label>
                    </div>
                    <div className='form-register__group form-register__group_inline'>
                        
                            <input {...register("radioSelection")} 
                                        className='form-register__radio' 
                                        type="radio" 
                                        value ={"Radio Selection 3"} 
                                        id={"radioSelection3"} />
                            <label for={"radioSelection3"}>Radio Selection 3</label>
                        </div>
                    <div className='form-register__group'>
                        <label className='form-register__label' for="dropdownTitle">Dropdown Title</label>
                        <select 
                        className="form-register__input"
                        {...register("dropdownTitle")}
                        id="dropdownTitle">
                            {options.map(option=>
                                <option value={option} key={option} className="form-register__option" > 
                                    {option}
                                </option>
                            )}
                        </select>   
                    </div>
                    <div className="form-register__button-container">
                        <button type = "reset" className="form-register__button">Cancel</button>
                        <button type = "submit" className="form-register__button form-register__button_submit" disabled={!isValid}>Next</button>
                    </div>
                </div>
            </form>
        </main>
    )
}
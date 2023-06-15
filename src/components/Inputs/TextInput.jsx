import style from "../../pages/mainPage/main.module.css";
import React from "react";
import {useFormContext} from "react-hook-form";

export const TextInput = ({defaultValue, name, required_message, pattern_message, pattern_value, maxLength, placeholder, id}) => {
  const {register, formState: {errors}} = useFormContext()
  return (
    <>
      <input
        className={style.form_input}
        defaultValue={defaultValue}
        id={id}
        {...register(name,
          {
            required: `${required_message}`,
            pattern: {
              value: pattern_value,
              message: pattern_message,
            },
            maxLength: maxLength
          })}

        placeholder={placeholder}
        type="email"/>
      {errors[name] && <p className={style.phone_error}>{errors[name].message}</p>}
    </>
  )
}
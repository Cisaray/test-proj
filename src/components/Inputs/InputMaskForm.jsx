import style from "../../pages/mainPage/main.module.css";
import InputMask from "react-input-mask";
import React from "react";
import {useFormContext} from "react-hook-form";

export const InputMaskForm = ({handleKeyDown, phone_number}) => {
  const {register, formState: {errors}} = useFormContext()
  return (
    <>
      <InputMask
        className={style.form_input}
        mask='+7 (999) 999-99-99'
        maskChar={null}
        onKeyPress={handleKeyDown}
        placeholder='+7 999 999 99 99'
        name='phone_number'
        defaultValue={phone_number}
        {...register('phone_number',
          {
            required: 'Это поле обязательное',
            pattern: {
              value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
              message: 'Неверный формат номера телефона',
            },
          })}
      />
      {errors.phone_number && <p className={style.phone_error}>{errors.phone_number.message}</p>}
    </>


  )
}
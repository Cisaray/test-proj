import style from "../../pages/secondCreatePage/secondPage.module.css";
import React from "react";
import {useFormContext} from "react-hook-form";

export const RadioInput = ({name, value, id}) => {
  const {register} = useFormContext()
  return (
    <>
      <input
        id={id}
        {...register(name, {required:true})}
        value={value}
        className={style.checkbox}
        type="radio"
      />
    </>
  )
}
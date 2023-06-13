import style from "../../pages/secondCreatePage/secondPage.module.css";
import React from "react";
import {useFormContext} from "react-hook-form";

export const RadioInput = ({name, value}) => {
  const {register} = useFormContext()
  return (
    <>
      <input
        {...register(name, {required:true})}
        value={value}
        className={style.checkbox}
        type="radio"
      />
    </>
  )
}
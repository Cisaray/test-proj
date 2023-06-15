import style from "../../pages/secondCreatePage/secondPage.module.css";
import React from "react";
import {useFormContext} from "react-hook-form";

export const CheckBoxInput = ({name, id}) => {
  const {register} = useFormContext()
  return (
    <>
      <input
        id={id}
        name='checkboxes'
        {...register(name)}
        className={style.checkbox}
        type="checkbox"/>
    </>
  )
}
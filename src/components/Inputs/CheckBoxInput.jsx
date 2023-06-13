import style from "../../pages/secondCreatePage/secondPage.module.css";
import React from "react";
import {useForm, useFormContext} from "react-hook-form";

export const CheckBoxInput = ({name}) => {
  const {register} = useFormContext()
  return (
    <>
      <input
        name='checkboxes'
        {...register(name)}
        className={style.checkbox}
        type="checkbox"/>
    </>
  )
}
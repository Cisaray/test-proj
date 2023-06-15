import style from "../../pages/createPage/createPage.module.css";
import React from "react";
import {useFormContext} from "react-hook-form";

export const SelectInput = ({name, required_message}) => {
  const {register, formState: {errors}} = useFormContext()
  return (
    <>
      <select
        id='field-sex'
        {...register(name,
          {
            required: `${required_message}`
          })}
        className={style.form_input}>
        <option className={style.select_option} value='' hidden>Не выбрано</option>
        <option className={style.select_option} id='field-sex-option-man' value="man">man</option>
        <option className={style.select_option} id='field-sex-option-woman' value="woman">woman</option>
      </select>
      {errors.sex && <p className={style.errors}>{errors.sex.message}</p>}
    </>
  )
}
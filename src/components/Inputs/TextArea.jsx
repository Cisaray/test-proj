import style from "../../pages/finalPage/finalPage.module.css";
import React from "react";
import {useFormContext} from "react-hook-form";

export const TextArea = ({name, required_message, maxLength, id}) => {
  const [aboutValue, setAboutValue] = React.useState('')
  const {register} = useFormContext()
  return (
    <>
      <textarea
        id={id}
        className={style.about_area}
        {...register(name,
          {
            required: `${required_message}`,
            maxLength: maxLength
          })}
        onChange={(e) => setAboutValue(e.target.value)}
        defaultValue={aboutValue}
        cols="30"
        rows="10">
        </textarea>
      <span className={style.count}>{aboutValue.replaceAll(" ", '').length}</span>
    </>
  )
}
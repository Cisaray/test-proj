import React from "react";
import {CreatePage} from "../createPage/CreatePage";
import {SecondCreatePage} from "../secondCreatePage/SecondCreatePage";
import {FinalPage} from "../finalPage/FinalPage";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {usePostDataMutation} from "../../redux/api/formApi";
import {setEmail, setPhoneNumber} from "../../redux/slices/formSlice";

export const PageLayout = () => {
  const dispatch = useDispatch()
  const [showSuccess, setShowSuccess] = React.useState(false)
  const [showFail, setShowFail] = React.useState(false)
  const {phone_number, email} = useSelector(state => state.form)
  const [page, setPage] = React.useState(1)
  const {register, control, handleSubmit, formState: {errors}, reset} = useForm({
    defaultValues: {
      advantages: [{value: ''}, {value: ''}, {value: ''}],
    }
  })
  const [fetchData, {error}] = usePostDataMutation()
  const onSubmit = async (data, e) => {
    e.stopPropagation()
    try {
      const advantages = data.advantages.map(item => item.value)
      const checkboxes = data.checkboxes.map((item, index) => item === true ? index : null).filter(item => item !== null)

      const resultData = {
        email: email,
        phone_number: phone_number,
        nickname: data.nickname,
        name: data.name,
        surname: data.surname,
        advantages,
        checkboxes,
        number: data.number,
        about: data.about,
      }

      await fetchData(resultData)
      setShowSuccess(true)
      dispatch(setPhoneNumber(''))
      dispatch(setEmail(''))
      reset()
    } catch (err) {
      console.log(err)
      setShowFail(true)
    }

  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {page === 1 && <CreatePage register={register} handleSubmit={handleSubmit} errors={errors} setPage={setPage}/>}
      {page === 2 && <SecondCreatePage register={register} handleSubmit={handleSubmit} errors={errors} setPage={setPage}
                                       control={control}/>}
      {page === 3 &&
        <FinalPage
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          setPage={setPage}
          onSubmit={onSubmit}
          showSuccess={showSuccess}
          setShowSuccess={setShowSuccess}
          showFail={showFail}
          setShowFail={setShowFail}
        />}
    </form>
  )
}


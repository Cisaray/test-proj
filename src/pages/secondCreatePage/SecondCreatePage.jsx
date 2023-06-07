import style from "../createPage/createPage.module.css";

export const SecondCreatePage = () => {
  return (
    <div className={style.status_bar}>
      <div className={style.status_circle}>
        <div className={style.mini_circle}></div>
        <p className={style.first}>1</p>
      </div>
      <div className={style.status_line}/>
      <div className={style.status_circle_active}>
        <p className={style.unactive_numbers}>2</p>
      </div>
      <div className={style.status_line}/>
      <div className={style.status_circle}>
        <p className={style.unactive_numbers}>3</p>
      </div>
    </div>
  )
}
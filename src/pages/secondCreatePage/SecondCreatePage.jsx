import style from "./secondPage.module.css";
import {Link, useNavigate} from "react-router-dom";

export const SecondCreatePage = () => {
  const navigate = useNavigate()

  return (
    <main className={style.container}>
      <div className={style.status_bar}>
        <div className={style.status_circle_active} onClick={() => navigate('/create')}>
          <div className={style.mini_circle}></div>
          <p className={style.first}>1</p>
        </div>

        <div className={style.status_line_active}/>
        <div className={style.status_circle_active} onClick={() => navigate('/second-create')}>
          <div className={style.mini_circle}></div>
          <p className={style.first}>2</p>
        </div>
        <div className={style.status_line}/>
        <div className={style.status_circle} onClick={() => navigate('/final-create')}>
          <p className={style.unactive_numbers}>3</p>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.advantages}>
          <label>Advantages</label>
          <div className={style.advantages_input__block}>
            <input className={style.form_input} placeholder='Placeholder' type="text"/>
            <img src="/assets/Delete.svg" alt="Delete"/>
          </div>
          <div className={style.advantages_input__block}>
            <input className={style.form_input} placeholder='Placeholder' type="text"/>
            <img src="/assets/Delete.svg" alt="Delete"/>
          </div>
          <div className={style.advantages_input__block}>
            <input className={style.form_input} placeholder='Placeholder' type="text"/>
            <img src="/assets/Delete.svg" alt="Delete"/>
          </div>
          <button className={style.add_button}><img src="/assets/Plus.svg" alt="Plus"/></button>
        </div>
        <div className={style.checkbox_group}>
          <label>Checkbox group</label>
          <div>
            <input className={style.checkbox} type="checkbox"/>
            <span>1</span>
          </div>
          <div>
            <input className={style.checkbox} type="checkbox"/>
            <span>2</span>
          </div>
          <div>
            <input className={style.checkbox} type="checkbox"/>
            <span>3</span>
          </div>
        </div>
        <div className={style.radio_group}>
          <label>Radio group</label>
          <div>
            <input className={style.checkbox} type="radio"/>
            <span>1</span>
          </div>
          <div>
            <input className={style.checkbox} type="radio"/>
            <span>2</span>
          </div>
          <div>
            <input className={style.checkbox} type="radio"/>
            <span>3</span>
          </div>
        </div>
        <div className={style.button_footer}>
          <Link to='/create'> <button className={style.previous_button}>Назад</button></Link>
          <Link to='/final-create'><button className={style.next_button}>Далее</button></Link>
        </div>
      </div>
    </main>
  )
}
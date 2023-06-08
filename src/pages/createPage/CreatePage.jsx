import style from './createPage.module.css'
import {Link, useNavigate} from "react-router-dom";

export const CreatePage = () => {
  const navigate = useNavigate()
  return (
    <div className={style.container}>
      <div className={style.status_bar}>
        <div className={style.status_circle_active} onClick={() => navigate('/create')}>
          <div className={style.mini_circle}></div>
          <p className={style.first}>1</p>
        </div>
        <div className={style.status_line}/>
        <div className={style.status_circle} onClick={() => navigate('/second-create')}>
          <p className={style.unactive_numbers}>2</p>
        </div>
        <div className={style.status_line}/>
        <div className={style.status_circle} onClick={() => navigate('/final-create')}>
          <p className={style.unactive_numbers}>3</p>
        </div>
      </div>
      <div className={style.content}>
        <div>
          <label className={style.input_label}>Nickname</label>
          <div>
            <input className={style.form_input} placeholder='Placeholder' type="text"/>
          </div>
        </div>
        <div className={style.input_block}>
          <label className={style.input_label}>Name</label>
          <div>
            <input className={style.form_input} placeholder='Placeholder' type="text"/>
          </div>
        </div>
        <div className={style.input_block}>
          <label className={style.input_label}>Surname</label>
          <div>
            <input className={style.form_input} placeholder='Placeholder' type="text"/>
          </div>
        </div>
        <div className={style.input_block}>
          <label className={style.input_label}>Sex</label>
          <div>
            <select className={style.form_input}>
              <option className={style.select_option} disabled value="man">Не выбрано</option>
              <option className={style.select_option} value="man">man</option>
              <option className={style.select_option} value="woman">woman</option>
            </select>
          </div>
        </div>
        <div className={style.button_footer}>
          <Link to='/'><button className={style.previous_button}>Назад</button></Link>
          <Link to='/second-create'><button className={style.next_button}>Далее</button></Link>
        </div>
      </div>
    </div>

  )
}
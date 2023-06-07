import style from './createPage.module.css'
import {Link} from "react-router-dom";

export const CreatePage = () => {
  return (
    <div className={style.container}>
      <div className={style.status_bar}>
        <div className={style.status_circle_active}>
          <div className={style.mini_circle}></div>
          <p className={style.first}>1</p>
        </div>
        <div className={style.status_line}/>
        <div className={style.status_circle}>
          <p className={style.unactive_numbers}>2</p>
        </div>
        <div className={style.status_line}/>
        <div className={style.status_circle}>
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
          <label className={style.input_label}>Sername</label>
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
          <button className={style.previous_button}><Link to='/'>Назад</Link></button>
          <button className={style.next_button}><Link to='/second-create'>Далее</Link></button>
        </div>

      </div>
    </div>

  )
}
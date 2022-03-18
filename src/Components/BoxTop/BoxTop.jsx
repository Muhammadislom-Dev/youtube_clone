import './BoxTop.scss'

//Images
import Persons from '../../assets/img/Userpic.png'
import Notification from '../../assets/img/ui-11.png'
import Dot from '../../assets/img/dot.png'
import Phone from '../../assets/img/phone-18.png'


const BoxTop = () =>{
    return(
        <div className="boxtop">
            <div className="boxtop__page">
                <input className='boxtop__input' type="text" placeholder='Search...' />
                <div className="boxtop__logos">
                  <img className='boxtop__logo' src={Phone} alt="" />
                  <img className='boxtop__logo' src={Dot} alt="" />
                  <img className='boxtop__logo' src={Notification} alt="" />
                  <img className='boxtop__logo' src={Persons} alt="" />
                </div>
            </div>
        </div>
    )
}
export default BoxTop
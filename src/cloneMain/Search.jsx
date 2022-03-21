import React , {useState} from 'react';

//Images
import Persons from '../assets/img/Userpic.png'
import Phone from '../assets/img/phone-18.png'
import UI from '../assets/img/ui-11.png'
import dot from '../assets/img/dot.png'

const Search = ({ onSubmit }) => {
     const [searchTerm, setSearchTerm] = useState("");
     const handleChange = (event) => setSearchTerm(event.target.value);

     const onkeyPress = (event) => {
          if (event.key === "Enter") {
               onSubmit(searchTerm);
          }
     }

     return (
          <>
               <div className="header">
                    <input className='header__input' 
                         type="text"
                         fullWidth
                         placeholder="Search.."
                         value={searchTerm}
                         onChange={handleChange}
                         onKeyPress={onkeyPress}
                    /> 

                    <div className="header-page">
                         <a href="#" className="header-link"><img src={Phone} alt="" className="header-img" /></a>
                         <a href="#" className="header-link"><img src={dot} alt="" className="header-img" /></a>
                         <a href="#" className="header-link"><img src={UI} alt="" className="header-img" /></a>    
                         <a href="#" className="header-link"><img src={Persons} alt="" className="header-img" /></a>
                    </div>
               </div>
          </>
     );
};

export default Search;
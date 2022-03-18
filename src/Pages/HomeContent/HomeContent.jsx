import Sidebar from '../../Components/Sidebar/Sidebar'
import './HomeContent.scss'

const HomeContent = () =>{
    return(
        <div className="homecontent">
            <div className="homecontent-left">
                <Sidebar />
            </div>
            <div className="homecontent-right">

            </div>
        </div>
    )
}

export default HomeContent
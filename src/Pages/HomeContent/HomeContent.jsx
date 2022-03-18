import BoxTop from '../../Components/BoxTop/BoxTop'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './HomeContent.scss'

const HomeContent = () =>{
    return(
        <div className="homecontent">
            <div className="homecontent-left">
                <Sidebar />
            </div>
            <div className="homecontent-right">
                <BoxTop />
            </div>
        </div>
    )
}

export default HomeContent
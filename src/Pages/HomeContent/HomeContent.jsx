import Section from '../../cloneMain/Section/Section'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Sublime from '../../Components/Sublime/Sublime'
import './HomeContent.scss'

const HomeContent = () =>{
    return(
        <div className="homecontent">
            <div className="homecontent-left">
                <Sidebar />
            </div>
            <div className="homecontent-right">
                {/* <Section /> */}
                <Sublime />
            </div>
        </div>
    )
}

export default HomeContent
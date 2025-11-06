import {data} from './sidebarData'

export default function Sidebar(){
    return(
        <div className="Sidebar">
            <div className='sidebar-title'>
                EVALUESERVE SCREENER
            </div>
            <ul className="Sidebar-list">
                {
                    data.map(ele => 
                        (<div className='side-item'><li className= {`sidebar-${ele.type} row`}>{ele.name}</li></div>)
                    )
                }
            </ul>
        </div>
    )
}
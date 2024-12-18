import { Link } from 'react-router-dom'
import './Sidebar.css'
import Image from '../../public/image.png'
import Home from '../../public/home2.png'
import Search from '../../public/search2.png'
import Explore from '../../public/explore2.png'
import Reels from '../../public/reels2.png'
import Messages from '../../public/messages2.png'
import Notifications from '../../public/notifications2.png'
import Create from '../../public/create2.png'
import Smallpfp from '../../public/smallpfp2.png'
import More from '../../public/more2.png'


function Sidebar() {
    return (
        <>
            <aside className='maincontainer'>
                <a href='instagram.com'><img src={Image} width='44%' className='instagramimage'></img></a>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <div className='paircontainer'>
                        <img src={Home} className='leftimage' width='13%' height='13%'></img>
                        <p className='lefttext'>Home</p>
                    </div>
                </Link>
                <div className='paircontainer'>
                    <img src={Search} className='leftimage' width='13%' height='13%'></img>
                    <p className='lefttext'>Search</p>
                </div>
                <div className='paircontainer'>
                    <img src={Explore} className='leftimage' width='13%' height='13%'></img>
                    <p className='lefttext'>Explore</p>
                </div>
                <div className='paircontainer'>
                    <img src={Reels} className='leftimage' width='13%' height='13%'></img>
                    <p className='lefttext'>Reels</p>
                </div>
                <div className='paircontainer'>
                    <img src={Messages} className='leftimage' width='13%' height='13%'></img>
                    <p className='lefttext'>Messages</p>
                </div>
                <div className='paircontainer'>
                    <img src={Notifications} className='leftimage' width='13%' height='13%'></img>
                    <p className='lefttext'>Notifications</p>
                </div>
                <div className='paircontainer'>
                    <img src={Create} className='leftimage' width='13%' height='13%'></img>
                    <p className='lefttext'>Create</p>
                </div>
                <div className='smallpfpcontainer'>
                    <img src={Smallpfp} className='leftimage' width='13%' height='13%'></img>
                    <p className='lefttext'>Profile</p>
                </div>
                <div className='paircontainer'>
                    <img src={More} className='leftimage' width='13%' height='13%'></img>
                    <p className='lefttext'>More</p>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
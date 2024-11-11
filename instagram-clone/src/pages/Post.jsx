import Sidebar from "../assets/Sidebar"
import Footer from "../assets/Footer"
import './Post.css'

function Post(props) {
    return (
        <>
            <Sidebar/>

            <main className="postmain">
                <div className="cont">
                    <img className='postimg' src={props.image} width='500px' height='500px'></img>
                    <div className="messages">
                        <p className="messagestext">{props.likes} Likes {props.messages} Messages</p>
                    </div>
                </div>

                <Footer/>
            </main>
        </>
    )
}

export default Post
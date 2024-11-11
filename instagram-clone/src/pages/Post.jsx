import { useState } from "react"
import Sidebar from "../assets/Sidebar"
import Footer from "../assets/Footer"
import './Post.css'

function Post(props) {
    const [heartClicked, setHeartClicked] = useState(false)

    function calculateLikes() {
        x = props.likes
        if (heartClicked) {
            x += 1
            return x
        }
        else {
            return x
        }
    }

    return (
        <>
            <Sidebar/>

            <main className="postmain">
                <div className="cont">
                    <img className='postimg' src={props.image} width='500px' height='500px'></img>
                    <div className="messages">
                        <i class="fa-solid fa-heart fa-2xl"
                        onClick={() => setHeartClicked((heartClicked) => !heartClicked)}
                        style={{color: heartClicked ? "red" : "lightgray", margin: "0px 6px 25px 10px"}}></i>
                        <p className="messagestext">{props.likes} Likes {props.messages} Messages</p>
                    </div>
                </div>

                <Footer/>
            </main>
        </>
    )
}

export default Post
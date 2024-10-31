 import Comment from "../assets/comment.jpeg"
 import Likeicon from "../assets/likeIcon.png"
function Post({url,author}) {
    return (
        <>
        
       <img src={url} width ="60%" />
        <br></br>
        <img src={Likeicon} width="8%"/>
        <img src={Comment} width="8%"/>
        <img src={Instagramicon} width= "8%"/>
        <h2>{author}</h2>
        </>
    )
}

export default Post;
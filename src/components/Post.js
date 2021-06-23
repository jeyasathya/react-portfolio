function Post(props) {
    let margin = props.key === 1 ? "marginLeft: 148" : "marginRight: 148"
    return (
        <div className="post" style= {{ margin }} >
            <div className="post-header"> { props.title } </div>
            <div className="post-info">
                <span className="post-date"> {props.date} </span>
                <span className="post-catagory">{props.category}</span>
            </div>
            <div className="post-content">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
        </div>
    )
}

export default Post;

function Work(props){
 return(<div className="work">
    <div className="work-img" >{props.image}</div>
    <div className="work-ctn">
        <div className="work-head">{props.head}</div>
        <div className="work-info">
            <span className="work-year">{props.year}</span>
            <span className="work-cat">{props.cat}</span>
        </div>
        <div className="work-ctn">{props.ctn}</div>
    </div>

</div>

    )
}
export default Work;
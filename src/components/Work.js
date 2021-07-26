import FeaturedWork from "./FeaturedWork"

function Work(props){
    let image = <img src={"img/Rectangle_"+ props.workId+".png"}/>
    console.log(image);
 return(<div className="work">
    <div className="work-img" >{image}
    </div>
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
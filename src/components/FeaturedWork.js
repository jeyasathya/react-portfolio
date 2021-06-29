import Work from './Work';



function FeaturedWork(){
    let images = require.context('../../public/img', true);
    console.log(images);
    return(<div className="featured-work">
    <div className="featured-work-head" style={{marginLeft: 148}}>Featured Works</div>
    <Work key="1"  head="Designing Dashboards" year="2020" cat="Dashboard" ctn="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."></Work>
    <Work key="2" head="Vibrant Portraits of 2020" year="2018" cat="Illustration" ctn="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."> </Work>
    <Work key="3" head="36 Days of Malayalam type" year="2018" cat="Typography" ctn="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."> </Work>
    </div>
    )
}

export default FeaturedWork;
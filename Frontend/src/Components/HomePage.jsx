import BgImage from "./BgImage";
import BgImageII from "./BgImageII";
import Navbar from "./Navbar";
import Card from './Card';
import {Link} from "react-router-dom"
import "./Homepage.css"

const HomePage = () => {
  return (
    <BgImage>
        <Navbar />
        <div style={
          {
            display:"flex",
            flexDirection:"row",
            margin:"10px",
            justifyContent:"center"
          }
        }>
        <Card cardname={"Generate Content"} link={"/generatecontent"} image={"https://static.businessworld.in/article/article_extra_large_image/1704136818_qXgB9w_Untitled_design_8_.jpg"} className="feature"/>
        <Card cardname={"Track Performance"} link={"/trackperformance"} image={"https://blog.vantagecircle.com/content/images/size/w1000/2021/03/Employee-tracking.png"} className="feature"/>
        </div>
        <div style={
          {
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            margin:"10px"
          }
        }>
        <Card cardname={"Get Optimal Sales"} link={"/getoptsales"} image={"https://images.inc.com/uploaded_files/image/1920x1080/getty_539953664_213316.jpg"} className="feature"/>
        <Card cardname={"Get Best Time"} link={"/charts2_1"} image={"https://www.mentionlytics.com/wp-content/uploads/2023/04/Best-Time-to-post-on-Social-Media-1140x400.jpg"} className="feature"/>
        </div>
        <div style={{
          marginLeft: "450px",
        }}>
        <Card cardname={"Advice to beat competition"} link={"/gettargetaudi"} image={"https://www.teamly.com/blog/wp-content/uploads/2023/04/understanding-target-audience.png"} className="feature"/>
        </div>
    </BgImage>
  )
}

export default HomePage
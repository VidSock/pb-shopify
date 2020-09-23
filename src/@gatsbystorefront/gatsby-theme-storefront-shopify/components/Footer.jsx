import React from 'react'
import { Link } from 'gatsby'
import { FaFacebookSquare, FaTwitterSquare, FaGoogle, FaPinterestSquare,FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa'

import { GiCutDiamond } from 'react-icons/gi'
import "animate.css/animate.min.css"
// import ScrollAnimation from 'react-animate-on-scroll'
// import Image from '../../../Components/Image'




import styled from "styled-components"
const CustomBox = styled.div`
footer{background: rgb(35,73,88);
  background: linear-gradient(180deg, rgba(35,73,88,0.8138888888888889) 13%, rgba(38,76,90,1) 100%); color:#fff; padding:.1rem 0rem; margin-top:5vh;  animation: fadeIn 4s;}
footer a{color:#fff;}
.socialmenu{display: flex; flex-wrap: nowrap; list-style-type: none;}

.socialmenu li{padding:10px; border-radius:10px; margin:0;}

.social{font-size: 200%; margin:0; padding:0; justify-content:center; align-items: center; align-content: center; color:#fff;}
.social span{display: none;}
.socialtext{font-size: 100%; padding:0 0 0 0; margin:0 0 0 0; }

.company-menu{margin: 0; padding:0; list-style-type:none;}
.company-menu li{margin:1rem 0; padding:0;}

.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 0;
  margin: 0;
  list-style: none;
}

.flex-item {
  // background: tomato;
  padding: 0;
  width: 33vw;
  // height: 150px;
  margin-top: 20px;
  // line-height: 150px;
  color: white;
  text-align: center;
}

@media (max-width: 48rem) {
.flex-container{
  flex-flow: column wrap;
}
.flex-item{width:100vw;}
.flex-item iframe{height:350px;}
.socialcolumn{padding:4rem 0;}
}



}
`



const Footer = class extends React.Component {
  render() {
    return (
      <CustomBox>
     <>



      


      <footer className="footer">


      <form style={{background:'#333', padding:'0 0 5px 0'}}>
      <p style={{width:'100%', textAlign:'center', fontSize:'80%', padding:'0', margin:'0 0 -10x 0'}}>Get latest news &amp; offers. Join our email list:</p>
        <div style={{height:'', padding:'0', display:'flex', justifyContent:'center'}}>
<h3 style={{padding:'0 1rem 0 0'}}>Let’s Engage!</h3>
<div><input type="text" placeholder="your@email.com" style={{border:'1px solid #222', borderRadius:'3px', background:'#666', color:'#fff', padding:'2px 5px', outline:'none'}} /><input type="submit" value="Sign Up" style={{marginLeft:'1rem'}} /></div>
        </div></form>




        <div className="content">
          



 {/* <div style={{display:'flex'}}>

 </div> */}

 <ul className="flex-container">
  <li className="flex-item" style={{textAlign:'left', padding:'2rem', paddingTop:'0', width:'28%'}}>
    <h4 style={{borderBottom:'0px solid #222'}}>Pav &amp; Broome Fine Jewelry</h4>
<ul className="company-menu">
<li><a href="https://pavandbroome.com/spotlight/news/"><GiCutDiamond style={{fontSize:'130%'}} /> News &amp; Updates</a></li>
<li><a href="https://pavandbroome.com/about-us/"><GiCutDiamond style={{fontSize:'130%'}} /> About Us</a></li>
<li><a href="https://pavandbroome.com/careers/"><GiCutDiamond style={{fontSize:'130%'}} /> Careers</a></li>
<li><a href="https://pavandbroome.com/testimonials-2/"><GiCutDiamond style={{fontSize:'130%'}} /> Testimonials</a></li>
<li><a href="https://pavandbroome.com/contact-us/"><GiCutDiamond style={{fontSize:'130%'}} /> Contact Us</a></li>
{/* <li><a href="https://pavandbroome.com/site-map">Site Map</a></li> */}
</ul>

</li>

  <li className="flex-item" style={{padding:'0 2rem' }}>
 
  <h4 style={{borderBottom:'0px solid #222'}}>Our Location</h4>

<iframe title="location map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.1870005935!2d-89.09477208492169!3d30.374047409881573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889c17d83754533d%3A0xbc27b3c5fcecdf42!2sPav%20%26%20Broome%20Fine%20Jewelry-Official%20Rolex%20Jeweler!5e0!3m2!1sen!2sus!4v1596421047153!5m2!1sen!2sus" width="100%" height="200" frameborder="0" ariaHidden="false"></iframe>
<br />
1912 25th Ave, Gulfport, MS 39501<br />
Phone: <a className="call-button btn" href="tel:2288633699">(228) 863-3699</a>

</li>


  <li className="flex-item socialcolumn" style={{padding:'10px'}}>
    
  <p style={{textAlign:'center'}}> Follow us on your favorite social platform</p>
  <ul className="socialmenu" style={{display:'flex', textAlign:'center', flexShrink:'', justifyContent:'center', margin:'0', padding:'0'}}>
  <li><a className="social"  href="https://www.facebook.com/pavandbroome" alt="Visit Pav &amp;Broome on Facebook" title="Visit Pav &amp; Broome on Facebook"><FaFacebookSquare /><span>Facebook</span></a></li>
  <li><a className="social" href="https://g.page/pavandbroome?gm" alt="Visit Pav &amp;Broome on Google" title="Visit Pav &amp;Broome on Google"><FaGoogle /><span>Google</span></a></li>
  <li><a className="social" href="https://twitter.com/PavAndBroome" alt="Visit Pav &amp;Broome on Twitter" title="Visit Pav &amp;Broome on Twitter"><FaTwitterSquare /><span>Twitter</span></a></li>
  <li><a className="social" href="https://www.youtube.com/user/pavandbroome" alt="Visit Pav &amp;Broome on YouTube" title="Visit Pav &amp;Broome on YouTube"><FaYoutubeSquare /><span>YouTube</span></a></li>
  <li><a className="social" href="https://www.pinterest.com/source/pavandbroome.com" alt="Visit Pav &amp;Broome on Pinterest" title="Visit Pav &amp;Broome on Pinterest"><FaPinterestSquare /><span>Pinterest</span></a></li>
  <li><a className="social" href="https://www.instagram.com/pavandbroomejewelers/" alt="Visit Pav &amp;Broome on Instagram" title="Visit Pav &amp;Broome on Instagram"><FaInstagramSquare /><span>Instagram</span></a></li>
  
  </ul>
  
  <p style={{textAlign:'left', padding:'1rem 1rem 0 1rem'}}>Your satisfaction is important to us. If you are not 100% satisfied with your experience, please contact us.</p>
<p style={{textAlign:'left', padding:'0 1rem 0 1rem'}}>If you had a great experience, please take a few minutes to tell others, and give us a review.</p>
<ul className="socialmenu" style={{display:'flex', textAlign:'center', justifyContent:'center', margin:'0 0', padding:'0'}}>
<li><a className="social"  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fg.page%2Fpavandbroome%2Freview%3Frc" alt="Review Pav &amp;Broome on Facebook" title="Review Pav &amp; Broome on Facebook"><FaFacebookSquare /><span>Facebook</span></a></li>

<li><a className="social" href="https://g.page/pavandbroome/review?rc" alt="Review Pav &amp;Broome on Google" title="Review Pav &amp;Broome on Google"><FaGoogle /><span>Google</span></a></li>

<li><a className="social" href="https://twitter.com/intent/tweet?text=Pav%20%26%20Broome%20Fine%20Jewelry-Official%20Rolex%20Jeweler%20would%20love%20your%20feedback.%20Post%20a%20review%20to%20our%20profile.%0Ahttps%3A%2F%2Fg.page%2Fpavandbroome%2Freview%3Frc" alt="Review Pav &amp;Broome on Twitter" title="Review Pav &amp;Broome on Twitter"><FaTwitterSquare /><span>Twitter</span></a></li>



</ul>


</li>

</ul>
         
       


<div style={{textAlign: 'center', margin: '2rem 0 1rem 0', justifyContent: 'center', fontSize: '90%'}}><Link to="/disclaimer/">Disclaimer</Link>  |  <Link to="/privacy/">Privacy Policy</Link>  |  <Link to="/terms/">Terms of Service</Link></div>



<div style={{textAlign: 'center', margin: '0 0 1rem 0', justifyContent: 'center', fontSize: '70%'}}>Copyright &copy; {(new Date().getFullYear())} Pav &amp; Broome</div>
        </div>
      </footer> 
      
      </>
      </CustomBox>
     
    )
  }
}

export default Footer


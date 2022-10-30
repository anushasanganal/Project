import React from 'react';
import image from 'C:/Users/Anusha/Desktop/job-portal-main/frontend/src/component/images/asg.png';
import image1 from 'C:/Users/Anusha/Desktop/job-portal-main/frontend/src/component/images/asg.png';
import image2 from 'C:/Users/Anusha/Desktop/job-portal-main/frontend/src/component/images/asg.png';
import image3 from 'C:/Users/Anusha/Desktop/job-portal-main/frontend/src/component/images/asg.png';
import image4 from 'C:/Users/Anusha/Desktop/job-portal-main/frontend/src/component/images/asg.png';
import image5 from 'C:/Users/Anusha/Desktop/job-portal-main/frontend/src/component/images/asg.png';
import image6 from 'C:/Users/Anusha/Desktop/job-portal-main/frontend/src/component/images/asg.png';
import image7 from 'C:/Users/Anusha/Desktop/job-portal-main/frontend/src/component/images/asg.png';
class JobCategories extends React.Component{
    render() {
        return(
            
            <div classname='Homepage'>
                
                <p class="hojo" style={{color: "red"}}>Hot Jobs</p>
                <div class="hotjobs">
                     
                    <div class="LAB">
                        <p><b>LAB Software Solutions pr...</b> VP of Marketing B2B? Outb... Experience : 8-13 Years Location(s) : JaipurCochin / Kochi / Emakulam</p>
                    </div> 
                    <div class="LAD">
                        <p><b>LAD Software Solutions pr...</b> Project Manager - IT Staffin... Experience : 8-13 Years Location(s) : MaduraMysore</p>
                    </div> 
                    <div class="LAD1">
                        <p><b>LAD Software Solutions pr...</b> inside Soles/ SDR/ Appointm... Experience : 3-8 Years Location(s) : Jaipur Jamshedpur </p>
                    </div>                   
                </div>

                <p class="select">Select by Companies</p>
                <div class="selectbycom">
                  <div> <button class="tata"><img src={image1} className="image" alt=""/></button> </div>
                  <div> <button class="yash"><img src={image2} className="image" alt=""/></button> </div>
                  <div> <button class="srm"><img src={image6}  className="image" alt=""/></button> </div>
                  <div> <button class="wipro"><img src={image3} className="image" alt=""/></button> </div>
                  <div> <button class="quest"><img src={image7}  className="image" alt=""/></button> </div>
                  <div> <button class="asg"><img src={image4}  className="image" alt=""/></button> </div>
                  <div> <button class="harman"><img src={image5}  className="image" alt=""/></button> </div>  
                </div>

                <p class="career">Career tips</p>
                <div class="careertips">
                   <div class="firstcareerblock">
                    <div class="f1"><p>01</p></div>
                    <div class="f11"><p>Readdy to Work from Home?Here's How to keep Clam and be productive</p> May 2020</div> 
                    
                   
                   <div class="f2"><p>02</p></div>
                   <div class="f22"><p>These Best Part Time Jobs Do Not Require You to be a Topper</p> May 2020</div>
                   </div>

                    <div class="secondcareerblock">
                    <div class="f3"><p>03</p></div>
                    <div class="f33"><p>8 Most Popular Part Time Jobs for Students</p> May 2020</div> 
                    
                   
                   <div class="f4"><p>04</p></div>
                   <div class="f44"><p>10 Best Skype Interview Tips for Job Seekers Who Want to Succeed</p> May 2020</div>
                   </div>

                   <div class="thiredcareerblock">
                    <div class="f5"><p>05</p></div>
                    <div class="f55"><p>5 Work from Home Tips for Those Who Genuinely Want to 'Work' and 'Contribute'</p> May 2020</div> 
                    
                   
                   <div class="f6"><p>06</p></div>
                   <div class="f66"><p>Top Tips and Resources to Manage Your Career Amid Coronavirus</p> May 2020</div>
                   </div>
                </div>

                <div class="footer">
                    <p>Footer-Copyright Statement</p>
                </div>

            </div>
            
        );
    }
}
export default JobCategories;
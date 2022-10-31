import React from 'react';
import image1 from 'C:/Users/Anusha/Desktop/job-portal-main/frontend/src/component/images/asg.png';
import image2 from 'C:/Users/Anusha/Desktop/job-portal-main/frontend/src/component/images/harman.png';
import image3 from 'C:/Users/Anusha/Desktop/job-portal-main/frontend/src/component/images/quest.png';
import image4 from 'C:/Users/Anusha/Desktop/job-portal-main/frontend/src/component/images/srm.png';
import image5 from 'C:/Users/Anusha/Desktop/job-portal-main/frontend/src/component/images/tata.png';
import image6 from 'C:/Users/Anusha/Desktop/job-portal-main/frontend/src/component/images/wipro.png';
import image7 from 'C:/Users/Anusha/Desktop/job-portal-main/frontend/src/component/images/yash.png';

class JobCategories extends React.Component{
    render() {
    

        return(
            
            <div classname='Homepage'>
                
                <p  style={{ color: "green", fontSize: '20px'}}>Hot Jobs</p>
                <div style={{ display: "flex", padding: '2px' }}>
                     
                    <div style={{backgroundColor: "pink", borderRadius: '10px', margin: '10px', width: '230px', marginLeft: '200px'}}>
                        <p><b>LAB Software Solutions pr...</b> VP of Marketing B2B? Outb... Experience : 8-13 Years Location(s) : JaipurCochin / Kochi / Emakulam</p>
                    </div> 
                    <div style={{backgroundColor: "pink", borderRadius: '10px', margin: '10px', width: '230px', marginLeft: '50px'}}>
                        <p><b>LAD Software Solutions pr...</b> Project Manager - IT Staffin... Experience : 8-13 Years Location(s) : MaduraMysore</p>
                    </div> 
                    <div style={{backgroundColor: "pink", borderRadius: '10px', margin: '10px', width: '230px', marginLeft: '50px'}}>
                        <p><b>LAD Software Solutions pr...</b> inside Soles/ SDR/ Appointm... Experience : 3-8 Years Location(s) : Jaipur Jamshedpur </p>
                    </div>                   
                </div>

                <p style={{marginLeft: '20px', fontSize: '20px'}} >Select by Companies</p>
                <div style={{display: "flex", padding: '2px'}}>
                  <div> <button><img src={image1} className="image" alt="" style={{height: '50px', width: '50px', marginLeft: '80px', border: 'none'}}/></button> </div>
                 <div> <button><img src={image2} className="image" alt="" style={{height: '50px', width: '50px', marginLeft: '40px', border: "none"}}/></button> </div>
                  <div> <button><img src={image6}  className="image" alt="" style={{height: '50px', width: '50px', marginLeft: '40px', border: "none"}}/></button> </div>
                  <div> <button><img src={image3} className="image" alt="" style={{height: '50px', width: '50px', marginLeft: '40px', border: "none"}}/></button> </div>
                  <div> <button><img src={image7}  className="image" alt="" style={{height: '50px', width: '50px', marginLeft: '40px', border: "none"}}/></button> </div>
                  <div> <button><img src={image4}  className="image" alt="" style={{height: '50px', width: '50px', marginLeft: '40px', border: "none"}}/></button> </div>
                  <div> <button><img src={image5}  className="image" alt="" style={{height: '50px', width: '50px', marginLeft: '40px', border: "none"}}/></button> </div>  
        </div>

                <p style={{marginLeft: '20px', fontSize: '20px'}}>Career tips</p>
                <div class="careertips">
                   <div style={{ display: "flex"}}>
                    <div style={{marginLeft: '20px'}}><p>01</p></div>
                    <div style={{ marginLeft: '10px', width: '300px'}}><p>Readdy to Work from Home?Here's How to keep Clam and be productive</p> May 2020</div> 
                    
                   
                   <div style={{marginLeft: '20px'}}><p>02</p></div>
                   <div style={{ marginLeft: '10px', width: '300px'}}><p>These Best Part Time Jobs Do Not Require You to be a Topper</p> May 2020</div>
                   </div>

                    <div style={{ display: "flex"}}>
                    <div style={{marginLeft: '20px'}}><p>03</p></div>
                    <div style={{ marginLeft: '10px', width: '300px'}}><p>8 Most Popular Part Time Jobs for Students</p> May 2020</div> 
                    
                   
                   <div style={{marginLeft: '20px'}}><p>04</p></div>
                   <div style={{ marginLeft: '10px', width: '300px'}}><p>10 Best Skype Interview Tips for Job Seekers Who Want to Succeed</p> May 2020</div>
                   </div>

                   <div style={{ display: "flex"}}>
                    <div style={{marginLeft: '20px'}}><p>05</p></div>
                    <div style={{ marginLeft: '10px', width: '300px'}}><p>5 Work from Home Tips for Those Who Genuinely Want to 'Work' and 'Contribute'</p> May 2020</div> 
                    
                   
                   <div style={{marginLeft: '20px'}}><p>06</p></div>
                   <div style={{ marginLeft: '10px', width: '300px'}}><p>Top Tips and Resources to Manage Your Career Amid Coronavirus</p> May 2020</div>
                   </div>
                </div>

                <div style={{width: '100%', textAlign: "center", backgroundColor: "magenta"}}>
                    <p>Footer-Copyright Statement</p>
                </div>

            </div>
            
        );
    }
}
export default JobCategories;
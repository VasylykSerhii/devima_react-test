import React from 'react'

import './Landing.scss'
import BannerLogo from '../../assets/img/logo-banner.png'
import Desctop from '../../assets/img/desktop.png'
import ServicesIcon1 from '../../assets/img/services-icon1.png'
import ServicesIcon2 from '../../assets/img/services-icon2.png'
import ServicesIcon3 from '../../assets/img/services-icon3.png'
import ServicesScreen from '../../assets/img/services-screen.png'
import ChellengeScreen from '../../assets/img/screens-challenge.png'
import SolutionsScreen from '../../assets/img/solutions-screen.png'
import ProgressIcon1 from '../../assets/img/progres-icon1.png'
import ProgressIcon2 from '../../assets/img/progres-icon2.png'
import ProgressIcon3 from '../../assets/img/progres-icon3.png'
import ProgressIcon4 from '../../assets/img/progres-icon4.png'
import ProgressIcon5 from '../../assets/img/progres-icon5.png'
import ProgressLeft from '../../assets/img/progres-left.png'
import ProgressRight from '../../assets/img/progres-right.png'
import ToolsReact from '../../assets/img/react.png'
import ToolsTypeScript from '../../assets/img/typescript.png'
import ToolsJS from '../../assets/img/javascript-1.png'
import ToolsPython from '../../assets/img/python.png'
import ToolsContentful from '../../assets/img/contentfu.png'
import ToolsSASS from '../../assets/img/sass.png'
import ToolsMobX from '../../assets/img/mobx.png'


function Landing() {
  return (
    <div className='Landing'>
      <div className='banner'>
        <div className='container'>
          <div className='banner-wrap'>
            <div className='banner-logo'>
              <img src={BannerLogo} alt="banner logo"></img>
            </div>
            <div className='banner-desc'>Front-end | Back-end | Third-party integration Testing | Maintenance</div>
            <div className='banner-title'>Tutor House is an interactive online platform for one-one
            <br />and group tutoring</div>
          </div>
          <div className='banner-desctop'>
            <img src={Desctop} alt="desctop"></img>
          </div>
        </div>
      </div>
      <div className='heading pt'>
        <div className='container'>
          <div className='heading-title'>Brief</div>
          <div className='heading-desc'>Tutor House is a fast-growing educational platform that connects tutors across the UK and provides accessible and affordable tuition to all.
          <br />Tutor House ethos is centered around a personalized approach to learning and due to this platform students can organize their tuition either face-to-face with the tutor during homeschooling or online as one-one or group tutoring. Educational experts will find you the best tutor who will fit your precise requirements and help to get the best results and reach your full potential</div>
        </div>
      </div>
      <div className='services'>
        <div className='container'>
          <div className='services-wrap'>
            <div className='services-item'>
              <div className='services-icon'>
                <img src={ServicesIcon1} alt='services icon' />
              </div>
              <div className='services-title'>Country</div>
              <div className='services-desc'>United Kingdom</div>
            </div>

            <div className='services-item'>
              <div className='services-icon'>
                <img src={ServicesIcon2} alt='services icon' />
              </div>
              <div className='services-title'>Team size</div>
              <div className='services-desc'>3 members</div>
            </div>

            <div className='services-item'>
              <div className='services-icon'>
                <img src={ServicesIcon3} alt='services icon' />
              </div>
              <div className='services-title'>Duration</div>
              <div className='services-desc'>5 months</div>
            </div>
          </div>
        </div>
      </div>
      <div className='services-img'>
        <div className='container'>
          <div className='services-img-wrap'>
            <img src={ServicesScreen} alt='services screen' />
          </div>
        </div>
      </div>
      <div className='heading'>
        <div className='container'>
          <div className='heading-title'>The challenge</div>
          <div className='heading-desc'>The main challenge of the Tutor House was to create a strict vetting procedure of all tutors, including an ID check, to allow using the platform only to verified and qualified tutors, especially for those teachers who provide tuition in-person.
          <br />Another important part was to create a search option based on the student's location thus a student can find the tutor in a suitable area and message a teacher, or book the private tuition in a matter of moments. Also, it was necessary to implement other features like time allocation to educate students, the ability to retake courses and track the improvement of grades.</div>
        </div>
      </div>
      <div className='chelenge-img'>
        <img src={ChellengeScreen} alt='chelenge img' />
      </div>
      <div className='heading'>
        <div className='container'>
          <div className='heading-title'>The solutions</div>
          <div className='heading-desc'>We created an innovative platform that allows students to use a huge range of learning tools and resources: the ability to choose online or in-person education, individual classes, or in groups, etc. The online tutoring platform makes tuition flexible and accessible. Also, we made the Tutor House platform secure as only verified tutors have access to the platform. Moreover, clients are able to tailor their experience to their needs and choose whether they would like to browse their tutor matches, post a job to tutors or arrange a call with one of the educational experts.</div>
        </div>
      </div>
      <div className='solutions-img'>
        <img src={SolutionsScreen} alt='solutions img' />
      </div>
      <div className='heading'>
        <div className='container'>
          <div className='heading-title'>The process</div>
        </div>
      </div>
      <div className='progress'>

        <div className='progress-item'>
          <div className='progress-icon'>
            <img src={ProgressIcon1} alt='progress icon' />
          </div>
          <div className='progress-content'>
            <div className='progress-title'>Front-end development</div>
            <div className='progress-desc'>Implementing visual and interactive elements users are engaged with</div>
          </div>
          <img className='progress-arrow' src={ProgressLeft} alt='progress left' />
        </div>

        <div className='progress-item'>
          <div className='progress-content'>
            <div className='progress-title'>Back-end development</div>
            <div className='progress-desc'>Ensuring a high-level functionality of the platform at the server side</div>
          </div>
          <div className='progress-icon'>
            <img src={ProgressIcon2} alt='progress icon' />
          </div>
          <img className='progress-arrow' src={ProgressRight} alt='progress right' />
        </div>

        <div className='progress-item'>
          <div className='progress-icon'>
            <img src={ProgressIcon3} alt='progress icon' />
          </div>
          <div className='progress-content'>
            <div className='progress-title'>Third-party integration</div>
            <div className='progress-desc'>Making the app more flexible by connecting to an external system with a third-party API</div>
          </div>
        </div>

        <div className='progress-item'>
          <div className='progress-content'>
            <div className='progress-title'>Testing</div>
            <div className='progress-desc'>Using both manual and automation testing approaches to deliver high-quality product</div>
          </div>
          <div className='progress-icon'>
            <img src={ProgressIcon4} alt='progress icon' />
          </div>
        </div>

        <div className='progress-item'>
          <div className='progress-icon'>
            <img src={ProgressIcon5} alt='progress icon' />
          </div>
          <div className='progress-content'>
            <div className='progress-title'>Maintenance</div>
            <div className='progress-desc'> Maintaining higher availability and performance of software through technical support and integrated impoving from our engineers</div>
          </div>
        </div>
      </div>
      <div className='heading'>
        <div className='container'>
          <div className='heading-title'>Tools</div>
        </div>
      </div>
      <div className='tools'>
        <div className='container'>
          <div className='tools-wrap'>
            <div className='tools-item'>
              <div className='tools-icon'>
                <img src={ToolsReact} alt='react' />
              </div>
              <div className='tools-name'>React</div>
            </div>   

            <div className='tools-item'>
              <div className='tools-icon'>
                <img src={ToolsTypeScript} alt='TypeScript' />
              </div>
              <div className='tools-name'>TypeScript</div>
            </div> 

            <div className='tools-item'>
              <div className='tools-icon'>
                <img src={ToolsJS} alt='JavaScript' />
              </div>
              <div className='tools-name'>JavaScript</div>
            </div> 

            <div className='tools-item'>
              <div className='tools-icon'>
                <img src={ToolsPython} alt='Python' />
              </div>
              <div className='tools-name'>Python</div>
            </div> 

            <div className='tools-item'>
              <div className='tools-icon'>
                <img src={ToolsContentful} alt='Contentful' />
              </div>
              <div className='tools-name'>Contentful</div>
            </div> 

            <div className='tools-item'>
              <div className='tools-icon'>
                <img src={ToolsSASS} alt='SASS' />
              </div>
              <div className='tools-name'>SASS</div>
            </div> 

            <div className='tools-item'>
              <div className='tools-icon'>
                <img src={ToolsMobX} alt='Mobx' />
              </div>
              <div className='tools-name'>Mobx</div>
            </div> 
          </div>
        </div>
      </div>
      <div className='heading'>
        <div className='container'>
          <div className='heading-title'>Outcome</div>
        </div>
      </div>
      <div className='outcome'>
        <div className='container'>
          <div className='outcome-wrap'>
            <div className='outcome-item'>
              <div className='outcome-line'></div>
              <div className='outcome-title'>Flexible Schedule</div>
              <div className='outcome-desc'>Plan your educational schedule correctly as the platform allows studying 24/7 so you can spend your time on things that matter</div>
            </div>
            <div className='outcome-item'>
              <div className='outcome-line'></div>
              <div className='outcome-title'>Homeschooling or Online </div>
              <div className='outcome-desc'>Choose either homeschooling or online tuition with Tutor House professionals who offer high-quality educational services</div>
            </div>
            <div className='outcome-item'>
              <div className='outcome-line'></div>
              <div className='outcome-title'>Educational Consultants</div>
              <div className='outcome-desc'>Tutor House provides educational consultants who can find the best tutor that fits each student's requirements</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Landing
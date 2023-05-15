import React from 'react'

import logo1 from '../assets/logo1.jpg'
import logo2 from '../assets/logo2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRing } from '@fortawesome/free-solid-svg-icons'

export function Introduction() {
  return (
    <div className="landingpage-introduction">
      <div className="wrapper-1">
        <img src={logo1} alt="khayas" />
        <div className="btn-wrapper">
          <button>Book Now</button>
          <p>Or scroll down for more information.</p>
        </div>
      </div>
      <div className="wrapper-2"></div>
    </div>
  )
}

export function Offers() {
  return (
    <div className="landingpage-offers">
      <div className="header">OUR SERVICES</div>
      <div className="content-wrapper">
        <div className="block">
          <div className="block-icon">
            <FontAwesomeIcon icon={faRing} />
          </div>
          <div className="block-header">Service Name</div>
          <div className="block-content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit eum exercitationem fuga id officiis, ab reprehenderit, ullam earum molestiae hic debitis consequatur ipsa quia tempora necessitatibus similique tempore. Explicabo, qui.</div>
        </div>
        <div className="block">
          <div className="block-icon">
            <FontAwesomeIcon icon={faRing} />
          </div>
          <div className="block-header">Service Name</div>
          <div className="block-content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit eum exercitationem fuga id officiis, ab reprehenderit, ullam earum molestiae hic debitis consequatur ipsa quia tempora necessitatibus similique tempore. Explicabo, qui.</div>
        </div>
        <div className="block">
          <div className="block-icon">
            <FontAwesomeIcon icon={faRing} />
          </div>
          <div className="block-header">Service Name</div>
          <div className="block-content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit eum exercitationem fuga id officiis, ab reprehenderit, ullam earum molestiae hic debitis consequatur ipsa quia tempora necessitatibus similique tempore. Explicabo, qui.</div>
        </div>
      </div>
    </div>
  )
}

export function ContactUs() {
  return (
    <div className="landingpage-contactus" id="contact-us">
      <div className="wrapper-1">
        <div className="header">CONTACT US</div>
        <table>
          <tr>
            <th>Business Address</th><td>Sample St. Bacolod City</td>
          </tr>
          <tr>
            <th>Email Address</th><td>sample@email.com</td>
          </tr>
          <tr>
            <th>Contact Number</th><td>+63 907 127-8301</td>
          </tr>
        </table>
      </div>
      <div className="wrapper-2">
        <img src={logo2} alt="khayas" />
      </div>
    </div>
  )
}

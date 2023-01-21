import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from '@mui/material/Button';
import './App.css'

export default function App() {


  return (
    <div className="App">
      <Price />

    </div>
  )
}

function Price() {

  return (
    <div className="container">
      <div className="containerPrice">
        <div className="subscribe">
          <h4 className="text-muted">FREE</h4>
        </div>
        <div className="price">
          <h1>$0</h1>
          <h5>/month</h5>

        </div>
        <hr />
        <ul className="list">
          <li><b>&#x2713; </b><span>Single</span></li>
          <li><b>&#x2713; </b><span>5GB Storage</span></li>
          <li><b>&#x2713; </b><span>Unlimited Public Project</span></li>
          <li><b>&#x2713; </b><span>Community Access</span></li>

          <li className="text-muted">&#x2717; <span>Unlimited Public Project</span></li>
          <li className="text-muted">&#x2717; <span>Dedicated Phone Support</span></li>
          <li className="text-muted">&#x2717; <span>Free Subdomain</span></li>
          <li className="text-muted">&#x2717; <span>Monthly Status Report</span></li>

        </ul>
        <div className="button">
          <Button variant="contained">Button</Button>
        </div>
      </div>

      <div className="containerPrice">
        <div className="subscribe">
          <h4 className="text-muted">PLUS</h4>
        </div>
        <div className="price">
          <h1>$9</h1>
          <h5>/month</h5>

        </div>
        <hr />
        <ul className="list">
          <li><b>&#x2713; <span>5 Users</span></b></li>
          <li><b>&#x2713; </b><span>50GB Storage</span></li>
          <li><b>&#x2713; </b><span>Unlimited Public Project</span></li>
          <li><b>&#x2713; </b><span>Community Access</span></li>

          <li><b>&#x2713;</b> <span>Unlimited Public Project</span></li>
          <li><b>&#x2713;</b> <span>Dedicated Phone Support</span></li>
          <li><b>&#x2713;</b> <span>Free Subdomain</span></li>
          <li className="text-muted">&#x2717; <span>Monthly Status Report</span></li>

        </ul>
        <div className="button">
          <Button variant="contained">Button</Button>
        </div>
      </div>

      <div className="containerPrice">
        <div className="subscribe">
          <h4 className="text-muted">PRO</h4>
        </div>
        <div className="price">
          <h1>$49</h1>
          <h5>/month</h5>

        </div>
        <hr />
        <ul className="list">
          <li><b>&#x2713; <span>Unlimited Users</span></b></li>
          <li><b>&#x2713; </b><span>150GB Storage</span></li>
          <li><b>&#x2713; </b><span>Unlimited Public Project</span></li>
          <li><b>&#x2713; </b><span>Community Access</span></li>

          <li><b>&#x2713; </b> <span><b>Unlimited</b> Public Project</span></li>
          <li><b>&#x2713; </b> <span>Dedicated Phone Support</span></li>
          <li><b>&#x2713; </b> <span>Unlimited Free Subdomain</span></li>
          <li><b>&#x2713; </b> <span>Monthly Status Report</span></li>

        </ul>
        <div className="button">
          <Button variant="contained">Button</Button>
        </div>
      </div>
    </div >


  )

}

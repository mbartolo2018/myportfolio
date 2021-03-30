import React, { Component, useState } from 'react';
import { NavbarContents } from "./NavbarContent";
import './Navbar.css';

/**
 * Name: Mark Bartolomeo
 * Date Modified: 3-30-21
 * 
 * Notes:
 * 
 * I set the state of the menu icon to false.
 * Once that the user selects the menu icon it will change states of the icon from bars to a hamburger
 * and the menu will appear if page is being viewed on a mobile device.
 * 
 * Comments:
 * 
 * I plan to use React routing for the page navigation. I have sucessfully created the navigation with
 * a little bit of CSS and some JavaScript. The React framework allows me to create custom componets along
 * with the Javascript code in order to create a more maintainable website so I am focusing on the functionality.
 * So far this site has been experimenting with React and the goodies that come along with the different packages.
 * I stil have much to learn
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  */
class Navbar extends Component {

  state = { selected: false }
  handleClick = () => {
    this.setState({ selected: !this.state.selected })

  }
  render() {
    return (
      <nav className="NavbarContents">
        <div className="menu-icon" onClick={this.handleClick}>
          <i class={this.state.selected ? "fa fa-bars" : "fas fa-hamburger"}></i>

        </div>
        <ul>
          {NavbarContents.map((item, index) => {
            return (
              <li key={index}><a className={item.classNames} href={item.url} >
                {item.title}
              </a></li>
            )
          })}


        </ul>

      </nav>
    )
  }
}

export default Navbar

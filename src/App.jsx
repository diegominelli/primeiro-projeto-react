import React from "react";
import './styles/App.css'
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import dashboard from './assets/images/dashboard.png'
import dashboard2 from './assets/images/dashboard2.png'
import dashboard3 from './assets/images/dashboard3.png'
import dashboard4 from './assets/images/dashboard4.png'
import { Counter } from "./components/Counter/Counter";

class App extends React.Component {

  render() {
    return (
      <>
        <Navbar />

        <Counter />
{/* 
        <section id="articles">
          <Article title="Designing Dashboards" provider="NASA" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quos sequi nam tempore adipisci perferendis quam minima quia expedita, possimus dolores iure suscipit laboriosam assumenda at, voluptatum molestiae nihil dolore!" thumbnail={ dashboard} />
        <Article title="Vibrant Portraits of 2020" provider="SpaceNews" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quos sequi nam tempore adipisci perferendis quam minima quia expedita, possimus dolores iure suscipit laboriosam assumenda at, voluptatum molestiae nihil dolore!" thumbnail={ dashboard2}/>
        <Article title="36 Days os Malayalam type" provider="Spacefight Now" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quos sequi nam tempore adipisci perferendis quam minima quia expedita, possimus dolores iure suscipit laboriosam assumenda at, voluptatum molestiae nihil dolore!" thumbnail={ dashboard3}/>
        <Article title="Designing Dashboards" provider="NASA" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quos sequi nam tempore adipisci perferendis quam minima quia expedita, possimus dolores iure suscipit laboriosam assumenda at, voluptatum molestiae nihil dolore!" thumbnail={ dashboard4}/>
        
        </section> */}
  
      </>
    );
  }
}

export default App;

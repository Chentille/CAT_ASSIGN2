// Importing React library for creating React components
import React, { useState, useEffect } from 'react';

// Importing custom components for different routes
import Navbar  from './navbar';
import './Achievements.css';

// DragonAchivements component
function DragonAchievements () {
  const [selectedContainer, setSelectedContainer] = useState(null);

  useEffect(() => {
    const containerWrapper = document.querySelector('.Middle');

    const clickHandler = function () {
      // Clone the center container
      const centerContainerClone = containerWrapper.children[1].cloneNode(true);
    
      // Set the size of the center container to be slightly bigger
      containerWrapper.children[1].style.width = '100%';
      containerWrapper.children[1].style.height = '130%'
    
      // Replace the content of the center container with the clicked container's content
      containerWrapper.children[1].innerHTML = this.innerHTML;
    
      // Replace the content of the clicked container with the center container's content
      this.innerHTML = centerContainerClone.innerHTML;
    
      // Reset selectedContainer to null
      setSelectedContainer(null);
    };

    // Add click event listeners to all containers
    containerWrapper.querySelectorAll('.blue-container3').forEach(container => {
      container.addEventListener('click', clickHandler);
    });

    return () => {
      // Cleanup: remove the event listeners when the component unmounts
      containerWrapper.querySelectorAll('.blue-container3').forEach(container => {
        container.removeEventListener('click', clickHandler);
      });
    };
  }, [selectedContainer]);

    return(
      <div className='wrapper'>
            <Navbar />
            <section className='section1'>
            <img src="https://i.ibb.co/X2JxXbD/image-13.png"className='lion' alt="lion-3" />
            <div className='textContainer'>
            <h1>DRAGON DANCE </h1>
            <h2>"Dance of Fortune: The Dragon's Elegance in Motion."</h2>
            </div>
            <img src="https://i.ibb.co/CB24sg4/image-14.png" className='lion2' alt="lion-4" />
          </section>


          <section className='section2'>
            <div className='topcontainer'>
              <img src="https://i.ibb.co/hBdT0bq/border-top.png"className='img'  />
              <div className='centerContent'>
                <img src="https://i.ibb.co/4YsDkdg/image-5.png" className='centerImage'  />
                <p className='centerText'>SERVICES</p>
              </div>
              <img src="https://i.ibb.co/HN8MY38/border-top.png" className='img' />
            </div>
            <div className='Middle'>
              <div class="blue-container3">
              <img src="https://i.ibb.co/gTzJkDw/l4.png"  alt="lion-4" />
                <div className='RedContainer'>
                <p class="container-text"> Acrobatic Dragon Dance</p>
                </div>
              </div>
              <div class="blue-container3">
              <img src="https://i.ibb.co/x6XBrcV/l6.png"  alt="lion-4" />
                <div className='RedContainer'>
                  <p class="container-text"> Festival Dragon Dance  </p>
                </div>
              </div>
              <div class="blue-container3">
              <img src="https://i.ibb.co/NnRY1yk/l5.png"   alt="lion-4" />
              <div className='RedContainer'>
                  <p class="container-text">L.E.D Dragon Dance</p>
                </div>
              </div>
            </div>
            <div className='Middle'>
              <video controls className='video'>
                <source src='2.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className='bottom-container'>
              <img src="https://i.ibb.co/MBLdnFF/border-top-1.png" alt="lion-4" />
              <img src="https://i.ibb.co/WfXS8Qg/border-bottom.png" alt="lion-4" />
            </div>
          </section>  

          <section className='section3'>
          <div className='Container'>
            <div className='left3'>
            <h1>ACHIVEMENTS</h1>
            <h2>( DRAGON DANCE )</h2>
            <div className="text-container">
                <ul>
                <li>2017 - Singapore Acrobatic Dragon Championship (Excellent Award)</li>
                <li>2018 - Malaysia Luminous Dragon Competition</li>
                <li>2019 - Shanghai World Dragon Dance Championship (3rd Runner Up)</li>
                <li>2022 - Asian Lion and Dragon dance Competition (2nd Runner Up for Dragon Dance)</li>
                </ul>
             </div>
            </div>
            <div className='right3'>
            <img src="https://i.ibb.co/W05tzJ0/dragoon-achievement-1.jpg" />
            </div>
          </div>
          </section>
      </div> 
    )
}

// Exporting the DragonAchievements component
export default DragonAchievements;
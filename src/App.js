import React, { useEffect } from 'react';
import './App.css';
import { gsap } from 'gsap';
import Flip from "gsap/Flip";

function App() {
  useEffect(() => {
    gsap.registerPlugin(Flip)
    const links = document.querySelectorAll(".nav-item li");
    const activeNav = document.querySelector(".active-nav");

    links.forEach((link) => {
      link.addEventListener('click', () => {
        // Move Line
        const state = Flip.getState(activeNav);
        link.appendChild(activeNav);
        Flip.from(state, {
          duration: 1.25,
          absolute: true,
          ease: 'elastic.out(1,0.5)'
        });
      });
    });

    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
      card.addEventListener('click', () => {
        const state = Flip.getState(cards);
        // Add active and inactive
        const isCardActive = card.classList.contains("active");
        cards.forEach((otherCard, otherIndex) => {
          otherCard.classList.remove("active");
          otherCard.classList.remove("is-inactive");
          if (!isCardActive && index !== otherIndex) {
            otherCard.classList.add("is-inactive");
          }
        });
        if (!isCardActive) {
          card.classList.add("active");
        }
        Flip.from(state, {
          duration: 1,
          ease: 'expo.out',
          absolute: 'true'
        });
      });
    });
  });

  return (
    <div className="App">

      <nav>
        <ul className="nav-links">
          <div className="nav-item">
            <li>Services</li>
            <div className="active-nav"></div>
          </div>
          <div className="nav-item">
            <li>Projects</li>
          </div>
          <div className="nav-item">
            <li>Portfolio</li>
          </div>
        </ul>
      </nav>

      <section>
        <div className="card">
          <h1>Branding 🎨</h1>
          <p>If your brand is need of a new presence we can make this happen. Whether new or well established, we’re in tune with the rapid changes taking place.</p>
        </div>
        <div className="card">
          <h1>Content 📹</h1>
          <p>We ensure that all content produced for clients elevates their brand messaging & is crafted with specific goals in mind.</p>
        </div>
        <div className="card">
          <h1>Copywriting 🖊️</h1>
          <p>Well-written website content simply isn’t enough to compete. You need creative, and SEO-friendly copy to stand out. That’s where we come in.</p>
        </div>
        <div className="card">
          <h1>SEO 💻</h1>
          <p>We ensure your website’s structure and on-page content is optimised to thrive within all search engines. </p>
        </div>
      </section>
    </div>
  );
}

export default App;

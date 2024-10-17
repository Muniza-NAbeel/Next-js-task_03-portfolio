import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './globals.css';
import 'boxicons/css/boxicons.min.css';


const Home = () => {
  return (
    <main>
      {/* Header */}

      <header className="header">
       
        <a href="#" className="logo"> Muniza <span>Nabeel</span></a>
       
        <i className='bx bx-menu' id="menu-icon"></i>
       
        <nav className="navbar">
          <a href="#home" className="active"> Home </a>
          <a href="#about"> About </a>
          <a href="#services"> Skills </a>
          <a href="#portfolio"> Projects </a>
          <a href="#contact"> Contact </a>
        </nav>

      </header>

{/* Home Section */}
<section className="home" id="home">
  <div className="home-content">
    <h3>Hello, It&apos;s Me</h3>
    <h1>Muniza Nabeel</h1>
    <h3>And I&apos;m a <span className="multiple-text">Web Developer</span></h3>

    <p>I&apos;m a passionate web developer with expertise in HTML, CSS, and TypeScript. Currently, I&apos;m diving into the world of Next.js, expanding my skills to build more dynamic and efficient web applications.</p>

    <div className="social-media">
      <Link href="https://www.facebook.com/profile.php?id=61555562894584" target="_blank">
       <i className='bx bxl-facebook'></i>
      </Link>
      <Link href="https://mail.google.com/mail" target="_blank">
       <i className='bx bxl-gmail'></i>
      </Link>
      <Link href="https://github.com/Muniza-NAbeel" target="_blank">
       <i className='bx bxl-github'></i>
      </Link>
      <Link href="https://www.linkedin.com/in/muniza-malik-59826930a/" target="_blank">
       <i className='bx bxl-linkedin'></i>
      </Link>
    </div>
      <Link href="https://milestone-1-mauve.vercel.app/" target="_main" className="btn">
        View Resume </Link>

 </div>
 
 <div className="home-img">
 <Image src="/Images/about.png" alt="Description" width={500} height={400} />
 </div>
     
  </section>

{/* About Section */}
  <section className="about" id="about">
     <div className="about" id="img">
          <img src="/Images/home.png" alt="Description" />
      </div>
        <div className="about-content">
           <h2 className="heading">About <span>Me!</span></h2>
           <h3>Frontend Developer!</h3>
           <p>With a strong foundation in frontend development, I am currently expanding my skill set to become a full stack developer. My journey began with creating dynamic and user-friendly interfaces using technologies like HTML, CSS, and TypeScript. Recently, I&apos;ve been focusing on mastering Next.js to enhance my understanding of server-side rendering and building scalable web applications.</p>
          
          <a href="#" className="btn"> Back </a>
        </div>
      </section>

      {/* Services Section */}

    <section className="services" id="services">

     <h2 className="heading">My <span>Skills</span></h2>
        <div className="services-container">
          <div className="services-box">
            <i className='bx bxs-paint'></i>
            <h3>Graphic Design</h3>
            <p>As a passionate graphic designer, I thrive on turning creative concepts into visually striking designs. With a keen eye for detail and a strong understanding of color theory, typography, and composition, I aim to deliver visually compelling work that aligns with the client&apos;s vision while adding a unique creative touch.</p>
            
            <a href="#" className="btn">Read More</a>
          </div>

          <div className="services-box">
            <i className='bx bx-code-alt'></i>
            <h3>Web Development</h3>
            <p>As a dedicated web developer, I am committed to building responsive and user-friendly websites that enhance the online experience. With expertise in HTML, CSS, and JavaScript, I focus on creating seamless interfaces and ensuring optimal performance across all devices.</p>

            <a href="#" className="btn">Read More</a>
          </div>

          <div className="services-box">
            <i className='bx bx-bar-chart-alt'></i>
            <h3>Digital Marketing</h3>
            <p>Digital marketing is a vital strategy for businesses, It allows brands to connect with their audience in real-time, analyze campaign performance, and drive conversions. With consumers increasingly turning to digital platforms, effective digital marketing is essential for maintaining competitiveness and building customer loyalty.</p>

            <a href="#" className="btn">Read More</a>
          </div>
        </div>

      </section>

      {/* Portfolio Section */}
      <section className="portfolio" id="portfolio">

        <h2 className="heading">Latest <span>Project</span></h2>
        
         <div className="portfolio-container">
           <div className="portfolio-box">
           <Image src="/Images/6.jpeg" alt="Description" width={300} height={200} />
           <div className="portfolio-layer">
                <h4>Object oriented program</h4>
                 <p>Using TypeScript, Node.js, and Inquirer.TypeScript provides strong typing, which helps catch errors early and improve code clarity. Node.js serves as the runtime environment, enabling server-side JavaScript execution, while Inquirer facilitates user interaction through prompts and command-line interfaces.</p>
              
               <a href="https://github.com/Muniza-NAbeel/Object-Oriented-program" target="_main">
            <i className='bx bx-link-external'></i></a>
            </div>
          </div>
          <div className="portfolio-box">
          <Image src="/Images/5.jpg" alt="Description" width={300} height={200} />
          <div className="portfolio-layer">
                <h4>Number Guessing Game</h4>
                  <p>A CLI-based number guessing game is a simple yet engaging application where players try to guess a randomly generated number within a specified range. Using Node.js and Inquirer,This project not only offers a fun experience but also serves as a practical introduction to handling user input and implementing game logic </p>
              <a href="https://github.com/Muniza-NAbeel/Cli-number-guessing-game" target="_main">
            <i className='bx bx-link-external'></i></a>
        </div>
      </div>
    <div className="portfolio-box">
    <Image src="/Images/number.avif" alt="Description" width={500} height={200} />
    <div className="portfolio-layer">
             <h4>Word Counter</h4>
            <p>A CLI-based word counter is a straightforward application that counts the number of words in a given text input from the user. Built using Node.js, the program prompts the user to enter a sentence or paragraph and then processes the input to determine the total word count.</p>
          <a href="https://github.com/Muniza-NAbeel/Word-Counter" target="_main">
        <i className='bx bx-link-external'></i></a>
       </div>
       </div>
       <div className="portfolio-box">
       <Image src="/Images/1.jpg" alt="Description" width={300} height={200} />
       <div className="portfolio-layer">
            <h4>Currency Convertor</h4>
            <p>A CLI-based currency converter is a practical application that allows users to convert amounts between different currencies through a command-line interface.</p>
          <a href="https://github.com/Muniza-NAbeel/Currency-Converter" target="_main"><i className='bx bx-link-external'></i></a>
        </div>
       </div>
       <div className="portfolio-box">
       <Image src="/Images/3.jpeg" alt="Description" width={300} height={200} />
       <div className="portfolio-layer">
             <h4>Advance Todo-list</h4>
            <p>A CLI-based advanced to-do list is a comprehensive application that allows users to manage tasks effectively through a command-line interface. Built using Node.js and Inquirer.</p>

          <a href="https://github.com/Muniza-NAbeel/Advance-todo-list" target="_main">
          <i className='bx bx-link-external'></i></a>
        </div>
        </div>
        
        <div className="portfolio-box">
        <Image src="/Images/2.png" alt="Description" width={400} height={200} />
            
            <div className="portfolio-layer">
            <h4>Adventure Game</h4>
            <p>
                A CLI-based adventure game is an interactive storytelling experience where players navigate through a fictional world using text commands. Built with Node.js.</p>
            <a href="https://github.com/Muniza-NAbeel/Adventure-Game" target="_main">
            <i className='bx bx-link-external'></i></a>
         </div>
        </div>
    </div>
</section>

{/* Contact Section */}
 <section className="contact" id="contact">
  
  <h2 className="heading">Contact <span>Me!</span></h2>
  
  <form action="mailto:your-email@example.com" method="POST" encType="text/plain">
  
    <div className="input-box">
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email" required />
    </div>
   
    <div className="input-box">
      <input type="number" placeholder="Phone Number" required />
      <input type="text" placeholder="Email Subject" required />
    </div>
   
    <textarea cols={30} rows={10} placeholder="Your Message Here" required></textarea>
    <input type="submit" value="Send Message" className="btn" />
  </form>
</section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-text">
          <p><i className='bx bx-copyright'></i> 2024 Made With <i className='bx bx-heart'></i> by Muniza Nabeel | All right reserved.</p>
        </div>
        <div className="footer-icontop">
          <a href="#home"><i className='bx bx-up-arrow-alt'></i></a>
        </div>
      </footer>
    </main>
  );
};

export default Home;
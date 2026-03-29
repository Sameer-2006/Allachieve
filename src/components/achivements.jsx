import { useEffect, useRef, useState } from "react";

const Card = ({ video, text }) => {
  const [open, setOpen] = useState(false);

  return (
    
    <div
      onClick={() => setOpen(!open)}
      className="group cursor-pointer w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="h-40 w-full rounded-lg object-cover"
      >
        <source src={video} />
      </video>
     

      <p
        className={`
          mt-2 text-sm text-slate-600 text-center sm:text-left
          overflow-hidden transition-all duration-500 ease-in-out
          ${open ? "max-h-[200px]" : "max-h-[60px]"}
          group-hover:max-h-[200px]
        `}
      >
        {text}
      </p>
        
    </div>
  );
};





const Cardim = ({ video, text }) => {
  const [open, setOpen] = useState(false);

  return (
    
    <div
      onClick={() => setOpen(!open)}
      className="group cursor-pointer w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="h-40 w-full rounded-lg object-cover"
      >
        <source src={video} />
      </video>
     

      <p
        className={`
          mt-2 text-sm text-slate-600 text-center sm:text-left
          overflow-hidden transition-all duration-500 ease-in-out
          ${open ? "max-h-[200px]" : "max-h-[60px]"}
          group-hover:max-h-[200px]
        `}
      >
        {text}
      </p>
        
    </div>
  );
};






const Projct = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !textRef.current) return;
      if (ticking.current) return;

      ticking.current = true;

      requestAnimationFrame(() => {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const start = windowHeight;
        const end = -rect.height;

        const progress = (start - rect.top) / (start - end);
        const clamped = Math.max(0, Math.min(progress, 1));

        const scale = 0.3 + clamped * 0.9;
        textRef.current.style.transform = `translate(-50%, 0) scale(${scale})`;

        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const text1 = `We are developing a revolutionary Virtual Campus Tour platform that connects colleges and universities across India—all in one immersive experience. Whether you're a student, fresher, or visitor, our platform makes exploring campuses easier, more interactive, and more fun than ever before.
Key Features: 
Explore Campuses Virtually: Visit college campuses across India from anywhere, at any time.   
Mini Games: Enjoy engaging mini-games designed to make your journey fun and interactive.    
Chat with Others: Connect and chat with fellow students, seniors, and faculty members in real time.    
Navigation Made Easy: Freshers can easily locate different places on campus using our intuitive virtual map.    
Cross-Platform Experience: Available on Mobile, PC, and VR, giving you the freedom to explore the way you want.    
Join us on a journey to transform how students discover and experience campuses across the nation—virtually, socially, and playfully.`;
  const text2 = `We are thrilled to announce our remarkable achievements in ANI-SAGA, the prestigious 3D animation challenge hosted at Concetto, the official tech fest of IIT ISM Dhanbad. Competing against top animators from across the nation, our team showcased unmatched creativity and technical expertise, securing 3rd places in this highly competitive event.    
Our animators were tasked with bringing imaginative concepts to life through sophisticated animations. Utilizing cutting-edge techniques, they crafted visually compelling and narratively rich animations that captured the judges' and audiences' attention alike. The event not only tested our artistic capabilities but also honed our skills in developing dynamic narratives and characters.    
Participation in ANI-SAGA was an incredible opportunity for our club to engage with a vibrant community of animators and demonstrate our prowess in the animation domain. Our achievements in this challenge underscore our dedication to innovation and excellence in digital arts.
      `;
   const text3 = `We are thrilled to announce our remarkable achievements in ANI-SAGA, the prestigious 3D animation challenge hosted at Concetto, the official tech fest of IIT ISM Dhanbad. Competing against top animators from across the nation, our team showcased unmatched creativity and technical expertise, securing 1st places in this highly competitive event.    
Our animators were tasked with bringing imaginative concepts to life through sophisticated animations. Utilizing cutting-edge techniques, they crafted visually compelling and narratively rich animations that captured the judges' and audiences' attention alike. The event not only tested our artistic capabilities but also honed our skills in developing dynamic narratives and characters.    
Participation in ANI-SAGA was an incredible opportunity for our club to engage with a vibrant community of animators and demonstrate our prowess in the animation domain. Our achievements in this challenge underscore our dedication to innovation and excellence in digital arts.
             `;
    const text4 = `Participated in the prestigious Inter IIT Cultural Meet 2024 under the Digital Art Cup – Online 3D Animation category.    
Our team developed a deeply moving and visually compelling 3D animation that sensitively portrayed the emotional struggles of students facing mental health challenges. The animation follows the journey of a student's soul as it departs, reflecting on significant memories and moments from his life. Through the theme of flight and recollection, the piece aimed to create awareness about student mental health and the importance of support, empathy, and early intervention.    
This work was not only a creative expression but also a meaningful statement, using digital art to spark conversations around mental wellness.
         `;
    const text5 = `Our club made a striking impression at the Inter IIT Cult Meet 2023, securing the 8th rank with our meticulously crafted animation. The piece beautifully depicted an astronaut accompanied by a rover robot, journeying across the illuminated Martian surface, with a rocket soaring over a distant dome.    
The animation captured the imagination with its engaging narrative of exploration and innovation. The backdrop of the dome against the Martian terrain added depth, enhancing the immersive experience for viewers.    
This achievement underscores our club's ability to blend intricate design with storytelling, creating a cultural artifact that resonated at the competition. Through this project, we demonstrated our commitment to pushing the boundaries of artistic and technological expression.
          `;
   const text6 = `At the Inter IIT Tech Meet 13.0, our club captured attention with a captivating horror escape room game, securing the 14th rank in a competitive field. This project highlighted our creativity and technical proficiency, featuring immersive gameplay and intricate mechanics.    
The game centered around escaping a perilous room, where the challenge involved managing time against melting candles, ingeniously implemented using raycasting technology. As the candles burned out, players faced life-threatening danger, intensifying the urgency and engagement of the experience. To heighten the sense of horror, we incorporated strategically timed jump scares that kept players on edge. The game further enriched player engagement with multiple endings, determined by the sequence in which they discovered clues to escape, adding depth and replayability.    
Employing Unity and Blender in our tech stack, we crafted detailed environments and realistic animations, effectively immersing players in the eerie atmosphere. This project exemplifies our commitment to high-quality production and engaging narrative design, reinforcing our standing as innovators in the realm of game development.
       `;
    const text7 = `The Summer Jam event provided an ideal platform for our club to showcase its innovative spirit and technical proficiency, culminating in a first-place victory. Our project ambitiously reimagined a classic 2D game into a contemporary 3D multiplayer experience, inspired by the traditional snake game yet infused with modern dynamics.    
Leveraging Unity and Blender, we revitalized this nostalgic concept with vibrant visuals and intuitive mechanics that required skill and adaptability from players. Our approach emphasized collaborative creativity, enabling team members to contribute diverse expertise across design, development, and execution. The outcome was a polished and engaging product that captivated judges and peers alike, reinforcing our reputation as innovators in the gaming landscape.    
This achievement highlighted our team's cohesive effort and ability to transform familiar ideas into groundbreaking applications. It celebrates our role as leaders in technical innovation and collaborative excellence, solidifying our position at the forefront of the industry.
          `;
    const text8 = `At the Inter IIT Tech Meet 12.0, our club earned the 8th rank with our innovative game, Magical Maze – A Puzzle Platformer with a Twist. Developed using Unity 2022.3.4f1, Magical Maze is a compelling time-based 3D puzzle game that challenges players to navigate mazes filled with visual misdirection and deceptive cues. The game is designed to test cognitive agility and reaction time through immersive gameplay and escalating challenges.    
Featuring uniquely designed maze levels, the game's environments and lighting setups enhance the player's visual engagement. Gameplay incorporates elements such as misleading "Arrows" and rewarding "Time Tokens," while the intuitive UI system includes real-time timing and performance tracking through a leaderboard. Our development utilized Unity’s asset store to achieve polished finishes in UI elements, alongside refined collision detection and interactive zones.    
This project exemplifies our club’s expertise in creating captivating gaming experiences, demonstrating creativity and technical excellence. Our success solidifies our position as innovators in the domain of game development.
        `;
   const text9 = `At the Inter IIT Tech Meet, our club excelled by securing the 7th rank in the intricate 12.0 Panchayat problem statement category. Utilizing Unity for development and Blender for 3D modeling, our team crafted a solution designed to enhance transparency and operational efficiency. This approach improved communication between community leaders and residents, addressing real-world challenges with innovative technology. This achievement underscores our club's ability to combine creativity and technical expertise, effectively solving complex issues while fostering collaboration and innovation. Our success in this competition is a testament to our commitment to driving excellence and meaningful change through technology.
 `;
    const text10 = `At the esteemed IIT Bombay Expo, our club had the opportunity to present an innovative project: a 3D model of our campus designed to offer immersive virtual tours. Our vision extends beyond enhancing local perspectives; we aim to develop comprehensive 3D models for engineering campuses nationwide. This initiative seeks to unite students in a collaborative network, fostering friendships and facilitating meaningful inter-college connections, thereby enriching academic and social experiences.    
Our project is accessible in both PC and VR modes, delivering a cutting-edge user engagement platform. Looking forward, we envision opportunities for sponsorships, enabling businesses to prominently display banners within our virtual environment. This project represents a unique blend of technology, connectivity, and potential partnerships, positioning our club at the forefront of educational innovation.
 `;
    const text11 = `PLANT-ERIUM is an immersive, gamified VR/AR-enabled virtual garden developed in just 18 hours during the Smart India Hackathon 2024 – Internal Hackathon.    
                            Built with the mission to digitally preserve India’s natural healing heritage, PLANT-ERIUM connects technology with tradition—making learning about nature fun, engaging, and future-ready. Participated in the prestigious Inter IIT Cultural Meet 2024 under the Digital Art Cup – Online 3D Animation category.    
                            Our team developed a deeply moving and visually compelling 3D animation that sensitively portrayed the emotional struggles of students facing mental health challenges. The animation follows the journey of a student's soul as it departs, reflecting on significant memories and Moments from his life. Through the theme of flight and recollection, the piece aimed to create awareness about student mental health and the importance of support, empathy, and early intervention.    
                            This work was not only a creative expression but also a meaningful statement, using digital art to spark conversations around mental wellness.
            `;
  


  const video1 =
    "https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/college tour.mp4";
    const video2 ="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/courage dog.mp4";
    const video3 ="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/dora.mp4";
    const video4 ="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/TeamID18_O3D.mp4";
    const video5 ="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/Interiit cult.mp4";
    const video6 ="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/Interiit_game.mp4";
    const video7 ="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/Summer jam.mp4";
    const video8 ="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/interiit tech.mp4";
    const video9 ="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/Panchayat raj.png";
    const video10 ="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/iit Bombay.jpg";
    const video11 ="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/VR_SIH.mp4";

    const head=`<h1>hii</h1>`;
  return (
    <section id="projct" ref={sectionRef} className="pt-0 overflow-hidden">
      
      {/* HEADING */}
      <h1
        ref={textRef}
        className="
          absolute sm:top-2 lg:top-10 left-1/2
          font-['Anton']
          text-[clamp(5rem,18vw,20rem)]
          uppercase tracking-tight
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
          bg-clip-text text-transparent
          pointer-events-none
        "
      >
        ACHIEVEMENTS
      </h1>

      
      <div className="relative z-0 mt-52 sm:mt-64 lg:mt-72 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-2 md:flex-row md:flex-wrap md:justify-center">
          
          <Card video={video1} h={head} text={text1} />
          <Card video={video2} text={text2} />
          <Card video={video3} text={text3} />
          <Card video={video4} text={text4} />
          <Card video={video5} text={text5} />
          <Card video={video6} text={text6} />
          <Card video={video7} text={text7} />
          <Card video={video8} text={text8} />
          <Card video={video9} text={text9} />
          <Card video={video10} text={text10} />
          <Card video={video11} text={text11} />

        </div>
      </div>
      <div className="mb-20"></div>
    </section>
  );
};

export default Projct;
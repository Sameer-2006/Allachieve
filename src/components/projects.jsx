import { useEffect, useRef } from "react";

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

  return (
    
    <section
  id="projct"
  ref={sectionRef}
  className="pt-0 overflow-hidden"
>
    <h1
  ref={textRef}
  className="
    absolute top-0
    left-1/2
  
    font-['Anton']
    text-[clamp(10rem,25vw,45rem)]
    uppercase tracking-tight
    bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]
    bg-clip-text text-transparent
    pointer-events-none
  "
>
  PROJECTS
</h1>

 
    

     <div className="relative z-0 mt-52 sm:mt-64 lg:mt-72 max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="
          flex flex-col items-center gap-2
          md:flex-row md:flex-wrap md:justify-center
        "
        >
         

          <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-red">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="h-40 w-full rounded-lg object-cover"
            >
              <source src="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/Aeroplane.mkv" type="video/mp4" />
            </video>

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
              A high-fidelity 3D render created in Blender, showcasing a aircraft soaring  a  photorealistic sky. The scene demonstrates dynamic smoke simulation, realistic lighting capturing the essence of high-speed flight. This project emphasizes Blender’s capability for visual storytelling in aviation and mechanical animation.
            </p>
          </div>

          
           <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="h-40 w-full rounded-lg object-cover"
            >
              <source src="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/Infinite_Tunnel(22JE0730).mp4" type="video/mp4" />
            </video>

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
           A visually rich demo of a fantasy role-playing game featuring hand-crafted environments, intricate character models, and a glowing portal as part of a quest-based narrative. This prototype combines fantasy world-building with immersive gameplay design.     </p>
          </div>

       

  <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="h-40 w-full rounded-lg object-cover"
            >
              <source src="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/hotairballon.mp4" type="video/mp4" />
            </video>

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
A whimsical render of a hot air balloon hovering over dense, mountainous forests, crafted entirely in Blender. With stylized terrain generation, mid-air perspective, and an adventurous theme, this project evokes a sense of exploration and freedom, perfect for animated sequences or fantasy narratives.            </p>
          </div>

          
          <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30  backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <img
              src="/proj/pr2.png"
              alt="Project2"
              loading="lazy"
              className="h-40 w-full rounded-lg object-cover"
            />

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
              A clean and symmetrical 3D environment featuring a multi-tiered
              pagoda structure placed within a realistic grassy field. Modeled
              in Blender, this project showcases architectural precision, sharp
              edge detailing, and natural lighting ideal as a modular element
              for world-building in stylized or historically inspired game
              settings.
            </p>
          </div>

        

          <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <img
              src="/proj/pr5.png"
              alt="project"
              loading="lazy"
              className="h-40 w-full rounded-lg object-cover"
            />

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
              A photorealistic render of a chilled energy drink can,
              artistically placed in a bed of ice. This Blender project
              demonstrates advanced material shading, condensation effects, and
              realistic lighting — ideal for advertising, product design, and
              branding presentations.
            </p>
          </div>

          <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <img
              src="/proj/pr4.png"
              alt="project"
              loading="lazy"
              className="h-40 w-full rounded-lg object-cover"
            />

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
              A dynamic scene depicting a low-flying aircraft navigating through
              a misty, rocky mountain range. This storyboard frame combines
              cinematic lighting and environmental detail, suitable for animated
              storytelling or cutscene development in adventure genres.
            </p>
          </div>

          <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <img
              src="/proj/pr6.png"
              alt="project"
              loading="lazy"
              className="h-40 w-full rounded-lg object-cover"
            />

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
              A close-up cinematic render focused on detailed fantasy assets
              including a weathered dagger, ancient scroll, and goblet arranged
              on a wooden surface. This Blender project demonstrates mastery in
              material realism, and atmospheric lighting to
              evoke mystery.
            </p>
          </div>
           <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="h-40 w-full rounded-lg object-cover"
            >
              <source src="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/Document%20from%20Vivek%20Rao2.mp4" type="video/mp4" />
            </video>

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
           An artistic render of a luminous pink-blossomed tree standing alone in a serene nighttime field. Created in Blender, the scene showcases strong color contrast, depth of field, and subtle lighting to build a mystical and tranquil mood. This project reflects stylized environment design and mood-setting through minimalist natural elements.  </p>
          </div>

           <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="h-40 w-full rounded-lg object-cover"
            >
              <source src="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/broken%20heritage.mp4" type="video/mp4" />
            </video>

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
A high-detail 3D model of classical stone ruins surrounded by autumn foliage, created in Blender. This project captures the timeless beauty of ancient architecture using realistic lighting, sharp structural modeling, and natural environmental integration — ideal for historical games or cinematic scenes.            </p>
          </div>
          
         








           <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="h-40 w-full rounded-lg object-cover"
            >
              <source src="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/Spaceship%20final.mp4" type="video/mp4" />
            </video>

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
           An immersive VR experience set in a futuristic space station, designed for interactive exploration. Users navigate through zero-gravity corridors and sci-fi architecture, highlighting real-time physics and immersive storytelling elements.   </p>
          </div>
           <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="h-40 w-full rounded-lg object-cover"
            >
              <source src="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/dragon40001-0060%20(1).mkv" type="video/mp4" />
            </video>

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
        Witness the majestic power of a mythical creature in our Fire-Breathing Dragon Animation. This project highlights advanced particle systems to achieve realistic fire effects and detailed modeling for the dragon's anatomy.       </p>
          </div>

              <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="h-40 w-full rounded-lg object-cover"
            >
              <source src="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/watch.mp4" type="video/mp4" />
            </video>

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
A visually striking Blender render featuring a vintage clock set against a surreal, wave-patterned backdrop. This project showcases a fusion of realism and abstract environment design, emphasizing material shading, reflective surfaces, and strong compositional contrast — suited for concept art or surreal storytelling.            </p>
          </div>

          
           <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="h-40 w-full rounded-lg object-cover"
            >
              <source src="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/Document%20from%20Vivek%20Rao3.mp4" type="video/mp4" />
            </video>

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
           A dramatic nighttime render of a sleek sports car placed in a neon-lit urban alley. Modeled and rendered in Blender, the scene utilizes advanced lighting, reflective surfaces, and a cinematic composition to evoke a moody, cyberpunk atmosphere. This project highlights environmental storytelling and vehicular design in stylized modern settings.    </p>
          </div>
           <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="h-40 w-full rounded-lg object-cover"
            >
              <source src="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/Bullet.mp4" type="video/mp4" />
            </video>

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
         A 2-minute cinematic animation following a young adventurer biking through a mystical, fog-laden forest. Created for a national animation contest, the short film captures atmosphere, suspense, and character emotion with professional-grade visual storytelling.   </p>
          </div>
           <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="h-40 w-full rounded-lg object-cover"
            >
              <source src="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/dance.mp4" type="video/mp4" />
            </video>

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
           Experience the joy and rhythm in this vibrant animation of a boy dancing energetically in a beautifully rendered outdoor setting. This project highlights character animation skills, bringing movements to life with dynamic expression and style.    </p>
          </div>
           <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="h-40 w-full rounded-lg object-cover"
            >
              <source src="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/Budha.mp4" type="video/mp4" />
            </video>

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
         Immerse yourself in the serene ambiance of a tranquil mountain temple in this animated scene, part of an expansive fantasy RPG project. The setting offers quest-driven gameplay infused with peace and mythology.      </p>
          </div>
           <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="h-40 w-full rounded-lg object-cover"
            >
              <source src="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/Kidney%20Animation%20(1).mp4" type="video/mp4" />
            </video>

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
            Witness the story of transformation and healing through an innovative animated short depicting the metaphorical journey of a kidney operation. This conceptual narrative invites viewers to explore themes of renewal and vitality through abstract motion     </p>
          </div>
           <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="h-40 w-full rounded-lg object-cover"
            >
              <source src="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/game_charector%20.mp4" type="video/mp4" />
            </video>

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
         Dive into an immersive fantasy world where legends clash in a breathtaking 3D rendered battle scene. This project captures the essence of storytelling through detailed environmental design and character modeling, bringing forth a narrative full of suspense and adventure.    </p>
          </div>
           <div className="w-full sm:w-[280px] md:w-[300px] rounded-xl border border-white/30 backdrop-blur-sm p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="h-40 w-full rounded-lg object-cover"
            >
              <source src="https://raw.githubusercontent.com/animationandgamedesignclub/IMAGE/main/Hii.mp4" type="video/mp4" />
            </video>

            <p className="mt-2 text-sm text-slate-600 text-center sm:text-left">
           Explore a charming and quirky animation where a skeleton comes to life and offers a friendly greeting. This project demonstrates character animation skills in Blender, delivering personality and emotion through simple movements and expressions.    </p>
          </div>
          
</div>
        <div className="mt-16 sm:mt-20 text-center">

        </div>
      </div>
    </section>
    
  );
};

export default Projct;

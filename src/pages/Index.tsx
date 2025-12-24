import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import dionneHero from "@/assets/dionne-hero.png";
import dionneAbout from "@/assets/dionne-about.jpg";
import iconScale from "@/assets/icon-scale.png";
import iconGavel from "@/assets/icon-gavel.png";
import iconMicrophone from "@/assets/icon-microphone.png";
import bookTyranny from "@/assets/book-tyranny.png";
import speakingHero from "@/assets/speaking-hero.jpg";
import roleLawyer from "@/assets/role-lawyer.jpg";
import roleSpeaker from "@/assets/role-speaker.jpg";
import roleAuthor from "@/assets/role-author.jpg";
import roleHumanitarian from "@/assets/role-humanitarian.jpg";
import roleLeader from "@/assets/role-leader.jpg";
import roleCreator from "@/assets/role-creator.jpg";
import missionImage from "@/assets/mission-image.jpg";
import worldMap from "@/assets/world-map.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
const lifeRoles = [{
  title: "Lawyer",
  image: roleLawyer
}, {
  title: "Speaker",
  image: roleSpeaker
}, {
  title: "Author",
  image: roleAuthor
}, {
  title: "Humanitarian",
  image: roleHumanitarian
}, {
  title: "Leader",
  image: roleLeader
}, {
  title: "Creator",
  image: roleCreator
}];
const missionPoints = [{
  title: "For a Purpose",
  description: "Awakening purpose in others — inspiring people to rise above fear and live lives aligned with who they're truly meant to be."
}, {
  title: "For a People",
  description: "Empowering women and youth through storytelling, mentorship, and authentic connection reminding them of their worth and potential."
}, {
  title: "The Passion That Drives Me",
  description: "Merging creativity, courage, and faith to build projects, platforms, and messages that spark transformation and lasting impact."
}, {
  title: "The Legacy I want to leave on earth",
  description: "Creating meaningful work that transcends time, a legacy of purpose, empowerment, and hope for generations to come."
}];
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex-col min-h-[50vh] relative pb-32 md:pb-40 mx-0 flex items-center justify-end">
            {/* Left text */}
            <div className="absolute left-4 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 max-w-xs z-10">
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Blending law, leadership, and<br />
                mentorship to shape a just and<br />
                purpose-driven world.
              </p>
            </div>

            {/* Center - Hero Image */}
            <div className="relative z-30">
              <img alt="Dionne Tweneboah" className="w-72 md:w-96 lg:w-[28rem] object-cover" src="/lovable-uploads/ae4cd500-bdff-4bd7-8a49-231e17955123.png" />
            </div>

            {/* Right buttons */}
            <div className="absolute right-4 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 flex gap-3 z-10">
              <Button variant="hero" size="lg" className="rounded-full px-6 md:px-8">
                Book Me
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-6 md:px-8 border-2 border-foreground">
                About Me
              </Button>
            </div>
          </div>
        </div>

        {/* Name Banner - overlaps the hero image */}
        <div className="bg-primary text-primary-foreground py-12 relative overflow-hidden -mt-32 md:-mt-40 my-px md:py-0">
          {/* Decorative icons on burgundy banner */}
          <img src={iconScale} alt="" className="absolute left-0 bottom-0 w-28 md:w-40 lg:w-48 opacity-80 pointer-events-none" />
          <img src={iconGavel} alt="" className="absolute right-12 md:right-24 lg:right-32 top-4 md:top-6 w-16 md:w-24 lg:w-28 opacity-80 pointer-events-none" />
          <img src={iconMicrophone} alt="" className="absolute right-0 bottom-0 w-24 md:w-32 lg:w-40 opacity-80 pointer-events-none" />

          <div className="text-center relative z-10 pt-20 md:pt-24 pb-6 px-0">
            <p className="text-base md:text-lg tracking-wide mb-3 opacity-90">Hi, I'm</p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold">
              Dionne<br />Tweneboah
            </h1>
          </div>
        </div>
      </section>

      {/* White gap between Hero and Mission */}
      <div className="h-16 md:h-24 bg-background my-0 mx-0 px-0 py-0"></div>

      {/* Mission Section */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-10 italic">
                I'm on a Mission
              </h2>

              <div className="space-y-6">
                {missionPoints.map((point, index) => <div key={index}>
                    <span className="inline-block px-3 py-1 text-sm md:text-base font-semibold mb-2" style={{
                  background: 'linear-gradient(90deg, hsl(45, 90%, 55%) 0%, hsl(45, 85%, 60%) 100%)',
                  color: 'hsl(var(--primary))',
                  transform: 'skewX(-3deg)'
                }}>
                      {point.title}
                    </span>
                    <p className="text-sm md:text-base leading-relaxed opacity-90 pl-1">
                      {point.description}
                    </p>
                  </div>)}
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <img alt="Dionne Tweneboah" className="w-full max-w-md object-cover rounded-sm" src="/lovable-uploads/421a7918-9d65-4b35-a778-03b3bfa8c4bf.jpg" />
            </div>
          </div>

          <blockquote className="mt-16 text-center max-w-3xl mx-auto">
            <div className="flex items-start justify-center gap-2">
              <span className="text-gold text-4xl md:text-5xl font-heading leading-none">"</span>
              <p className="font-heading text-lg md:text-xl italic leading-relaxed text-cream/90">
                True success isn't about recognition or wealth; it's about the lives you touch and the change you inspire while you're here, and long after you're gone
              </p>
              <span className="text-gold text-4xl md:text-5xl font-heading leading-none self-end">"</span>
            </div>
          </blockquote>
        </div>
      </section>

      {/* Book Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          {/* Top Title */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold italic mb-6 text-[#b74d01]">
              You Were Never Meant for an<br />Ordinary Life.
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Break free from the limits you've learned to live with and step boldly into the
              extraordinary future God designed for you.
            </p>
          </div>

          {/* Book Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Book Info - Left */}
            <div className="space-y-4">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                The Tyranny of The<br />Ordinary
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                The Tyranny of Ordinary is a bold call to break free from mediocrity. It challenges readers to rise above fear, embrace purpose, and live courageously beyond the ordinary
              </p>
              <Button variant="hero" className="mt-4">Get Your Copy</Button>
            </div>

            {/* Book Image - Right */}
            <div className="flex justify-center lg:justify-end">
              <img src={bookTyranny} alt="The Tyranny of The Ordinary Book" className="w-56 md:w-72 lg:w-80 drop-shadow-2xl" />
            </div>
          </div>

          {/* Discover More Button */}
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8">
              Discover more books
            </Button>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Leaving my mark all around the globe!
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            I've touched USA, Europe and Africa wit my presence, I'm coming to your continent next.
          </p>

          {/* Map with Markers */}
          <div className="relative max-w-5xl mx-auto">
            <img src={worldMap} alt="World Map" className="w-full h-auto" />
            
            {/* USA Marker */}
            <div className="absolute left-[18%] top-[42%] flex flex-col items-center">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full border-2 border-primary shadow-lg"></div>
              <span className="mt-1 text-primary font-heading text-sm md:text-lg font-medium">USA</span>
            </div>
            
            {/* Africa Marker */}
            <div className="absolute left-[42%] top-[58%] flex flex-col items-center">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full border-2 border-primary shadow-lg"></div>
              <span className="mt-1 text-primary font-heading text-sm md:text-lg font-medium">Africa</span>
            </div>
            
            {/* Europe Marker */}
            <div className="absolute left-[58%] top-[35%] flex flex-col items-center">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full border-2 border-primary shadow-lg"></div>
              <span className="mt-1 text-primary font-heading text-sm md:text-lg font-medium">Europe</span>
            </div>
          </div>
        </div>
      </section>

      {/* Life in a Nutshell */}
      <section className="bg-background py-0">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center">
            My life in a Nutshell...
          </h2>
        </div>

        {/* Title Bar */}
        <div className="py-4 bg-[#9e846b]">
          <div className="grid grid-cols-6 max-w-full">
            {lifeRoles.map((role, index) => <div key={index} className="text-center">
                <p className="font-heading text-sm md:text-xl lg:text-2xl text-white font-medium">
                  {role.title}
                </p>
              </div>)}
          </div>
        </div>

        {/* Images Strip */}
        <div className="grid grid-cols-6 w-full">
          {lifeRoles.map((role, index) => <div key={index} className="relative group aspect-[3/4] overflow-hidden">
              <img src={role.image} alt={role.title} className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" />
            </div>)}
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>;
};
export default Index;
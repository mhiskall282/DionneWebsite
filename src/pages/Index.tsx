import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import dionneHero from "@/assets/dionne-hero.png";
import dionneAbout from "@/assets/dionne-about.jpg";
import iconScale from "@/assets/icon-scale.png";
import iconGavel from "@/assets/icon-gavel.png";
import iconMicrophone from "@/assets/icon-microphone.png";
import bookTyranny from "@/assets/book-tyranny.jpg";
import speakingHero from "@/assets/speaking-hero.jpg";
import roleLawyer from "@/assets/role-lawyer.jpg";
import roleSpeaker from "@/assets/role-speaker.jpg";
import roleAuthor from "@/assets/role-author.jpg";
import roleHumanitarian from "@/assets/role-humanitarian.jpg";
import roleLeader from "@/assets/role-leader.jpg";
import roleCreator from "@/assets/role-creator.jpg";
import missionImage from "@/assets/mission-image.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Check, Star, Globe, MapPin } from "lucide-react";

const lifeRoles = [
  { title: "Lawyer", image: roleLawyer },
  { title: "Speaker", image: roleSpeaker },
  { title: "Author", image: roleAuthor },
  { title: "Humanitarian", image: roleHumanitarian },
  { title: "Leader", image: roleLeader },
  { title: "Creator", image: roleCreator },
];

const missionPoints = [
  {
    title: "For a Purpose",
    description:
      "Awakening purpose in others — inspiring people to rise above fear and live lives aligned with who they're truly meant to be.",
  },
  {
    title: "For a People",
    description:
      "Empowering women and youth through storytelling, mentorship, and authentic connection reminding them of their worth and potential.",
  },
  {
    title: "The Passion That Drives Me",
    description:
      "Merging creativity, courage, and faith to build projects, platforms, and messages that spark transformation and lasting impact.",
  },
  {
    title: "The Legacy I want to leave on earth",
    description:
      "Creating meaningful work that transcends time, a legacy of purpose, empowerment, and hope for generations to come.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 relative overflow-hidden bg-background">
        {/* Background decorative icons */}
        <img 
          src={iconScale} 
          alt="" 
          className="absolute left-4 md:left-16 top-1/2 -translate-y-1/2 w-32 md:w-48 opacity-20 pointer-events-none"
        />
        <img 
          src={iconGavel} 
          alt="" 
          className="absolute right-8 md:right-24 top-1/3 w-20 md:w-32 opacity-20 pointer-events-none"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col items-center justify-center min-h-[60vh] relative">
            {/* Left text */}
            <div className="absolute left-4 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 max-w-xs z-10">
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Blending law, leadership, and<br />
                mentorship to shape a just and<br />
                purpose-driven world.
              </p>
            </div>

            {/* Center - Hero Image */}
            <div className="relative z-20">
              <img
                src={dionneHero}
                alt="Dionne Tweneboah"
                className="w-72 md:w-96 lg:w-[28rem] object-cover"
              />
            </div>

            {/* Right buttons */}
            <div className="absolute right-4 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 flex gap-3 z-10">
              <Button 
                variant="hero" 
                size="lg"
                className="rounded-full px-6 md:px-8"
              >
                Book Me
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full px-6 md:px-8 border-2 border-foreground"
              >
                About Me
              </Button>
            </div>
          </div>
        </div>

        {/* Name Banner */}
        <div className="bg-primary text-primary-foreground py-10 md:py-14 relative overflow-hidden">
          {/* Decorative icons on burgundy banner */}
          <img 
            src={iconScale} 
            alt="" 
            className="absolute -left-8 md:left-4 bottom-0 w-40 md:w-56 opacity-30 pointer-events-none brightness-0 invert"
          />
          <img 
            src={iconGavel} 
            alt="" 
            className="absolute right-20 md:right-40 top-4 w-16 md:w-24 opacity-30 pointer-events-none brightness-0 invert"
          />
          <img 
            src={iconMicrophone} 
            alt="" 
            className="absolute right-0 md:right-8 bottom-0 w-24 md:w-36 opacity-30 pointer-events-none brightness-0 invert"
          />

          <div className="text-center relative z-10">
            <p className="text-sm md:text-base tracking-widest mb-2 opacity-90 font-heading">Hi, I'm</p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-normal italic">
              Dionne<br />Tweneboah
            </h1>
          </div>
        </div>
      </section>

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
                {missionPoints.map((point, index) => (
                  <div key={index}>
                    <span 
                      className="inline-block px-3 py-1 text-sm md:text-base font-semibold mb-2"
                      style={{
                        background: 'linear-gradient(90deg, hsl(45, 90%, 55%) 0%, hsl(45, 85%, 60%) 100%)',
                        color: 'hsl(var(--primary))',
                        transform: 'skewX(-3deg)',
                      }}
                    >
                      {point.title}
                    </span>
                    <p className="text-sm md:text-base leading-relaxed opacity-90 pl-1">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={missionImage}
                alt="Dionne Tweneboah"
                className="w-full max-w-md object-cover rounded-sm"
              />
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

      {/* Ordinary Life Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">
            You Were Never Meant for an<br />Ordinary Life.
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Break free from the limits you've learned to live with and step boldly into the
            extraordinary future God designed for you.
          </p>
        </div>
      </section>

      {/* Book Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Book Info */}
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                The Tyranny of The Ordinary
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The Tyranny of Ordinary is a bold call to break free from mediocrity. It challenges readers to rise above fear, embrace purpose, and live courageously beyond the ordinary.
              </p>
              <Button variant="hero">Get Your Copy</Button>
            </div>

            {/* Book Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-gold/20 rounded-lg blur-2xl"></div>
                <img
                  src={bookTyranny}
                  alt="The Tyranny of The Ordinary Book"
                  className="relative w-64 md:w-80 rounded-lg shadow-2xl hover-lift"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline">Discover more books</Button>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Leaving my mark all around the globe!
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            I've touched USA, Europe and Africa with my presence, I'm coming to your continent next.
          </p>

          {/* Map Visualization */}
          <div className="relative max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-8 py-12">
              {["USA", "Europe", "Africa"].map((location) => (
                <div key={location} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full mb-3 animate-float">
                    <Star size={20} />
                  </div>
                  <p className="font-heading text-lg font-semibold">{location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Life in a Nutshell */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center">
            My life in a Nutshell...
          </h2>
        </div>

        {/* Title Bar */}
        <div className="bg-[hsl(30,30%,55%)] py-4">
          <div className="grid grid-cols-6 max-w-full">
            {lifeRoles.map((role, index) => (
              <div key={index} className="text-center">
                <p className="font-heading text-sm md:text-xl lg:text-2xl text-white font-medium">
                  {role.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Images Strip */}
        <div className="grid grid-cols-6 w-full">
          {lifeRoles.map((role, index) => (
            <div key={index} className="relative group aspect-[3/4] overflow-hidden">
              <img
                src={role.image}
                alt={role.title}
                className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

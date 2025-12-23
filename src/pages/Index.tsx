import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import dionneHero from "@/assets/dionne-hero.jpg";
import dionneAbout from "@/assets/dionne-about.jpg";
import bookTyranny from "@/assets/book-tyranny.jpg";
import speakingHero from "@/assets/speaking-hero.jpg";
import roleLawyer from "@/assets/role-lawyer.jpg";
import roleSpeaker from "@/assets/role-speaker.jpg";
import roleAuthor from "@/assets/role-author.jpg";
import roleHumanitarian from "@/assets/role-humanitarian.jpg";
import roleLeader from "@/assets/role-leader.jpg";
import roleCreator from "@/assets/role-creator.jpg";
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
    title: "Find Purpose",
    description:
      "Awakening purpose in others — inspiring people to rise above fear and live a life aligned with who they're truly meant to be.",
  },
  {
    title: "Live a Dream",
    description:
      "Empowering women and youth through storytelling, mentoring, and authentic connection to transform their world and potential.",
  },
  {
    title: "The Discover, Heal, Embrace You",
    description:
      "Modeling positivity, courage, and faith to build spaces, platforms, and messages that spark transformation and lasting impact.",
  },
  {
    title: "The Legacy I want to leave is worth",
    description:
      "Creating meaningful work that transcends time, a legacy of purpose, empowerment, and hope for generations to come.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-6 py-12">
              <p className="text-muted-foreground text-sm uppercase tracking-wider">
                Bestselling author, leadership and<br />
                transformational speaker & award
              </p>
              <p className="text-muted-foreground">purpose-driven soul.</p>

              <div className="flex gap-4 pt-4">
                <Button variant="hero" size="lg">
                  Book Me
                </Button>
                <Button variant="outline" size="lg">
                  About Me
                </Button>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
                <img
                  src={dionneHero}
                  alt="Dionne Tweneboah"
                  className="relative w-80 md:w-96 rounded-b-full object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Name Banner */}
          <div className="bg-primary text-primary-foreground py-8 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm uppercase tracking-widest mb-2 opacity-80">Hi, I'm</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold">
              Dionne<br />Tweneboah
            </h1>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
            I'm on a Mission
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {missionPoints.map((point, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 hover-lift"
              >
                <div className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded text-sm font-medium mb-3">
                  {point.title}
                </div>
                <p className="text-sm leading-relaxed opacity-90">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          <blockquote className="mt-12 text-center max-w-3xl mx-auto">
            <p className="font-heading text-xl md:text-2xl italic leading-relaxed">
              "True success isn't about recognition or wealth, it's about the lives you touch and the change you inspire while you're here... and long after you're gone."
            </p>
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
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            My life in a Nutshell...
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 overflow-hidden rounded-lg">
            {lifeRoles.map((role, index) => (
              <div key={index} className="relative group aspect-[4/5] overflow-hidden">
                <img
                  src={role.image}
                  alt={role.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-primary-foreground font-heading text-sm md:text-base font-medium">
                    {role.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
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

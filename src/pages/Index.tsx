import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import dionneHeroImage from "@/assets/dionne-hero.png";
import dionneAboutImage from "@/assets/dionne-about.jpg";
import iconScale from "@/assets/icon-scale.png";
import iconGavel from "@/assets/icon-gavel.png";
import iconMicrophone from "@/assets/icon-microphone.png";
import bookTyranny from "@/assets/book-tyranny.png";
import speakingHeroImage from "@/assets/speaking-hero.png";
import roleLawyerImage from "@/assets/role-lawyer.jpg";
import roleSpeakerImage from "@/assets/role-speaker.jpg";
import roleAuthorImage from "@/assets/role-author.jpg";
import roleHumanitarianImage from "@/assets/role-humanitarian.jpg";
import roleLeaderImage from "@/assets/role-leader.jpg";
import roleCreatorImage from "@/assets/role-creator.jpg";
import missionImageImage from "@/assets/mission-image.jpg";
import GlobeMap from "@/components/GlobeMap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import SEO from "@/components/SEO";
import p1 from '@/assets/For a Purpose.svg';
import p2 from '@/assets/For a People.svg';
import p3 from '@/assets/The Passion That Drives Me.svg';
import p4 from '@/assets/The Legacy I want to leave on earth.svg';

const lifeRoles = [{
  title: "Lawyer",
  image: roleLawyerImage
}, {
  title: "Author",
  image: roleAuthorImage
}, {
  title: "Philanthropist",
  image: roleHumanitarianImage
}, {
  title: "Leader",
  image: roleLeaderImage
}, {
  title: "Speaker",
  image: roleSpeakerImage
}, {
  title: "Creator",
  image: roleCreatorImage
}];


const missionPoints = [
  {
    title: p1,
    description:
      "Awakening purpose in others — inspiring people to rise above fear and live lives aligned with who they're truly meant to be."
  },
  {
    title: p2,
    description:
      "Empowering women and youth through storytelling, mentorship, and authentic connection reminding them of their worth and potential."
  },
  {
    title: p3,
    description:
      "Merging creativity, courage, and faith to build projects, platforms, and messages that spark transformation and lasting impact."
  },
  {
    title: p4,
    description:
      "Creating meaningful work that transcends time, a legacy of purpose, empowerment, and hope for generations to come."
  }
];

const MissionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {missionPoints.map((point, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl md:text-2xl font-heading leading-tight">
                <span className="brush-highlight">
                  <img src={point.title} alt="" className="inline-block" />
                </span>
              </h3>
              <p className="text-gray-600 leading-relaxed pt-2">
                {point.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background">
      <SEO />
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">

        {/* ── DESKTOP (≥1024px): 3-column layout ── */}
        <div className="hidden lg:block relative">
          {/* Three-column row: text | portrait | buttons */}
          <div className="flex items-end justify-center min-h-[420px] xl:min-h-[520px] pt-24 pb-0 gap-0">
            {/* Left: tagline text */}
            <div className="flex-1 flex justify-end items-center pb-16 pr-8 xl:pr-12 z-10" data-aos="fade-right">
              <p className="text-muted-foreground text-lg xl:text-xl font-medium leading-relaxed max-w-xs text-right">
                Blending law, leadership, and mentorship to shape a just and purpose-driven world.
              </p>
            </div>

            {/* Center: Dionne portrait — sits above the red banner */}
            <div className="relative z-20 flex-shrink-0 flex justify-center items-end" data-aos="zoom-in" data-aos-delay="200">
              <img
                alt="Dionne Tweneboah"
                src={dionneHeroImage}
                className="w-[26rem] xl:w-[34rem] object-cover object-top"
                style={{ marginBottom: "-2px" }}
              />
            </div>

            {/* Right: CTA buttons */}
            <div className="flex-1 flex flex-col sm:flex-row justify-start items-center gap-4 pb-16 pl-8 xl:pl-12 z-10" data-aos="fade-left">
              <Button asChild variant="hero" size="lg" className="rounded-full px-8 py-5 text-base xl:text-lg shadow-lg hover:-translate-y-1 transition-transform">
                <Link to="/speaking">Book Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-5 text-base xl:text-lg border-2 border-foreground hover:-translate-y-1 transition-transform">
                <Link to="/about">About Me</Link>
              </Button>
            </div>
          </div>

          {/* Red Name Banner — sits flush under the portrait */}
          <div className="bg-primary text-primary-foreground py-8 xl:py-10 relative overflow-hidden">
            <div className="text-center relative z-40 px-0" data-aos="fade-up" data-aos-delay="300">
              <p className="text-sm md:text-base tracking-widest mb-1 opacity-90 uppercase">Hi, I'm</p>
              <h1 className="font-heading text-5xl xl:text-7xl font-bold">
                Dionne<br />Tweneboah
              </h1>
            </div>
            <img src={iconScale} alt="" className="absolute left-0 bottom-0 w-32 lg:w-40 opacity-80 pointer-events-none" />
            <img src={iconGavel} alt="" className="absolute right-12 top-1/2 -translate-y-1/2 w-24 lg:w-28 opacity-80 pointer-events-none" />
            <img src={iconMicrophone} alt="" className="absolute right-0 bottom-0 w-16 lg:w-20 opacity-80 pointer-events-none" />
          </div>
        </div>

        {/* ── MOBILE / TABLET (<1024px) ── */}
        <div className="lg:hidden flex flex-col items-center pt-24 pb-0 bg-background">
          {/* Text + Buttons */}
          <div className="flex flex-col items-center text-center gap-5 px-6 mb-6" data-aos="fade-up">
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-sm">
              Blending law, leadership, and mentorship to shape a just and purpose-driven world.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <Button asChild variant="hero" size="lg" className="rounded-full px-7">
                <Link to="/speaking">Book Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-7 border-2 border-foreground">
                <Link to="/about">About Me</Link>
              </Button>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative z-20 w-full flex justify-center" data-aos="zoom-in" data-aos-delay="200">
            <img
              alt="Dionne Tweneboah"
              src={dionneHeroImage}
              className="w-56 sm:w-72 md:w-96 object-cover object-top"
              style={{ marginBottom: "-2px" }}
            />
          </div>

          {/* Red Name Banner */}
          <div className="w-full bg-primary text-primary-foreground py-8 relative overflow-hidden">
            <div className="text-center relative z-40 px-4">
              <p className="text-sm tracking-widest mb-1 opacity-90 uppercase">Hi, I'm</p>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold">
                Dionne<br />Tweneboah
              </h1>
            </div>
            <img src={iconScale} alt="" className="absolute left-0 bottom-0 w-20 sm:w-28 opacity-80 pointer-events-none" />
            <img src={iconMicrophone} alt="" className="absolute right-0 bottom-0 w-14 sm:w-20 opacity-80 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* White gap between Hero and Mission */}
      <div className="h-16 md:h-10 my-0 mx-0 px-0 py-0 hidden md:block bg-muted"></div>

      {/* Mission Section */}
      <section className="text-primary-foreground section-padding bg-[#992430]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div data-aos="fade-right" className="flex flex-col h-full justify-between">
              <div>
                <h2 className="font-heading text-3xl md:text-5xl font-bold mb-10 italic">
                  I'm on a Mission
                </h2>

                <div className="space-y-6">
                  {missionPoints.map((point, index) => <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                      <div className="text-base md:text-lg font-semibold mb-2 inline-block">
                        <img src={point.title} alt="" className="inline-block" />
                      </div>
                      <p className="text-sm md:text-base leading-relaxed opacity-90 pl-1">
                        {point.description}
                      </p>
                    </div>)}
                </div>
              </div>

              <blockquote className="mt-10" data-aos="fade-up" data-aos-delay="200">
                <div className="flex items-start gap-2 max-w-md">
                  <span className="text-gold text-4xl md:text-5xl font-heading leading-none">"</span>
                  <p className="font-heading text-base md:text-lg italic leading-relaxed text-cream/90 mt-2">
                    True success isn't about recognition or wealth; it's about the lives you touch and the change you inspire while you're here, and long after you're gone
                  </p>
                  <span className="text-gold text-4xl md:text-5xl font-heading leading-none self-end">"</span>
                </div>
              </blockquote>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end" data-aos="fade-left">
              <img alt="Dionne Tweneboah" className="w-full max-w-md object-cover rounded-sm" src={missionImageImage} />
            </div>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          {/* Top Title */}
          <div className="text-center mb-12" data-aos="fade-up">
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
            <div className="space-y-4" data-aos="fade-right">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                The Tyranny of The<br />Ordinary
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                The Tyranny of Ordinary is a bold call to break free from mediocrity. It challenges readers to rise above fear, embrace purpose, and live courageously beyond the ordinary
              </p>
              <Button asChild variant="hero" className="mt-4">
                <Link to="/books">Get Your Copy</Link>
              </Button>
            </div>

            {/* Book Image - Right */}
            <div className="flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
              <img src={bookTyranny} alt="The Tyranny of The Ordinary Book" className="w-56 md:w-72 lg:w-80 drop-shadow-2xl" />
            </div>
          </div>

          {/* Discover More Button */}
          <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="300">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8">
              <Link to="/books">( Pre-order my next book )</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            Leaving my mark all around the globe!
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
            I've touched USA, Europe and Africa with my presence, I'm coming to your continent next.
          </p>

          {/* Interactive Globe */}
          <div className="relative max-w-5xl mx-auto py-8" data-aos="zoom-in" data-aos-delay="200">
            <GlobeMap />
          </div>
        </div>
      </section>

      {/* Life in a Nutshell */}
      <section className="bg-background py-0">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center" data-aos="fade-up">
            My life in a Nutshell...
          </h2>
        </div>

        {/* Mobile/Tablet: Show title with each image */}
        <div className="block lg:hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 w-full">
            {lifeRoles.map((role, index) => <div key={index} className="relative group" data-aos="fade-up" data-aos-delay={index * 100}>
                {/* Title bar for each image */}
                <div className="py-2 bg-[#9e846b] text-center">
                  <p className="font-heading text-sm sm:text-base text-white font-medium">
                    {role.title}
                  </p>
                </div>
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={role.image} alt={role.title} className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                </div>
              </div>)}
          </div>
        </div>

        {/* Desktop: Original layout with separate title bar */}
        <div className="hidden lg:block">
          {/* Title Bar */}
          <div className="py-4 bg-[#9e846b]">
            <div className="grid grid-cols-6 max-w-full">
              {lifeRoles.map((role, index) => <div key={index} className="text-center" data-aos="fade-down" data-aos-delay={index * 100}>
                  <p className="font-heading text-xl lg:text-2xl text-white font-medium">
                    {role.title}
                  </p>
                </div>)}
            </div>
          </div>

          {/* Images Strip */}
          <div className="grid grid-cols-6 w-full">
            {lifeRoles.map((role, index) => <div key={index} className="relative group aspect-[3/4] overflow-hidden" data-aos="zoom-in" data-aos-delay={index * 100}>
                <img src={role.image} alt={role.title} className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" />
              </div>)}
          </div>
        </div>
      </section>

      <div className="h-16 md:h-10 my-0 mx-0 px-0 py-0 bg-muted"></div>

      {/* Newsletter */}
      <Newsletter />

      <Footer />
    </div>
  );
};
export default Index;
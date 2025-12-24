import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";
import aboutStoryImage from "@/assets/about-story.jpg";
import { Scale, BookOpen, Lightbulb, Users } from "lucide-react";
const roles = [{
  icon: Scale,
  title: "Lawyer",
  description: "Dionne Akom Tweneboah is an attorney-at-law committed to driving diplomatic change and delivering justice with integrity and compassion."
}, {
  icon: BookOpen,
  title: "Author",
  description: "As an author, Dionne uses her voice to inspire growth, clarity, and purpose in others."
}, {
  icon: Lightbulb,
  title: "Entrepreneur",
  description: "Dionne is a visionary entrepreneur building impactful solutions shaped by her Kumasi-rooted drive and innovation."
}, {
  icon: Users,
  title: "Coach",
  description: "As a coach, Dionne empowers, individuals especially women and youth, to unlock confidence, direction, and their full potential."
}];
const About = () => {
  return <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold italic mb-10 animate-fade-up">
            Hi, I'm Dionne
          </h1>

          <div className="max-w-xs md:max-w-sm mx-auto ">
            <img src={aboutHero} alt="Dionne Tweneboah" className="w-full h-full shadow-2xl" />
          </div>

          <div className="max-w-2xl mx-auto space-y-4 py-[2px] my-[20px]">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-burgundy my-0 py-[5px]">
              Bestselling author,<br />
              transformational speaker,<br />
              and mindset coach,
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mx-auto py-0 my-0">
              I'm passionate about helping women break free from limitations and live with bold purpose. I believe you weren't
              created to blend in or settle for survival mode, you were born to lead, to flourish, and to walk unapologetically in your
              calling.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section - Dark Background */}
      <section className="py-16 md:py-24 px-4 bg-neutral-700">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="flex justify-center lg:justify-start">
              <img alt="Dionne's Journey" className="w-full max-w-sm rounded-lg shadow-xl" src={aboutStoryImage} />
            </div>

            <div className="space-y-4 text-cream">
              <p className="text-lg md:text-xl leading-relaxed italic">
                <span className="font-semibold not-italic">My journey hasn't always been glamorous.</span> Like many women, I've
                battled fear, self-doubt, and the pressure to shrink.
              </p>
              <p className="text-lg md:text-xl leading-relaxed font-semibold">
                But I chose to do the inner work, embrace my divine identity, and rise,
                and now, I help women across the globe do the same.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Through my books, speaking engagements, digital content, and
                mentorship, I empower women to conquer the ordinary and step into a
                life of clarity, power, and fulfillment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 md:py-16 px-4 bg-muted">
        <div className="container mx-auto text-center max-w-3xl">
          <p className="text-base md:text-lg leading-relaxed mb-6 italic text-muted-foreground">
            Whether you're rediscovering your voice, launching a new dream,
            or learning to heal while you rise, my work is here to remind you
            that purpose is not a luxury, it's your birthright.
          </p>
          <p className="font-heading text-xl md:text-2xl font-semibold text-[#992430]">
            Welcome to a space where purpose meets power.
          </p>
        </div>
      </section>

      {/* Roles Title Section */}
      <section className="py-8 px-4 bg-background border-b-2 border-white">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
            {["Lawyer", "Author", "Entrepreneur", "Coach"].map((role, index) => <div key={role} className="flex items-center gap-4 md:gap-8">
                <span className="font-heading text-2xl md:text-4xl font-semibold">{role}</span>
                {index < 3 && <div className="h-8 md:h-12 w-[3px] bg-[#ffdd00]"></div>}
              </div>)}
          </div>
        </div>
      </section>

      {/* Roles Cards Section */}
      <section className="py-12 md:py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {roles.map(role => <div key={role.title} className="text-cream rounded-2xl p-6 text-center bg-[#7b1e23]">
                <div className="flex justify-center mb-4">
                  <role.icon className="w-10 h-10 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg font-semibold mb-3 text-gold">
                  {role.title}
                </h3>
                <p className="text-sm leading-relaxed text-cream/90">
                  {role.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;
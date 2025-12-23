import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoleTabs from "@/components/RoleTabs";
import dionneHero from "@/assets/dionne-hero.jpg";
import dionneAbout from "@/assets/dionne-about.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-16 section-padding">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 animate-fade-up">
            Hi, I'm Dionne
          </h1>

          <div className="max-w-sm mx-auto mb-8">
            <img
              src={dionneHero}
              alt="Dionne Tweneboah"
              className="w-full rounded-b-full shadow-2xl"
            />
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold">
              Bestselling author,<br />
              transformational speaker,<br />
              and mindset coach,
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about helping women break free from limitations and live with bold purpose. I believe you weren't
              created to blend in or settle for survival mode, you were born to lead, to flourish, and to walk unapologetically in your
              calling.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="bg-muted section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-lg blur-2xl"></div>
              <img
                src={dionneAbout}
                alt="Dionne's Journey"
                className="relative w-full max-w-md mx-auto rounded-lg shadow-xl"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                <strong>My journey hasn't always been glamorous.</strong> Like many women, I've
                battled fear, self-doubt, and the pressure to shrink.
              </p>
              <p className="text-lg leading-relaxed">
                But I chose to do the inner work, embrace my divine identity, and rise,
                and now, I help women across the globe do the same.
              </p>
              <p className="text-lg leading-relaxed">
                Through my books, speaking engagements, digital content, and
                mentorship, I empower women to conquer the ordinary and step into a
                life of clarity, power, and fulfillment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center max-w-3xl">
          <p className="text-lg leading-relaxed mb-6">
            Whether you're rediscovering your voice, launching a new dream,
            or learning to heal while you rise, my work is here to remind you
            that purpose is not a luxury, it's your birthright.
          </p>
          <p className="text-primary font-heading text-xl font-semibold">
            Welcome to a space where purpose meets power.
          </p>
        </div>
      </section>

      {/* Roles Section */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            My Purpose, My Work, My World
          </h2>
          <div className="max-w-3xl mx-auto">
            <RoleTabs />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

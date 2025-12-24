import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import newsImage from "@/assets/news-image.jpg";
const Newsletter = () => {
  return (
    <section className="grid lg:grid-cols-12 min-h-[600px] w-full overflow-hidden bg-white">
      {/* Left Column: Image with Text Overlay (Occupies 7/12 of the space) */}
      <div className="relative h-[500px] lg:h-full lg:col-span-7">
        <img 
          alt="Dionne Tweneboah" 
          src={newsImage} 
          className="absolute inset-0 w-full h-full object-cover object-center" 
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Top Left Name */}
        <div className="absolute top-8 left-8">
          <p className="font-heading text-xl md:text-2xl text-white font-medium">
            Dionne Tweneboah
          </p>
        </div>

        {/* Bottom Text Overlay */}
        <div className="absolute bottom-12 left-8 right-12 space-y-4">
          <h3 className="text-white text-3xl md:text-5xl font-serif font-bold leading-tight">
            It's Your Time to Shine
          </h3>
          <p className="text-white/90 text-lg md:text-xl max-w-xl leading-relaxed">
            Join my newsletter for honest conversations on growth, purpose, and becoming your best self. Every message is crafted to inspire you to rise above ordinary and step boldly into your calling.
          </p>
        </div>
      </div>

      {/* Right Column: Form Section (Occupies 5/12 of the space) */}
      <div className="flex items-center justify-center px-8 py-16 lg:px-12 lg:col-span-5">
        <div className="w-full max-w-sm space-y-8">
          <div className="space-y-4">
            <h2 className="text-[#992430] text-4xl md:text-5xl font-serif font-bold leading-tight">
              Sign up to my weekly newsletter
            </h2>
            <p className="text-gray-500 text-lg">
              Don't miss your chance. Sign Up today!
            </p>
          </div>
          
          <div className="space-y-6">
            <Input 
              type="email" 
              placeholder="Your email" 
              className="h-14 rounded-2xl border-gray-300 px-6 text-lg placeholder:text-gray-400" 
            />
            
            {/* Decorative divider with dot */}
            <div className="flex items-center gap-4 py-2">
              <div className="flex-1 h-[1px] bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-500"></div>
              <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>
            
            <Button 
              className="w-full h-14 text-lg font-bold bg-[#992430] hover:bg-[#7a1d26] text-white rounded-2xl transition-all"
            >
              Sign me Up!
            </Button>
            
            <p className="text-sm text-gray-400 text-center">
              No spam, just real talk in your inbox.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
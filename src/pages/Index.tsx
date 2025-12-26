// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import dionneHeroImage from "@/assets/dionne-hero.png";
// import dionneAboutImage from "@/assets/dionne-about.jpg";
// import iconScale from "@/assets/icon-scale.png";
// import iconGavel from "@/assets/icon-gavel.png";
// import iconMicrophone from "@/assets/icon-microphone.png";
// import bookTyranny from "@/assets/book-tyranny.png";
// import speakingHeroImage from "@/assets/speaking-hero.png";
// import roleLawyerImage from "@/assets/role-lawyer.jpg";
// import roleSpeakerImage from "@/assets/role-speaker.jpg";
// import roleAuthorImage from "@/assets/role-author.jpg";
// import roleHumanitarianImage from "@/assets/role-humanitarian.jpg";
// import roleLeaderImage from "@/assets/role-leader.jpg";
// import roleCreatorImage from "@/assets/role-creator.jpg";
// import missionImageImage from "@/assets/mission-image.jpg";
// import worldMap from "@/assets/world-map.png";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Newsletter from "@/components/Newsletter"
// import p1 from '@/assets/For a Purpose.svg';
// import p2 from '@/assets/For a People.svg';
// import p3 from '@/assets/The Passion That Drives Me.svg';
// import p4 from '@/assets/The Legacy I want to leave on earth.svg';

// const lifeRoles = [{
//   title: "Lawyer",
//   image: roleLawyerImage
// }, {
//   title: "Speaker",
//   image: roleSpeakerImage
// }, {
//   title: "Author",
//   image: roleAuthorImage
// }, {
//   title: "Humanitarian",
//   image: roleHumanitarianImage
// }, {
//   title: "Leader",
//   image: roleLeaderImage
// }, {
//   title: "Creator",
//   image: roleCreatorImage
// }];


// const missionPoints = [
//   {
//     title: p1,
//     description:
//       "Awakening purpose in others — inspiring people to rise above fear and live lives aligned with who they're truly meant to be."
//   },
//   {
//     title: p2,
//     description:
//       "Empowering women and youth through storytelling, mentorship, and authentic connection reminding them of their worth and potential."
//   },
//   {
//     title: p3,
//     description:
//       "Merging creativity, courage, and faith to build projects, platforms, and messages that spark transformation and lasting impact."
//   },
//   {
//     title: p4,
//     description:
//       "Creating meaningful work that transcends time, a legacy of purpose, empowerment, and hope for generations to come."
//   }
// ];

// const MissionSection = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">

//         <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
//           {missionPoints.map((point, index) => (
//             <div key={index} className="space-y-4">
//               <h3 className="text-xl md:text-2xl font-heading leading-tight">
//                 <span className="brush-highlight">
//                   <img src={point.title} alt="" className="inline-block" />
//                 </span>
//               </h3>
//               <p className="text-gray-600 leading-relaxed pt-2">
//                 {point.description}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };


// const Index = () => {
//   return <div className="min-h-screen bg-background">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="pt-16 md:pt-20 relative overflow-hidden bg-background">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
//           {/* Mobile / Small screens layout */}
//           <div className="flex md:hidden items-end justify-between gap-4 sm:gap-8 pb-24 max-w-3xl mx-auto">
//             {/* Left: text + image, with image sitting on the red section */}
//             <div className="flex flex-col items-center sm:items-start gap-4">
//               <p className="text-muted-foreground text-sm text-center sm:text-left leading-relaxed px-2" data-aos="fade-right">
//                 Blending law, leadership, and mentorship to shape a just and purpose-driven world.
//               </p>
//               <div className="relative z-30 -top-4" data-aos="zoom-in" data-aos-delay="200">
//                 <img
//                   alt="Dionne Tweneboah"
//                   className="w-40 sm:w-48 object-cover"
//                   src={dionneHeroImage}
//                 />
//               </div>
//             </div>

//             {/* Right: buttons */}
//             <div className="flex flex-col gap-3 z-10 mb-6 sm:mb-10" data-aos="fade-left" data-aos-delay="300">
//               <Button asChild variant="hero" size="default" className="rounded-full px-5 whitespace-nowrap">
//                 <Link to="/speaking">Book Me</Link>
//               </Button>
//               <Button
//                 asChild
//                 variant="outline"
//                 size="default"
//                 className="rounded-full px-5 border-2 border-foreground whitespace-nowrap"
//               >
//                 <Link to="/about">About Me</Link>
//               </Button>
//             </div>
//           </div>

//           {/* Desktop Layout */}
//           <div className="hidden md:flex flex-col min-h-[80vh] relative pb-32 md:pb-50 items-center justify-end">
//             {/* Left text */}
//             <div className="absolute left-4 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 max-w-xs z-10" data-aos="fade-right">
//               <p className="text-muted-foreground text-base md:text-lg leading-relaxed">

//                 Blending law, leadership, and<br />
//                 mentorship to shape a just and<br />
//                 purpose-driven world.
//               </p>
//             </div>

//             {/* Center - Hero Image */}
//           <div className="relative z-20" data-aos="zoom-in" data-aos-delay="200"> {/* Lower than z-40, so text covers it */}
//           <img alt="Dionne Tweneboah" src={dionneHeroImage} className="w-84 md:w-80 lg:w-96 object-cover" />
//           </div>

//             {/* Right buttons */}
//             <div className="absolute right-4 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 flex gap-3 z-10" data-aos="fade-left" data-aos-delay="300">
//               <Button asChild variant="hero" size="lg" className="rounded-full px-6 md:px-8">
//                 <Link to="/speaking">Book Me</Link>
//               </Button>
//               <Button asChild variant="outline" size="lg" className="rounded-full px-6 md:px-8 border-2 border-foreground">
//                 <Link to="/about">About Me</Link>
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Name Banner - overlaps the hero image */}
//         <div className="bg-primary text-primary-foreground py-8 relative overflow-hidden -mt-28 sm:-mt-32 md:-mt-32 md:py-0 ">
//           <div className="text-center relative z-40 pt-4 md:pt-6 pb-4 px-0" data-aos="fade-up" data-aos-delay="400">
//             <p className="text-sm md:text-lg tracking-wide mb-2 opacity-90">Hi, I'm</p>
//             <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold">
//               Dionne<br />Tweneboah
//             </h1>
//           </div>
          
//           {/* Decorative icons - positioned below text */}
//           <img src={iconScale} alt="" className="absolute left-0 bottom-0 w-20 md:w-32 lg:w-40 opacity-80 pointer-events-none" data-aos="fade-right" data-aos-delay="500" />
//           <img src={iconGavel} alt="" className="absolute right-0 top-1/2 -translate-y-1/2 w-16 md:w-24 lg:w-28 opacity-80 pointer-events-none" data-aos="zoom-in" data-aos-delay="600" />
//           <img src={iconMicrophone} alt="" className="absolute right-0 bottom-0 w-14 md:w-20 lg:w-16 opacity-80 pointer-events-none" data-aos="fade-left" data-aos-delay="700" />
//         </div>
//       </section>

//       {/* White gap between Hero and Mission */}
//       <div className="h-16 md:h-10 my-0 mx-0 px-0 py-0 bg-muted"></div>

//       {/* Mission Section */}
//       <section className="text-primary-foreground section-padding bg-[#992430]">
//         <div className="container mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-start">
//             {/* Left Content */}
//             <div data-aos="fade-right">
//               <h2 className="font-heading text-3xl md:text-5xl font-bold mb-10 italic">
//                 I'm on a Mission
//               </h2>

//               <div className="space-y-6">
//                 {missionPoints.map((point, index) => <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
//                     <div className="text-base md:text-lg font-semibold mb-2 inline-block">
//                       <img src={point.title} alt="" className="inline-block" />
//                     </div>
//                     <p className="text-sm md:text-base leading-relaxed opacity-90 pl-1">
//                       {point.description}
//                     </p>
//                   </div>)}
//               </div>
//             </div>

//             {/* Right Image */}
//             <div className="flex justify-center lg:justify-end" data-aos="fade-left">
//               <img alt="Dionne Tweneboah" className="w-full max-w-md object-cover rounded-sm" src={missionImageImage} />
//             </div>
//           </div>

//           <blockquote className="mt-16 text-center max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
//             <div className="flex items-start justify-center gap-2">
//               <span className="text-gold text-4xl md:text-5xl font-heading leading-none">"</span>
//               <p className="font-heading text-lg md:text-xl italic leading-relaxed text-cream/90">
//                 True success isn't about recognition or wealth; it's about the lives you touch and the change you inspire while you're here, and long after you're gone
//               </p>
//               <span className="text-gold text-4xl md:text-5xl font-heading leading-none self-end">"</span>
//             </div>
//           </blockquote>
//         </div>
//       </section>

//       {/* Book Section */}
//       <section className="section-padding bg-background">
//         <div className="container mx-auto">
//           {/* Top Title */}
//           <div className="text-center mb-12" data-aos="fade-up">
//             <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold italic mb-6 text-[#b74d01]">
//               You Were Never Meant for an<br />Ordinary Life.
//             </h2>
//             <p className="max-w-2xl mx-auto text-muted-foreground">
//               Break free from the limits you've learned to live with and step boldly into the
//               extraordinary future God designed for you.
//             </p>
//           </div>

//           {/* Book Content */}
//           <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
//             {/* Book Info - Left */}
//             <div className="space-y-4" data-aos="fade-right">
//               <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
//                 The Tyranny of The<br />Ordinary
//               </h3>
//               <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
//                 The Tyranny of Ordinary is a bold call to break free from mediocrity. It challenges readers to rise above fear, embrace purpose, and live courageously beyond the ordinary
//               </p>
//               <Button asChild variant="hero" className="mt-4">
//                 <Link to="/books">Get Your Copy</Link>
//               </Button>
//             </div>

//             {/* Book Image - Right */}
//             <div className="flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="200">
//               <img src={bookTyranny} alt="The Tyranny of The Ordinary Book" className="w-56 md:w-72 lg:w-80 drop-shadow-2xl" />
//             </div>
//           </div>

//           {/* Discover More Button */}
//           <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="300">
//             <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8">
//               <Link to="/books">Discover more books</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Global Reach Section */}
//       <section className="section-padding bg-background">
//         <div className="container mx-auto text-center">
//           <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
//             Leaving my mark all around the globe!
//           </h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
//             I've touched USA, Europe and Africa with my presence, I'm coming to your continent next.
//           </p>

//           {/* Map with Markers */}
//           <div className="relative max-w-5xl mx-auto" data-aos="zoom-in" data-aos-delay="200">
//             <img src={worldMap} alt="World Map" className="w-full h-auto" />
            
//             {/* USA Marker */}
//             <div className="absolute left-[18%] top-[42%] flex flex-col items-center" data-aos="zoom-in" data-aos-delay="400">
//               <div className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full border-2 border-primary shadow-lg"></div>
//               <span className="mt-1 text-primary font-heading text-sm md:text-lg font-medium">USA</span>
//             </div>
            
//             {/* Africa Marker */}
//             <div className="absolute left-[42%] top-[58%] flex flex-col items-center" data-aos="zoom-in" data-aos-delay="500">
//               <div className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full border-2 border-primary shadow-lg"></div>
//               <span className="mt-1 text-primary font-heading text-sm md:text-lg font-medium">Africa</span>
//             </div>
            
//             {/* Europe Marker */}
//             <div className="absolute left-[58%] top-[35%] flex flex-col items-center" data-aos="zoom-in" data-aos-delay="600">
//               <div className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full border-2 border-primary shadow-lg"></div>
//               <span className="mt-1 text-primary font-heading text-sm md:text-lg font-medium">Europe</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Life in a Nutshell */}
//       <section className="bg-background py-0">
//         <div className="container mx-auto px-4 mb-8">
//           <h2 className="font-heading text-3xl md:text-4xl font-bold text-center" data-aos="fade-up">
//             My life in a Nutshell...
//           </h2>
//         </div>

//         {/* Mobile/Tablet: Show title with each image */}
//         <div className="block lg:hidden">
//           <div className="grid grid-cols-2 sm:grid-cols-3 w-full">
//             {lifeRoles.map((role, index) => <div key={index} className="relative group" data-aos="fade-up" data-aos-delay={index * 100}>
//                 {/* Title bar for each image */}
//                 <div className="py-2 bg-[#9e846b] text-center">
//                   <p className="font-heading text-sm sm:text-base text-white font-medium">
//                     {role.title}
//                   </p>
//                 </div>
//                 {/* Image */}
//                 <div className="aspect-[3/4] overflow-hidden">
//                   <img src={role.image} alt={role.title} className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" />
//                 </div>
//               </div>)}
//           </div>
//         </div>

//         {/* Desktop: Original layout with separate title bar */}
//         <div className="hidden lg:block">
//           {/* Title Bar */}
//           <div className="py-4 bg-[#9e846b]">
//             <div className="grid grid-cols-6 max-w-full">
//               {lifeRoles.map((role, index) => <div key={index} className="text-center" data-aos="fade-down" data-aos-delay={index * 100}>
//                   <p className="font-heading text-xl lg:text-2xl text-white font-medium">
//                     {role.title}
//                   </p>
//                 </div>)}
//             </div>
//           </div>

//           {/* Images Strip */}
//           <div className="grid grid-cols-6 w-full">
//             {lifeRoles.map((role, index) => <div key={index} className="relative group aspect-[3/4] overflow-hidden" data-aos="zoom-in" data-aos-delay={index * 100}>
//                 <img src={role.image} alt={role.title} className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" />
//               </div>)}
//           </div>
//         </div>
//       </section>

//       <div className="h-16 md:h-10 my-0 mx-0 px-0 py-0 bg-muted"></div>

//       {/* Newsletter */}
//       <Newsletter />

//       {/* Footer */}
//       <Footer />
//     </div>;
// };
// export default Index;


// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import dionneHeroImage from "@/assets/dionne-hero.png";
// import dionneAboutImage from "@/assets/dionne-about.jpg";
// import iconScale from "@/assets/icon-scale.png";
// import iconGavel from "@/assets/icon-gavel.png";
// import iconMicrophone from "@/assets/icon-microphone.png";
// import bookTyranny from "@/assets/book-tyranny.png";
// import speakingHeroImage from "@/assets/speaking-hero.png";
// import roleLawyerImage from "@/assets/role-lawyer.jpg";
// import roleSpeakerImage from "@/assets/role-speaker.jpg";
// import roleAuthorImage from "@/assets/role-author.jpg";
// import roleHumanitarianImage from "@/assets/role-humanitarian.jpg";
// import roleLeaderImage from "@/assets/role-leader.jpg";
// import roleCreatorImage from "@/assets/role-creator.jpg";
// import missionImageImage from "@/assets/mission-image.jpg";
// import worldMap from "@/assets/world-map.png";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Newsletter from "@/components/Newsletter";
// import p1 from "@/assets/For a Purpose.svg";
// import p2 from "@/assets/For a People.svg";
// import p3 from "@/assets/The Passion That Drives Me.svg";
// import p4 from "@/assets/The Legacy I want to leave on earth.svg";

// const lifeRoles = [
//   { title: "Lawyer", image: roleLawyerImage },
//   { title: "Speaker", image: roleSpeakerImage },
//   { title: "Author", image: roleAuthorImage },
//   { title: "Humanitarian", image: roleHumanitarianImage },
//   { title: "Leader", image: roleLeaderImage },
//   { title: "Creator", image: roleCreatorImage },
// ];

// const missionPoints = [
//   {
//     title: p1,
//     description:
//       "Awakening purpose in others — inspiring people to rise above fear and live lives aligned with who they're truly meant to be.",
//   },
//   {
//     title: p2,
//     description:
//       "Empowering women and youth through storytelling, mentorship, and authentic connection reminding them of their worth and potential.",
//   },
//   {
//     title: p3,
//     description:
//       "Merging creativity, courage, and faith to build projects, platforms, and messages that spark transformation and lasting impact.",
//   },
//   {
//     title: p4,
//     description:
//       "Creating meaningful work that transcends time, a legacy of purpose, empowerment, and hope for generations to come.",
//   },
// ];

// const MissionSection = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
//           {missionPoints.map((point, index) => (
//             <div key={index} className="space-y-4">
//               <h3 className="text-xl md:text-2xl font-heading leading-tight">
//                 <span className="brush-highlight">
//                   <img src={point.title} alt="" className="inline-block" />
//                 </span>
//               </h3>
//               <p className="text-gray-600 leading-relaxed pt-2">
//                 {point.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const Index = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="bg-background relative overflow-hidden">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Desktop layout */}
//           <div className="hidden md:flex items-center justify-between min-h-[70vh] lg:min-h-[80vh] pt-16 lg:pt-20">
//             {/* Left text */}
//             <div className="max-w-sm" data-aos="fade-right">
//               <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
//                 Blending law, leadership, and
//                 <br />
//                 mentorship to shape a just and
//                 <br />
//                 purpose-driven world.
//               </p>
//             </div>

//             {/* Center image */}
//             <div
//               className="flex-1 flex justify-center"
//               data-aos="zoom-in"
//               data-aos-delay="150"
//             >
//               <div className="w-[380px] md:w-[440px] lg:w-[520px] aspect-[805/986]">
//                 <img
//                   src={dionneHeroImage}
//                   alt="Dionne Tweneboah"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             </div>

//             {/* Right buttons */}
//             <div
//               className="flex flex-col gap-4"
//               data-aos="fade-left"
//               data-aos-delay="250"
//             >
//               <Button
//                 asChild
//                 variant="hero"
//                 size="lg"
//                 className="rounded-full px-8"
//               >
//                 <Link to="/speaking">Book Me</Link>
//               </Button>
//               <Button
//                 asChild
//                 variant="outline"
//                 size="lg"
//                 className="rounded-full px-8 border-2 border-foreground"
//               >
//                 <Link to="/about">About Me</Link>
//               </Button>
//             </div>
//           </div>

//           {/* Mobile layout */}
//           <div className="md:hidden flex flex-col items-center gap-6 pt-12 pb-16">
//             <p className="text-muted-foreground text-base leading-relaxed text-center">
//               Blending law, leadership, and mentorship to shape a just and
//               purpose-driven world.
//             </p>

//             <img
//               src={dionneHeroImage}
//               alt="Dionne Tweneboah"
//               className="w-44 sm:w-52 object-cover"
//             />

//             <div className="flex gap-3">
//               <Button
//                 asChild
//                 variant="hero"
//                 size="default"
//                 className="rounded-full px-6"
//               >
//                 <Link to="/speaking">Book Me</Link>
//               </Button>
//               <Button
//                 asChild
//                 variant="outline"
//                 size="default"
//                 className="rounded-full px-6 border-2 border-foreground"
//               >
//                 <Link to="/about">About Me</Link>
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Name banner */}
//         <div className="bg-primary text-primary-foreground mt-6 md:mt-0 py-8 md:py-10 relative overflow-hidden">
//           <div className="text-center relative z-40 pt-2 md:pt-4 pb-4 px-0">
//             <p className="text-sm md:text-lg tracking-wide mb-2 opacity-90">
//               Hi, I'm
//             </p>
//             <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold">
//               Dionne
//               <br />
//               Tweneboah
//             </h1>
//           </div>

//           {/* Decorative icons */}
//           <img
//             src={iconScale}
//             alt=""
//             className="absolute left-0 bottom-0 w-20 md:w-32 lg:w-40 opacity-80 pointer-events-none"
//           />
//           <img
//             src={iconGavel}
//             alt=""
//             className="absolute right-0 top-1/2 -translate-y-1/2 w-16 md:w-24 lg:w-28 opacity-80 pointer-events-none"
//           />
//           <img
//             src={iconMicrophone}
//             alt=""
//             className="absolute right-0 bottom-0 w-14 md:w-20 lg:w-16 opacity-80 pointer-events-none"
//           />
//         </div>
//       </section>

//       {/* White gap between Hero and Mission */}
//       <div className="h-16 md:h-10 my-0 mx-0 px-0 py-0 bg-muted"></div>

//       {/* Mission Section */}
//       <section className="text-primary-foreground section-padding bg-[#992430]">
//         <div className="container mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-start">
//             {/* Left Content */}
//             <div data-aos="fade-right">
//               <h2 className="font-heading text-3xl md:text-5xl font-bold mb-10 italic">
//                 I'm on a Mission
//               </h2>

//               <div className="space-y-6">
//                 {missionPoints.map((point, index) => (
//                   <div
//                     key={index}
//                     data-aos="fade-up"
//                     data-aos-delay={index * 100}
//                   >
//                     <div className="text-base md:text-lg font-semibold mb-2 inline-block">
//                       <img src={point.title} alt="" className="inline-block" />
//                     </div>
//                     <p className="text-sm md:text-base leading-relaxed opacity-90 pl-1">
//                       {point.description}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Image */}
//             <div
//               className="flex justify-center lg:justify-end"
//               data-aos="fade-left"
//             >
//               <img
//                 alt="Dionne Tweneboah"
//                 className="w-full max-w-md object-cover rounded-sm"
//                 src={missionImageImage}
//               />
//             </div>
//           </div>

//           <blockquote
//             className="mt-16 text-center max-w-3xl mx-auto"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <div className="flex items-start justify-center gap-2">
//               <span className="text-gold text-4xl md:text-5xl font-heading leading-none">
//                 "
//               </span>
//               <p className="font-heading text-lg md:text-xl italic leading-relaxed text-cream/90">
//                 True success isn't about recognition or wealth; it's about the
//                 lives you touch and the change you inspire while you're here,
//                 and long after you're gone
//               </p>
//               <span className="text-gold text-4xl md:text-5xl font-heading leading-none self-end">
//                 "
//               </span>
//             </div>
//           </blockquote>
//         </div>
//       </section>

//       {/* Book Section */}
//       <section className="section-padding bg-background">
//         <div className="container mx-auto">
//           {/* Top Title */}
//           <div className="text-center mb-12" data-aos="fade-up">
//             <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold italic mb-6 text-[#b74d01]">
//               You Were Never Meant for an
//               <br />
//               Ordinary Life.
//             </h2>
//             <p className="max-w-2xl mx-auto text-muted-foreground">
//               Break free from the limits you've learned to live with and step
//               boldly into the extraordinary future God designed for you.
//             </p>
//           </div>

//           {/* Book Content */}
//           <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
//             {/* Book Info - Left */}
//             <div className="space-y-4" data-aos="fade-right">
//               <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
//                 The Tyranny of The
//                 <br />
//                 Ordinary
//               </h3>
//               <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
//                 The Tyranny of Ordinary is a bold call to break free from
//                 mediocrity. It challenges readers to rise above fear, embrace
//                 purpose, and live courageously beyond the ordinary
//               </p>
//               <Button asChild variant="hero" className="mt-4">
//                 <Link to="/books">Get Your Copy</Link>
//               </Button>
//             </div>

//             {/* Book Image - Right */}
//             <div
//               className="flex justify-center lg:justify-end"
//               data-aos="fade-left"
//               data-aos-delay="200"
//             >
//               <img
//                 src={bookTyranny}
//                 alt="The Tyranny of The Ordinary Book"
//                 className="w-56 md:w-72 lg:w-80 drop-shadow-2xl"
//               />
//             </div>
//           </div>

//           {/* Discover More Button */}
//           <div
//             className="mt-12 text-center"
//             data-aos="fade-up"
//             data-aos-delay="300"
//           >
//             <Button
//               asChild
//               variant="outline"
//               className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8"
//             >
//               <Link to="/books">Discover more books</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Global Reach Section */}
//       <section className="section-padding bg-background">
//         <div className="container mx-auto text-center">
//           <h2
//             className="font-heading text-3xl md:text-4xl font-bold mb-4"
//             data-aos="fade-up"
//           >
//             Leaving my mark all around the globe!
//           </h2>
//           <p
//             className="text-muted-foreground max-w-2xl mx-auto mb-8"
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             I've touched USA, Europe and Africa with my presence, I'm coming to
//             your continent next.
//           </p>

//           {/* Map with Markers */}
//           <div
//             className="relative max-w-5xl mx-auto"
//             data-aos="zoom-in"
//             data-aos-delay="200"
//           >
//             <img src={worldMap} alt="World Map" className="w-full h-auto" />

//             {/* USA Marker */}
//             <div
//               className="absolute left-[18%] top-[42%] flex flex-col items-center"
//               data-aos="zoom-in"
//               data-aos-delay="400"
//             >
//               <div className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full border-2 border-primary shadow-lg" />
//               <span className="mt-1 text-primary font-heading text-sm md:text-lg font-medium">
//                 USA
//               </span>
//             </div>

//             {/* Africa Marker */}
//             <div
//               className="absolute left-[42%] top-[58%] flex flex-col items-center"
//               data-aos="zoom-in"
//               data-aos-delay="500"
//             >
//               <div className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full border-2 border-primary shadow-lg" />
//               <span className="mt-1 text-primary font-heading text-sm md:text-lg font-medium">
//                 Africa
//               </span>
//             </div>

//             {/* Europe Marker */}
//             <div
//               className="absolute left-[58%] top-[35%] flex flex-col items-center"
//               data-aos="zoom-in"
//               data-aos-delay="600"
//             >
//               <div className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full border-2 border-primary shadow-lg" />
//               <span className="mt-1 text-primary font-heading text-sm md:text-lg font-medium">
//                 Europe
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Life in a Nutshell */}
//       <section className="bg-background py-0">
//         <div className="container mx-auto px-4 mb-8">
//           <h2
//             className="font-heading text-3xl md:text-4xl font-bold text-center"
//             data-aos="fade-up"
//           >
//             My life in a Nutshell...
//           </h2>
//         </div>

//         {/* Mobile/Tablet: Show title with each image */}
//         <div className="block lg:hidden">
//           <div className="grid grid-cols-2 sm:grid-cols-3 w-full">
//             {lifeRoles.map((role, index) => (
//               <div
//                 key={index}
//                 className="relative group"
//                 data-aos="fade-up"
//                 data-aos-delay={index * 100}
//               >
//                 <div className="py-2 bg-[#9e846b] text-center">
//                   <p className="font-heading text-sm sm:text-base text-white font-medium">
//                     {role.title}
//                   </p>
//                 </div>
//                 <div className="aspect-[3/4] overflow-hidden">
//                   <img
//                     src={role.image}
//                     alt={role.title}
//                     className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Desktop: Original layout with separate title bar */}
//         <div className="hidden lg:block">
//           <div className="py-4 bg-[#9e846b]">
//             <div className="grid grid-cols-6 max-w-full">
//               {lifeRoles.map((role, index) => (
//                 <div
//                   key={index}
//                   className="text-center"
//                   data-aos="fade-down"
//                   data-aos-delay={index * 100}
//                 >
//                   <p className="font-heading text-xl lg:text-2xl text-white font-medium">
//                     {role.title}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="grid grid-cols-6 w-full">
//             {lifeRoles.map((role, index) => (
//               <div
//                 key={index}
//                 className="relative group aspect-[3/4] overflow-hidden"
//                 data-aos="zoom-in"
//                 data-aos-delay={index * 100}
//               >
//                 <img
//                   src={role.image}
//                   alt={role.title}
//                   className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <div className="h-16 md:h-10 my-0 mx-0 px-0 py-0 bg-muted"></div>

//       {/* Newsletter */}
//       <Newsletter />

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default Index;



import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

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
import worldMap from "@/assets/world-map.png";

import p1 from "@/assets/For a Purpose.svg";
import p2 from "@/assets/For a People.svg";
import p3 from "@/assets/The Passion That Drives Me.svg";
import p4 from "@/assets/The Legacy I want to leave on earth.svg";

const lifeRoles = [
  { title: "Lawyer", image: roleLawyerImage },
  { title: "Speaker", image: roleSpeakerImage },
  { title: "Author", image: roleAuthorImage },
  { title: "Humanitarian", image: roleHumanitarianImage },
  { title: "Leader", image: roleLeaderImage },
  { title: "Creator", image: roleCreatorImage }
];

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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-background">

        {/* ---------- DESKTOP HERO ---------- */}
        <div className="hidden md:flex relative w-full h-[986px] items-center justify-center">

          {/* Left text */}
          <div className="absolute left-[40px] top-[350px] -translate-y-1/2 max-w-[467px] z-10">
            <p className="text-[#A2A2A2] text-[28px] leading-normal">
              Blending law, leadership, and<br />
              mentorship to shape a just and<br />
              purpose-driven world.
            </p>
          </div>

           {/* CENTER IMAGE — FIGMA STYLE */}
  <div className="absolute left-2/4 top-[40px] -translate-x-1/2 z-0">
    <img
      src={dionneHeroImage}
      alt="Dionne Tweneboah"
      className="w-[540px] h-[480px] object-cover"
    />
  </div>

          {/* Right buttons */}
          <div className="absolute right-[30px] top-[350px] -translate-y-1/2 flex gap-[35px] z-10">
            <Button
              asChild
              variant="hero"
              className="w-[150px] h-[60px] rounded-[32px] text-[20px]"
            >
              <Link to="/speaking">Book Me</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-[150px] h-[60px] rounded-[32px] border-2 border-[#404040] text-[#404040] text-[20px]"
            >
              <Link to="/about">About Me</Link>
            </Button>
          </div>
        </div>

        {/* ---------- MOBILE HERO ---------- */}
        <div className="md:hidden px-4 pt-24 pb-32 flex items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Blending law, leadership, and mentorship to shape a just and purpose-driven world.
            </p>

            <img
              src={dionneHeroImage}
              alt="Dionne Tweneboah"
              className="w-[160px] object-cover"
            />
          </div>

          <div className="flex flex-col gap-3">
            <Button asChild variant="hero" className="rounded-full px-5">
              <Link to="/speaking">Book Me</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-5">
              <Link to="/about">About Me</Link>
            </Button>
          </div>
        </div>

        {/* ---------- NAME BANNER ---------- */}
        <div className="relative bg-primary h-[380px] -mt-[470px] overflow-hidden">

          <div className="relative z-40 text-center pt-[25px]">
            <p className="text-[48px] text-primary-foreground mb-2">
              Hi, I’m
            </p>

            <h1 className="font-heading font-bold text-[120px] leading-[0.85] text-primary-foreground">
              Dionne<br />Tweneboah
            </h1>
          </div>

          {/* Decorative icons */}
          <img
            src={iconScale}
            alt=""
            className="absolute left-[2px] bottom-[-1px] w-[300px] opacity-80 pointer-events-none"
          />

          <img
            src={iconGavel}
            alt=""
            className="absolute right-0 top-[40px] -translate-y-1/2 w-[283px] opacity-80 pointer-events-none"
          />

          <img
            src={iconMicrophone}
            alt=""
            className="absolute right-[2px] top-[0.2px] w-[283px] opacity-80 pointer-events-none"
          />
        </div>
      </section>

      {/* GAP */}
      <div className="h-16 bg-muted" />

      {/* ================= MISSION SECTION ================= */}
      <section className="section-padding bg-[#992430] text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold italic mb-10">
                I'm on a Mission
              </h2>

              <div className="space-y-6">
                {missionPoints.map((point, index) => (
                  <div key={index}>
                    <img src={point.title} alt="" className="mb-2" />
                    <p className="text-sm md:text-base leading-relaxed opacity-90">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src={missionImageImage}
                alt=""
                className="max-w-md w-full object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOOK SECTION ================= */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-5xl italic font-bold text-[#b74d01] mb-6">
              You Were Never Meant for an<br />Ordinary Life.
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Break free from the limits you've learned to live with and step boldly into the
              extraordinary future God designed for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                The Tyranny of The Ordinary
              </h3>
              <p className="text-muted-foreground mb-4">
                The Tyranny of Ordinary is a bold call to break free from mediocrity.
              </p>
              <Button asChild variant="hero">
                <Link to="/books">Get Your Copy</Link>
              </Button>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src={bookTyranny}
                alt=""
                className="w-64 md:w-72 lg:w-80 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= LIFE ROLES ================= */}
      <section className="bg-background">
        <div className="hidden lg:block">
          <div className="py-4 bg-[#9e846b] grid grid-cols-6">
            {lifeRoles.map((role, i) => (
              <p key={i} className="text-center text-white font-heading text-xl">
                {role.title}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-6">
            {lifeRoles.map((role, i) => (
              <img
                key={i}
                src={role.image}
                alt={role.title}
                className="aspect-[3/4] object-cover grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;

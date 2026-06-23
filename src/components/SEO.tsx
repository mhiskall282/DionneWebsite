import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({ 
  title = "Dionne Tweneboah | Lawyer, Speaker, Author", 
  description = "Dionne Tweneboah is a dynamic Lawyer, Author, Speaker, and the founder of the Nzuri Uhai Foundation. She is dedicated to youth empowerment, mental health, and leaving a lasting legacy.",
  keywords = "Dionne Tweneboah, Lawyer in Ghana, Corporate Lawyer, Motivational Speaker, Author, The Tyranny of the Ordinary, Nzuri Uhai Foundation, Mental Health Advocate, Youth Empowerment Africa, Legal Consultant",
  image = "https://dionnetweneboah.com/assets/dionne-hero.png",
  url = "https://dionnetweneboah.com"
}: SEOProps) {
  const fullTitle = title === "Dionne Tweneboah | Lawyer, Speaker, Author" ? title : `${title} | Dionne Tweneboah`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph tags for Facebook, LinkedIn, etc. */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

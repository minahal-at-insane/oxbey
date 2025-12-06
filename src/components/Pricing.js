import Footer from './Footer';
import Menu from './Menu';
import basic from '../assets/basic.png';
import advance from '../assets/advance.png';
import premium from '../assets/premium.png';
import bg_services from '../assets/service/bg_services.svg';

function Pricing() {

  const packages = [
    {
      name: "Essential Visibility Package",
      price: 99,
      platforms: "For small businesses & startups who need to establish their online presence.",
      perks: [
        "12 Professionally Designed Social Media Posts (Canva visuals & captions)",
        "4 Animated Story/Reel Templates per month",
        "Social Media Setup & Optimization (Instagram + Facebook)",
        "Google Business Profile Setup + Optimization (Local SEO)",
        "1 Event Flyer/Promo Design per month",
        "Monthly Performance Report (growth & engagement stats)"
      ],
      best_for: "Local pubs, salons, small shops, cafes, startups.",
      img: basic,
    },
    {
      name: "Growth & Engagement Package",
      price: 150,
      platforms: "For growing brands that want consistent engagement and new leads every month.",
      perks: [
        "20 Premium Social Media Posts (mix of carousels, reels, and stories)",
        "2 Event Flyers/Promo Videos per month",
        "Full Social Media Management (FB, Insta, TikTok OR LinkedIn)",
        "Paid Ad Campaign Setup & Management (Facebook + Instagram OR Google)",
        "Local & On-Page SEO (keyword targeting, content optimisation)",
        "Monthly Content Calendar + Hashtag Strategy",
        "Email Marketing (2 campaigns/month: newsletter, offers)",
        "In-Depth Monthly Growth Report + Strategy Call"
      ],
      best_for: "Nightclubs, bars, restaurants, gyms, e-commerce stores, dental clinics.",
      img: advance,
      most_popular: true,
    },
    {
      name: "Market Domination Package",
      price: 199,
      platforms: "For established businesses ready to dominate their market and scale fast.",
      perks: [
        "30+ Custom Social Media Posts (graphics, carousels, animated reels)",
        "4 Event Flyers/Promo Videos per month (designed for paid ads)",
        "Advanced Social Media Management (FB, Insta, TikTok, LinkedIn, YouTube)",
        "Full SEO (on-page, off-page, blog content)",
        "Paid Ads Across Multiple Platforms (Google, FB, Insta, YouTube, TikTok)",
        "Influencer Collaboration Management (Premium Plan only)",
        "Reputation Management (Google reviews, PR support)",
        "Email & SMS Marketing Automation",
        "Bi-Weekly Performance Reports + Dedicated Account Manager",
        "Full Digital Strategy Plan (quarterly roadmap)"
      ],
      best_for: "Established brands, chains, e-commerce businesses, major events, high-revenue clients.",
      img: premium
    }
  ]


  return (
    <div>
      <div className=''>
        <img src={bg_services} alt='bg' className='invert brightness-75 absolute top-0 left-0 right-0'></img>
      </div>

      <div className='lg:px-20 px-5 lg:pt-20 py-6 font-poppins container mx-auto text-black-50 relative z-20'>

        <Menu />

        <div className='space-y-6 text-center md:pt-28 py-8'>
          <h1 className='md:text-5xl text-3xl font-bold lg:leading-snug'>
            OUR <span className='text-blue-100'>PACKAGES</span>
          </h1>

          <p className='flex mx-auto lg:w-8/12 space-y-3 leading-loose'>
            Oxbey doesn’t do copy-paste solutions. Your brand has its own vibe, goals, and story — and your digital presence should match that energy. Our service packages are built to support businesses of all sizes, from growing startups to established companies that want to level up.
            <br></br><br></br>
            And if you need something more tailored, just hit us up. We’ll craft a custom package designed exactly around your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-center justify-items-center lg:gap-12 gap-16 pt-10">
          {packages.map((pack, index) => (

            <div key={index} className='px-6 py-8 rounded-2xl shadow-xl space-y-6 relative z-20 bg-white-100'>

              {pack.most_popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF0000] text-white-100 font-semibold px-4 py-1 rounded-full shadow-lg text-sm tracking-wide z-20">
                  Most Popular
                </div>
              )}

              <span className='btn-gradient p-3 rounded-full absolute -top-10 right-6 z-10'>
                <img src={pack.img} alt={pack.name} className='invert brightness-0 w-12 h-12' />
              </span>

              <div className='space-y-5'>
                <p className='font-semibold md:text-2xl text-xl'>{pack.name}</p>
                <h2 className='text-blue-100 font-semibold md:text-3xl text-xl'>
                  £<span className='font-extrabold md:text-5xl text-2xl'>{pack.price}</span>/mo
                </h2>
              </div>

              <div className='border-t border-white-200'></div>

              <div className='space-y-8'>
                <div className='space-y-2'>
                  <p className='font-medium italic'>{pack.platforms}</p>
                </div>

                <div className='space-y-4 font-xs'>
                  {pack.perks.map((perk, i) => (
                    <div key={i} className='flex items-start gap-2'>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-blue-100 translate-y-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                      </div>
                      {perk}
                    </div>
                  ))}
                </div>

                <p className="text-lg pb-4">
                  <strong>Best For:</strong> {pack.best_for}
                </p>

                <button className='bg-blue-100 hover:bg-white-100 py-2 px-6 rounded-full border-2 border-blue-100 font-medium text-lg block text-white-100 hover:text-blue-100 duration-150 mx-auto'>Learn More</button>
              </div>

            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Pricing;
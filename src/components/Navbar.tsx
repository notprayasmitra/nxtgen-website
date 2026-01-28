import { StaggeredMenu, StaggeredMenuItem, StaggeredMenuSocialItem } from "@/components/ui/StaggeredMenu";

const Navbar = () => {
  const menuItems: StaggeredMenuItem[] = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '#hero' },
    { label: 'About', ariaLabel: 'Learn about the hackathon', link: '#vision' },
    { label: 'Tracks', ariaLabel: 'View hackathon tracks', link: '#tracks' },
    { label: 'Schedule', ariaLabel: 'View schedule', link: '#schedule' },
    { label: 'Prizes', ariaLabel: 'View prizes', link: '#prizes' },
    { label: 'Guests', ariaLabel: 'View guests of honour', link: '#mentors' },
    { label: 'FAQ', ariaLabel: 'View frequently asked questions', link: '#faq' },
    { label: 'Apply', ariaLabel: 'Apply for hackathon', link: 'https://www.instagram.com/nxtgen_2k26/' },
  ];

  const socialItems: StaggeredMenuSocialItem[] = [
    { label: 'Instagram', link: 'https://instagram.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' },
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'YouTube', link: 'https://youtube.com' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-xl">
      <div className="w-full px-4 sm:px-8">
        <div className="flex h-16 items-center">
          {/* Left: SRM */}
          <div className="flex items-center">
            <img
              src="/assets/logo/srm1.png"
              alt="SRM Logo"
              className="h-9 sm:h-10 w-auto select-none"
              draggable={false}
            />
          </div>

          {/* Center: TEXUS */}
          <div className="flex flex-1 items-center justify-center">
            <img
              src="/assets/logo/texus.png"
              alt="TEXUS Logo"
              className="h-9 sm:h-10 w-auto select-none"
              draggable={false}
            />
          </div>

          {/* Right: Menu */}
          <div className="flex items-center justify-end">
            <StaggeredMenu
              position="right"
              items={menuItems}
              socialItems={socialItems}
              displaySocials={true}
              displayItemNumbering={true}
              menuButtonColor="#fff"
              openMenuButtonColor="#fff"
              changeMenuColorOnOpen={true}
              colors={['#6D28D9', '#7C3AED', '#8B5CF6']}
              logoUrl="/assets/logo/srm.png"
              accentColor="#8B5CF6"
              isFixed={true}
              closeOnClickAway={true}
              headerMode="static"
              headerClassName="p-0 h-full flex items-center"
              topOffsetPx={64}
              toggleClassName="sm-toggle relative inline-flex items-center gap-3 h-10 rounded-2xl px-5 text-white/90 hover:text-white hover:bg-white/10 transition font-semibold text-base leading-none overflow-visible pointer-events-auto outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

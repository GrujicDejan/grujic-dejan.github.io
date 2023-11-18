import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";

const navigation = [
  { name: "Home", href: "home" },
  { name: "About Me", href: "about" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {});

    Events.scrollEvent.register("end", function (to, element) {});

    scrollSpy.update();

    //

    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      //
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className={`flex items-center justify-between p-3 lg:px-8 ${scrolled ? 'bg-transparent backdrop-filter backdrop-blur-md bg-opacity-80 shadow-md' : 'bg-transparent opacity-90'}`} aria-label="Global">
        <div className="flex lg:flex-1">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            onSetActive={handleSetActive}
          >
            <div className={`text-lg font-bold ${activeLink === 'home' ? 'transition duration-300' : ''} text-blue-900`}>Dejan Grujić</div>
          </ScrollLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.href}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              onSetActive={handleSetActive}
              className={`text-sm font-semibold leading-6 text-gray-900 ${activeLink === item.href ? 'border-b-2 border-blue-500 transition duration-300' : 'hover:text-blue-500'}`}
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <ScrollLink to="home" smooth={true} duration={500}>
              <span className="sr-only">Your Company</span>
              <div className="text-lg font-bold text-gray-900">Dejan Grujić</div>
            </ScrollLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <ScrollLink
                    key={item.name}
                    to={item.href}
                    smooth={true}
                    duration={500}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </ScrollLink>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

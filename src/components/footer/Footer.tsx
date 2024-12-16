const Footer = () => {
  return (
    <div className="mt-8">
      <footer className="py-8 px-4 bg-bg-gray">
        <div className="container mx-auto text-center space-y-4">
          <p className="text-lg font-semibold">
            &copy; 2024 Rohit Kumar Amdahl.
          </p>
          <div className="space-y-2">
            <p className="text-md">Kontakt meg:</p>
            <div className="flex justify-center space-x-4">
              <a href="mailto:omyoga2016@outlook.com" className=" underline">
                omyoga2016@outlook.com
              </a>
              <span>|</span>
              <a href="mailto:rohit_designer@outlook.com" className="underline">
                rohit_designer@outlook.com
              </a>
            </div>
          </div>
          <p className="text-md">
            Telefon:
            <a href="tel:+4740538464" className="underline">
              +47 405 38 464
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

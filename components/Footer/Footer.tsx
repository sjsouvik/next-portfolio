import Link from "next/link";

const Footer = () => {
  return (
    <footer className="absolute bg-gray-800 bottom-0 left-0 right-0 py-6">
      <div className="bg-gray-800 py-6 text-white px-4 max-w-4xl m-auto flex flex-col items-center space-y-8 md:space-y-0 md:flex-row lg:px-0">
        <div className="flex-1 text-center mr-4 md:text-left">
          {`I'm currently available on these platforms, let's Connect!`}
        </div>
        <ul className="list-none flex flex-1 space-x-4 justify-center md:justify-end">
          <li>
            <Link href="https://twitter.com/sjsouvik">
              <a className="text-white" target="_blank">
                <i className="bx bxl-twitter bx-sm bx-border-circle bg-gray-400 hover:bg-gray-600"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/sjsouvik">
              <a className="text-white" target="_blank">
                <i className="bx bxl-github bx-sm bx-border-circle bg-gray-400 hover:bg-gray-600"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/souvik-jana/">
              <a className="text-white" target="_blank">
                <i className="bx bxl-linkedin bx-sm bx-border-circle bg-gray-400 hover:bg-gray-600"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href="mailto:souvikjana2013@gmail.com">
              <a className="text-white" target="_blank">
                <i className="bx bx-envelope bx-sm bx-border-circle bg-gray-400 hover:bg-gray-600"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://sjsouvik.medium.com">
              <a className="text-white" target="_blank">
                <i className="bx bxl-medium bx-sm bx-border-circle bg-gray-400 hover:bg-gray-600"></i>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

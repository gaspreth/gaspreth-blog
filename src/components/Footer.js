
function Footer() {
  return (
      <section id="footer">
          <div className="container text-gray-400 bottom-0 mx-auto divide-y divide-gray-800">
              {/* TODO add contact form (to learn useState) */}
              <div className="py-3 items-center">
                  <ul className="flex w-full">
                      <li className="w-1/3"><a className="text-gray-400" href="mailto:gaspreth@gmail.com">gaspreth@gmail.com</a></li>
                      <li className="w-1/3">
                          <a className="text-gray-400" href="https://twitter.com/gaspreth/"> @gaspreth</a>
                      </li>
                      <li className="w-1/3">
                          <a className="text-gray-400" href="https://github.com/gaspreth">github@gaspreth</a>
                      </li>
                  </ul>
              </div>
              <div className="py-px">
                  <p className="pb-0">Copyright &copy; 2022 Gaspreth</p>
              </div>

          </div>
      </section>

  );
}

export default Footer;
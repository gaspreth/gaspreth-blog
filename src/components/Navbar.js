
function Navbar() {
  return (
    <header className="bg-black top-0">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="/" className="ml-3 text-xl text-green-300">gaspreth-blog</a>
        </a>
        <div className="md:mr-auto flex flex-wrap">
        </div>
        <a href="https://twitter.com/gaspreth/">
          <button class= "bg-black p-2 font-semibold text-blue-300 inline-flex items-center space-x-2 rounded mr-3">
            <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
          </button>
        </a>
        <a href="mailto:gaspreth@gmail.com"
           className="inline-flex items-center text-gray-400 bg-stone-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-gray mt-4 md:mt-0">
            Send me an email
        </a>
      </div>
    </header>

  );
}

export default Navbar;
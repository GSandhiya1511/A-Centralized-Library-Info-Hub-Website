import { useState } from 'react';
import { Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const photos = [
  { id: "Chennai", src: "https://i.pinimg.com/736x/8b/b8/b0/8bb8b06bcd79be5310c0a83671153132.jpg", caption: "Connemara Public Library-Chennai" },
  { id: "Coimbatore", src: "https://th-i.thgim.com/public/incoming/8xtjp4/article66982931.ece/alternates/LANDSCAPE_660/Coimbatore%20district%20library%203.jpg", caption: "District Central Library-Coimbatore" },
  { id: "Madurai", src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLraihx8SfttcvGRbiSU-rFh5pOGizUBTrF4vGlJb0om42jyXI1OJNw1l8ePP8ARa9mxUQlhk_Rx74MRl9g7D-CYJrDnDcZdOLx-H_THcPMqPs3NjaVHlPYln1lNikCjhyphenhyphen_tIEXl8xkeg4zfKPchGJzebXwHuuq4Q47pQFIXUxrqKNjQd7q4um2MxTSyMm/w640-h354/KCL%202.jpg", caption: "Kalaignar Centenary Library-Madurai" },
  { id: "Thanjavur", src: "https://i.pinimg.com/736x/b0/95/69/b09569ee08b604dd7e97ee2843f1ca5f.jpg", caption: "Saraswathi Mahal Library-Thanjavur" },
  { id: "Theni/Madurai region", src: "https://americancollege.edu.in/wp-content/uploads/2021/02/LIBARAY.jpg", caption: "Danieal Poor Memorial Library-Theni/Madurai region" },
  { id: "Erode", src: "https://indiano.travel/wp-content/uploads/2022/11/31.png", caption: "Mahakavi Bharathi Memorial Library-Erode" },
  { id: "Pudukottai", src: "https://www.theweek.in/content/dam/week/magazine/theweek/current/images/2021/12/16/84-Krishnamurthy-and-Doroth.jpg", caption: "Gnanalaya Research Library-Pudukottai" },
  { id: "Tirunelveli", src: "https://francisxavier.ac.in/cs-content/uploads/Library/6.webp", caption: "District Central Library-Tirunelveli" },
  { id: "Tiruvannamalai", src: "https://th.bing.com/th/id/R.59f44e342099f28b97f1fe9049106a18?rik=2GcuC1QxOThBxw&riu=http%3a%2f%2ftiruvannamalai.tnlla.in%2fassets%2fthumbnail.php%3fsrc%3dhttp%3a%2f%2ftiruvannamalai.tnlla.in%2fassets%2fbanner-images%2fimage1-1549962261.jpg%26w%3d1100%26h%3d344&ehk=fHbSnSiTMiXlxsazYE5ZJ73IvFZwQLVcbnD7Ousl6XM%3d&risl=&pid=ImgRaw&r=0", caption: "District Central Library-Tiruvannamalai" },
  { id: "Salem", src: "https://im.hunt.in/cg/City-Guide/libraSalem.jpg", caption: "Annapoorna Central Library-salem" }
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
      {/* Navbar */}
      <header className="bg-white text-blue-600 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide uppercase text-blue-800">
            🎓 A Centralized Library Info Hub
          </h1>
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#gallery" className="hover:underline">Gallery</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <Link to="/login" className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Login</Link>
          </nav>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            <a href="#home" className="block hover:underline">Home</a>
            <a href="#about" className="block hover:underline">About</a>
            <a href="#gallery" className="block hover:underline">Gallery</a>
            <a href="#contact" className="block hover:underline">Contact</a>
            <Link to="/login" className="block bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Login</Link>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center p-10 bg-cover bg-center text-white min-h-[400px]"
        style={{ backgroundImage: "url('https://images.pexels.com/photos/28963924/pexels-photo-28963924.jpeg')" }}>
        <h1 className="text-5xl font-bold mb-4 bg-black bg-opacity-50 p-2 rounded">
          Welcome to A Centralized Library Info Hub!
        </h1>
        <p className="text-xl text-center max-w-xl bg-black bg-opacity-40 p-2 rounded">
          “Explore Tamil Nadu’s Educational Treasures and District-Wise Libraries, Books, and More!”
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white text-gray-800 p-10">
        <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
        <p className="text-lg max-w-3xl mx-auto text-center leading-relaxed">
          Reading books in a library is one of the most peaceful and powerful moments we can experience. It's not just about books — it's about calmness, focus, and the people we meet there. You’ll often sit beside future achievers — not just IAS or IPS officers, but people who aim to live with a peaceful mind and purposeful heart. In truth, that’s the greatest success anyone can have.
          <br /><br />
          We may not be perfect at everything, but we grow little by little day by day. As the Tamil saying goes, <em>“Katrathu Kai Alavu, Kallathathu Ulagalavu”</em> — what we know is just a handful, and what we don’t is as vast as the world. A library holds that vastness.
          <br /><br />
          In a digital age, some may wonder, “Why visit a library at all?” But not everyone can concentrate while reading on screens. The power of physical reading is different — every line we read in a book stays in our memory.
          <br /><br />
          This platform helps you discover top libraries across every district of Tamil Nadu. Whether you're a student, a reader, or someone seeking peace — this is your guide to environments that nurture clarity, calm, and curiosity.
        </p>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="p-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Gallery</h2>
        <input
          type="text"
          placeholder="Search by library or location..."
          className="w-full max-w-md mx-auto mb-8 px-4 py-2 border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {photos
            .filter((item) => item.caption.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((item, index) => (
              <Link to={`/library/${item.id}`} key={index}>
                <div className="rounded shadow overflow-hidden bg-white group transition-all duration-300 hover:scale-105">
                  <img src={item.src} alt={item.caption} className="w-full h-52 object-cover" />
                  <div className="p-3 text-sm font-medium text-gray-700 group-hover:text-blue-700 transition duration-300">
                    {item.caption}
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10 bg-gray-100 text-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="max-w-xl mx-auto space-y-4 bg-white p-6 rounded shadow">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input type="text" placeholder="Your Name" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" placeholder="you@example.com" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea rows={4} placeholder="Write your message here..." className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </section>

      {/* Logos Section */}
      <section className="p-6 text-center bg-white">
        <h3 className="text-xl font-semibold mb-6 text-gray-700">Tools Used</h3>
        <div className="flex flex-wrap justify-center gap-6 items-center">
          <img src={viteLogo} alt="Vite" className="h-10 w-10" />
          <img src={reactLogo} alt="React" className="h-10 w-10 animate-spin-slow" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="TypeScript" className="h-9" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042" alt="Tailwind CSS" className="h-9" />
          <img src="https://static-00.iconduck.com/assets.00/react-router-icon-2048x1116-z1qbg9ad.png" alt="React Router" className="h-9" />
          <img src="https://code.visualstudio.com/assets/images/code-stable.png" alt="Visual Code" className="h-9" />
        </div>
      </section>

      {/* Footer */}
      <footer className="p-4 text-center text-sm bg-blue-600 text-white">
  © 2025 Education Center. All rights reserved. <br />
  <span className="text-white">Developed by <strong>Sandhiya G</strong></span>
</footer>
    </div>
  );
}

export default Home;

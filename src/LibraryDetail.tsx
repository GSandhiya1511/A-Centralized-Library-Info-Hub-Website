import { useParams, Link } from 'react-router-dom';

type LibraryInfo = {
  title: string;
  description: string;
  image: string;
};

const libraryDetails: Record<string, LibraryInfo> = {
  Chennai: {
    title: "Connemara Public Library, Chennai",
    description:
      `Established in 1896, the Connemara Public Library is one of the four National Depository Libraries in India.\nTimings:  8.00 AM to 2.00 PM.\nLocation-Connemara Public Library
Pantheon Rd, Egmore, Chennai - 600008 (Tamil Nadu) India`,
    image:
      "https://i.pinimg.com/736x/8b/b8/b0/8bb8b06bcd79be5310c0a83671153132.jpg",
  },
  Coimbatore: {
    title: "District Central Library, Coimbatore",
    description:
      `A major learning hub near Collector Office, popular with civil service aspirants.\nTime: The opening time on working days is 10 AM. Closing hours may vary, so we recommend confirming directly with Government Library.
Please note that these are the standard opening hours and may change.\nAddress - 37 Old No.50, Cowley Brown Road, R.S. Puram , Coimbatore - 641002 (Tamil Nadu) India`,
    image:
      "https://th-i.thgim.com/public/incoming/8xtjp4/article66982931.ece/alternates/LANDSCAPE_660/Coimbatore%20district%20library%203.jpg",
  },
  Madurai: {
    title: "Kalaignar Centenary Library, Madurai",
    description:
      `Built in 2023 to honor M. Karunanidhi. Includes children's zones, digital labs, 3L+ books.\nTimings: 8 AM to 8 PM.\nLocation-Kalaignar Centenary Library,Reserve Line, Madurai - 625002 (Tamil Nadu) India`,
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLraihx8SfttcvGRbiSU-rFh5pOGizUBTrF4vGlJb0om42jyXI1OJNw1l8ePP8ARa9mxUQlhk_Rx74MRl9g7D-CYJrDnDcZdOLx-H_THcPMqPs3NjaVHlPYln1lNikCjhyphenhyphen_tIEXl8xkeg4zfKPchGJzebXwHuuq4Q47pQFIXUxrqKNjQd7q4um2MxTSyMm/w640-h354/KCL%202.jpg",
  },
  Thanjavur: {
    title: "Saraswathi Mahal Library, Thanjavur",
    description:
      `Built by Nayaks & Marathas in the 16th century. Rare palm-leaf manuscripts; UNESCO-listed.\nTimings: Mon–Sat: 10 AM to 5:30 PM.\nAddress: E Main St, Rajakrisnapuram, Thanjavur - 613001 (Tamil Nadu) India`,
    image:
      "https://i.pinimg.com/736x/b0/95/69/b09569ee08b604dd7e97ee2843f1ca5f.jpg",
  },
  "Theni/Madurai region": {
    title: "Daniel Poor Memorial Library, Theni",
    description:
      `Founded in early 1900s inside American College. Scholarly environment with archives.\nTimings: The opening time on working days is 10 AM. Closing hours may vary, so we recommend confirming directly with Daniel Poor Memorial Library.
Please note that these are the standard opening hours and may change.\nAddress: Daniel Poor Memorial Library, conveniently located at Alwarpuram, Madurai - 625020 (Tamil Nadu) India`,
    image:
      "https://americancollege.edu.in/wp-content/uploads/2021/02/LIBARAY.jpg",  },
  Erode: {
    title: "Mahakavi Bharathi Memorial Library, Erode",
    description:
      `Dedicated to Subramania Bharathi, preserving Tamil literature.\nTimings: Mon–Sat: 9 AM to 6 PM.\nAddress-Mahakavi Bharathi Memorial Library
20, Kovalan 1st Street, Erode, Tamil Nadu 638004`,
    image:
      "https://indiano.travel/wp-content/uploads/2022/11/31.png",  },
  Pudukottai: {
    title: "Gnanalaya Research Library, Pudukottai",
    description:
      `Founded by Fr. Xavier Arulraj in 1997. Rare Tamil & English literary collections.\nTimings: Mon–Sat: 10 AM to 5:30 PM.\nAddress: Yanimal Street, Palaniyappa Nagar Water Tank, Palaniappa Nagar, Pudukkottai - 622005 (Tamil Nadu) India`,
    image:
      "https://www.theweek.in/content/dam/week/magazine/theweek/current/images/2021/12/16/84-Krishnamurthy-and-Doroth.jpg",  },
  Tirunelveli: {
    title: "District Central Library, Tirunelveli",
    description:
      `Located near VOC Grounds. Supports digital learning and civil service aspirants.\nTimings: Mon–Sat: 8 AM to 8 PM.\nAddress: Palayamkottai , Tirunelveli - 627002 (Tamil Nadu) India`,
    image:
      "https://francisxavier.ac.in/cs-content/uploads/Library/6.webp",  },
  Tiruvannamalai: {
    title: "District Central Library, Tiruvannamalai",
    description:
      `Located near Collector Office. Supports students and general public.\nTimings: Mon–Sat: 9 AM to 6 PM.\nAddress-District central library, Opposite shanmuga hr. sec.school, chengam road, Tiruvannamalai - 606603 (Tamil Nadu) India`,
    image:
      "https://th.bing.com/th/id/R.59f44e342099f28b97f1fe9049106a18?rik=2GcuC1QxOThBxw&riu=http%3a%2f%2ftiruvannamalai.tnlla.in%2fassets%2fthumbnail.php%3fsrc%3dhttp%3a%2f%2ftiruvannamalai.tnlla.in%2fassets%2fbanner-images%2fimage1-1549962261.jpg%26w%3d1100%26h%3d344&ehk=fHbSnSiTMiXlxsazYE5ZJ73IvFZwQLVcbnD7Ousl6XM%3d&risl=&pid=ImgRaw&r=0",  },
  Salem: {
    title: "Annapoorna Central Library, Salem",
    description:
      `Serves readers in central Salem. Wide subject range with calm atmosphere.\nTimings: Mon–Sat: 9 AM to 6 PM.\nAddress: Sankari main road, Periya seeragapadi, Salem - 636308 (Tamil Nadu) India`,
    image:
      "https://im.hunt.in/cg/City-Guide/libraSalem.jpg",  },
};

function LibraryDetail() {
  const { id } = useParams<{ id: string }>();
  const data = libraryDetails[id || ""];

  if (!data) {
    return (
      <div className="text-center p-10">
        <h2 className="text-2xl text-red-500 font-bold">Library not found!</h2>
        <Link to="/" className="text-blue-600 underline mt-4 block">&larr; Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen text-gray-800">
      <div className="max-w-4xl mx-auto bg-white rounded shadow p-6">
        <img src={data.image} alt={data.title} className="w-full h-72 object-cover rounded mb-4" />
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <p className="whitespace-pre-line text-lg mb-4">{data.description}</p>
        <Link to="/" className="inline-block text-blue-600 underline">&larr; Back to Home</Link>
      </div>
    </div>
  );
}

export default LibraryDetail;
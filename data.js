// Sample data arrays for the Community Portal Website

// Team Information (for About page)
const teamInfo = [
    {
      id: 1,
      name: "Mia ",
      role: "Backend Developer",
      bio: "Experienced in Node.js and Express, responsible for routing and server setup.",
      image: "/images/Mia.jpg" 
    },
    {
      id: 2,
      name: "Cameron ",
      role: "Frontend Developer",
      bio: "Skilled in EJS and Bootstrap, focused on creating responsive views.",
      image: "/images/Cameron.png" 
    },
    {
      id: 3,
      name: "Bahle ",
      role: "Data & Documentation Manager",
      bio: "Manages data arrays and ensures clear project documentation.",
      image: "/images/Bahle.jpg" 
    }
  ];
  
  // Events (for Events page)
  const events = [
    {
      title: "Tech Talk: AI Innovations",
      details:"The Tech Talk is all about the latest in technology and innovation. It will cover a range of topics and feature expert speakers. Join us for an engaging discussion and networking opportunities.",
      date: "2025-06-15",
      time: "10:00 AM",
      location: "Community Center, Room 101",
      organizer: "Tech Community",
      registrationLink: "https://example.com/register/tech-talk",
      image: "/images/TechTalk.png", // Image path in /public/images
      description: "Explore the latest advancements in AI and machine learning."
    },
    {
      title: "Art Workshop",
      details:"The Art Workshop is a hands-on session where participants can create their own masterpieces. All materials will be provided, and no prior experience is necessary. Join us for a fun and creative day!",
      date: "2025-07-10",
      time: "2:00 PM",
      location: "Art Studio, Downtown",
      organizer: "Art Enthusiasts",
      registrationLink: "https://example.com/register/art-workshop",
      image: "/images/ArtWorkshop.png",
      description: "Hands-on session to create your own masterpiece."
    },
    {
      title: "Music Festival",
      details:"The Music Festival is a celebration of local talent. Enjoy live performances from various artists and bands. Food stalls and merchandise will be available. Bring your friends and family for a day of fun!",
      date: "2025-08-20",
      time: "6:00 PM",
      location: "City Park",
      organizer: "Local Bands",
      registrationLink: "https://example.com/register/music-festival",
      image: "/images/MusicFestival.png",
      description: "Live performances from local bands and artists."
    }
  ];
  
  // Contact Submissions (in-memory array for Contact form)
let contactSubmissions = [];

function addContactSubmission(name, email, message) {
  const newSubmission = {
    name,
    email,
    message,
    timestamp: new Date().toISOString()
  };
  contactSubmissions.push(newSubmission);
}
  
 
  // Export data for use in other files 
  module.exports = {
  contactSubmissions,
  addContactSubmission,
  teamInfo,
  events
};
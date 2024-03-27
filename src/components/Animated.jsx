// import React, { useState, useEffect } from 'react';

// const Animated = () => {
//   const [text, setText] = useState("Frontend Developer and UI/UX Designer.");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setText((prevText) => (prevText === "Frontend Developer and UI/UX Designer.") ? "Experienced in React and Tailwind CSS." : "Frontend Developer and UI/UX Designer.");
//     }, 1000); // Change text every 1 second

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <p className='text-2xl animate-flicker'>{text}</p>
//   );
// };

// export default Animated;

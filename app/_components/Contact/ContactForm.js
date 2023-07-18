// import React from 'react';

// const onSubmit = async (data) => {
//   const response = await fetch('/api/sendEmail', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });

//   const responseData = await response.json();
//   alert(responseData.message);
// }

// const ContactForm = () => {
//     return (
//         <div className="w-full max-w-xs mx-auto bg-gray-800 rounded p-5">
//             <h2 className="text-white text-3xl mb-5 text-center">Get in touch</h2>
//             <form>
//                 <div className="mb-4">
//                     <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
//                         Name
//                     </label>
//                     <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John Doe" />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
//                         Email
//                     </label>
//                     <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="john@example.com" />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
//                         Message
//                     </label>
//                     <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Write something..." rows="5"></textarea>
//                 </div>
//                 <div className="flex items-center justify-between">
//                     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
//                         Send
//                     </button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default ContactForm;

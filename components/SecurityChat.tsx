
// import React, { useState } from 'react';
// import { GoogleGenAI } from '@google/genai';
// import { PERSONAL_INFO } from '../constants';

// const SecurityChat: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [prompt, setPrompt] = useState('');
//   const [response, setResponse] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleAsk = async () => {
//     if (!prompt.trim()) return;
    
//     setIsLoading(true);
//     setResponse('Connecting to secure brain node...');
    
//     try {
//       // Fix: Follow @google/genai initialization rules.
//       // Use process.env.API_KEY directly and initialize right before the call.
//       const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
//       // Fix: Use gemini-3-pro-preview for complex reasoning and coding related tasks.
//       const result = await ai.models.generateContent({
//         model: 'gemini-3-pro-preview',
//         contents: prompt,
//         config: {
//           systemInstruction: `You are Arun Kumar K, a Full Stack Developer and Cyber Security Analyst. 
//           Respond in a professional yet "hacker-mindset" tone. Focus on security, clean code, and robust architecture.
//           Keep your responses concise and impactful. If asked for code, ensure it follows secure development practices. 
//           Your tagline is: ${PERSONAL_INFO.tagline}.`,
//           temperature: 0.7,
//         },
//       });
      
//       // Fix: Access .text property directly (not a method).
//       setResponse(result.text || 'Error decrypting response.');
//     } catch (err) {
//       console.error(err);
//       setResponse('Transmission failed. Firewall or API limits may be active.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-[60]">
//       {isOpen ? (
//         <div className="w-80 md:w-96 bg-gray-900 border border-green-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-slide-up">
//           <div className="p-4 bg-gray-800 flex justify-between items-center border-b border-gray-700">
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//               <span className="font-mono text-sm font-bold text-green-500 tracking-tighter">SECURE_CHANNEL: ARUN</span>
//             </div>
//             <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
          
//           <div className="p-4 h-64 overflow-y-auto font-mono text-sm space-y-4 bg-gray-950/50">
//             {response ? (
//               <div className="text-gray-300 whitespace-pre-wrap animate-fade-in">
//                 <span className="text-green-500 mr-2">&gt;</span>
//                 {response}
//               </div>
//             ) : (
//               <div className="text-gray-500 italic">
//                 Ask Arun about secure development, tech stack, or security audits.
//               </div>
//             )}
//             {isLoading && (
//               <div className="flex gap-1">
//                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce"></div>
//                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
//                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
//               </div>
//             )}
//           </div>

//           <div className="p-4 bg-gray-900 border-t border-gray-800">
//             <div className="flex gap-2">
//               <input 
//                 type="text" 
//                 value={prompt}
//                 onChange={(e) => setPrompt(e.target.value)}
//                 onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
//                 placeholder="How to prevent SQLi?"
//                 className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-500/50 transition-colors"
//               />
//               <button 
//                 onClick={handleAsk}
//                 disabled={isLoading}
//                 className="bg-green-600 p-2 rounded-lg text-white hover:bg-green-500 disabled:opacity-50 transition-colors"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <button 
//           onClick={() => setIsOpen(true)}
//           className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all group"
//         >
//           <svg className="w-6 h-6 text-white group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
//           </svg>
//         </button>
//       )}
//     </div>
//   );
// };

// export default SecurityChat;

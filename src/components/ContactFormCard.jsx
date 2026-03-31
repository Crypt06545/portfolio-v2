// import {
//   Card,
//   CardHeader,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Send, CheckCircle } from "lucide-react";
// import { useState } from "react";

// const ContactFormCard = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });


//   const [isSending, setIsSending] = useState(false);
//   const [isSent, setIsSent] = useState(false);

//   const handleChange = (e) => {
//     // setFormData()
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };
//   const handleSubmit = async () => {
//     setIsSending(true);
//         // send data to formspree
//         // try {
//         //     const response = await fetch('https://formspree.io/f/mrgddpor', {
//         //         method: 'POST',
//         //         headers: {
//         //             "Accept": "application/json"
//         //         },
//         //         body: JSON.stringify(data)
//         //     });
//         //     const json = await response.json();
//         //     setLoading(false);
//         //     // all ok reset state, not 'ok' show error alert
//         //     if (json.ok) {
//         //         showSuccessMessage({ title: t("contact.alerts.success") });
//         //         setData({
//         //             name: '',
//         //             email: '',
//         //             message: ''
//         //         });
//         //     }
//         //     else showErrorMessage({ title: '', text: t("contact.alerts.error") });

//         // } catch (error) {
//         //     setLoading(false);
//         //     console.log('error sending email', error);
//         //     showErrorMessage({ title: '', text: t("contact.alerts.error") });
//         // }
//     // Simulate API call
//     setTimeout(() => {
//       setIsSending(false);
//       setIsSent(true);

//       setTimeout(() => {
//         setIsSent(false);
//       }, 3000);
//     }, 1500);
//   };

//   const codeLines = [
//     "// Contact form handler",
//     "const sendMessage = async () => {",
//     `  const name = "${formData.name}";`,
//     `  const email = "${formData.email}";`,
//     `  const message = "${formData.message}";`,
//     "  ",
//     "  await api.submit({",
//     "    name, email,",
//     "    message",
//     "  });",
//     "  ",
//     "  return { success: true };",
//     "};",
//     "",
//     "sendMessage();",
//   ];

//   const highlightCode = (line, lineIndex) => {
//     if (!line.trim()) {
//       return line;
//     }

//     if (line.trim().startsWith("//")) {
//       return <span className="text-slate-500 italic">{line}</span>;
//     }

//     // Name field - line 3
//     if (line.includes('const name = "') && lineIndex === 2) {
//       return (
//         <span>
//           <span className="text-pink-400 font-medium">const</span>
//           <span className="text-slate-200"> name = </span>
//           <span className="text-green-300">"</span>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="bg-transparent text-orange-300 outline-none border-b border-dashed border-amber-500/30 w-full sm:w-96 focus:border-amber-400 py-1.5"
//             placeholder="Your Name"
//           />

//           <span className="text-green-300">";</span>
//         </span>
//       );
//     }

//     // Email field - line 4
//     if (line.includes('const email = "') && lineIndex === 3) {
//       return (
//         <span>
//           <span className="text-pink-400 font-medium">const</span>
//           <span className="text-slate-200"> email = </span>
//           <span className="text-green-300">"</span>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="bg-transparent text-orange-300 outline-none border-b border-dashed border-amber-500/30 w-full sm:w-96 focus:border-amber-400 py-1.5"
//             placeholder="your@email.com"
//           />
//           <span className="text-green-300">";</span>
//         </span>
//       );
//     }

//     // Message field - line 6 (the line with the actual message content)
//     if (line.includes('const message = "') && lineIndex === 4) {
//       return (
//         <span>
//           <span className="text-pink-400 font-medium">const</span>
//           <span className="text-slate-200"> message = </span>
//           <span className="text-green-300">"</span>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="bg-transparent text-orange-300 outline-none border-b border-dashed border-amber-500/30 w-full sm:w-96 h-16 resize-y focus:border-amber-400 py-1.5"
//             placeholder="Type your message here..."
//           />

//           <span className="text-green-300">";</span>
//         </span>
//       );
//     }
//     // Regular syntax highlighting for non-editable lines
//     const parts = line.split(
//       /(\b(?:const|return|import|from|async|await)\b|true|false|null|"[^"]*"|'[^']*'|`[^`]*`|\{|\}|\(|\)|\.[a-zA-Z_$][\w$]*\(|=[^{}]*)/g,
//     );

//     return parts
//       .filter((part) => part && part !== "")
//       .map((part, i) => {
//         if (/^\s+$/.test(part)) return part;

//         if (/^(const|return|import|from|async|await)$/.test(part)) {
//           return (
//             <span key={i} className="text-pink-400 font-medium">
//               {part}
//             </span>
//           );
//         }

//         if (/^`[^`]*`$/.test(part)) {
//           return (
//             <span key={i} className="text-orange-300">
//               {part}
//             </span>
//           );
//         }

//         if (/^["'].*["']$/.test(part)) {
//           return (
//             <span key={i} className="text-green-300">
//               {part}
//             </span>
//           );
//         }

//         if (/^[{}()]$/.test(part)) {
//           return (
//             <span key={i} className="text-violet-300">
//               {part}
//             </span>
//           );
//         }

//         if (/^\.[a-zA-Z_$][\w$]*\($/.test(part)) {
//           return (
//             <span key={i} className="text-cyan-300">
//               {part}
//             </span>
//           );
//         }

//         return (
//           <span key={i} className="text-slate-200">
//             {part}
//           </span>
//         );
//       });
//   };

//   return (
//     <Card className="w-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden">
//       {/* Header */}
//       <CardHeader className="flex flex-row justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/10">
//         <div className="flex gap-1.5">
//           <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></span>
//           <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></span>
//           <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></span>
//         </div>
//         <span className="text-[10px] sm:text-xs text-slate-400 font-mono truncate ml-2">
//           contact-form.jsx
//         </span>
//         {isSent && (
//           <div className="flex items-center gap-1 text-emerald-400 text-xs">
//             <CheckCircle className="w-3 h-3" />
//             <span>Message sent!</span>
//           </div>
//         )}
//       </CardHeader>

//       {/* Code Editor - This IS the form */}
//       <CardContent className="p-3 sm:p-4 md:p-5 font-mono text-[10px] sm:text-xs md:text-sm text-slate-200 space-y-1 overflow-x-auto">
//         {codeLines.map((line, index) => (
//           <div key={index} className="flex gap-1.5 sm:gap-2">
//             <span className="w-4 sm:w-5 md:w-6 text-slate-500 text-right select-none text-[9px] sm:text-xs">
//               {index + 1}
//             </span>
//             <span className="whitespace-pre-wrap break-all sm:break-normal flex-1">
//               {highlightCode(line, index)}
//             </span>
//           </div>
//         ))}
//       </CardContent>

//       {/* Run Button */}
//       <CardFooter className="px-3 sm:px-4 md:px-5 pb-3 sm:pb-4">
//         <Button
//           onClick={handleSubmit}
//           disabled={isSending || isSent}
//           className="w-full bg-amber-500/10 text-amber-300 border border-amber-500/30
//                    hover:bg-amber-500/20 hover:border-amber-400/50
//                    text-xs sm:text-sm py-2 sm:py-2.5
//                    disabled:opacity-50 disabled:cursor-not-allowed
//                    font-mono"
//         >
//           {isSending ? (
//             <>
//               <span className="animate-pulse">⟳</span>
//               <span className="ml-2">sending_message...</span>
//             </>
//           ) : isSent ? (
//             <>
//               <CheckCircle className="w-4 h-4 mr-2" />
//               <span>message_sent!</span>
//             </>
//           ) : (
//             <>
//               <Send className="w-4 h-4 mr-2" />
//               <span>run_sendMessage()</span>
//             </>
//           )}
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// };

// export default ContactFormCard;
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";

const ContactFormCard = () => {
  const [focusedField, setFocusedField] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [serverError, setServerError] = useState(null); // Track API errors locally

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: { name: "", email: "", message: "" }
  });

  const watchedValues = watch();

const onSubmit = async (data) => {
    setIsSending(true);
    setServerError(null);

    try {
      const response = await fetch('https://formspree.io/f/mrgddpor', {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data) // React Hook Form's 'data' contains {name, email, message}
      });

      // Formspree returns a JSON with an 'ok' field
      const json = await response.json();

      setIsSending(false);

      if (response.ok && json.ok) {
        // SUCCESS
        setIsSent(true);
        reset(); // Clears the React Hook Form fields

        // Clear the "Sent" status after 5 seconds
        setTimeout(() => {
          setIsSent(false);
        }, 5000);
      } else {
        // API level error (e.g., invalid endpoint or spam filter)
        setServerError(json.error || "Submission failed. Please try again.");
      }
    } catch (error) {
      // Network level error
      setIsSending(false);
      console.error('Formspree Error:', error);
      setServerError("System error: Could not reach the server.");
    }
  };
  const codeLines = [
    serverError ? `// ERROR: ${serverError}` : "// Contact form handler",
    "const sendMessage = async () => {",
    `  const name = "${watchedValues.name}";`,
    `  const email = "${watchedValues.email}";`,
    `  const message = "${watchedValues.message}";`,
    "  ",
    "  await api.submit({",
    "    name, email,",
    "    message",
    "  });",
    "  ",
    "  return { success: true };",
    "};",
    "",
    "sendMessage();",
  ];

  const activeLineMap = { name: 2, email: 3, message: 4 };
  const activeLine = focusedField !== null ? activeLineMap[focusedField] : null;

  const inputBase = "bg-transparent text-orange-300 outline-none border-b border-dashed border-amber-500/30 focus:border-amber-400 py-1 transition-all duration-200 placeholder:text-slate-600 caret-amber-400";

  const highlightCode = (line, lineIndex) => {
    if (!line.trim()) return line;

    // Highlight Errors in Red
    if (line.startsWith("// ERROR")) {
      return <span className="text-red-400 italic font-bold">{line}</span>;
    }
    if (line.trim().startsWith("//")) {
      return <span className="text-slate-500 italic">{line}</span>;
    }

    if (lineIndex === 2) {
      return (
        <span>
          <span className="text-pink-400 font-medium">const</span>
          <span className="text-slate-200"> name = </span>
          <span className="text-green-300">"</span>
          <input
            {...register("name", { required: true })}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            className={cn(inputBase, "w-40 sm:w-64 focus:w-52 sm:focus:w-80 transition-[width]", errors.name && "border-red-500/60")}
            placeholder="Your Name"
            autoComplete="off"
          />
          <span className="text-green-300">";</span>
        </span>
      );
    }

    if (lineIndex === 3) {
      return (
        <span>
          <span className="text-pink-400 font-medium">const</span>
          <span className="text-slate-200"> email = </span>
          <span className="text-green-300">"</span>
          <input
            type="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            className={cn(inputBase, "w-40 sm:w-64 focus:w-52 sm:focus:w-80 transition-[width]", errors.email && "border-red-500/60")}
            placeholder="your@email.com"
            autoComplete="off"
          />
          <span className="text-green-300">";</span>
        </span>
      );
    }

    if (lineIndex === 4) {
      return (
        <span className="flex items-start">
          <span className="text-pink-400 font-medium">const</span>
          <span className="text-slate-200">&nbsp;message = </span>
          <span className="text-green-300">"</span>
          <textarea
            {...register("message", { required: true })}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            rows={3}
            className={cn(inputBase, "w-40 sm:w-64 resize-none leading-relaxed -mt-0.5", errors.message && "border-red-500/60")}
            placeholder="Type your message..."
          />
          <span className="text-green-300">";</span>
        </span>
      );
    }

    const parts = line.split(/(\b(?:const|return|import|from|async|await)\b|true|false|null|"[^"]*"|'[^']*'|`[^`]*`|\{|\}|\(|\)|\.[a-zA-Z_$][\w$]*\(|=[^{}]*)/g);
    return parts.filter((p) => p && p !== "").map((part, i) => {
      if (/^\s+$/.test(part)) return part;
      if (/^(const|return|import|from|async|await)$/.test(part)) return <span key={i} className="text-pink-400 font-medium">{part}</span>;
      if (/^["'].*["']$/.test(part)) return <span key={i} className="text-green-300">{part}</span>;
      if (/^[{}()]$/.test(part)) return <span key={i} className="text-violet-300">{part}</span>;
      return <span key={i} className="text-slate-200">{part}</span>;
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-full">
      <Card className="w-full h-full bg-[#0d1117]/80 backdrop-blur-xl border border-white/8 shadow-2xl rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-500 group relative">

        <CardHeader className="flex flex-row justify-between items-center px-4 py-3 border-b border-white/8 bg-[#161b22]">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex items-center gap-2">
            {isSent ? (
              <span className="flex items-center gap-1.5 text-emerald-400 animate-in fade-in zoom-in duration-300">
                <CheckCircle className="w-3 h-3" />
                <span className="text-[11px] font-mono uppercase">status: message_sent!</span>
              </span>
            ) : serverError ? (
                <span className="flex items-center gap-1.5 text-red-400 animate-pulse">
                <AlertCircle className="w-3 h-3" />
                <span className="text-[11px] font-mono uppercase">status: error_404</span>
              </span>
            ) : (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60 animate-pulse" />
                <span className="text-[11px] text-slate-400 font-mono tracking-wide">contact-form.jsx</span>
              </>
            )}
          </div>
          <div className="text-[9px] text-slate-600 font-mono border border-white/8 px-1.5 py-0.5 rounded">RHF_TERMINAL</div>
        </CardHeader>

        <CardContent className="p-0 font-mono text-[11px] sm:text-xs text-slate-200 bg-[#0d1117]">
          <div className="flex">
            <div className="flex flex-col pt-4 pb-4 px-3 bg-[#0d1117] border-r border-white/5 select-none min-w-[2.5rem] text-right">
              {codeLines.map((_, i) => (
                <div key={i} className={cn("h-6 text-[10px] leading-6", activeLine === i ? "text-amber-400/70" : "text-slate-700")}>
                  {i + 1}
                </div>
              ))}
            </div>

            <div className="flex-1 pt-4 pb-4 px-4 space-y-0 overflow-x-auto">
              {codeLines.map((line, index) => (
                <div key={index} className={cn("min-h-6 flex items-start leading-6 rounded transition-colors", activeLine === index ? "bg-amber-500/[0.06]" : "")}>
                  <span className="whitespace-pre-wrap flex-1">{highlightCode(line, index)}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter className="px-4 py-3 border-t border-white/8 bg-[#161b22]">
          <Button
            type="submit"
            disabled={isSending || isSent}
            className={cn(
              "w-full font-mono text-xs py-2.5 rounded-xl transition-all duration-300 active:scale-95 shadow-lg",
              isSent
                ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 shadow-emerald-500/5"
                : serverError
                ? "bg-red-500/10 text-red-300 border border-red-500/30"
                : "bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 hover:border-amber-400/50"
            )}
          >
            {isSending ? (
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 border-2 border-amber-400/20 border-t-amber-400 rounded-full animate-spin" />
                executing_submit()...
              </span>
            ) : isSent ? (
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                RETURN {`{ success: true }`}
              </span>
            ) : serverError ? (
               <span className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                RETRY_SEND()
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-3.5 h-3.5" />
                run_sendMessage()
              </span>
            )}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default ContactFormCard;

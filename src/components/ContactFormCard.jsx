import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from "lucide-react";
import { useState } from "react";

const ContactFormCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    // setFormData()
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    setIsSending(true);

    // Simulate API call
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);

      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    }, 1500);
  };

  const codeLines = [
    "// Contact form handler",
    "const sendMessage = async () => {",
    `  const name = "${formData.name}";`,
    `  const email = "${formData.email}";`,
    `  const message = "${formData.message}";`,
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

  const highlightCode = (line, lineIndex) => {
    if (!line.trim()) {
      return line;
    }

    if (line.trim().startsWith("//")) {
      return <span className="text-slate-500 italic">{line}</span>;
    }

    // Name field - line 3
    if (line.includes('const name = "') && lineIndex === 2) {
      return (
        <span>
          <span className="text-pink-400 font-medium">const</span>
          <span className="text-slate-200"> name = </span>
          <span className="text-green-300">"</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-transparent text-orange-300 outline-none border-b border-dashed border-amber-500/30 w-full sm:w-96 focus:border-amber-400 py-1.5"
            placeholder="Your Name"
          />

          <span className="text-green-300">";</span>
        </span>
      );
    }

    // Email field - line 4
    if (line.includes('const email = "') && lineIndex === 3) {
      return (
        <span>
          <span className="text-pink-400 font-medium">const</span>
          <span className="text-slate-200"> email = </span>
          <span className="text-green-300">"</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-transparent text-orange-300 outline-none border-b border-dashed border-amber-500/30 w-full sm:w-96 focus:border-amber-400 py-1.5"
            placeholder="your@email.com"
          />
          <span className="text-green-300">";</span>
        </span>
      );
    }

    // Message field - line 6 (the line with the actual message content)
    if (line.includes('const message = "') && lineIndex === 4) {
      return (
        <span>
          <span className="text-pink-400 font-medium">const</span>
          <span className="text-slate-200"> message = </span>
          <span className="text-green-300">"</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-transparent text-orange-300 outline-none border-b border-dashed border-amber-500/30 w-full sm:w-96 h-16 resize-y focus:border-amber-400 py-1.5"
            placeholder="Type your message here..."
          />

          <span className="text-green-300">";</span>
        </span>
      );
    }
    // Regular syntax highlighting for non-editable lines
    const parts = line.split(
      /(\b(?:const|return|import|from|async|await)\b|true|false|null|"[^"]*"|'[^']*'|`[^`]*`|\{|\}|\(|\)|\.[a-zA-Z_$][\w$]*\(|=[^{}]*)/g,
    );

    return parts
      .filter((part) => part && part !== "")
      .map((part, i) => {
        if (/^\s+$/.test(part)) return part;

        if (/^(const|return|import|from|async|await)$/.test(part)) {
          return (
            <span key={i} className="text-pink-400 font-medium">
              {part}
            </span>
          );
        }

        if (/^`[^`]*`$/.test(part)) {
          return (
            <span key={i} className="text-orange-300">
              {part}
            </span>
          );
        }

        if (/^["'].*["']$/.test(part)) {
          return (
            <span key={i} className="text-green-300">
              {part}
            </span>
          );
        }

        if (/^[{}()]$/.test(part)) {
          return (
            <span key={i} className="text-violet-300">
              {part}
            </span>
          );
        }

        if (/^\.[a-zA-Z_$][\w$]*\($/.test(part)) {
          return (
            <span key={i} className="text-cyan-300">
              {part}
            </span>
          );
        }

        return (
          <span key={i} className="text-slate-200">
            {part}
          </span>
        );
      });
  };

  return (
    <Card className="w-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden">
      {/* Header */}
      <CardHeader className="flex flex-row justify-between items-center px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/10">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></span>
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></span>
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></span>
        </div>
        <span className="text-[10px] sm:text-xs text-slate-400 font-mono truncate ml-2">
          contact-form.jsx
        </span>
        {isSent && (
          <div className="flex items-center gap-1 text-emerald-400 text-xs">
            <CheckCircle className="w-3 h-3" />
            <span>Message sent!</span>
          </div>
        )}
      </CardHeader>

      {/* Code Editor - This IS the form */}
      <CardContent className="p-3 sm:p-4 md:p-5 font-mono text-[10px] sm:text-xs md:text-sm text-slate-200 space-y-1 overflow-x-auto">
        {codeLines.map((line, index) => (
          <div key={index} className="flex gap-1.5 sm:gap-2">
            <span className="w-4 sm:w-5 md:w-6 text-slate-500 text-right select-none text-[9px] sm:text-xs">
              {index + 1}
            </span>
            <span className="whitespace-pre-wrap break-all sm:break-normal flex-1">
              {highlightCode(line, index)}
            </span>
          </div>
        ))}
      </CardContent>

      {/* Run Button */}
      <CardFooter className="px-3 sm:px-4 md:px-5 pb-3 sm:pb-4">
        <Button
          onClick={handleSubmit}
          disabled={isSending || isSent}
          className="w-full bg-amber-500/10 text-amber-300 border border-amber-500/30
                   hover:bg-amber-500/20 hover:border-amber-400/50
                   text-xs sm:text-sm py-2 sm:py-2.5
                   disabled:opacity-50 disabled:cursor-not-allowed
                   font-mono"
        >
          {isSending ? (
            <>
              <span className="animate-pulse">⟳</span>
              <span className="ml-2">sending_message...</span>
            </>
          ) : isSent ? (
            <>
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>message_sent!</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              <span>run_sendMessage()</span>
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContactFormCard;

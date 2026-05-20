import React, { useState, useRef, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Sider from "../Components/Sider";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  // App States
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const messagesEndRef = useRef(null);

  // Auto-scroll to the latest response
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isGenerating]);

  if (!token) {
    return <Navigate to="/login" />;
  }

  const handleSendMessage = async () => {
    if (!input.trim() || isGenerating) return;

    const userPrompt = input.trim();
    setInput(""); // Clear input box

    // 1. Append user prompt to chat interface
    setMessages((prev) => [...prev, { role: "user", text: userPrompt }]);
    setIsGenerating(true);

    // 2. Simulate AI response delay (Replace this with your actual API fetch)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: `This is a simulated professional response from your AI assistant to your prompt: "${userPrompt}". Replace this text block with your real API integrated responses!`,
        },
      ]);
      setIsGenerating(false);
    }, 1200);
  };

  const isChatActive = messages.length > 0;
  const Name = user.name;

  return (
    <div className="relative flex h-screen w-full overflow-hidden bg-[#080808] text-[#e3e3e3] font-sans selection:bg-blue-500/30">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(24,38,68,0.3),transparent_70%)]" />

      <Sider />

      <main className="relative z-10 flex-1 flex flex-col h-screen overflow-hidden">
        {!isChatActive && (
          <div className="flex-1 flex flex-col items-center justify-center px-4 animate-fadeIn">
            <div className="text-center space-y-6 mb-12">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight">
                  <span className="text-gray-400 font-light">Hi</span>{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {Name}
                    </span>
                    <svg
                      className="absolute -bottom-3 left-0 w-full"
                      height="4"
                      viewBox="0 0 200 4"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 2 L200 2"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#60A5FA" />
                          <stop offset="50%" stopColor="#A78BFA" />
                          <stop offset="100%" stopColor="#60A5FA" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="text-gray-400 font-light">,</span>
                </h1>
              </div>

              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-600"></div>
                <div className="flex items-center gap-2 text-gray-400">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <p className="text-base sm:text-lg md:text-xl text-gray-400 font-light tracking-wide">
                    what's on your mind today?
                  </p>
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div className="w-12 h-px bg-gradient-to-r from-gray-600 to-transparent"></div>
              </div>
            </div>

            {/* Input Box - Centered vertically in the middle */}
            <div className="w-full max-w-2xl mx-auto px-4">
              <div className="flex items-center bg-[#1e1f20] hover:bg-[#282a2c] transition-all duration-200 rounded-full pl-5 pr-3 py-2.5 min-h-[60px] w-full border border-white/10 focus-within:border-blue-500/50 focus-within:shadow-lg focus-within:shadow-blue-500/10 shadow-2xl">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 bg-transparent border-none outline-none focus:outline-none ring-0 focus:ring-0 placeholder-[#80868b] text-[#e3e3e3] text-[17px] px-0 py-1 placeholder:overflow-hidden placeholder:text-ellipsis placeholder:whitespace-nowrap"
                  placeholder={`How can I help you grow your leads today, ${Name}?`}
                  disabled={isGenerating}
                />

                <div className="flex items-center gap-2">
                  {input.trim() ? (
                    <button
                      onClick={handleSendMessage}
                      className="p-2.5 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all transform scale-100 duration-150 active:scale-95 shadow-md"
                      title="Send message"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button
                      className="text-[#c4c7c5] p-2.5 flex items-center justify-center rounded-full opacity-50 cursor-not-allowed"
                      disabled
                      title="Type a message to send"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {/* Suggestions chips */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
                {[
                  "Brainstorm ideas",
                  "Plan strategy",
                  "Analyze data",
                  "Write content",
                ].map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => setInput(suggestion)}
                    className="px-3 py-1.5 text-xs sm:text-sm bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-gray-300 transition-all duration-200 hover:scale-105"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: ACTIVE CHAT SCREEN - When messages exist */}
        {isChatActive && (
          <>
            {/* Scrollable Chat Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-8 md:py-12 flex justify-center custom-scrollbar">
              <div className="w-full max-w-3xl flex flex-col gap-8 pb-32">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 md:gap-6 items-start animate-fadeIn ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.role === "model" && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 flex-shrink-0 flex items-center justify-center shadow-md">
                        <span className="text-xs font-bold text-white">AI</span>
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] text-[16px] leading-relaxed tracking-wide ${
                        msg.role === "user"
                          ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-5 py-3 rounded-2xl text-[#e3e3e3] border border-white/10"
                          : "text-[#e3e3e3] pt-1"
                      }`}
                    >
                      {msg.text}
                    </div>

                    {msg.role === "user" && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0 flex items-center justify-center text-xs font-semibold text-white uppercase shadow-lg">
                        {Name.substring(0, 2)}
                      </div>
                    )}
                  </div>
                ))}

                {isGenerating && (
                  <div className="flex gap-4 md:gap-6 items-start">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-500 flex-shrink-0 flex items-center justify-center animate-pulse">
                      <span className="text-xs font-bold text-white">AI</span>
                    </div>
                    <div className="flex gap-1.5 items-center pt-3">
                      <div className="w-2 h-2 rounded-full bg-[#a8c7fa] animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#a8c7fa] animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#a8c7fa] animate-bounce"></div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Box - Fixed at bottom when chat is active */}
            <div className="w-full px-4 flex justify-center pb-6 bg-gradient-to-t from-[#080808] via-[#080808]/95 to-transparent pt-6">
              <div className="w-full max-w-2xl">
                <div className="flex items-center bg-[#1e1f20] hover:bg-[#282a2c] transition-all duration-200 rounded-full pl-5 pr-3 py-2.5 min-h-[60px] w-full border border-white/10 focus-within:border-blue-500/50 focus-within:shadow-lg focus-within:shadow-blue-500/10 shadow-2xl">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1 bg-transparent border-none outline-none focus:outline-none ring-0 focus:ring-0 placeholder-[#80868b] text-[#e3e3e3] text-[17px] px-0 py-1"
                    placeholder={`Ask Leads Locker AI, ${Name}...`}
                    disabled={isGenerating}
                  />

                  <div className="flex items-center gap-2">
                    {input.trim() ? (
                      <button
                        onClick={handleSendMessage}
                        className="p-2.5 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all transform scale-100 duration-150 active:scale-95 shadow-md"
                        title="Send message"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                          />
                        </svg>
                      </button>
                    ) : (
                      <button
                        className="text-[#c4c7c5] p-2.5 flex items-center justify-center rounded-full opacity-50 cursor-not-allowed"
                        disabled
                        title="Type a message to send"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Home;

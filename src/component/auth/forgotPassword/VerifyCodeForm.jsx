import { useEffect, useRef, useState } from "react";

const VerifyCodeForm = ({ email, onBack, onNext }) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(147); // 1:47
  const inputsRef = useRef([]);

  // Countdown timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // Only allow single digit

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }

    // Auto-submit if full and matches demo code
    if (newCode.join("").length === 6) {
      if (newCode.join("") === "123456") {
        console.log("Code verified: 123456");
        setTimeout(() => onNext(), 500); // Small delay for UX
      } else {
        alert("Invalid code. Try 123456 for demo.");
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (pasted.length > 0) {
      const newCode = pasted.split("").concat(Array(6).fill("")).slice(0, 6);
      setCode(newCode);
      newCode.forEach((digit, i) => {
        if (inputsRef.current[i]) inputsRef.current[i].value = digit;
      });
      // Focus last filled or next empty
      const nextFocus = pasted.length < 6 ? pasted.length : 5;
      inputsRef.current[nextFocus].focus();

      if (pasted.length === 6 && pasted === "123456") {
        setTimeout(() => onNext(), 500);
      }
    }
  };

  const isComplete = code.join("").length === 6;

  return (
    <div>
      <button
        onClick={onBack}
        className="text-sm text-gray-600 mb-6 flex items-center gap-2"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold mb-2">Enter Verification Code</h2>
      <p className="text-gray-600 mb-8">
        We've sent a 6-digit code to: <br />
        <strong>{email}</strong>
      </p>

      <form className="space-y-8">
        <div className="flex justify-center gap-3">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              ref={(el) => (inputsRef.current[index] = el)}
              className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          ))}
        </div>

        <div className="bg-gray-100 rounded-lg px-4 py-3 text-center text-gray-700">
          Time remaining: <strong>{formatTime(timeLeft)}</strong>
        </div>

        <button
          type="button"
          onClick={() => {
            const fullCode = code.join("");
            if (fullCode === "123456") {
              console.log("Code verified:", fullCode);
              onNext();
            } else {
              alert("Invalid code. Use 123456 for demo.");
            }
          }}
          disabled={!isComplete}
          className={`w-full py-3 rounded-lg font-medium transition flex items-center justify-center gap-2 ${
            isComplete
              ? "bg-black text-white hover:bg-gray-800 cursor-pointer"
              : "bg-[#CAD5E2] text-white cursor-not-allowed"
          }`}
        >
          Verify Code
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <path
              d="M3.90625 9.375H14.8438"
              stroke="currentColor"
              strokeWidth="1.5625"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.375 3.90625L14.8438 9.375L9.375 14.8438"
              stroke="currentColor"
              strokeWidth="1.5625"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>

      <p className="text-center text-sm text-gray-600 mt-6">
        Didn't receive the code?{" "}
        <button className="font-medium text-black hover:underline">
          Resend verification code
        </button>
      </p>
    </div>
  );
};

export default VerifyCodeForm;
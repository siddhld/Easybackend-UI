import React, { useState } from "react";
import axios from "axios";
import "./InputField.css";
import { useRouter } from "next/navigation";
import ParticlesBackground from "./ParticlesBackground";

interface InputFieldProps {
  onGenerate: (uniqueKey: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ onGenerate }) => {
  const [primaryKey, setPrimaryKey] = useState<string>("");
  const labelText = "Primary Key  [Optional]";
  const router = useRouter();

  const handleClick = async () => {
    await router.push("/docs");
  };

  console.log("Inside Generate");

  const handleGenerate = async () => {
    try {
      console.log("Inside Input Field - 1");
      const response = await axios.get(
        "https://api.easybackend.in/generateUniqueKey"
      );
      console.log(primaryKey);
      const uniqueKey = response.data;
      console.log(uniqueKey);
      await axios.post("https://api.easybackend.in/endpoint", {
        uniqueKey: uniqueKey,
        keyId: primaryKey || null,
      });
      onGenerate(uniqueKey);
    } catch (error) {
      console.error("Error generating unique key:", error);
    }
  };

  return (
    <div className="h-img flex flex-col items-center justify-center min-h-screen bg-cover bg-center">
      <ParticlesBackground />
      <div className="absolute docs">
        <button onClick={handleClick} className="converted-class">
          <svg
            className="lucide lucide-newspaper text-blue-400 dark:text-blue-600"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={2}
            stroke="#60A5FA"
            fill="none"
            viewBox="0 0 24 24"
            height="22"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
            <path d="M18 14h-8"></path>
            <path d="M15 18h-5"></path>
            <path d="M10 6h8v4h-8V6Z"></path>
          </svg>
          Docs
        </button>
      </div>
      <div className="p-2 wave-group">
        <input
          className="input"
          type="text"
          required
          value={primaryKey}
          onChange={(e) => setPrimaryKey(e.target.value)}
        />
        <span className="bar"></span>
        <label className="label">
          {Array.from(labelText).map((char, index) => (
            <span
              key={index}
              style={{ "--index": index } as React.CSSProperties}
              className="label-char"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </label>
      </div>
      <button onClick={handleGenerate} className="Generate px-4 py-1">
        <span>GENERATE</span>
      </button>
    </div>
  );
};

export default InputField;

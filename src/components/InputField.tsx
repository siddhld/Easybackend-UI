"use client";
import React, { useState } from "react";
import axios from "axios";
import "./InputField.css";
import ParticlesBackground from "./ParticlesBackground";
import { styleText } from "util";

interface InputFieldProps {
  onGenerate: (uniqueKey: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ onGenerate }) => {
  const [primaryKey, setPrimaryKey] = useState<string>("");
  const labelText = "Primary Key  [Optional]";

  console.log("Inside Generate");

  const handleGenerate = async () => {
    try {
      console.log("Inside Input Field - 1");
      const response = await axios.get(
        "http://13.126.166.196:9999/api/generateUniqueKey"
      );
      console.log(primaryKey);
      const uniqueKey = response.data;
      console.log(uniqueKey);
      await axios.post("http://13.126.166.196:9999/api/endpoint", {
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

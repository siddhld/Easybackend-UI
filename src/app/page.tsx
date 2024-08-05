"use client";

import React, { useState } from "react";
import InputField from "../components/InputField";
import EndpointsPage from "./endpoints";
import Transition from "../components/TransitionWrapper";
import SocialLinks from "../components/SocialLinks";
import LoadingSpinner from "../components/LoadingSpinner";

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [uniqueKey, setUniqueKey] = useState<string>("");

  const handleGenerate = (key: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUniqueKey(key);
    }, 800);
  };

  return (
    <Transition>
      {loading ? (
        <LoadingSpinner />
      ) : uniqueKey ? (
        <EndpointsPage uniqueKey={uniqueKey} />
      ) : (
        <InputField onGenerate={handleGenerate} />
      )}
      <SocialLinks />
    </Transition>
  );
};

export default HomePage;

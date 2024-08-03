// app/page.tsx
"use client";

import React, { useState } from "react";
import InputField from "../components/InputField";
import LoadingPage from "./loading";
import EndpointsPage from "./endpoints";
import Transition from "../components/TransitionWrapper";
// import SocialLinks from "../components/SocialLinks";

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [uniqueKey, setUniqueKey] = useState<string>("");

  const handleGenerate = (key: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUniqueKey(key);
    }, 2000);
  };

  return (
    <Transition>
      {/* <SocialLinks /> */}
      {loading ? (
        <LoadingPage />
      ) : uniqueKey ? (
        <EndpointsPage uniqueKey={uniqueKey} />
      ) : (
        <InputField onGenerate={handleGenerate} />
      )}
    </Transition>
  );
};

export default HomePage;

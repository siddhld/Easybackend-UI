"use client";
import React from "react";
import "./EndpointDisplay.css";
import { Inter } from "next/font/google";
import Transition from "./TransitionWrapper";

interface EndpointDisplayProps {
  uniqueKey: string;
  onBack: () => void;
}

const inter = Inter({ subsets: ["latin"] });

const EndpointDisplay: React.FC<EndpointDisplayProps> = ({
  uniqueKey,
  onBack,
}) => {
  const baseUrl = "https://easybackend.com/api";
  const url = `http://13.126.166.196:9999/api/${uniqueKey}`;
  const fullUrl = `${baseUrl}/${uniqueKey}`;

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
  };

  return (
    <Transition>
      <div className="imgg flex flex-col items-center h-screen bg-cover bg-center">
        <button
          onClick={onBack}
          className="back absolute top-6 right-8 px-4 py-2 rounded-md"
        >
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
          >
            <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
          </svg>
          <span>Back</span>
        </button>

        <div className="end-p flex flex-col items-center justify-center">
          <div>
            <div
              className={`input-container flex relative font-medium  ${inter.className}`}
            >
              <input
                className="absolute rounded-md"
                type="text"
                value={fullUrl}
                id="input"
                readOnly
              />

              <button onClick={() => handleCopy(url)} className="copy copy-btn">
                <span
                  className="tooltip"
                  data-text-initial="Copy"
                  data-text-end="Copied"
                ></span>
                <span>
                  <svg
                    className="clipboard"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="20"
                    height="20"
                    x="0"
                    y="0"
                    viewBox="0 0 6.35 6.35"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                  <svg
                    className="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="18"
                    height="18"
                    x="0"
                    y="0"
                    viewBox="0 0 24 24"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        fill="currentColor"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </span>
              </button>
            </div>

            {/* GET  Endpoints */}

            <div className="input-container-endpoint flex relative">
              <div className="get-method">GET</div>

              <input
                className="rounded-md get"
                type="text"
                value={fullUrl + "/{id}"}
                id="input"
                readOnly
              />

              <button
                onClick={() => handleCopy(url + "/{id}")}
                className="copy-end absolute copy-btn-end"
              >
                <span
                  className="tooltip"
                  data-text-initial="Copy to clipboard"
                  data-text-end="Copied!"
                ></span>
                <span>
                  <svg
                    className="clipboard"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="20"
                    height="20"
                    x="0"
                    y="0"
                    viewBox="0 0 6.35 6.35"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                  <svg
                    className="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="18"
                    height="18"
                    x="0"
                    y="0"
                    viewBox="0 0 24 24"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        fill="currentColor"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </span>
              </button>
            </div>

            {/* POST  Endpoints */}

            <div className="input-container-endpoint flex relative">
              <div className="post-method">POST</div>

              <input
                className="rounded-md post"
                type="text"
                value={fullUrl}
                id="input"
                readOnly
              />

              <button
                onClick={() => handleCopy(url)}
                className="copy-end absolute copy-btn-end"
              >
                <span
                  className="tooltip"
                  data-text-initial="Copy to clipboard"
                  data-text-end="Copied!"
                ></span>
                <span>
                  <svg
                    className="clipboard"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="20"
                    height="20"
                    x="0"
                    y="0"
                    viewBox="0 0 6.35 6.35"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                  <svg
                    className="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="18"
                    height="18"
                    x="0"
                    y="0"
                    viewBox="0 0 24 24"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        fill="currentColor"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </span>
              </button>
            </div>

            {/* PUT  Endpoints */}

            <div className="input-container-endpoint flex relative">
              <div className="put-method">PUT</div>

              <input
                className="rounded-md put"
                type="text"
                value={fullUrl + "/{id}"}
                id="input"
                readOnly
              />

              <button
                onClick={() => handleCopy(url + "/{id}")}
                className="copy-end absolute copy-btn-end"
              >
                <span
                  className="tooltip"
                  data-text-initial="Copy to clipboard"
                  data-text-end="Copied!"
                ></span>
                <span>
                  <svg
                    className="clipboard"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="20"
                    height="20"
                    x="0"
                    y="0"
                    viewBox="0 0 6.35 6.35"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                  <svg
                    className="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="18"
                    height="18"
                    x="0"
                    y="0"
                    viewBox="0 0 24 24"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        fill="currentColor"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </span>
              </button>
            </div>

            {/* Patch  Endpoints */}

            <div className="input-container-endpoint flex relative">
              <div className="patch-method">PATCH</div>

              <input
                className="rounded-md patch"
                type="text"
                value={fullUrl + "/{id}"}
                id="input"
                readOnly
              />

              <button
                onClick={() => handleCopy(url + "/{id}")}
                className="copy-end absolute copy-btn-end"
              >
                <span
                  className="tooltip"
                  data-text-initial="Copy to clipboard"
                  data-text-end="Copied!"
                ></span>
                <span>
                  <svg
                    className="clipboard"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="20"
                    height="20"
                    x="0"
                    y="0"
                    viewBox="0 0 6.35 6.35"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                  <svg
                    className="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="18"
                    height="18"
                    x="0"
                    y="0"
                    viewBox="0 0 24 24"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        fill="currentColor"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </span>
              </button>
            </div>

            {/* Delete  Endpoints */}

            <div className="input-container-endpoint flex relative">
              <div className="delete-method">DELETE</div>

              <input
                className="rounded-md delete"
                type="text"
                value={fullUrl + "/{id}"}
                id="input"
                readOnly
              />

              <button
                onClick={() => handleCopy(url + "/{id}")}
                className="copy-end absolute copy-btn-end"
              >
                <span
                  className="tooltip"
                  data-text-initial="Copy to clipboard"
                  data-text-end="Copied!"
                ></span>
                <span>
                  <svg
                    className="clipboard"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="20"
                    height="20"
                    x="0"
                    y="0"
                    viewBox="0 0 6.35 6.35"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                  <svg
                    className="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="18"
                    height="18"
                    x="0"
                    y="0"
                    viewBox="0 0 24 24"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        fill="currentColor"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </span>
              </button>
            </div>

            {/* Get All  Endpoints */}

            <div className="input-container-endpoint flex relative">
              <div className="getAll-method flex-none">GET ALL</div>

              <input
                className="rounded-md getall"
                type="text"
                value={fullUrl}
                id="input"
                readOnly
              />

              <button
                onClick={() => handleCopy(url)}
                className="copy-end absolute copy-btn-end"
              >
                <span
                  className="tooltip"
                  data-text-initial="Copy to clipboard"
                  data-text-end="Copied!"
                ></span>
                <span>
                  <svg
                    className="clipboard"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="20"
                    height="20"
                    x="0"
                    y="0"
                    viewBox="0 0 6.35 6.35"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                  <svg
                    className="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="18"
                    height="18"
                    x="0"
                    y="0"
                    viewBox="0 0 24 24"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        fill="currentColor"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </span>
              </button>
            </div>

            {/* Delete All  Endpoints */}

            <div className="input-container-endpoint flex relative">
              <div className="deleteAll-method flex-none">DELETE ALL</div>

              <input
                className="rounded-md deleteAll"
                type="text"
                value={fullUrl}
                id="input"
                readOnly
              />

              <button
                onClick={() => handleCopy(url)}
                className="copy-end absolute copy-btn-end"
              >
                <span
                  className="tooltip"
                  data-text-initial="Copy to clipboard"
                  data-text-end="Copied!"
                ></span>
                <span>
                  <svg
                    className="clipboard"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="20"
                    height="20"
                    x="0"
                    y="0"
                    viewBox="0 0 6.35 6.35"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                  <svg
                    className="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="18"
                    height="18"
                    x="0"
                    y="0"
                    viewBox="0 0 24 24"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                        fill="currentColor"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default EndpointDisplay;

"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow, coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import Link from "next/link";
import Image from "next/image";

const DocsComponent = () => {
  const [text1, setText1] = useState("Copy");
  const [text2, setText2] = useState("Copy");

  const exampleDocs = `{
    "id": "1",   // Default
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 30,
    "is_active": true
}`;

  const exampleDocs2 = `{
  "user_id": "1", // Custom
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 30,
  "is_active": true
}`;

  const simple = `{
    "user_id": "1",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 30,
    "is_active": true
}`;

  const complex = `{
    "order_id": "34",
    "customer": {
        "customer_id": "43",
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "phone": "+1234567890"
    },
    "order_date": "2023-01-15T13:45:30Z",
    "status": "Shipped",
    "items": [
        {
            "item_id": "A100",
            "product_name": "Smartphone",
            "quantity": 1,
            "price": 699.99
        },
        {
            "item_id": "B200",
            "product_name": "Laptop",
            "quantity": 1,
            "price": 999.99
        }
    ],
    "shipping_address": {
        "street": "123 Elm Street",
        "city": "Somewhere",
        "state": "CA",
        "postal_code": "90210",
        "country": "USA"
    },
    "billing_address": {
        "street": "456 Oak Street",
        "city": "Somewhere",
        "state": "CA",
        "postal_code": "90210",
        "country": "USA"
    },
    "payment_method": {
        "type": "Credit Card",
        "provider": "Visa",
        "card_number": "**** **** **** 1234",
        "expiry_date": "12/24"
    },
    "total_amount": 1859.95,
    "notes": "Please leave the package at the front door if not home."
}`;

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    if (id === 1) {
      setText1("Copied");
      setTimeout(() => setText1("Copy"), 1000);
    } else {
      setText2("Copied");
      setTimeout(() => setText2("Copy"), 1000);
    }
  };

  return (
    <div
      className={`bg-white text-gray-800`}
      style={{
        fontFamily: "'Poppins', sans-serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header className="w-full p-4 border-b border-gray-200 flex sticky top-0 z-10 bg-white  text-gray-800 ">
        <nav className="w-full flex flex-col lg:flex-row md:flex-row sm:flex-row items-start lg:items-center md:items-center sm:items-center lg:justify-between md:justify-between sm:justify-between justify-start">
          <ul>
            <li className="font-mono text-xl">
              <Link href="/">EasyBackend</Link>
            </li>
          </ul>
          <ul id="header-nav" className={`mr-6 sm:flex md:flex lg:flex`}>
            <li className="mr-5 mb-3 mt-5 sm:mb-0 sm:mt-0 md:mb-0 md:mt-0 lg:mb-0 lg:mt-0">
              <p>Documentation</p>
            </li>
          </ul>
        </nav>
      </header>

      <div className="flex flex-col md:flex-row lg:flex-row ">
        <nav
          className="flex ml-10 mt-7 md:fixed lg:fixed"
          data-spy="affix"
          data-offset-top="300"
          data-offset-bottom="200"
          role="navigation"
        >
          <ul className="nav">
            <li className="font-medium">
              <a>Overview</a>
              <ul className="nav">
                <li className="text-gray-600 pl-[20px] font-[400] border-l-[2px]">
                  <a href="#link2">Main features</a>
                </li>
                <li className="text-gray-600 pl-[20px] font-[400] border-l-[2px]">
                  <a href="#link3">Target audience</a>
                </li>
              </ul>
            </li>
            <li className="font-medium">
              <a href="#link4">Getting Started</a>
              <ul className="nav">
                <li className="text-gray-600 pl-[20px] font-[400] border-l-[2px]">
                  <a href="#link5">Unique ID Key Name</a>
                </li>
                <li className="text-gray-600 pl-[20px] font-[400] border-l-[2px]">
                  <a href="#link6">Generating APIs</a>
                </li>
                <li className="text-gray-600 pl-[20px] font-[400] border-l-[2px]">
                  <a href="#link7">APIs</a>
                </li>
              </ul>
            </li>
            <li className="font-medium">
              <a href="#link8">Get In Touch</a>
              <ul className="nav">
                <li className="text-gray-600 pl-[20px] font-[400] border-l-[2px]">
                  <a href="#link9">Social Links</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <div className="pl-5 md:pl-[250px] lg:pl-[250px]">
          <section>
            <div className="h-full mt-8" id="link2">
              <p className="font-medium text-2xl">Overview</p>
              <p className="leading-0 w-5/6">
                Easybackend is designed to automate the generation of APIs for
                CRUD operations without requiring backend coding knowledge. Each
                user receives a unique key Endpoint to facilitate secure and
                personalized API interactions. This project empowers frontend
                developers and non-technical users to perform database
                operations seamlessly, significantly reducing development time
                and effort.
              </p>
            </div>
          </section>

          <section className="border-l-[2px] border-gray-300 mt-5">
            <div className="h-full mt-3 ml-5" id="link3">
              <p className="font-normal text-xl mb-2">Main features</p>

              <li>Dynamic primary key assignment</li>
              <li>API generation for CRUD operations</li>
              <li>Support for JSON and form data</li>
            </div>
          </section>

          <section className="border-l-[2px] border-gray-300" id="link5">
            <div className="h-full mt-5 ml-5" id="link4">
              <p className="font-normal text-xl mb-2 ">Target audience</p>
              <li className="w-5/6">
                Developers, testers, and end-users who need a flexible and
                dynamic API for handling complex JSON data.
              </li>
            </div>
          </section>

          <section>
            <div className="h-full mt-10">
              <p className="font-medium text-2xl">Getting Started</p>
            </div>
          </section>

          <section className="border-l-[2px] border-gray-300 mt-5">
            <div className="h-full mt-3 ml-5">
              <p className="font-medium text-xl mb-2">Unique ID Key Name</p>
              <li className="w-5/6">
                You can provide your own custom primary key ID name in the input
                field for example <strong>"user_id"</strong>.
              </li>
              <li className="w-5/6">
                If no primary key ID name is provided, the default{" "}
                <strong>"id"</strong> will be used.
              </li>

              <Image
                src="/Unique_ID_key_Name.png"
                alt="Unique Key Id Name"
                width={300}
                height={200}
                className="rounded-lg my-5 mb-14"
              />

              <li className="w-5/6">
                If you provide your own{" "}
                <strong>custom primary key ID name</strong> for example
                <strong>"user_id"</strong>. Then it would look like the given
                below example.
              </li>

              <div className="relative max-w-2xl my-5 mb-14">
                <div className="bg-gray-100 text-gray-800 p-4 rounded-md mt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Example</span>
                  </div>
                  <div className="overflow-x-auto">
                    <SyntaxHighlighter language="jsx" style={coy}>
                      {exampleDocs2}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>

              <li className="w-5/6">
                If you won't provide any <strong>primary key ID name</strong>{" "}
                Then it would look like the given below example.
              </li>

              <div className="relative max-w-2xl my-5 mb-14" id="link6">
                <div className="bg-gray-100 text-gray-800 p-4 rounded-md mt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Example</span>
                  </div>
                  <div className="overflow-x-auto">
                    <SyntaxHighlighter language="jsx" style={coy}>
                      {exampleDocs}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="border-l-[2px] border-gray-300" id="link7">
            <div className="h-full mt-5 ml-5">
              <p className="font-medium text-xl mb-2">Generating APIs</p>
              <li className="w-5/6">
                After entering the primary key ID name, You can click the
                "Generate" button to create a new unique API.
              </li>
              <Image
                src="/Generate.png"
                alt="Generate button"
                width={300}
                height={200}
                className="rounded-lg my-5 mb-14"
              />
            </div>
          </section>
          <section className="border-l-[2px] border-gray-300">
            <div className="h-full mt-5 ml-5">
              <p className="font-medium text-xl mb-2">APIs</p>
              <li className="w-5/6">
                The generated API endpoint allows you to perform CRUD operations
                on your data. The application supports both JSON and form data.
                You can save complex JSON data structures using these APIs.
              </li>
              <li className="w-5/6">Click on the copy button and Enjoy.</li>
              <li className="w-5/6" id="link8">
                Thanks for choosing EasyBackend 💚 Have a Good Day!
              </li>

              <Image
                src="/APIs.png"
                alt="endpoints"
                width={600}
                height={400}
                className="rounded-lg my-5 mb-14"
              />
            </div>
          </section>

          <section id="#link9">
            <div className="h-full mt-10">
              <p className="font-medium text-2xl">Get In Touch</p>
            </div>
          </section>

          <section className="border-l-[2px] border-gray-300 mt-5">
            <div className="h-full mt-3 ml-5">
              <p className="font-medium text-xl mb-2">Social Links</p>
              <ul className="flex gap-4">
                <li>
                  <a
                    href="https://www.linkedin.com/in/siddharthhaldhar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "purple" }}
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/siddhld"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "purple" }}
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <section className="border-l-[2px] border-gray-300 mt-3">
          <div className="relative max-w-2xl ml-5">
            <p className="font-normal text-xl">JSON Data For Testing APIs</p>
            <div className="bg-gray-100 text-gray-800 p-4 rounded-md mt-2">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500">Simple Json Data:</span>
                <button
                  className="code bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-md"
                  onClick={() => copyToClipboard(simple, 1)}
                >
                  {text1}
                </button>
              </div>
              <div className="overflow-x-auto">
                <SyntaxHighlighter language="jsx" style={tomorrow}>
                  {simple}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

          <div className="relative max-w-2xl ml-5 mt-10">
            <div className="bg-gray-100 text-gray-800 p-4 rounded-md mt-2">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500">Complex Json Data:</span>
                <button
                  className="code bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-md"
                  onClick={() => copyToClipboard(complex, 2)}
                >
                  {text2}
                </button>
              </div>
              <div className="overflow-x-auto">
                <SyntaxHighlighter language="jsx" style={tomorrow}>
                  {complex}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer style={{ marginTop: "auto" }}>
        <div className=" bg-gray-900 h-18 py-1 px-1 mt-5">
          <div className="text-black flex flex-col md:items-center f-f-l pt-0">
            <div className="text-sm text-color my-5 f-f-l">
              <p tabIndex={0} className="text-white focus:outline-none">
                &copy; 2024 EasyBackend. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DocsComponent;

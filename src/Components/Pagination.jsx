"use client";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const Pagination = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Define pages for the sidebar
  const pages = [
    { path: "/" },
    { path: "/Introduction" },
    { path: "/Editors" },
    { path: "/Basic" },
    { path: "/Elements" },
    { path: "/Attribute" },
    { path: "/Headings" },
    { path: "/Paragraph" },
    { path: "/Styles" },
    { path: "/Formatting" },
    { path: "/Comments" },
    { path: "/Colors" },
    { path: "/Css" },
    { path: "/Links" },
    { path: "/Images" },
    { path: "/Favicon" },
    { path: "/Pagetitle" },
    { path: "/Table" },
    { path: "/List" },
    { path: "/Blockinline" },
    { path: "/Div" },
    { path: "/Iframe" },
    { path: "/Javascript" },
    { path: "/Filepath" },
    { path: "/Head" },
    { path: "/Layout" },
    { path: "/Responsive" },
    { path: "/Comptercode" },
    { path: "/Semantics" },
    { path: "/Styleguide" },
    { path: "/Entities" },
    { path: "/Symbol" },
    { path: "/Emojis" },
    { path: "/Charsets" },
    { path: "/URLencode" },
    { path: "/HtmlXhtml" },
    { path: "/Form" },
    { path: "/FormAttribute" },
    { path: "/FormElement" },
    { path: "/InputType" },
    { path: "/InputAttribute" },
    { path: "/InputFormAttribute" },
    { path: "/Canvas"},
    { path: "/SVG"} ,
    { path: "/Media"}, 
    { path: "/video"},
    { path: "/Audio"},
    { path: "/Plugins"},
    { path: "/Youtube"},
    { path: "/Geolocation"},
    { path: "/Dragdrop"},
    { path: "/Webstorage"},
    { path: "/Webworkers"},
     {path: "/SSE",}  
     
  
      
  


  ];

  // Find the current page index
  const currentIndex = pages.findIndex((page) => page.path === pathname);

  // Handlers for Next and Previous buttons
  const handleNext = () => {
    if (currentIndex < pages.length - 1) {
      router.push(pages[currentIndex + 1].path);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      router.push(pages[currentIndex - 1].path);
    }
  };

  return (
    <main className="flex justify-between items-center mt-8 p-4">
      <button
        className={`px-4 py-2 text-white  font-medium ${
          currentIndex === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-orange-600 hover:bg-orange-700"
        }`}
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        Previous
      </button>
      <button
        className={`px-4 py-2 text-white rounded-lg font-medium ${
          currentIndex === pages.length - 1
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-orange-600 hover:bg-orange-700"
        }`}
        onClick={handleNext}
        disabled={currentIndex === pages.length - 1}
      >
        Next
      </button>
    </main>
  );
};

export default Pagination;



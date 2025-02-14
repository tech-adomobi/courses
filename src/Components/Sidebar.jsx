import React from 'react';
import Sidebarlink from '../Components/Sidebarlink';

const menuItems = [
  {
    title: "HTML Tutorials",
    list: [
      { title: "HTML HOME", path: "/" },
      { title: "HTML Introduction", path: "/Introduction" },
      { title: "HTML Editors", path: "/Editors" },
      { title: "HTML Basic", path: "/Basic" },
      { title: "HTML Elements", path: "/Elements" },
      { title: "HTML Attributes", path: "/Attribute" },
      { title: "HTML Headings", path: "/Headings" },
      { title: "HTML Paragraphs", path: "/Paragraph" },
      { title: "HTML Styles", path: "/Styles" },
      { title: "HTML Formatting", path: "/Formatting" },
      { title: "HTML Comments", path: "/Comments" },
      { title: "HTML Colors", path: "/Colors" },
      { title: "HTML CSS", path: "/Css" },
      { title: "HTML Links", path: "/Links" },
      { title: "HTML Images", path: "/Images" },
      { title: "HTML Favicon", path: "/Favicon" },
      { title: "HTML Page Title", path: "/Pagetitle" },
      { title: "HTML Table", path: "/Table" },
      { title: "HTML List", path: "/List" },
      { title: "HTML Block & Inline", path: "/Blockinline" },
      { title: "HTML Div", path: "/Div" },
      { title: "HTML Classes", path: "/Classes" },
      { title: "HTML ID", path: "/Id" },
      { title: "HTML Iframe", path: "/Iframe" },
      { title: "HTML JavaScript", path: "/Javascript_html" },
      { title: "HTML File Path", path: "/Filepath" },
      { title: "HTML Head", path: "/Head" },
      { title: "HTML Layout", path: "/Layout" },
      { title: "HTML Responsive", path: "/Responsive" },
      { title: "HTML Computercode", path: "/Computercode" },
      { title: "HTML Semantics", path: "/Semantic" },
      { title: "HTML Style Guide", path: "/Styleguide" },
      { title: "HTML Entities", path: "/Entities" },
      { title: "HTML Symbols", path: "/Symbols" },
      { title: "HTML Emojis", path: "/Emojis" },
      { title: "HTML Charset", path: "/Charset" },
      { title: "HTML URL Encode", path: "/URLencode" },
      { title: "HTML ver XHTML", path: "/HtmlXhtml" },
    ],
  },
  {
    title: "HTML Forms",
    list: [
      {
        title: "HTML Form",
        path: "/Form",
    
      },
      {
        title: "HTML Form Attribute",
        path: "/FormAttribute",
     
      },
      {
        title: "HTML Form Elements",
        path: "/FormElement",
  
      },
      {
        title: "HTML Input Type",
        path: "/InputType",
  
      },
      {
        title: "HTML Input Attributes",
        path: "/InputAttribute",
  
      },
      {
        title: "Input Form Attribute",
        path: "/InputFormAttribute",
  
      },
    ],
  },
  {
    title: "HTML Graphics",
    list: [
      {
        title: "HTML Canvas",
        path: "/Canvas",
    
      },
      {
        title: "HTML SVG",
        path: "/SVG",
     
      },
    
    ],
  },
  {
    title: "HTML Media",
    list: [
      {
        title: "HTML Media",
        path: "/Media",
    
      },
      {
        title: "HTML Video",
        path: "/video",
     
      },
      {
      title: "HTML Audio ",
      path: "/Audio",
   
    },
    {
      title: "HTML Plug-ins ",
      path: "/Plugins",
   
    },
    {
      title: "HTML YouTube ",
      path: "/Youtube",
   
    },
    
    
    ],
  },
  {
    title: "HTML APIs",
    list: [
      {
        title: "HTML GeoLocation",
        path: "/Geolocation",
    
      },
      {
        title: "HTML Drag/Drop",
        path: "/Dragdrop",
     
      },
      {
      title: "HTML Web Storage ",
      path: "/Webstorage",
   
    },
    {
      title: "HTML Web Workers ",
      path: "/Webworkers",
   
    },
    {
      title: "HTML SSE ",
      path: "/SSE",
   
    },
    
    
    ],
  },
  
];


const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 h-screen bg-gray-200 text-black p-6 sticky top-16 overflow-y-auto shadow-md">
      <nav>
        <ul className="space-y-6">
          {menuItems.map((category) => (
            <li key={category.title}>
              <span className="block text-lg pl-2 text-[21px] text-gray-800 mb-2">
                {category.title}
              </span>
              <ul className="pl-4 border-l-2 border-gray-300 text-[15px]">
                {category.list.map((item) => (
                  <li key={item.title}>
                    <Sidebarlink item={item} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

'use client'; 

import React, { Suspense } from "react"; 
//import styled from 'styled-components'; 
//import type { Metadata } from "next";
import "bootstrap-icons/font/bootstrap-icons.css"; 
import "./css/bootstrap-icons.css";
import Header from "./Header"; 
import "./css/googleFonts.css"; 
import "./css/globals.css";
import "./css/bootstrap.min.css"; 
import "./css/lightbox.min.css";  
import "./css/owlcarousel.min.css"; 
import "./css/all.css";
import Footer from "./Footer";    
import "./css/recipe.css";



const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <html>
      <body suppressHydrationWarning={true}>
        <Suspense fallback={<div></div>}>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </Suspense>
      </body>
    </html>
    </>
  );
};

export default Layout;

import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <span className="font-bold text-lg tracking-tight">Deepak R</span>
          <p className="text-sm text-muted-foreground mt-1">Computer Science Engineering Student | Python Developer | AI Enthusiast</p>
        </div>
        <div className="text-sm text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Deepak R. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
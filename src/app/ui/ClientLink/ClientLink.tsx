"use client";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

type ClientLinkType = {
  children: React.ReactNode;
  activeClass?: string;
  to: string;
  className?: string;
};

export default function ClientLink({
  className,
  activeClass,
  to,
  children,
}: ClientLinkType) {
  return (
    <ScrollLink
      activeClass={activeClass}
      to={to}
      className={className}
      spy={true}
      smooth={true}
    >
      {children}
    </ScrollLink>
  );
}

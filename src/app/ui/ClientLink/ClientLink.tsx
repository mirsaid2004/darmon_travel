"use client";
import React, { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Link as ScrollLink, scroller } from "react-scroll";
import Link from "next/link";

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
  const pathname = usePathname();

  return pathname.includes("tour") ? (
    <Link href={pathname.slice(0, 3) + "/#" + to} className={className}>
      {children}
    </Link>
  ) : (
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

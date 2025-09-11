"use client";
import type { Container } from "@lib/types/components";
import { cn } from "@lib/utils/cn.utils";
import React from "react";

export default function Container({id, className, children} : Container) {
       return (
              <section id={id} className={cn("max-h-screen flex-auto p-6 overflow-y-auto", className)}>
                     {children}
              </section>
       );
}

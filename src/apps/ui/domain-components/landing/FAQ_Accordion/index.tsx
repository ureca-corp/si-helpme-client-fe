"use client";

import * as React from "react";

import { ChevronDown } from "lucide-react";

import { cn } from "@/shadcn/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

const FaqAccordion = AccordionPrimitive.Root;

const FaqAccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props} />
));
FaqAccordionItem.displayName = "FaqAccordionItem";

const FaqAccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between rounded-xl px-4 py-4 text-left font-light transition-all duration-200",
        "hover:bg-gray-50 hover:text-neutral-500",
        "text-neutral-950",
        "data-[state=open]:rounded-full data-[state=open]:border-gray-200 data-[state=open]:bg-gray-100 data-[state=open]:font-bold data-[state=open]:text-neutral-500",
        "[&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown
        width={16}
        height={16}
        strokeWidth={2}
        className="shrink-0 text-neutral-400 opacity-60 transition-transform duration-200"
        aria-hidden="true"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
FaqAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const FaqAccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all"
    {...props}
  >
    <div
      className={cn("px-4 py-4 leading-relaxed whitespace-pre-wrap", className)}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));

FaqAccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  FaqAccordion,
  FaqAccordionContent,
  FaqAccordionItem,
  FaqAccordionTrigger,
};

import * as React from "react";

import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/shadcn/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

// 반응형 Accordion Root 컴포넌트
function Landing_ResponsiveAccordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root data-slot="responsive-accordion" {...props} />
  );
}

// 반응형 Accordion Item 컴포넌트
function Landing_ResponsiveAccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="responsive-accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  );
}

// 반응형 Accordion Trigger 컴포넌트
function Landing_ResponsiveAccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="responsive-accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          // 반응형 텍스트 크기: 모바일에서는 text-sm, 데스크톱에서는 text-lg
          "text-sm md:text-lg",
          // 반응형 패딩: 모바일에서는 py-4, 데스크톱에서는 py-6
          "py-4 md:py-6",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 md:size-5" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

// 반응형 Accordion Content 컴포넌트
function Landing_ResponsiveAccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="responsive-accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
      {...props}
    >
      <div
        className={cn(
          "pt-0 pb-4 md:pb-6",
          // 반응형 텍스트 크기: 모바일에서는 text-sm, 데스크톱에서는 text-base
          "text-sm md:text-base",
          // 반응형 라인 높이: 데스크톱에서는 더 여유로운 라인 높이
          "leading-relaxed md:leading-loose",
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export {
  Landing_ResponsiveAccordion,
  Landing_ResponsiveAccordionContent,
  Landing_ResponsiveAccordionItem,
  Landing_ResponsiveAccordionTrigger,
};

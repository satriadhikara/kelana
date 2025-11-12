"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 justify-between items-center gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        <motion.div
          animate={{
            x: isHovered ? 15 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
          className="flex items-center gap-4"
        >
          <motion.span
            animate={{
              scale: isHovered ? 1.05 : 1,
              color: isHovered ? "#FF5721" : "#000000",
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            style={{
              textShadow: isHovered ? "0 0 8px rgba(255, 87, 33, 0.5)" : "none",
            }}
            className="text-4xl font-semibold"
          >
            {children}
          </motion.span>
        </motion.div>

        <motion.div
          animate={{
            rotate: isHovered ? -90 : 0,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
        >
          <ChevronDownIcon className="text-muted-foreground size-7 shrink-0 [[data-state=open]>&]:rotate-180" />
        </motion.div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

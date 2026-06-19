'use client';

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  highlights: string[];
  className?: string;
  delay?: number;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  highlights,
  className,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay }}
    >
      <Card
        className={cn(
          "group h-full card-hover border-border/50 bg-panel/80 backdrop-blur",
          className
        )}
      >
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10 border border-blue/20 group-hover:border-blue/40 transition-colors">
              <Icon className="h-5 w-5 text-blue" />
            </div>
            <ArrowUpRight className="h-4 w-4 text-text-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </div>

          <h3 className="text-base font-semibold text-text-primary mb-2">{title}</h3>
          <p className="text-sm text-text-muted leading-relaxed mb-4">{description}</p>

          <div className="flex flex-wrap gap-1.5">
            {highlights.map((h) => (
              <Badge key={h} variant="default" className="text-[11px]">
                {h}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

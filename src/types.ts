import type { IconName } from "./data/siteContent";

export type CTA = {
  label: string;
  target?: string;
  href?: string;
  variant?: "primary" | "secondary";
};

export type Metric = {
  value: string;
  label: string;
  icon?: IconName;
};

export type CardItem = {
  title: string;
  description?: string;
  icon: IconName;
};

import { MonitorCheck, MonitorX, GraduationCap, Briefcase, LucideIcon } from "lucide-react";

export type Feature = {
  title: string;
  desc: string;
  icon: LucideIcon; // Added icon type
};

export const features: Feature[] = [
  {
    title: "Tech Professionals",
    desc: "Enhance expertise, embrace tech, drive innovation.",
    icon: MonitorCheck,
  },
  {
    title: "Non-Tech Professionals",
    desc: "Adapt digitally, collaborate in tech environments.",
    icon: MonitorX,
  },
  {
    title: "Emerging Professionals",
    desc: "Develop powerful skills for rapid career growth.",
    icon: GraduationCap,
  },
  {
    title: "Senior Professionals",
    desc: "Strengthen leadership, enhance strategic decisions.",
    icon: Briefcase,
  },
];

export type Testimonial = {
  name: string;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ravi Kumar",
    text: "This platform helped our team grow rapidly!",
  },
  {
    name: "Anjali Sharma",
    text: "Excellent learning experience.",
  },
];
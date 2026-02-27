// Home page data - extracted for server-side optimization
import React from "react";
import {
  PlumbingIcon,
  ElectricalIcon,
  HVACIcon,
  CarpentryIcon,
  PaintingIcon,
  CleaningIcon,
  LandscapingIcon,
  CheckIcon,
} from "@/components/icons";

export const SERVICES = [
  {
    icon: <PlumbingIcon />,
    title: "Plumbing",
    desc: "Expert plumbers for leaks, installations, pipe repairs and bathroom renovations.",
  },
  {
    icon: <ElectricalIcon />,
    title: "Electrical",
    desc: "Certified electricians for wiring, panel upgrades, lighting and safety inspections.",
  },
  {
    icon: <HVACIcon />,
    title: "HVAC",
    desc: "Heating & cooling experts for AC repair, furnace service, and duct cleaning.",
  },
  {
    icon: <CarpentryIcon />,
    title: "Carpentry",
    desc: "Skilled carpenters for furniture, cabinets, doors and custom woodwork.",
  },
  {
    icon: <PaintingIcon />,
    title: "Painting",
    desc: "Professional painters for interior/exterior work, drywall and texture finishes.",
  },
  {
    icon: <CleaningIcon />,
    title: "Cleaning",
    desc: "Deep cleaning, carpet cleaning, pressure washing and post-renovation cleanup.",
  },
  {
    icon: <LandscapingIcon />,
    title: "Landscaping",
    desc: "Lawn care, garden design, hardscaping and seasonal maintenance services.",
  },
];

export const FEATURES = [
  {
    icon: <CheckIcon />,
    title: "Verified Professionals",
    desc: "All technicians are background-checked and rated by customers.",
  },
  {
    icon: <CheckIcon />,
    title: "Instant Booking",
    desc: "Book appointments in minutes with transparent pricing.",
  },
  {
    icon: <CheckIcon />,
    title: "Guarantee & Reviews",
    desc: "Work guaranteed. Real reviews from verified customers.",
  },
];

export const STATS = [
  { label: "Active Technicians", value: "100+" },
  { label: "Services Available", value: "50+" },
  { label: "Happy Customers", value: "5000+" },
];

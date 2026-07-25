import { 
  FiWind, 
  FiSun, 
  FiZap, 
  FiAlertTriangle, 
  FiShield, 
  FiCheckCircle, 
  FiWifi, 
  FiBell,
  FiTool,
  FiClock,
  FiLock
} from "react-icons/fi";

export const servicesData = [
  // RESIDENTIAL
  {
    id: "air-conditioning",
    category: "residential",
    title: "Air Conditioning",
    icon: FiWind,
    description: "Sparky Indro specializes in the supply and installation of high-efficiency air conditioning systems for your home. We will help you select the perfect unit for your space, ensuring maximum comfort through Brisbane's hottest summers and chilliest winter nights.",
    features: [
      "Split System Installation",
      "Ducted Air Conditioning",
      "System Upgrades",
      "Energy Efficiency Advice",
      "Regular Maintenance",
      "Filter Cleaning"
    ]
  },
  {
    id: "led-lighting",
    category: "residential",
    title: "LED Lighting Specialists",
    icon: FiSun,
    description: "We are Western Suburbs LED lighting installation specialists. Sparky Indro provides cost-saving lighting solutions that will WOW you.",
    features: [
      "Custom Lighting Design",
      "Energy-Saving LED Upgrades",
      "Outdoor & Landscape Lighting",
      "Downlights & Pendants",
      "Dimmer Switches",
      "Smart Lighting"
    ],
    beforeImage: "/lighting_before.png",
    afterImage: "/lighting_after.png"
  },
  {
    id: "lights-fans-power",
    category: "residential",
    title: "Lights, Fans & Power",
    icon: FiZap,
    description: "Looking to upgrade your lighting systems, install new power units, or add ceiling fans to your property? We deliver the safest solutions tailored for your environment.",
    features: [
      "Ceiling Fan Installations",
      "Additional Powerpoints",
      "Exhaust Fans",
      "USB Wall Outlets",
      "Outdoor Power Solutions",
      "Appliance Installations"
    ]
  },
  {
    id: "smoke-alarms",
    category: "residential",
    title: "Smoke Alarms",
    icon: FiBell,
    description: "The safety of your family is paramount. Sparky Indro can help you find and install the perfect, QLD-compliant smoke alarm solutions.",
    features: [
      "Photoelectric Smoke Alarms",
      "Hardwired Installations",
      "Interconnected Systems",
      "QLD Compliance Upgrades",
      "Annual Alarm Testing",
      "Battery Replacements"
    ]
  },
  {
    id: "data-cabling",
    category: "residential",
    title: "Telephone, TV & Data",
    icon: FiWifi,
    description: "We can handle all your telephone wiring, data cabling, computer network setups, and TV antenna needs for a seamless home office or entertainment setup.",
    features: [
      "Data Cabling (Cat 6)",
      "TV Antenna Installation",
      "NBN Point Relocation",
      "Home Office Networking",
      "Smart TV Wall Mounting",
      "Telephone Point Wiring"
    ]
  },

  // COMMERCIAL
  {
    id: "commercial-fitouts",
    category: "commercial",
    title: "Commercial Fit-outs",
    icon: FiTool,
    description: "From retail shops to large office spaces, we provide comprehensive electrical fit-out services tailored to your business needs, minimizing downtime and maximizing efficiency.",
    features: [
      "Office & Retail Fit-outs",
      "Shop Defits",
      "Custom Lighting Layouts",
      "Dedicated Power Circuits",
      "Energy Efficiency Audits",
      "Compliance Testing"
    ]
  },
  {
    id: "3-phase-power",
    category: "commercial",
    title: "3-Phase Power Upgrades",
    icon: FiZap,
    description: "Ensure your commercial machinery and high-load equipment runs safely and efficiently with a robust 3-phase power installation or upgrade.",
    features: [
      "3-Phase Switchboard Upgrades",
      "Machinery Connections",
      "Load Balancing",
      "Industrial Power Solutions",
      "Surge Protection",
      "Fault Diagnostics"
    ]
  },
  {
    id: "scheduled-maintenance",
    category: "commercial",
    title: "Scheduled Maintenance",
    icon: FiClock,
    description: "Keep your business compliant and safe with regular, preventative electrical maintenance programs designed specifically for your commercial property.",
    features: [
      "Test & Tagging",
      "Emergency Light Testing",
      "RCD Safety Switch Testing",
      "Thermal Imaging",
      "Compliance Reporting",
      "Preventative Care"
    ]
  },
  {
    id: "security-lighting",
    category: "commercial",
    title: "Security & Outdoor Lighting",
    icon: FiLock,
    description: "Protect your premises and improve visibility with strategic commercial security lighting, floodlights, and robust outdoor electrical solutions.",
    features: [
      "Motion Sensor Lights",
      "Car Park Lighting",
      "Floodlight Installation",
      "CCTV Power Supplies",
      "Timer Switches",
      "Vandal-Resistant Fittings"
    ]
  },

  // EMERGENCY
  {
    id: "faults-repairs",
    category: "emergency",
    title: "24/7 Faults & Repairs",
    icon: FiAlertTriangle,
    description: "From simple electrical repairs to complete wiring overhauls, Sparky Indro is available 24/7 to ensure your power is restored quickly and safely.",
    features: [
      "24/7 Emergency Dispatch",
      "Fault Finding & Diagnostics",
      "Wiring Overhauls",
      "Flickering Light Fixes",
      "Short Circuit Repairs",
      "Storm Damage Make-Safe"
    ]
  },
  {
    id: "switchboards",
    category: "emergency",
    title: "Switchboard Upgrades & Fixes",
    icon: FiShield,
    description: "Old switchboards are a major fire hazard. We upgrade outdated ceramic fuses to modern safety switches to ensure your property meets current Australian standards.",
    features: [
      "Switchboard Upgrades",
      "Safety Switch (RCD) Testing",
      "Mains Upgrades",
      "Faulty Fuse Replacements",
      "Capacity Upgrades",
      "Asbestos Board Removal"
    ],
    beforeImage: "/switchboard_before.png",
    afterImage: "/switchboard_after.png"
  },
  {
    id: "safety-inspections",
    category: "emergency",
    title: "Safety Inspections",
    icon: FiCheckCircle,
    description: "Notice a burning smell or sparks? We carry out urgent, comprehensive electrical safety reports to identify and eliminate hazards immediately.",
    features: [
      "Urgent Hazard Identification",
      "Thermal Imaging Checks",
      "Detailed Safety Reports",
      "Rental Property Compliance",
      "Insurance Reporting",
      "Immediate Make-Safe"
    ]
  }
];

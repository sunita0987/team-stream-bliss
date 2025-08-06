import {
  Analytics,
  CheckArrow,
  Cloud,
  Community,
  Editing,
  Security,
  ShareX,
  Sharing,
  Streaming,
  EffortlessIcon,
  FastuploadIcon,
  SecureIcon,
  ShareIcon,
  ProtectedIcon,
  CompliantIcon,
} from "./icon";
import memberBoy from "../assets/images/member-boy.png";
import memberGirl from "../assets/images/member-girl.png";

export const COMPARE_FEATURE_DATA = [
  {
    feature: "Upload limit",
    free: "250MB",
    pro: "10GB",
    creator: "Unlimited",
  },
  {
    feature: "Video retention",
    free: "180 Days",
    pro: "Unlimited",
    creator: "Unlimited",
  },
  {
    feature: "Basic analytics",
    free: "Basic",
    pro: "Advanced",
    creator: "Advanced",
  },
  {
    feature: "Content",
    free: "Ad-supported content",
    pro: "Ad-free content delivery",
    creator: "Ad-free content delivery",
  },
  {
    feature: "Priority support",
    free: "No",
    pro: "Yes",
    creator: "Yes",
  },
];

export const MEMBERS_DATA = [
  {
    text: "Images, videos, docs — all in one place, perfectly organized. I used to juggle between Dropbox, Google Drive, and WeTransfer. Now it’s just one tab, and it works like magic.",
    name: "Nadine K.",
    role: "Marketing Consultant",
    image: memberBoy,
  },
  {
    text: "As a small design agency, we’ve tried countless platforms, but nothing matches the speed and ease of The Creative Cloud for Everyone. File sharing is instant, and collaborating on large video projects has never been smoother",
    name: "Amanda R.",
    role: "Creative Director",
    image: memberGirl,
  },
  {
    text: "Images, videos, docs — all in one place, perfectly organized. I used to juggle between Dropbox, Google Drive, and WeTransfer. Now it’s just one tab, and it works like magic.",
    name: "Nadine K.",
    role: "Marketing Consultant",
    image: memberBoy,
  },
  {
    text: "As a small design agency, we’ve tried countless platforms, but nothing matches the speed and ease of The Creative Cloud for Everyone. File sharing is instant, and collaborating on large video projects has never been smoother",
    name: "Amanda R.",
    role: "Creative Director",
    image: memberGirl,
  },
];

export const PRICING_DATA = [
  {
    text: "Free",
    amount: "$00",
    month: "/month",
    para: "Perfect for personal use",
    icon: CheckArrow,
    list1: "250mb per upload limit",
    list2: "Unlimited video retention",
    list3: "Advanced analytics",
    list4: "Ad-free content delivery",
    list5: "Priority support",
  },
  {
    text: "Pro",
    popular: "Most Popular",
    amount: "$10",
    month: "/month",
    para: "For individual creators",
    icon: CheckArrow,
    list1: "Up to 10GB per video",
    list2: "Unlimited video retention",
    list3: "Advanced analytics",
    list4: "Ad-free content delivery",
    list5: "Priority support",
  },
  {
    text: "Creator",
    amount: "$25",
    month: "/month",
    para: "For content groups",
    icon: CheckArrow,
    list1: "Unlimited video size",
    list2: "Unlimited video retention",
    list3: "Advanced analytics",
    list4: "Ad-free content delivery",
    list5: "Priority support",
  },
];

export const YEARLYPRICING_DATA = [
  {
    text: "Free",
    amount: "$0",
    month: "/month",
    para: "Perfect for personal use",
    save: "No savings on Free plan",
    icon: CheckArrow,
    list1: "550mb per upload limit",
    list2: "Unlimited video retention",
    list3: "Advanced analytics",
    list4: "Ad-free content delivery",
    list5: "Priority support",
  },
  {
    text: "Pro",
    popular: "Most Popular",
    amount: "$96",
    month: "/month",
    para: "For individual creators",
    save: "Save 30% with yearly billing",
    icon: CheckArrow,
    list1: "Up to 30GB per video",
    list2: "Unlimited video retention",
    list3: "Advanced analytics",
    list4: "Ad-free content delivery",
    list5: "Priority support",
  },
  {
    text: "Creator",
    amount: "$240",
    month: "/month",
    para: "For content groups",
    save: "Save 40% with yearly billing",
    icon: CheckArrow,
    list1: "Unlimited 4k video size",
    list2: "Unlimited video retention",
    list3: "Advanced analytics",
    list4: "Ad-free content delivery",
    list5: "Priority support",
  },
];

export const GET_STARTED_LIST = [
  {
    img: FastuploadIcon,
    title: "Easy Upload",
    description: "Drag & drop your files in seconds",
  },
  {
    img: SecureIcon,
    title: "Fast Delivery",
    description: "Global CDN for instant access",
  },
  {
    img: ShareIcon,
    title: "Always Online",
    description: "99.9% uptime guarantee",
  },
];

export const SECURITY_FEATURES = [
  {
    img: SecureIcon,
    title: "Secure Storage",
    description: "End-to-end encryption for your data",
  },
  {
    img: ProtectedIcon,
    title: "SSL Protected",
    description: "256-bit SSL encryption",
  },
  {
    img: CompliantIcon,
    title: "GDPR Compliant",
    description: "Your data is protected by EU law",
  },
];

export const EVERYTHING_DATA = [
  {
    icon: Streaming,
    heading: "HD Streaming",
    para: "Stream your content in high quality without buffering.",
  },
  {
    icon: Cloud,
    heading: "Cloud Storage",
    para: "Store your videos securely in the cloud with unlimited storage space.",
  },
  {
    icon: ShareX,
    heading: "Image Upload with ShareX",
    para: "Upload images instantly using our ShareX configuration for seamless.",
  },
  {
    icon: Sharing,
    heading: "Private Sharing",
    para: "Share your videos privately with selected viewers. ",
  },
  {
    icon: Security,
    heading: "Advanced Security",
    para: "End-to-end encryption ensures your content remains protected. ",
  },
  {
    icon: Editing,
    heading: "Basic Editing",
    para: "Trim, crop, and add filters to your videos directly in the app. ",
  },
  {
    icon: Sharing,
    heading: "Cross-platform Sharing",
    para: "Easily share your content across all major social platforms. ",
  },
  {
    icon: Streaming,
    heading: "HD Streaming",
    para: "Stream your content in high quality without buffering.",
  },
  {
    icon: Community,
    heading: "Community",
    para: "Connect with like-minded creators and build your audience through our community features. ",
  },
  {
    icon: Analytics,
    heading: "Analytics",
    para: "Track your video performance with detailed viewership statistics and audience insights.",
  },
];

export const HEADER_LIST = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "How it Works",
    link: "#work",
  },
  {
    title: "Features",
    link: "#features",
  },
  {
    title: "Pricing",
    link: "#pricing",
  },
];

export const ACTION_DATA = [
  {
    icon: EffortlessIcon,
    title: "Effortless Uploads",
    description: "Drag, drop, and your video is ready to share in seconds.",
  },
  {
    icon: FastuploadIcon,
    title: "Fast Upload",
    description:
      "Upload speeds up to 10x faster with our optimized infrastructure.",
  },
  {
    icon: SecureIcon,
    title: "Secure Storage",
    description:
      "End-to-end encryption ensures your content remains protected.",
  },
  {
    icon: ShareIcon,
    title: "Easy Sharing",
    description: "Share your content with just a few clicks.",
  },
];

export const FOOTER_DATA = [
  {
    title: "Company",
    links: [
      { label: "Home", link: "#home" },
      { label: "About", link: "#about" },
      { label: "Features", link: "#features" },
      { label: "How it Works", link: "#work" },
      { label: "Pricing", link: "#pricing" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", link: "#" },
      { label: "Terms of Services", link: "#" },
      { label: "Impressum", link: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Centre", link: "#" },
      { label: "System Status", link: "#" },
    ],
  },
];

export const FAQ_DATA = [
  {
    question: "Can I switch plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards and PayPal.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can cancel your subscription at any time from your account settings.",
  },
];

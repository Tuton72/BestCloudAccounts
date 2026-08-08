import {
  ArrowRight,
  Bot,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleCheckBig,
  ClipboardList,
  Cloud,
  Coins,
  Cpu,
  Database,
  Eye,
  Headset,
  Layers,
  ListChecks,
  Lock,
  Mail,
  Menu,
  MessageCircle,
  Network,
  Search,
  Send,
  Server,
  ShieldCheck,
  ShoppingCart,
  SlidersHorizontal,
  Sparkles,
  Star,
  Tag,
  X,
  type LucideProps,
} from "lucide-react";

/**
 * Curated name -> icon map. Keep this list explicit (rather than a fully
 * dynamic lucide-react lookup) so the icon set stays intentional and
 * tree-shakeable. Names are kebab-case to match how they're stored in
 * content config.
 */
const ICONS = {
  "arrow-right": ArrowRight,
  bot: Bot,
  check: Check,
  "check-circle": CheckCircle2,
  "chevron-down": ChevronDown,
  "chevron-right": ChevronRight,
  "circle-check-big": CircleCheckBig,
  "clipboard-list": ClipboardList,
  cloud: Cloud,
  coins: Coins,
  cpu: Cpu,
  database: Database,
  eye: Eye,
  headset: Headset,
  layers: Layers,
  "list-checks": ListChecks,
  lock: Lock,
  mail: Mail,
  menu: Menu,
  "message-circle": MessageCircle,
  network: Network,
  search: Search,
  send: Send,
  server: Server,
  "shield-check": ShieldCheck,
  "shopping-cart": ShoppingCart,
  "sliders-horizontal": SlidersHorizontal,
  sparkles: Sparkles,
  star: Star,
  tag: Tag,
  x: X,
} as const;

export type IconName = keyof typeof ICONS;

interface IconProps extends LucideProps {
  name: IconName;
}

export function Icon({ name, ...props }: IconProps) {
  const Component = ICONS[name];
  return <Component {...props} />;
}

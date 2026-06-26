// ============================================================
// SKG — icon set (Phosphor, regular weight, SSR-safe + tree-shaken)
// Use the /dist/ssr entry so icons work inside React Server Components.
// ============================================================
export {
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  MapPin,
  Buildings,
  CompassTool,
  Bell,
  Aperture,
  List,
  X,
  Phone,
  EnvelopeSimple,
  Clock,
  Compass,
  Sparkle as SparkleIcon,
  CaretDown,
  Plant,
  HandHeart,
  Stack,
} from "@phosphor-icons/react/dist/ssr";

import {
  CompassTool,
  Buildings,
  Bell,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

/** Map the data layer's Phosphor class names to React icon components. */
export const divisionIcon: Record<string, Icon> = {
  "ph-compass-tool": CompassTool,
  "ph-buildings": Buildings,
  "ph-bell": Bell,
};

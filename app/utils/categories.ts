import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";

export const categories = [
  {
    label: "beach",
    icon: TbBeach,
    description: "This property is near to the beach",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has Windmill",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern",
  },
  {
    label: "Country-Side",
    icon: TbMountain,
    description: "This property is in Country-Side",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This property has a pool",
  },
  {
    label: "Island",
    icon: GiIsland,
    description: "This property is on Island",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is closed to a Lake",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activities",
  },
  {
    label: "Castle",
    icon: GiCastle,
    description: "This property is in a castle",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property has camping activities",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property has skiing activities",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This property has Cave",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in desert",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in desert",
  },
  {
    label: "Luxurious",
    icon: IoDiamond,
    description: "This property is Luxurious",
  },
];

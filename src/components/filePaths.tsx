import type { ReactNode } from "react";
import PlaceholderPage from "@/components/beyond the apex/PlaceholderPage";
import AutomotiveEngineering from "@/components/beyond the apex/AutomotiveEngineering";
import EffectOfDampingForce from "@/components/beyond the apex/EffectOfDampingForce";
import FrequencyResponse from "@/components/beyond the apex/FrequencyResponse";
import PhaseDifference from "@/components/beyond the apex/PhaseDifference";
import ResonancePhenomenon from "@/components/beyond the apex/ResonancePhenomenon";
import TheConceptOfEnergy from "@/components/beyond the apex/TheConceptOfEnergy";
import TheConceptsOfForceAndTorque from "@/components/beyond the apex/TheConceptsOfForceAndTorque";
import TheMechanismOfVibration from "@/components/beyond the apex/TheMechanismOfVibration";
import BodyRollAndVehicleMotion from "@/components/beyond the apex/BodyRollAndVehicleMotion";
import CarResponseToSteeringAngle from "@/components/beyond the apex/CarResponseToSteeringAngle";
import HighPerformanceCar from "@/components/beyond the apex/HighPerformanceCar";
import SteadyStateCircularDriving from "@/components/beyond the apex/SteadyStateCircularDriving";
import TireDynamics from "@/components/beyond the apex/TireDynamics";
import VehicleResponseToPeriodicSteering from "@/components/beyond the apex/VehicleResponseToPeriodicSteering";
import VibrationInSuspension from "@/components/beyond the apex/VibrationInSuspension";
import VibrationOfSprungAndUnsprungMass from "@/components/beyond the apex/VibrationOfSprungAndUnsprungMass";
import TemperatureAndPressure from "@/components/beyond the apex/TemperatureAndPressure";
import TheIdealHeatEngine from "@/components/beyond the apex/TheIdealHeatEngine";
import CarnotsConclusion from "@/components/beyond the apex/CarnotsConclusion";
import TheoreticalEfficiencyOfCarEngines from "@/components/beyond the apex/TheoreticalEfficiencyOfCarEngines";
import ReversibleAndIrreversibleChange from "@/components/beyond the apex/ReversibleAndIrreversibleChange";
import ReversingTheHeatEngine from "@/components/beyond the apex/ReversingTheHeatEngine";
import EnginesLossOfEnergy from "@/components/beyond the apex/EnginesLossOfEnergy";

export interface TocPage {
  name: string;
  path: string; // leaf segment, e.g. "01"
  routePath: string; // full route without leading slash
  component: ReactNode;
}

export interface TocSection {
  name: string;
  path: string;
  pages: TocPage[];
}

export interface TocChapter {
  name: string;
  path: string;
  sections: TocSection[];
}

/** @deprecated use tocChapters / flatTocPages */
export type FilePath = TocSection;

export const tocChapters: TocChapter[] = [
  {
    name: "Chapter 1: Automotive Engineering",
    path: "engineering_for_automotive",
    sections: [
      {
        name: "Preface",
        path: "engineering_for_automotive/preface",
        pages: [
          {
            name: "Automotive Engineering",
            path: "01",
            routePath: "engineering_for_automotive/preface/01",
            component: <AutomotiveEngineering />,
          },
        ],
      },
      {
        name: "Force, Energy and Vibration",
        path: "engineering_for_automotive/force_energy_vibration",
        pages: [
          {
            name: "1-1 : The Concepts of Force and Torque",
            path: "01",
            routePath: "engineering_for_automotive/force_energy_vibration/01",
            component: <TheConceptsOfForceAndTorque />,
          },
          {
            name: "1-2 : The Concept of Energy",
            path: "02",
            routePath: "engineering_for_automotive/force_energy_vibration/02",
            component: <TheConceptOfEnergy />,
          },
          {
            name: "1-3 : The Mechanism of Vibration",
            path: "03",
            routePath: "engineering_for_automotive/force_energy_vibration/03",
            component: <TheMechanismOfVibration />,
          },
          {
            name: "1-4 : Resonance Phenomenon",
            path: "04",
            routePath: "engineering_for_automotive/force_energy_vibration/04",
            component: <ResonancePhenomenon />,
          },
          {
            name: "1-5 : Effect of Damping Force",
            path: "05",
            routePath: "engineering_for_automotive/force_energy_vibration/05",
            component: <EffectOfDampingForce />,
          },
          {
            name: "1-6 : Phase Difference",
            path: "06",
            routePath: "engineering_for_automotive/force_energy_vibration/06",
            component: <PhaseDifference />,
          },
          {
            name: "1-7 : Frequency Response",
            path: "07",
            routePath: "engineering_for_automotive/force_energy_vibration/07",
            component: <FrequencyResponse />,
          },
          {
            name: "1-8 : Vibration in Suspension",
            path: "08",
            routePath: "engineering_for_automotive/force_energy_vibration/08",
            component: <VibrationInSuspension />,
          },
        ],
      },
      {
        name: "Vehicle Performance",
        path: "engineering_for_automotive/vehicle_performance",
        pages: [
          {
            name: "2-1 : Tire Dynamics",
            path: "01",
            routePath: "engineering_for_automotive/vehicle_performance/01",
            component: <TireDynamics />,
          },
          {
            name: "2-2 : Steady-state Circular Driving",
            path: "02",
            routePath: "engineering_for_automotive/vehicle_performance/02",
            component: <SteadyStateCircularDriving />,
          },
          {
            name: "2-3 : A Car's Response to Changes in Steering Angle",
            path: "03",
            routePath: "engineering_for_automotive/vehicle_performance/03",
            component: <CarResponseToSteeringAngle />,
          },
          {
            name: "2-4 : Vehicle Response to Periodic Steering Motion",
            path: "04",
            routePath: "engineering_for_automotive/vehicle_performance/04",
            component: <VehicleResponseToPeriodicSteering />,
          },
          {
            name: "2-5 : Body Roll and Vehicle Motion",
            path: "05",
            routePath: "engineering_for_automotive/vehicle_performance/05",
            component: <BodyRollAndVehicleMotion />,
          },
          {
            name: "2-6 : Vibration of Sprung Mass and Unsprung Mass",
            path: "06",
            routePath: "engineering_for_automotive/vehicle_performance/06",
            component: <VibrationOfSprungAndUnsprungMass />,
          },
          {
            name: "2-7 : What Constitutes a High-Performance Car?",
            path: "07",
            routePath: "engineering_for_automotive/vehicle_performance/07",
            component: <HighPerformanceCar />,
          },
        ],
      },
      {
        name: "The Efficient Engine",
        path: "engineering_for_automotive/the_efficient_engine",
        pages: [
          {
            name: "3-1 : Temperature and Pressure",
            path: "01",
            routePath: "engineering_for_automotive/the_efficient_engine/01",
            component: <TemperatureAndPressure />,
          },
          {
            name: "3-2 : The Ideal Heat Engine",
            path: "02",
            routePath: "engineering_for_automotive/the_efficient_engine/02",
            component: <TheIdealHeatEngine />,
          },
          {
            name: "3-3 : Carnot’s Conclusion",
            path: "03",
            routePath: "engineering_for_automotive/the_efficient_engine/03",
            component: <CarnotsConclusion />,
          },
          {
            name: "3-4 : Theoretical Efficiency of Car Engines",
            path: "04",
            routePath: "engineering_for_automotive/the_efficient_engine/04",
            component: <TheoreticalEfficiencyOfCarEngines />,
          },
          {
            name: "3-5 : Reversible Change and Irreversible Change",
            path: "05",
            routePath: "engineering_for_automotive/the_efficient_engine/05",
            component: <ReversibleAndIrreversibleChange />,
          },
          {
            name: "3-6 : Reversing the Heat Engine",
            path: "06",
            routePath: "engineering_for_automotive/the_efficient_engine/06",
            component: <ReversingTheHeatEngine />,
          },
          {
            name: "3-7 : Engine's Loss of Energy",
            path: "07",
            routePath: "engineering_for_automotive/the_efficient_engine/07",
            component: <EnginesLossOfEnergy />,
          },
        ],
      },
      {
        name: "Aerodynamics",
        path: "engineering_for_automotive/aerodynamics",
        pages: [
          {
            name: "4-1 : Bernoulli’s Theory",
            path: "01",
            routePath: "engineering_for_automotive/aerodynamics/01",
            component: <PlaceholderPage title="4-1 : Bernoulli’s Theory" />,
          },
          {
            name: "4-2 : Law of Fluid Motion",
            path: "02",
            routePath: "engineering_for_automotive/aerodynamics/02",
            component: <PlaceholderPage title="4-2 : Law of Fluid Motion" />,
          },
          {
            name: "4-3 : Plane of Discontinuity and Vortex Filament",
            path: "03",
            routePath: "engineering_for_automotive/aerodynamics/03",
            component: <PlaceholderPage title="4-3 : Plane of Discontinuity and Vortex Filament" />,
          },
          {
            name: "4-4 : Kutta–Zhukovsky's Theorem",
            path: "04",
            routePath: "engineering_for_automotive/aerodynamics/04",
            component: <PlaceholderPage title="4-4 : Kutta–Zhukovsky's Theorem" />,
          },
          {
            name: "4-5 : Prandtl’s Boundary Layer Theory",
            path: "05",
            routePath: "engineering_for_automotive/aerodynamics/05",
            component: <PlaceholderPage title="4-5 : Prandtl’s Boundary Layer Theory" />,
          },
          {
            name: "4-6 : Prandtl's Lifting Line Theory",
            path: "06",
            routePath: "engineering_for_automotive/aerodynamics/06",
            component: <PlaceholderPage title="4-6 : Prandtl's Lifting Line Theory" />,
          },
        ],
      },
      {
        name: "Computational Fluid Dynamics",
        path: "engineering_for_automotive/computational_fluid_dynamics",
        pages: [
          {
            name: "5-1 : The World of CFD",
            path: "01",
            routePath: "engineering_for_automotive/computational_fluid_dynamics/01",
            component: <PlaceholderPage title="5-1 : The World of CFD" />,
          },
          {
            name: "5-2 : Finite Volume Method",
            path: "02",
            routePath: "engineering_for_automotive/computational_fluid_dynamics/02",
            component: <PlaceholderPage title="5-2 : Finite Volume Method" />,
          },
          {
            name: "5-3 : Features of Scheme",
            path: "03",
            routePath: "engineering_for_automotive/computational_fluid_dynamics/03",
            component: <PlaceholderPage title="5-3 : Features of Scheme" />,
          },
          {
            name: "5-4 : Compatibility of First-Order Approximation and High-Order Approximation",
            path: "04",
            routePath: "engineering_for_automotive/computational_fluid_dynamics/04",
            component: <PlaceholderPage title="5-4 : Compatibility of First-Order Approximation and High-Order Approximation" />,
          },
          {
            name: "5-5 : Solving Turbulence",
            path: "05",
            routePath: "engineering_for_automotive/computational_fluid_dynamics/05",
            component: <PlaceholderPage title="5-5 : Solving Turbulence" />,
          },
        ],
      },
    ],
  },
  {
    name: "Chapter 2: Review: Mechanism",
    path: "review_mechanism",
    sections: [
      {
        name: "Basic Specs",
        path: "review_mechanism/packaging",
        pages: [
          {
            name: "Dimensions",
            path: "01",
            routePath: "review_mechanism/packaging/01",
            component: <PlaceholderPage title="Dimensions" />,
          },
          {
            name: "Drivetrains and Weight Distribution",
            path: "02",
            routePath: "review_mechanism/packaging/02",
            component: <PlaceholderPage title="Drivetrains and Weight Distribution" />,
          },
        ],
      },
      {
        name: "The Heart of The Automobile",
        path: "review_mechanism/engine",
        pages: [
          {
            name: "Mechanism and Principles",
            path: "01",
            routePath: "review_mechanism/engine/01",
            component: <PlaceholderPage title="Mechanism and Principles" />,
          },
          {
            name: "Valve Configurations",
            path: "02",
            routePath: "review_mechanism/engine/02",
            component: <PlaceholderPage title="Valve Configurations" />,
          },
          {
            name: "Rotary Engines",
            path: "03",
            routePath: "review_mechanism/engine/03",
            component: <PlaceholderPage title="Rotary Engines" />,
          },
          {
            name: "Forced Induction",
            path: "04",
            routePath: "review_mechanism/engine/04",
            component: <PlaceholderPage title="Forced Induction" />,
          },
          {
            name: "Hybrid Systems",
            path: "05",
            routePath: "review_mechanism/engine/05",
            component: <PlaceholderPage title="Hybrid Systems" />,
          },
          {
            name: "Performance Keywords",
            path: "06",
            routePath: "review_mechanism/engine/06",
            component: <PlaceholderPage title="Performance Keywords" />,
          },
        ],
      },
      {
        name: "Turning Power into Speed",
        path: "review_mechanism/drivetrain",
        pages: [
          {
            name: "Transmission",
            path: "01",
            routePath: "review_mechanism/drivetrain/01",
            component: <PlaceholderPage title="Transmission" />,
          },
          {
            name: "The Differential and LSD",
            path: "02",
            routePath: "review_mechanism/drivetrain/02",
            component: <PlaceholderPage title="The Differential and LSD" />,
          },
        ],
      },
      {
        name: "The Framework that Supports it All",
        path: "review_mechanism/body",
        pages: [
          {
            name: "Body Performance Requirements",
            path: "01",
            routePath: "review_mechanism/body/01",
            component: <PlaceholderPage title="Body Performance Requirements" />,
          },
        ],
      },
      {
        name: "Thermal Exchangers that Reduce Speed",
        path: "review_mechanism/brakes",
        pages: [
          {
            name: "Construction and Principles",
            path: "01",
            routePath: "review_mechanism/brakes/01",
            component: <PlaceholderPage title="Construction and Principles" />,
          },
          {
            name: "Brake Discs and Calipers",
            path: "02",
            routePath: "review_mechanism/brakes/02",
            component: <PlaceholderPage title="Brake Discs and Calipers" />,
          },
        ],
      },
      {
        name: "Dampers for Controlling Springs Body Movement",
        path: "review_mechanism/suspensions",
        pages: [
          {
            name: "Construction and Principles",
            path: "01",
            routePath: "review_mechanism/suspensions/01",
            component: <PlaceholderPage title="Construction and Principles" />,
          },
          {
            name: "Types of Suspension",
            path: "02",
            routePath: "review_mechanism/suspensions/02",
            component: <PlaceholderPage title="Types of Suspension" />,
          },
          {
            name: "Wheel Alignment",
            path: "03",
            routePath: "review_mechanism/suspensions/03",
            component: <PlaceholderPage title="Wheel Alignment" />,
          },
        ],
      },
      {
        name: "The Link Between Car and Road",
        path: "review_mechanism/tires",
        pages: [
          {
            name: "High-Performance Sub",
            path: "01",
            routePath: "review_mechanism/tires/01",
            component: <PlaceholderPage title="High-Performance Sub" />,
          },
        ],
      },
      {
        name: "Aluminum Road Wheels",
        path: "review_mechanism/wheels",
        pages: [
          {
            name: "Unsprung Weight",
            path: "01",
            routePath: "review_mechanism/wheels/01",
            component: <PlaceholderPage title="Unsprung Weight" />,
          },
        ],
      },
      {
        name: "The Effect of Air on the Body",
        path: "review_mechanism/aerodynamics",
        pages: [
          {
            name: "Air Resistance and Lift",
            path: "01",
            routePath: "review_mechanism/aerodynamics/01",
            component: <PlaceholderPage title="Air Resistance and Lift" />,
          },
        ],
      },
    ],
  },
  {
    name: "Chapter 3: Review: Tuning & Settings",
    path: "review_tuning_and_settings",
    sections: [
      {
        name: "Improving Engine Performance",
        path: "review_tuning_and_settings/engine",
        pages: [
          {
            name: "Fine-Tuning",
            path: "01",
            routePath: "review_tuning_and_settings/engine/01",
            component: <PlaceholderPage title="Fine-Tuning" />,
          },
          {
            name: "Overhauling the Engine",
            path: "02",
            routePath: "review_tuning_and_settings/engine/02",
            component: <PlaceholderPage title="Overhauling the Engine" />,
          },
          {
            name: "Increasing RPM",
            path: "03",
            routePath: "review_tuning_and_settings/engine/03",
            component: <PlaceholderPage title="Increasing RPM" />,
          },
          {
            name: "Increasing Compression",
            path: "04",
            routePath: "review_tuning_and_settings/engine/04",
            component: <PlaceholderPage title="Increasing Compression" />,
          },
          {
            name: "Forced Induction Devices",
            path: "05",
            routePath: "review_tuning_and_settings/engine/05",
            component: <PlaceholderPage title="Forced Induction Devices" />,
          },
          {
            name: "Rotary Engines",
            path: "06",
            routePath: "review_tuning_and_settings/engine/06",
            component: <PlaceholderPage title="Rotary Engines" />,
          },
        ],
      },
      {
        name: "Tuning the Drivetrain",
        path: "review_tuning_and_settings/drive_system",
        pages: [
          {
            name: "Gear Ratio",
            path: "01",
            routePath: "review_tuning_and_settings/drive_system/01",
            component: <PlaceholderPage title="Gear Ratio" />,
          },
          {
            name: "Clutch, Flywheels and Propeller Shafts",
            path: "02",
            routePath: "review_tuning_and_settings/drive_system/02",
            component: <PlaceholderPage title="Clutch, Flywheels and Propeller Shafts" />,
          },
          {
            name: "Limited Slip Differential",
            path: "03",
            routePath: "review_tuning_and_settings/drive_system/03",
            component: <PlaceholderPage title="Limited Slip Differential" />,
          },
        ],
      },
      {
        name: "Shaping Up the Body",
        path: "review_tuning_and_settings/boby",
        pages: [
          {
            name: "Weight Reduction and Rigidity",
            path: "01",
            routePath: "review_tuning_and_settings/boby/01",
            component: <PlaceholderPage title="Weight Reduction and Rigidity" />,
          },
        ],
      },
      {
        name: "Improving Stopping Power",
        path: "review_tuning_and_settings/stopping_power",
        pages: [
          {
            name: "Boosting Brake Power and Avoiding Brake Fade",
            path: "01",
            routePath: "review_tuning_and_settings/stopping_power/01",
            component: <PlaceholderPage title="Boosting Brake Power and Avoiding Brake Fade" />,
          },
        ],
      },
      {
        name: "Improving the Suspension System",
        path: "review_tuning_and_settings/footwork",
        pages: [
          {
            name: "Adjusting Handling Characteristics",
            path: "01",
            routePath: "review_tuning_and_settings/footwork/01",
            component: <PlaceholderPage title="Adjusting Handling Characteristics" />,
          },
        ],
      },
      {
        name: "Upgrading to High-Performance Tires",
        path: "review_tuning_and_settings/tires",
        pages: [
          {
            name: "Increased Grip/Rigidity",
            path: "01",
            routePath: "review_tuning_and_settings/tires/01",
            component: <PlaceholderPage title="Increased Grip/Rigidity" />,
          },
        ],
      },
      {
        name: "Improving Aerodynamics",
        path: "review_tuning_and_settings/aerodynamics",
        pages: [
          {
            name: "Aerodynamic Tuning",
            path: "01",
            routePath: "review_tuning_and_settings/aerodynamics/01",
            component: <PlaceholderPage title="Aerodynamic Tuning" />,
          },
        ],
      },
      {
        name: "Changing Settings According to Car Characteristics",
        path: "review_tuning_and_settings/vehicle_qualities",
        pages: [
          {
            name: "Drivetrain Layout",
            path: "01",
            routePath: "review_tuning_and_settings/vehicle_qualities/01",
            component: <PlaceholderPage title="Drivetrain Layout" />,
          },
        ],
      },
      {
        name: "Basic Settings Part-by-Part",
        path: "review_tuning_and_settings/basic_settings",
        pages: [
          {
            name: "Suspension ①",
            path: "01",
            routePath: "review_tuning_and_settings/basic_settings/01",
            component: <PlaceholderPage title="Suspension ①" />,
          },
          {
            name: "Suspension ②",
            path: "02",
            routePath: "review_tuning_and_settings/basic_settings/02",
            component: <PlaceholderPage title="Suspension ②" />,
          },
          {
            name: "Drivetrain",
            path: "03",
            routePath: "review_tuning_and_settings/basic_settings/03",
            component: <PlaceholderPage title="Drivetrain" />,
          },
          {
            name: "Aerodynamics",
            path: "04",
            routePath: "review_tuning_and_settings/basic_settings/04",
            component: <PlaceholderPage title="Aerodynamics" />,
          },
        ],
      },
      {
        name: "Settings for Specific Situations",
        path: "review_tuning_and_settings/advanced_settings",
        pages: [
          {
            name: "High-Speed Circuits, Technical Courses",
            path: "01",
            routePath: "review_tuning_and_settings/advanced_settings/01",
            component: <PlaceholderPage title="High-Speed Circuits, Technical Courses" />,
          },
          {
            name: "Countering Understeer, Countering Oversteer",
            path: "02",
            routePath: "review_tuning_and_settings/advanced_settings/02",
            component: <PlaceholderPage title="Countering Understeer, Countering Oversteer" />,
          },
          {
            name: "Wet Conditions, Gravel",
            path: "03",
            routePath: "review_tuning_and_settings/advanced_settings/03",
            component: <PlaceholderPage title="Wet Conditions, Gravel" />,
          },
        ],
      },
    ],
  },
  {
    name: "Chapter 4: How to get started with Gran Turismo",
    path: "how_to_get_started",
    sections: [
      {
        name: "Advice for Beginners",
        path: "how_to_get_started/advice_for_beginners",
        pages: [
          {
            name: "Getting Used to Your Controller",
            path: "01",
            routePath: "how_to_get_started/advice_for_beginners/01",
            component: <PlaceholderPage title="Getting Used to Your Controller" />,
          },
          {
            name: "Getting to Know the Width of Your Car",
            path: "02",
            routePath: "how_to_get_started/advice_for_beginners/02",
            component: <PlaceholderPage title="Getting to Know the Width of Your Car" />,
          },
          {
            name: "Setting Track Markers",
            path: "03",
            routePath: "how_to_get_started/advice_for_beginners/03",
            component: <PlaceholderPage title="Setting Track Markers" />,
          },
          {
            name: "Learning How to Be Precise",
            path: "04",
            routePath: "how_to_get_started/advice_for_beginners/04",
            component: <PlaceholderPage title="Learning How to Be Precise" />,
          },
          {
            name: "Taking Corners",
            path: "05",
            routePath: "how_to_get_started/advice_for_beginners/05",
            component: <PlaceholderPage title="Taking Corners" />,
          },
        ],
      },
      {
        name: "Using Driver Assist",
        path: "how_to_get_started/using_driver_assistance",
        pages: [
          {
            name: "Using Driver Assist ① - Braking",
            path: "01",
            routePath: "how_to_get_started/using_driver_assistance/01",
            component: <PlaceholderPage title="Using Driver Assist ① - Braking" />,
          },
          {
            name: "Using Driver Assist ② - Car Control",
            path: "02",
            routePath: "how_to_get_started/using_driver_assistance/02",
            component: <PlaceholderPage title="Using Driver Assist ② - Car Control" />,
          },
        ],
      },
      {
        name: "In-game settings",
        path: "how_to_get_started/in_game",
        pages: [
          {
            name: "In-Game: General Principles",
            path: "01",
            routePath: "how_to_get_started/in_game/01",
            component: <PlaceholderPage title="In-Game: General Principles" />,
          },
          {
            name: "In-Game: Suspension",
            path: "02",
            routePath: "how_to_get_started/in_game/02",
            component: <PlaceholderPage title="In-Game: Suspension" />,
          },
          {
            name: "In-Game: Aerodynamics / Gear Ratios",
            path: "03",
            routePath: "how_to_get_started/in_game/03",
            component: <PlaceholderPage title="In-Game: Aerodynamics / Gear Ratios" />,
          },
        ],
      },
      {
        name: "Race Etiquette",
        path: "how_to_get_started/race_etiquette",
        pages: [
          {
            name: "Ensuring safe and enjoyable races",
            path: "01",
            routePath: "how_to_get_started/race_etiquette/01",
            component: <PlaceholderPage title="Ensuring safe and enjoyable races" />,
          },
        ],
      },
    ],
  },
  {
    name: "Chapter 5: Photographing Cars",
    path: "photographing_cars",
    sections: [
      {
        name: "Scapes",
        path: "photographing_cars/scapes",
        pages: [
          {
            name: "The Angle",
            path: "01",
            routePath: "photographing_cars/scapes/01",
            component: <PlaceholderPage title="The Angle" />,
          },
          {
            name: "Lighting",
            path: "02",
            routePath: "photographing_cars/scapes/02",
            component: <PlaceholderPage title="Lighting" />,
          },
          {
            name: "Depth of Field",
            path: "03",
            routePath: "photographing_cars/scapes/03",
            component: <PlaceholderPage title="Depth of Field" />,
          },
          {
            name: "Lenses",
            path: "04",
            routePath: "photographing_cars/scapes/04",
            component: <PlaceholderPage title="Lenses" />,
          },
          {
            name: "Color Temperature",
            path: "05",
            routePath: "photographing_cars/scapes/05",
            component: <PlaceholderPage title="Color Temperature" />,
          },
          {
            name: "Exposure",
            path: "06",
            routePath: "photographing_cars/scapes/06",
            component: <PlaceholderPage title="Exposure" />,
          },
          {
            name: "Taking Better Photos",
            path: "07",
            routePath: "photographing_cars/scapes/07",
            component: <PlaceholderPage title="Taking Better Photos" />,
          },
        ],
      },
    ],
  },
];

/** Flat list of all pages in official reading order */
export const flatTocPages: TocPage[] = tocChapters.flatMap((c) =>
  c.sections.flatMap((s) => s.pages)
);

/** @deprecated 2-level view of mid sections — prefer tocChapters */
export const filePaths: TocSection[] = tocChapters.flatMap((c) => c.sections);

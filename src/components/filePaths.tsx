
import DepthOfField from "@/components/beyond the apex/DepthOfField";
import DrivingAccordingToDrivetrainType from "@/components/beyond the apex/DrivingAccordingToDrivetrainType";
import DrivingLinesForTakingCorners from "@/components/beyond the apex/DrivingLinesForTakingCorners";
import DrivingPositionForSensingTheCar from "@/components/beyond the apex/DrivingPositionForSensingTheCar";
import EngineHorsepowerAndTorque from "@/components/beyond the apex/EngineHorsepowerAndTorque";
import HowToDriveOnSlipperySurfaces from "@/components/beyond the apex/HowToDriveOnSlipperySurfaces";
import InGameGeneralPrinciples from "@/components/beyond the apex/InGameGeneralPrinciples";
import LaunchingAndShifting from "@/components/beyond the apex/LaunchingAndShifting";
import PreparingToDriveTheCircuit from "@/components/beyond the apex/PreparingToDriveTheCircuit";
import TheEffectOfAir from "@/components/beyond the apex/TheEffectOfAir";
import TheThreeDimensionsOfMovementInACar from "@/components/beyond the apex/TheThreeDimensionsOfMovementInACar";
import ThinkingAboutCornering from "@/components/beyond the apex/ThinkingAboutCornering";
import TypesOfSuspension from "@/components/beyond the apex/TypesOfSuspension";
import UndersteerAndOversteer from "@/components/beyond the apex/UndersteerAndOversteer";
import WhatIsAFrictionCircle from "@/components/beyond the apex/WhatIsAFrictionCircle";
import InGameAerodynamicsGearRatios from "@/components/beyond the apex/InGameAerodynamicsGearRatios";
import InGameSuspension from "@/components/beyond the apex/InGameSuspension";
import DifferentialAndLimitedSlipDifferential from "@/components/beyond the apex/DifferentialAndLimitedSlipDifferential";
import GettingUsedToYourController from "@/components/beyond the apex/GettingUsedToYourController";
import GettingToKnowTheWidthOfYourCar from "@/components/beyond the apex/GettingToKnowTheWidthOfYourCar";
import Braking from "@/components/beyond the apex/Braking";
import ColorTemperature from "@/components/beyond the apex/ColorTemperature";
import Dampers from "@/components/beyond the apex/Dampers";
import DeterminingGearRatios from "@/components/beyond the apex/DeterminingGearRatios";
import Dimensions from "@/components/beyond the apex/Dimensions";
import DriftControl from "@/components/beyond the apex/DriftControl";
import DriveLayout from "@/components/beyond the apex/DriveLayout";
import ElectronicDevices from "@/components/beyond the apex/ElectronicDevices";
import EngineLayouts from "@/components/beyond the apex/EngineLayouts";
import Exposure from "@/components/beyond the apex/Exposure";
import FeelingLoadMovements from "@/components/beyond the apex/FeelingLoadMovements";
import ForcedInduction from "@/components/beyond the apex/ForcedInduction";
import Lenses from "@/components/beyond the apex/Lenses";
import Lighting from "@/components/beyond the apex/Lighting";
import Overtaking from "@/components/beyond the apex/Overtaking";
import RaceEtiquette from "@/components/beyond the apex/RaceEtiquette";
import RideHeight from "@/components/beyond the apex/RideHeight";
import SettingTrackMarkers from "@/components/beyond the apex/SettingTrackMarkers";
import Springs from "@/components/beyond the apex/Springs";
import SuspensionGeometry from "@/components/beyond the apex/SuspensionGeometry";
import SuspensionMechanism from "@/components/beyond the apex/SuspensionMechanism";
import TakingBetterPhotos from "@/components/beyond the apex/TakingBetterPhotos";
import TakingCorners from "@/components/beyond the apex/TakingCorners";
import TheAngle from "@/components/beyond the apex/TheAngle";
import TireManagement from "@/components/beyond the apex/TireManagement";
import Transmission from "@/components/beyond the apex/Transmission";
import UsingDriverAssistanceBraking from "@/components/beyond the apex/UsingDriverAssistanceBraking";
import UsingDriverAssistanceCarControl from "@/components/beyond the apex/UsingDriverAssistanceCarControl";
import LearningHowToBePrecise from "@/components/beyond the apex/LearningHowToBePrecise";
import HowDoesACarTurn from "@/components/beyond the apex/HowDoesACarTurn";
import AntiRollBars1 from "@/components/beyond the apex/AntiRollBars1";
import AntiRollBars2 from "@/components/beyond the apex/AntiRollBars2";
import LimitedslipDifferentialLSD from "@/components/beyond the apex/LimitedslipDifferentialLSD";

export interface FilePath {
  name: string;
  path: string;
  files: {
    name: string;
    path: string;
    component: React.ReactNode;
  }[];
}

export const filePaths: FilePath[] = [
  {
    name: "初学者建议",
    path: "beginner-tips",
    files: [
      { 
        name: "熟悉你的控制器", 
        path: "getting-used-to-your-controller",
        component: <GettingUsedToYourController />
      },
      { 
        name: "了解你的车宽", 
        path: "getting-to-know-the-width-of-your-car",
        component: <GettingToKnowTheWidthOfYourCar />
      },
      { 
        name: "设置赛道标记", 
        path: "setting-track-markers",
        component: <SettingTrackMarkers />
      },
      { 
        name: "学习如何精确", 
        path: "learning-how-to-be-precise",
        component: <LearningHowToBePrecise />
      },
      { 
        name: "过弯技巧", 
        path: "taking-corners",
        component: <TakingCorners />
      },
      { 
        name: "使用驾驶辅助 刹车", 
        path: "using-driver-assistance-braking",
        component: <UsingDriverAssistanceBraking />
      },
      { 
        name: "使用驾驶辅助 车辆控制", 
        path: "using-driver-assistance-car-control",
        component: <UsingDriverAssistanceCarControl />
      }
    ]
  },
  {
    name: "驾驶技巧与礼仪",
    path: "driving-techniques-and-etiquette",
    files: [
      { 
        name: "汽车如何转弯", 
        path: "how-does-a-car-turn",
        component: <HowDoesACarTurn />
      },
      { 
        name: "感受负载移动", 
        path: "feeling-load-movements",
        component: <FeelingLoadMovements />
      },
      { 
        name: "汽车运动的三维", 
        path: "the-three-dimensions-of-movement-in-a-car",
        component: <TheThreeDimensionsOfMovementInACar />
      },
      { 
        name: "什么是摩擦圆", 
        path: "what-is-a-friction-circle",
        component: <WhatIsAFrictionCircle />
      },
      { 
        name: "转向不足与过度转向", 
        path: "understeer-and-oversteer",
        component: <UndersteerAndOversteer />
      },
      { 
        name: "感知车辆的驾驶姿势", 
        path: "driving-position-for-sensing-the-car",
        component: <DrivingPositionForSensingTheCar />
      },
      { 
        name: "起步与换挡", 
        path: "launching-and-shifting",
        component: <LaunchingAndShifting />
      },
      { 
        name: "刹车", 
        path: "braking",
        component: <Braking />
      },
      { 
        name: "思考过弯", 
        path: "thinking-about-cornering",
        component: <ThinkingAboutCornering />
      },
      { 
        name: "过弯路线", 
        path: "driving-lines-for-taking-corners",
        component: <DrivingLinesForTakingCorners />
      },
      { 
        name: "准备驾驶赛道", 
        path: "preparing-to-drive-the-circuit",
        component: <PreparingToDriveTheCircuit />
      },
      { 
        name: "超车", 
        path: "overtaking",
        component: <Overtaking />
      },
      { 
        name: "根据驱动类型驾驶", 
        path: "driving-according-to-drivetrain-type",
        component: <DrivingAccordingToDrivetrainType />
      },
      { 
        name: "轮胎管理", 
        path: "tire-management",
        component: <TireManagement />
      },
      { 
        name: "如何在滑溜的路面上驾驶", 
        path: "how-to-drive-on-slippery-surfaces",
        component: <HowToDriveOnSlipperySurfaces />
      },
      { 
        name: "漂移控制", 
        path: "drift-control",
        component: <DriftControl />
      },
      { 
        name: "比赛礼仪", 
        path: "race-etiquette",
        component: <RaceEtiquette />
      },
    ]
  },
  {
    name: "机械原理",
    path: "mechanical-principles",  
    files: [
      { 
        name: "尺寸", 
        path: "dimensions",
        component: <Dimensions />
      },
      { 
        name: "驱动布局", 
        path: "drive-layout",
        component: <DriveLayout />
      },
      { 
        name: "发动机 – 马力与扭矩", 
        path: "engine-horsepower-and-torque",
        component: <EngineHorsepowerAndTorque />
      },
      { 
        name: "发动机 – 布局", 
        path: "engine-layouts",
        component: <EngineLayouts />
      },
      { 
        name: "强制进气", 
        path: "forced-induction",
        component: <ForcedInduction />
      },
      { 
        name: "变速器", 
        path: "transmission",
        component: <Transmission />
      },
      { 
        name: "差速器与限滑差速器", 
        path: "differential-and-limited-slip-differential",
        component: <DifferentialAndLimitedSlipDifferential />
      },
      { 
        name: "悬挂机制", 
        path: "suspension-mechanism",
        component: <SuspensionMechanism />
      },
      { 
        name: "悬挂类型", 
        path: "types-of-suspension",
        component: <TypesOfSuspension />
      },
      { 
        name: "悬挂几何", 
        path: "suspension-geometry",
        component: <SuspensionGeometry />
      },
      { 
        name: "电子设备", 
        path: "electronic-devices",
        component: <ElectronicDevices />
      },
      { 
        name: "空气效应", 
        path: "the-effect-of-air",
        component: <TheEffectOfAir />
      },
    ]
  },
  {
    name: "车辆设置", 
    path: "vehicle-setup",
    files: [
      { 
        name: "车身高度", 
        path: "ride-height",
        component: <RideHeight />
      },
      { 
        name: "弹簧", 
        path: "springs",
        component: <Springs />
      },
      { 
        name: "防倾杆 1", 
        path: "antiroll-bars-1",
        component: <AntiRollBars1 />
      },
      { 
        name: "防倾杆 2", 
        path: "antiroll-bars-2",
        component: <AntiRollBars2 />
      },
      { 
        name: "减震器", 
        path: "dampers",
        component: <Dampers />
      },
      { 
        name: "悬挂几何", 
        path: "suspension-geometry",
        component: <SuspensionGeometry />
      },
      { 
        name: "限滑差速器 (LSD)", 
        path: "limitedslip-differential-lsd",
        component: <LimitedslipDifferentialLSD />
      },
      { 
        name: "确定齿轮比", 
        path: "determining-gear-ratios",
        component: <DeterminingGearRatios />
      },
      { 
        name: "游戏内: 基本原则", 
        path: "in-game-general-principles",
        component: <InGameGeneralPrinciples />
      },
      { 
        name: "游戏内: 悬挂", 
        path: "in-game-suspension",
        component: <InGameSuspension />
      },
      { 
        name: "游戏内: 空气动力学与齿轮比", 
        path: "in-game-aerodynamics-gear-ratios",
        component: <InGameAerodynamicsGearRatios />
      },
    ]
  },
  {
    name: "汽车摄影", 
    path: "car-photography",
    files: [
      { 
        name: "角度", 
        path: "the-angle",
        component: <TheAngle />
      },
      { 
        name: "光线", 
        path: "lighting",
        component: <Lighting />
      },
      { 
        name: "景深", 
        path: "depth-of-field",
        component: <DepthOfField />
      },
      { 
        name: "镜头", 
        path: "lenses",
        component: <Lenses />
      },
      { 
        name: "色温", 
        path: "color-temperature",
        component: <ColorTemperature />
      },
      { 
        name: "曝光", 
        path: "exposure",
        component: <Exposure />
      },
      { 
        name: "拍摄更好的照片", 
        path: "taking-better-photos",
        component: <TakingBetterPhotos />
      }
    ]
  }
]


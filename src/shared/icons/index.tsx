import { FC, useMemo } from 'react';
import type { IIconProps } from './utils';

import { AllIcon } from './all-icon';
import { BigArrowIcon } from './big-arrow-icon';
import { CancelIcon } from './cancel-icon';
import { CardiologyIcon } from './cardiology-icon';

import { ChatIcon } from './chat-icon';
import { CheckIcon } from './check-icon';
import { CloseIcon } from './close-icon';
import { CloudDrizzelOneIcon } from './cloud-drizzel-one-icon';
import { CloudDrizzelIcon } from './cloud-drizzel-icon';
import { CloudIcon } from './cloud-icon';
import { CloudsIcon } from './clouds-icon';
import { ColdTemperatureIcon } from './cold-temperature-icon';
import { ColdWeatherOneIcon } from './cold-weather-one-icon';
import { ColdWeatherTwoIcon } from './cold-weather-two-icon';
import { ColdWeatherIcon } from './cold-weather-icon';
import { DentistryIcon } from './dentistry-icon';
import { DesertIcon } from './desert-icon';
import { DiagnosticsIcon } from './diagnostics-icon';
import { DirectionToolIcon } from './direction-tool-icon';
import { EclipsedIcon } from './eclipsed-icon';
import { EditIcon } from './edit-icon';
import { EyeClosedIcon } from './eye-closed-icon';
import { EyeIcon } from './eye-icon';
import { FiltersIcon } from './filters-icon';
import { FiltersWithCounterIcon } from './filters-with-counter-icon';
import { FirstAidIcon } from './first-aid-icon';
import { ForwardIcon } from './forward-icon';
import { GastroenterologyIcon } from './gastroenterology-icon';
import { GeneticsIcon } from './genetics-icon';
import { GynecologyIcon } from './gynecology-icon';
import { HailDuringNightIcon } from './hail-during-night-icon';
import { HailIcon } from './hail-icon';
import { HighTemperatureOneIcon } from './high-temperature-one-icon';
import { HighTemperatureIcon } from './high-temperature-icon';
import { BookmarkFillIcon } from './bookmark-fill-icon';
import { BookmarkIcon } from './bookmark-icon';
import { DotIcon } from './dot-icon';
import { ViewsIcon } from './views-icon';
import { LeftArrowIcon } from './left-arrow-icon';
import { LoaderCircleIcon } from './loader-circle-icon';
import { LocationPinIcon } from './location-pin-icon';
import { LogoutOneIcon } from './logout-one-icon';
import { LogoutIcon } from './logout-icon';
import { MailIcon } from './mail-icon';
import { MoonIcon } from './moon-icon';
import { MoonWithWindIcon } from './moon-with-wind-icon';
import { MoonsetIcon } from './moonset-icon';
import { NightWeatherIcon } from './night-weather-icon';
import { NotAvailableIcon } from './not-available-icon';
import { OceanIcon } from './ocean-icon';
import { OphthalmologyIcon } from './ophthalmology-icon';
import { OtorhinolaryngologyIcon } from './otorhinolaryngology-icon';
import { PediatricsIcon } from './pediatrics-icon';
import { PodcastIcon } from './podcast-icon';
import { PsychotherapyIcon } from './psychotherapy-icon';
import { RainOneIcon } from './rain-one-icon';
import { RainTwoIcon } from './rain-two-icon';
import { RainThreeIcon } from './rain-three-icon';
import { RainFourIcon } from './rain-four-icon';
import { RainIcon } from './rain-icon';
import { RainbowIcon } from './rainbow-icon';
import { RainyWeatherOneIcon } from './rainy-weather-one-icon';
import { RainyWeatherTwoIcon } from './rainy-weather-two-icon';
import { RainyWeatherThreeIcon } from './rainy-weather-three-icon';
import { RainyWeatherFourIcon } from './rainy-weather-four-icon';
import { RainyWeatherFiveIcon } from './rainy-weather-five-icon';
import { RainyWeatherSixIcon } from './rainy-weather-six-icon';
import { RainyWeatherSevenIcon } from './rainy-weather-seven-icon';
import { RainyWeatherIcon } from './rainy-weather-icon';
import { RightArrowIcon } from './right-arrow-icon';
import { SceneryIcon } from './scenery-icon';
import { SearchIcon } from './search-icon';
import { SnowflakeOneIcon } from './snowflake-one-icon';
import { SnowflakeIcon } from './snowflake-icon';
import { StormWeatherOneIcon } from './storm-weather-one-icon';
import { StormWeatherTwoIcon } from './storm-weather-two-icon';
import { StormWeatherIcon } from './storm-weather-icon';
import { SunIcon } from './sun-icon';
import { SunWithWindIcon } from './sun-with-wind-icon';
import { SunsetIcon } from './sunset-icon';
import { TelegramIcon } from './telegram-icon';
import { UrologyIcon } from './urology-icon';
import { UserIcon } from './user-icon';
import { VaccinationIcon } from './vaccination-icon';
import { VkIcon } from './vk-icon';
import { WarmWeatherIcon } from './warm-weather-icon';
import { WaterIcon } from './water-icon';
import { WindOneIcon } from './wind-one-icon';
import { WindIcon } from './wind-icon';
import { WindyIcon } from './windy-icon';
import { YoutubeIcon } from './youtube-icon';
import { ZenIcon } from './zen-icon';

const icons = {
  AllIcon,
  BigArrowIcon,
  CancelIcon,
  CardiologyIcon,
  ChatIcon,
  CheckIcon,
  CloseIcon,
  CloudDrizzelOneIcon,
  CloudDrizzelIcon,
  CloudIcon,
  CloudsIcon,
  ColdTemperatureIcon,
  ColdWeatherOneIcon,
  ColdWeatherTwoIcon,
  ColdWeatherIcon,
  DentistryIcon,
  DesertIcon,
  DiagnosticsIcon,
  DirectionToolIcon,
  EclipsedIcon,
  EditIcon,
  EyeClosedIcon,
  EyeIcon,
  FiltersIcon,
  FiltersWithCounterIcon,
  FirstAidIcon,
  ForwardIcon,
  GastroenterologyIcon,
  GeneticsIcon,
  GynecologyIcon,
  HailDuringNightIcon,
  HailIcon,
  HighTemperatureOneIcon,
  HighTemperatureIcon,
  BookmarkFillIcon,
  BookmarkIcon,
  DotIcon,
  ViewsIcon,
  LeftArrowIcon,
  LoaderCircleIcon,
  LocationPinIcon,
  LogoutOneIcon,
  LogoutIcon,
  MailIcon,
  MoonIcon,
  MoonWithWindIcon,
  MoonsetIcon,
  NightWeatherIcon,
  NotAvailableIcon,
  OceanIcon,
  OphthalmologyIcon,
  OtorhinolaryngologyIcon,
  PediatricsIcon,
  PodcastIcon,
  PsychotherapyIcon,
  RainOneIcon,
  RainTwoIcon,
  RainThreeIcon,
  RainFourIcon,
  RainIcon,
  RainbowIcon,
  RainyWeatherOneIcon,
  RainyWeatherTwoIcon,
  RainyWeatherThreeIcon,
  RainyWeatherFourIcon,
  RainyWeatherFiveIcon,
  RainyWeatherSixIcon,
  RainyWeatherSevenIcon,
  RainyWeatherIcon,
  RightArrowIcon,
  SceneryIcon,
  SearchIcon,
  SnowflakeOneIcon,
  SnowflakeIcon,
  StormWeatherOneIcon,
  StormWeatherTwoIcon,
  StormWeatherIcon,
  SunIcon,
  SunWithWindIcon,
  SunsetIcon,
  TelegramIcon,
  UrologyIcon,
  UserIcon,
  VaccinationIcon,
  VkIcon,
  WarmWeatherIcon,
  WaterIcon,
  WindOneIcon,
  WindIcon,
  WindyIcon,
  YoutubeIcon,
  ZenIcon,
};

type TIcons = Record<keyof typeof icons, FC<IIconProps>>;

export interface IconProps extends IIconProps {
  icon: keyof TIcons;
}

export function Icon({ icon, ...props }: IconProps) {
  const RenderIcon = useMemo(() => icons[icon], [icon]);

  return <RenderIcon {...props} />;
}

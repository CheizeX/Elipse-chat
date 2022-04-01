import { FC, MouseEventHandler } from 'react';

export interface INavBarLive {
  setSeletedSectionLiveChat: React.Dispatch<React.SetStateAction<string>>;
}
export interface INavBarLiveProps {
  focusCheck?: boolean;
  statusChecked?: string;
  avatar?: FC;
  position?: string;
  messageIcon?: () => JSX.Element;
  bellIcon?: () => JSX.Element;
  elipsis?: () => JSX.Element;
  onClick?: MouseEventHandler;
}

export interface IAvatarProps {
  focused: boolean;
}

export interface ICustomAvatar {
  setCustomAvatar: React.Dispatch<React.SetStateAction<string>>;
  setIsSection: React.Dispatch<React.SetStateAction<number>>;
}

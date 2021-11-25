export interface IPropsColorWrap {
  checked?: boolean;
  name?: string;
  mode?: string;
  tags?: string;
  tagName?: string;
  color: string;
  customIsColor?: boolean;
}

export interface ICustomColor {
  setCustomColor: React.Dispatch<React.SetStateAction<string>>;
  color: string;
  handleToggle: () => void;
}

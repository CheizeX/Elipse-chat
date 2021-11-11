export interface ITagTransferProps {
  name: string;
  color: string;
}
export interface IAgentToTransferProps {
  color?: string;
  name?: string;
  message?: number;
  change?: number;
  time?: number;
  minuts?: string;
  tag?: TagTransferType;
}
export type TagTransferType = ITagTransferProps[];

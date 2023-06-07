export type CardSecondaryPropsType = {
  children?: any;
  style?: React.CSSProperties;
  innerRef?(e: Element | null): void;
  className?: string;
  imgFlags: string;
  title: string;
};

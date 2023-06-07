export type CardThirdPropsType = {
  children?: any;
  style?: React.CSSProperties;
  innerRef?(e: Element | null): void;
  className?: string;
  title: string;
  imgPlace: string;
  text: string;
};

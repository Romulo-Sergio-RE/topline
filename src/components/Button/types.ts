export type ButtonPropsType = {
  children?: any;
  style?: React.CSSProperties;
  innerRef?(e: Element | null): void;
  className?: string;
  title: string;
  backColor: string;
  fontColor: string;
  widthBtn: string;
  heightBtn: string;
};
export type ButtonPropsStyled = {
  backColor: string;
  fontColor: string;
  widthBtn: string;
  heightBtn: string;
};

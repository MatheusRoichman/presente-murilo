import { MouseEventHandler, ReactElement } from "react";

type ButtonProps = {
  visible?: boolean;
  children: ReactElement
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({ visible = true, children, onClick }: ButtonProps) {
  return (
    <button onClick={visible ? onClick : undefined} style={{ visibility: visible ? 'visible' : 'hidden' }}>
      {children}
    </button>
  );
}

export default Button;

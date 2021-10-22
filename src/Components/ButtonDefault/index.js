import "./style.js";
import { Button, ButtonAnimated } from "./style.js";
const ButtonDefault = ({ children, callback, animation }) => {
  return animation ? (
    <ButtonAnimated
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 2 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      onClick={callback}
    >
      {children}
    </ButtonAnimated>
  ) : (
    <Button onClick={callback}>{children}</Button>
  );
};

export default ButtonDefault;

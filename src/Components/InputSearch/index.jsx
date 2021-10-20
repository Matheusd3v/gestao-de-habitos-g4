import { FcSearch } from "react-icons/fc";
import { Input, Container } from "./style";
const InputSearch = ({ callBack, placeholder }) => {
  return (
    <Container>
      <Input placeholder={placeholder} />
      <button onClick={callBack}>
        <FcSearch />
      </button>
    </Container>
  );
};
export default InputSearch;

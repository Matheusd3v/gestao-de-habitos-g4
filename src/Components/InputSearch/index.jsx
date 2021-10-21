import { FcSearch } from "react-icons/fc";
import { Input, Container } from "./style";
import { UserContext } from "../../Providers/user";
import { useContext } from "react";

const InputSearch = ({ callBack, placeholder }) => {
  const { getFilteredHabits } = useContext(UserContext);

  return (
    <Container>
      <Input
        onChange={(e) => getFilteredHabits(e.target.value)}
        placeholder={placeholder}
      />
      <button>
        <FcSearch />
      </button>
    </Container>
  );
};
export default InputSearch;

import { TextField } from "@material-ui/core";

const Register = () => {
  return (
    <>
      <form>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          size="small"
          color="primary"
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          size="small"
          color="primary"
        />
        <TextField
          label="Confirm email"
          variant="outlined"
          margin="normal"
          size="small"
          color="primary"
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          size="small"
          color="primary"
          type="password"
        />
        <TextField
          label="Confirm password"
          variant="outlined"
          margin="normal"
          size="small"
          color="primary"
          type="password"
        />
        <button>Cadastrar-se</button>
      </form>
    </>
  );
};

export default Register;

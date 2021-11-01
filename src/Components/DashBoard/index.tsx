import { useAuth } from "../../Providers/Auth/autch";
import { Container } from "./style";

export const DashBoard = () => {
  const { name, Logout } = useAuth();
  console.log(name);
  return (
    <div>
      <Container>
        <img
          src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1507162903/qkpagi7sv8temclfcfjp.png"
          alt="Logo"
        />
        <h3>Login efetuado com sucesso</h3>
        <h4>Seus Dados:</h4>
        <p>Nome:{name.name}</p>
        <p>Bio:{name.bio}</p>
        <p>Email:{name.email}</p>
        <p>Modulo:{name.course_module}</p>
        <button onClick={() => Logout()}>Loagout</button>
      </Container>
    </div>
  );
};

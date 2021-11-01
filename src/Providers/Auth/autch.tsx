import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
interface UserProps {
  children: ReactNode;
}
interface UserData {
  email: string;
  password: string;
}
interface UserProvider {
  authToken: string;
  signIn: (UserData: UserData) => void;
  Logout: () => void;
  name: any;
}
interface Infos {
  user: any;
  token: string;
}

const AuthContext = createContext<UserProvider>({} as UserProvider);

export const AuthProvider = ({ children }: UserProps) => {
  const history = useHistory();

  // Dessa forma adicionamos ao state o token caso ele exista no localStorage
  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );
  const [name, setName] = useState();
  // Função para logar na aplicação, recebe os dados pegos do form de login
  const signIn = (userData: UserData) => {
    axios
      .post<Infos>("https://kenziehub.herokuapp.com/sessions", userData)
      .then((response) => {
        // setamos no localStorage o token, caso tenhamos a resposta esperada
        localStorage.setItem("token", response.data.token);
        // setamos no state o token, caso tenhamos a resposta esperada
        setAuthToken(response.data.token);
        setName(response.data.user);
        // redirecionamos para a página logado
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  // Função para deslogar da aplicação
  const Logout = () => {
    // limpando o localStorage
    localStorage.clear();
    // limpando o state
    setAuthToken("");
    // redirecionando para login
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ authToken, Logout, signIn, name }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

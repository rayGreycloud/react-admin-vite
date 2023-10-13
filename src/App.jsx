import { Admin, Resource, EditGuesser, ShowGuesser } from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";

import users from "./components/Users";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" {...users} edit={EditGuesser} show={ShowGuesser} />
  </Admin>
);

import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/login'
import HomePage from "./pages/home";
import RegisterPage from "./pages/register";
import { AccountContextProvider } from "./context/account-context";
import MePage from "./components/me_page";
import Layout from "./components/layout";
import ChannelsTemplete from "./components/channels";

function App() {
  return (
    <AccountContextProvider>
      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route element={<Layout />}>
          <Route path='/channels/@me' element={<MePage />} />
          <Route path='/channels/:id' element={<ChannelsTemplete />} />
        </Route>
      </Routes>
    </AccountContextProvider>
  );
}

export default App;

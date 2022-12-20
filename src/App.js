import { Route, Routes } from "react-router-dom";
import { AccountContextProvider } from "./context/account-context";
import HomePage from './pages/auth/home';
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';
import Layout from "./pages/channels/layout";
import Mepage from "./pages/channels/mePage";
import ChannelsTemplete from './pages/channels/channels'

function App() {
  return (
    <AccountContextProvider>
      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route element={<Layout />}>
          <Route path='/channels/@me/*' element={<Mepage />} />
          <Route path='/channels/:id' element={<ChannelsTemplete />} />
        </Route>
      </Routes>
    </AccountContextProvider>
  );
}

export default App;

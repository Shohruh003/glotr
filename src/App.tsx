import { StoreProvider } from './context/StoreContext';
import RoutesComponent from './routes/routes';
import { CoreContextProvider } from './context/CoreContext';

const App = () => {
  const language = localStorage.getItem("lang") || "ru";
  const locale = {
    ru: {
      hello: "Привет",
      world: "Мир",
    },
    en: {
      hello: "Hello",
      world: "World",
    },
  };
  const config = {
    apiUrl: "https://api.example.com",
  };
  const isMobile = window.innerWidth < 768;
  return (
    <StoreProvider>
      <CoreContextProvider
      value={{
        language,
        locale,
        config,
        isMobile,
      }}>
        <RoutesComponent />
      </CoreContextProvider>
    </StoreProvider>
  );
};

export default App;
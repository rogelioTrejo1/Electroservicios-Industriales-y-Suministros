// Componetes
import Header from "./components/Header";
import MainContent from "./components/MainContent";

const App = (): JSX.Element => (
    <div className="App">
        {/* Inicio de la cabecera! */}
        <Header />
        {/* Inicio de el body de la aplicacion */}
        <MainContent />
        <footer>
            {/* Creación del footer */}
        </footer>
    </div>
);

export default App;
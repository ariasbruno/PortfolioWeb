import { useNavigate } from "react-router-dom";

const NotFound = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-yellow-400 mb-4">Esta pagina no existe</p>
        <button
          className="bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-lg text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-yellow-400/25"
          onClick={() => navigate("/")}
        >
          Volver a inicio
        </button>
      </div>
    </div>
  );
};

export default NotFound;
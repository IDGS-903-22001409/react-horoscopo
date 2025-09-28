import React, { useState } from "react";
import { Calendar, Star, Sparkles, Moon, Sun } from "lucide-react";

// Datos de los signos zodiacales
const zodiacSigns = {
  aries: {
    name: "Aries",
    dates: "21 Mar - 19 Abr",
    element: "Fuego",
    symbol: "♈",
    horoscope:
      "Tu energía está en su punto máximo. Es un buen momento para iniciar nuevos proyectos y tomar decisiones importantes. La confianza en ti mismo te llevará lejos.",
    traits: ["Valiente", "Líder natural", "Energético", "Independiente"],
    color: "#ef4444",
  },
  taurus: {
    name: "Tauro",
    dates: "20 Abr - 20 May",
    element: "Tierra",
    symbol: "♉",
    horoscope:
      "La estabilidad que buscas está cerca. Enfócate en consolidar tus logros y disfrutar de los placeres simples de la vida. Tu perseverancia dará frutos.",
    traits: ["Confiable", "Paciente", "Determinado", "Leal"],
    color: "#10b981",
  },
  gemini: {
    name: "Géminis",
    dates: "21 May - 20 Jun",
    element: "Aire",
    symbol: "♊",
    horoscope:
      "Tu mente curiosa encontrará nuevas oportunidades de aprendizaje. Es momento de comunicarte más y conectar con personas que compartan tus intereses.",
    traits: ["Versátil", "Comunicativo", "Inteligente", "Adaptable"],
    color: "#3b82f6",
  },
  cancer: {
    name: "Cáncer",
    dates: "21 Jun - 22 Jul",
    element: "Agua",
    symbol: "♋",
    horoscope:
      "Tus emociones te guían hacia decisiones sabias. Es tiempo de cuidar de ti y de los que amas. La intuición será tu mejor consejera.",
    traits: ["Protector", "Intuitivo", "Emocional", "Cariñoso"],
    color: "#06b6d4",
  },
  leo: {
    name: "Leo",
    dates: "23 Jul - 22 Ago",
    element: "Fuego",
    symbol: "♌",
    horoscope:
      "Brillas con luz propia y otros lo notarán. Es momento de mostrar tus talentos y liderar con el corazón. Tu carisma abrirá puertas importantes.",
    traits: ["Carismático", "Generoso", "Creativo", "Confiado"],
    color: "#f59e0b",
  },
  virgo: {
    name: "Virgo",
    dates: "23 Ago - 22 Sep",
    element: "Tierra",
    symbol: "♍",
    horoscope:
      "Tu atención al detalle te permitirá perfeccionar proyectos importantes. Es tiempo de organizar tu vida y enfocarte en la mejora continua.",
    traits: ["Analítico", "Perfeccionista", "Práctico", "Servicial"],
    color: "#8b5cf6",
  },
  libra: {
    name: "Libra",
    dates: "23 Sep - 22 Oct",
    element: "Aire",
    symbol: "♎",
    horoscope:
      "El equilibrio que buscas llegará a través de la armonía en tus relaciones. Es momento de tomar decisiones justas y buscar la belleza en todo.",
    traits: ["Equilibrado", "Diplomático", "Artístico", "Sociable"],
    color: "#ec4899",
  },
  scorpio: {
    name: "Escorpio",
    dates: "23 Oct - 21 Nov",
    element: "Agua",
    symbol: "♏",
    horoscope:
      "Tu intensidad emocional te llevará a transformaciones profundas. Es tiempo de dejar ir lo que ya no te sirve y renacer más fuerte.",
    traits: ["Intenso", "Misterioso", "Transformador", "Leal"],
    color: "#7c3aed",
  },
  sagittarius: {
    name: "Sagitario",
    dates: "22 Nov - 21 Dic",
    element: "Fuego",
    symbol: "♐",
    horoscope:
      "Tu espíritu aventurero te llevará a nuevos horizontes. Es momento de expandir tus conocimientos y explorar nuevas filosofías de vida.",
    traits: ["Aventurero", "Optimista", "Filosófico", "Libre"],
    color: "#059669",
  },
  capricorn: {
    name: "Capricornio",
    dates: "22 Dic - 19 Ene",
    element: "Tierra",
    symbol: "♑",
    horoscope:
      "Tu disciplina y ambición te acercan a tus metas. Es momento de trabajar duro y ser paciente, pues el éxito está en camino.",
    traits: ["Ambicioso", "Disciplinado", "Responsable", "Tradicional"],
    color: "#6b7280",
  },
  aquarius: {
    name: "Acuario",
    dates: "20 Ene - 18 Feb",
    element: "Aire",
    symbol: "♒",
    horoscope:
      "Tu originalidad y visión del futuro te distinguen. Es momento de innovar y conectar con comunidades que compartan tus ideales.",
    traits: ["Innovador", "Independiente", "Humanitario", "Original"],
    color: "#0ea5e9",
  },
  pisces: {
    name: "Piscis",
    dates: "19 Feb - 20 Mar",
    element: "Agua",
    symbol: "♓",
    horoscope:
      "Tu sensibilidad y creatividad están en su punto máximo. Es momento de confiar en tu intuición y expresar tu arte al mundo.",
    traits: ["Creativo", "Compasivo", "Intuitivo", "Espiritual"],
    color: "#f97316",
  },
};

// Función para determinar el signo zodiacal
const getZodiacSign = (birthDate) => {
  const date = new Date(birthDate);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "taurus";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "gemini";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
    return "scorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
    return "sagittarius";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
    return "capricorn";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
    return "aquarius";
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "pisces";
};

// Componente para el formulario de fecha
const DateForm = ({ onSubmit }) => {
  const [birthDate, setBirthDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (birthDate) {
      onSubmit(birthDate);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-light text-gray-900 mb-2">Horóscopo</h1>
          <p className="text-gray-500 text-sm">Descubre tu signo zodiacal</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Fecha de nacimiento
            </label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white text-gray-900 transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Ver horóscopo
          </button>
        </form>
      </div>
    </div>
  );
};

// Componente para mostrar el horóscopo
const HoroscopeDisplay = ({ zodiacKey, onReset }) => {
  const sign = zodiacSigns[zodiacKey];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Header minimalista con color del signo */}
        <div className="px-8 py-12 text-center border-b border-gray-100">
          <div className="text-6xl mb-4" style={{ color: sign.color }}>
            {sign.symbol}
          </div>
          <h2 className="text-3xl font-light text-gray-900 mb-2">
            {sign.name}
          </h2>
          <p className="text-gray-500 mb-3">{sign.dates}</p>
          <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
            <span>Elemento: {sign.element}</span>
          </div>
        </div>

        {/* Contenido del horóscopo */}
        <div className="p-8">
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Tu horóscopo
            </h3>
            <p className="text-gray-700 leading-relaxed">{sign.horoscope}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Características
            </h3>
            <div className="flex flex-wrap gap-2">
              {sign.traits.map((trait, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-sm border border-gray-100"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center pt-4 border-t border-gray-100">
            <button
              onClick={onReset}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              ← Consultar otro horóscopo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente principal
const HoroscopeApp = () => {
  const [currentSign, setCurrentSign] = useState(null);

  const handleDateSubmit = (birthDate) => {
    const sign = getZodiacSign(birthDate);
    setCurrentSign(sign);
  };

  const handleReset = () => {
    setCurrentSign(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {!currentSign ? (
          <DateForm onSubmit={handleDateSubmit} />
        ) : (
          <HoroscopeDisplay zodiacKey={currentSign} onReset={handleReset} />
        )}
      </div>
    </div>
  );
};

export default HoroscopeApp;

import { useState } from "react";
import "./App.css";

function App() {
  const [birthDate, setBirthDate] = useState("");
  const [horoscope, setHoroscope] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Datos de los signos zodiacales
  const zodiacSigns = {
    capricornio: {
      name: "Capricornio",
      symbol: "♑",
      element: "Tierra",
      dates: "22 Dic - 19 Ene",
      description:
        "Ambicioso, disciplinado y práctico. Tu determinación te lleva al éxito.",
      horoscope:
        "Hoy es un día excelente para enfocarte en tus metas profesionales. Tu perseverancia será recompensada con nuevas oportunidades. En el amor, mantén la comunicación abierta.",
      luckyNumber: 8,
      color: "#8B4513",
    },
    acuario: {
      name: "Acuario",
      symbol: "♒",
      element: "Aire",
      dates: "20 Ene - 18 Feb",
      description:
        "Innovador, independiente y humanitario. Tu originalidad inspira a otros.",
      horoscope:
        "Tu creatividad está en su punto máximo. Es momento de explorar nuevas ideas y conectar con personas afines. Las colaboraciones serán especialmente fructíferas.",
      luckyNumber: 11,
      color: "#00CED1",
    },
    piscis: {
      name: "Piscis",
      symbol: "♓",
      element: "Agua",
      dates: "19 Feb - 20 Mar",
      description:
        "Intuitivo, compasivo y artístico. Tu sensibilidad es tu mayor fortaleza.",
      horoscope:
        "Tu intuición te guiará hacia decisiones importantes. Confía en tus instintos y dedica tiempo a actividades creativas. El amor llega de forma inesperada.",
      luckyNumber: 7,
      color: "#8A2BE2",
    },
    aries: {
      name: "Aries",
      symbol: "♈",
      element: "Fuego",
      dates: "21 Mar - 19 Abr",
      description:
        "Líder natural, energético y valiente. Tu iniciativa abre caminos.",
      horoscope:
        "Tu energía está en el nivel más alto. Es momento de tomar iniciativas y liderar proyectos importantes. En el romance, la pasión será tu aliada.",
      luckyNumber: 1,
      color: "#FF4500",
    },
    tauro: {
      name: "Tauro",
      symbol: "♉",
      element: "Tierra",
      dates: "20 Abr - 20 May",
      description:
        "Estable, leal y determinado. Tu paciencia construye cimientos sólidos.",
      horoscope:
        "La estabilidad que has construido comienza a dar frutos. Enfócate en consolidar tus logros y disfruta de los placeres simples de la vida.",
      luckyNumber: 6,
      color: "#228B22",
    },
    geminis: {
      name: "Géminis",
      symbol: "♊",
      element: "Aire",
      dates: "21 May - 20 Jun",
      description:
        "Comunicativo, adaptable y curioso. Tu versatilidad es tu superpoder.",
      horoscope:
        "Tu capacidad de comunicación brillará hoy. Nuevas conexiones y aprendizajes te esperan. Mantén tu mente abierta a diferentes perspectivas.",
      luckyNumber: 3,
      color: "#FFD700",
    },
    cancer: {
      name: "Cáncer",
      symbol: "♋",
      element: "Agua",
      dates: "21 Jun - 22 Jul",
      description:
        "Protector, emocional e intuitivo. Tu corazón guía tus mejores decisiones.",
      horoscope:
        "Las relaciones familiares y cercanas requieren tu atención. Tu naturaleza protectora será muy valorada. Confía en tus emociones.",
      luckyNumber: 2,
      color: "#C0C0C0",
    },
    leo: {
      name: "Leo",
      symbol: "♌",
      element: "Fuego",
      dates: "23 Jul - 22 Ago",
      description:
        "Carismático, generoso y creativo. Tu luz ilumina a quienes te rodean.",
      horoscope:
        "Tu carisma natural atrae oportunidades extraordinarias. Es momento de brillar y mostrar tu talento al mundo. El reconocimiento llegará pronto.",
      luckyNumber: 5,
      color: "#FF8C00",
    },
    virgo: {
      name: "Virgo",
      symbol: "♍",
      element: "Tierra",
      dates: "23 Ago - 22 Sep",
      description:
        "Analítico, perfeccionista y servicial. Tu atención al detalle marca la diferencia.",
      horoscope:
        "Tu meticulosidad será clave para resolver situaciones complejas. Organiza tus prioridades y verás resultados excepcionales en poco tiempo.",
      luckyNumber: 6,
      color: "#4B0082",
    },
    libra: {
      name: "Libra",
      symbol: "♎",
      element: "Aire",
      dates: "23 Sep - 22 Oct",
      description:
        "Equilibrado, diplomático y encantador. Tu armonía inspira paz.",
      horoscope:
        "El equilibrio que buscas está al alcance. Tus habilidades diplomáticas resolverán conflictos importantes. El amor y la belleza te rodean.",
      luckyNumber: 7,
      color: "#FF69B4",
    },
    escorpio: {
      name: "Escorpio",
      symbol: "♏",
      element: "Agua",
      dates: "23 Oct - 21 Nov",
      description:
        "Intenso, misterioso y transformador. Tu profundidad revela verdades ocultas.",
      horoscope:
        "Tu intensidad emocional te lleva a descubrimientos importantes. Las transformaciones que has estado esperando finalmente se manifiestan.",
      luckyNumber: 9,
      color: "#8B0000",
    },
    sagitario: {
      name: "Sagitario",
      symbol: "♐",
      element: "Fuego",
      dates: "22 Nov - 21 Dic",
      description:
        "Aventurero, optimista y filosófico. Tu espíritu libre conquista horizontes.",
      horoscope:
        "Las aventuras y nuevos conocimientos te esperan. Tu optimismo contagioso abre puertas a experiencias extraordinarias. Expande tus horizontes.",
      luckyNumber: 9,
      color: "#9370DB",
    },
  };

  // Función para determinar el signo zodiacal
  const getZodiacSign = (date) => {
    const birth = new Date(date);
    const month = birth.getMonth() + 1;
    const day = birth.getDate();

    if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
      return "capricornio";
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
      return "acuario";
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20))
      return "piscis";
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19))
      return "aries";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
      return "tauro";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
      return "geminis";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
      return "cancer";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "leo";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
      return "virgo";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
      return "libra";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
      return "escorpio";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
      return "sagitario";
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!birthDate) return;

    setIsLoading(true);

    // Simular carga para mejor UX
    setTimeout(() => {
      const sign = getZodiacSign(birthDate);
      setHoroscope(zodiacSigns[sign]);
      setIsLoading(false);
    }, 1000);
  };

  // Resetear el horóscopo
  const resetHoroscope = () => {
    setHoroscope(null);
    setBirthDate("");
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo-container"></div>
        <h1 className="title">Horóscopo</h1>
        <p className="subtitle">
          Descubre tu signo zodiacal y horóscopo del día
        </p>
      </header>

      {!horoscope ? (
        <main className="main-card">
          <form onSubmit={handleSubmit} className="horoscope-form">
            <div className="form-group">
              <label htmlFor="birthDate" className="form-label">
                Fecha de Nacimiento
              </label>
              <br></br>
              <input
                type="date"
                id="birthDate"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="date-input"
                required
                max={new Date().toISOString().split("T")[0]}
              />
            </div>

            <button
              type="submit"
              className="generate-button"
              disabled={!birthDate || isLoading}
            >
              {isLoading ? (
                <>
                  <span className="loading-spinner"></span>
                  Consultando las estrellas...
                </>
              ) : (
                <>Generar Horóscopo</>
              )}
            </button>
          </form>
        </main>
      ) : (
        <main className="horoscope-result">
          <div className="sign-header" style={{ borderColor: horoscope.color }}>
            <div className="sign-symbol" style={{ color: horoscope.color }}>
              {horoscope.symbol}
            </div>
            <div className="sign-info">
              <h2 className="sign-name">{horoscope.name}</h2>
              <p className="sign-dates">{horoscope.dates}</p>
              <span
                className="sign-element"
                style={{ backgroundColor: horoscope.color }}
              >
                {horoscope.element}
              </span>
            </div>
          </div>

          <div className="horoscope-content">
            <div className="description-card">
              <h3>Tu Personalidad</h3>
              <p>{horoscope.description}</p>
            </div>

            <div className="horoscope-card">
              <h3>Horóscopo de Hoy</h3>
              <p>{horoscope.horoscope}</p>
            </div>

            <div className="details-grid">
              <div className="detail-card">
                <span className="detail-label">Número de la Suerte</span>
                <span className="detail-value">{horoscope.luckyNumber}</span>
              </div>
              <div className="detail-card">
                <span className="detail-label">Color del Día</span>
                <div
                  className="color-preview"
                  style={{ backgroundColor: horoscope.color }}
                ></div>
              </div>
            </div>
          </div>

          <button onClick={resetHoroscope} className="reset-button">
            Consultar Otra Fecha
          </button>
        </main>
      )}
    </div>
  );
}

export default App;

import { Play, PlayCircle, RotateCcw } from "lucide-react";

interface HomeScreenProps {
  onSelect: (id: string) => void;
}

const locations = [
  { id: "patio", label: "Pátio do Colégio", description: "O marco zero de São Paulo" },
  { id: "praca", label: "Praça da República", description: "Coração cultural da cidade" },
  { id: "banco", label: "Banco do Estado", description: "Patrimônio financeiro paulista" },
];

const HomeScreen = ({ onSelect }: HomeScreenProps) => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12">
      <div className="absolute top-8 right-8">
        <button
            onClick={() => onSelect("home")}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300 text-sm font-medium shadow-sm"
            >
              <RotateCcw className="h-4 w-4" />
              Reiniciar Experiência
        </button>
      </div>
      <div className="mb-12 text-center">
          
        <h1 className="text-gradient-gold mb-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          São Paulo
        </h1>
        <p className="text-lg text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
          Uma breve jornada pela história
        </p>

      </div>

      <div className="grid w-full max-w-xl gap-4 sm:grid-cols-1">
        {locations.map((loc) => (
          <button
            key={loc.id}
            onClick={() => onSelect(loc.id)}
            className="btn-historic group flex items-center gap-4 text-left"
          >
            <Play className="h-5 w-5 shrink-0 text-primary opacity-60 transition-opacity group-hover:opacity-100" />
            <div>
              <span className="block text-lg font-semibold">{loc.label}</span>
              <span className="block text-sm text-muted-foreground">{loc.description}</span>
            </div>
          </button>
        ))}

        <button
          onClick={() => onSelect("all")}
          className="btn-historic-accent group mt-2 flex items-center justify-center gap-3 text-center text-lg font-semibold"
        >
          <PlayCircle className="h-6 w-6 transition-transform group-hover:scale-110" />
          Reproduzir Todos
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;

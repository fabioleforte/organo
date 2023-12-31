import './CampoTexto.css';

interface CampoTextoProps {
  aoAlterado: (valor: string) => void;
  placeholder: string;
  label: string;
  valor: string;
  obrigatorio?: boolean;
  tipo?: 'text' | 'password' | 'date' | 'email' | 'number';
}
const CampoTexto = ({
  aoAlterado,
  placeholder,
  label,
  valor,
  obrigatorio = false,
  tipo = 'text',
}: CampoTextoProps) => {
  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        type={tipo}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CampoTexto;

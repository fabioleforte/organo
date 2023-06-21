import './ListaSuspensa.css';

interface ListaSuspensaProps {
  aoAlterado: (valor: string) => void;
  label: string;
  obrigatorio: boolean;
  valor: string;
  itens: string[];
}

const ListaSuspensa = ({
  aoAlterado,
  itens,
  label,
  obrigatorio,
  valor,
}: ListaSuspensaProps) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        onChange={(evento) => aoAlterado(evento.target.value)}
        required={obrigatorio}
        value={valor}
      >
        <option></option>
        {itens.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;

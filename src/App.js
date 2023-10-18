import "./styles.css";
import { useState } from "react";

export default function App() {
	const [arrayDeTarefas, setArrayDeTarefas] = useState([]);

	const [guardarTarefa, setGuardarTarefa] = useState("");

	const CapturarValor = (item) => {
		setGuardarTarefa(item.target.value);
		// target -> alvo, value -> valor
		// Console.log() pegue a minha tag <input/> e mostre pra mim o meu alvo que é o valor que o usuário está digitando.
	};

	const AdicionarTarefaNoArray = () => {
		// concat também é mais um dos métodos de array que ele concatenar(juntar) uma informação dentro do nosso array.
		setArrayDeTarefas(arrayDeTarefas.concat(guardarTarefa));
	};

	// onChange é um evento que detecta mudanças de valores nas tags input

	return (
		<div>
			<input type="text" placeholder="Digite seu e-mail" onChange={CapturarValor} />
			<button onClick={AdicionarTarefaNoArray}>Adicionar Tarefas</button>
			<ol>
				{arrayDeTarefas.map((item) => (
					<li>{item}</li>
				))}
			</ol>
		</div>
	);
}

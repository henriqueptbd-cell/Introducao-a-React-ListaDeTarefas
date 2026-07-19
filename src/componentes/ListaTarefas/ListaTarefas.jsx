import { useAppContext } from "../../hooks";
import { ListaTarefasItem } from "./ListaTarefaItem";
import style from "./ListaTarefas.module.css";

const ListaTarefas = () => {
  const { tarefas, loading } = useAppContext(); // ← ADICIONAR loading!

  // ⏳ ENQUANTO CARREGA, MOSTRA "Carregando..."
  if (loading) {
    return (
      <div className={style.loadingContainer}>
        <p>⏳ Carregando tarefas...</p>
        <div className={style.spinner}></div>
      </div>
    );
  }

  // 📭 SE NÃO TIVER TAREFAS, MOSTRA MENSAGEM
  if (tarefas.length === 0) {
    return (
      <ul className={style.ListaTarefas}>
        <p>Não há tarefas cadastradas...</p>
      </ul>
    );
  }

  // ✅ MOSTRA A LISTA DE TAREFAS
  return (
    <ul className={style.ListaTarefas}>
      {tarefas.map((item) => (
        <ListaTarefasItem key={item.id} id={item.id} nome={item.nome} />
      ))}
    </ul>
  );
};

export { ListaTarefas };

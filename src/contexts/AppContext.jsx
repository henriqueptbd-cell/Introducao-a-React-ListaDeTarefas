import { createContext, useEffect, useState } from "react";
import { api } from "../services";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext({});

export const AppContextProvider = (props) => {
  const { children } = props;

  const [criador] = useState("Henrique Camargo");
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(true); // ← COMEÇA CARREGANDO!

  const carregarTarefas = async () => {
    try {
      setLoading(true); // ← ATIVA LOADING
      const { data = [] } = await api.get("/tarefas");
      setTarefas([...data]);
    } catch (error) {
      console.error("Erro ao carregar tarefas:", error);
    } finally {
      setLoading(false); // ← DESATIVA LOADING (sempre)
    }
  };

  const adicionarTarefa = async (nomeTarefa) => {
    try {
      setLoading(true); // ← ATIVA LOADING
      const { data: tarefa } = await api.post("/tarefas", {
        nome: nomeTarefa,
      });
      setTarefas((estadoAtual) => [...estadoAtual, tarefa]);
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
    } finally {
      setLoading(false); // ← DESATIVA LOADING
    }
  };

  const removerTarefa = async (idTarefa) => {
    try {
      setLoading(true); // ← ATIVA LOADING
      await api.delete(`tarefas/${idTarefa}`);
      setTarefas((estadoAtual) =>
        estadoAtual.filter((tarefa) => tarefa.id !== idTarefa),
      );
    } catch (error) {
      console.error("Erro ao remover tarefa:", error);
    } finally {
      setLoading(false); // ← DESATIVA LOADING
    }
  };

  const atualizarTarefa = async (idTarefa, novoNome) => {
    try {
      setLoading(true); // ← ATIVA LOADING
      const { data: tarefaAtualizada } = await api.put(`tarefas/${idTarefa}`, {
        nome: novoNome,
      });

      setTarefas((estadoAtual) =>
        estadoAtual.map((tarefa) =>
          tarefa.id === idTarefa
            ? { ...tarefa, nome: tarefaAtualizada.nome }
            : tarefa,
        ),
      );
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
    } finally {
      setLoading(false); // ← DESATIVA LOADING
    }
  };

  // 🔄 CARREGA AS TAREFAS QUANDO O COMPONENTE MONTA
  useEffect(() => {
    carregarTarefas();
  }, []);

  return (
    <AppContext.Provider
      value={{
        criador,
        tarefas,
        loading, // ← EXPORTA O LOADING! (IMPORTANTE!)
        adicionarTarefa,
        removerTarefa,
        atualizarTarefa,
        carregarTarefas, // ← ÚTIL PARA RECARREGAR MANUALMENTE
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

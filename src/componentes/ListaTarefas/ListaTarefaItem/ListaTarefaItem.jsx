import { useState } from "react"; // ← ADICIONAR
import { useAppContext } from "../../../hooks";
import { Botao, TIPO_BOTAO } from "../../Botao";
import style from "./ListaTarefaItem.module.css";
import { CampoTexto } from "../../CampoTexto";

const ListaTarefasItem = (props) => {
  const { id, nome } = props;
  const { removerTarefa, atualizarTarefa } = useAppContext(); // ← ADICIONAR atualizarTarefa
  const [editando, setEditando] = useState(false); // ← ADICIONAR ESTADO
  const [loading, setLoading] = useState(false); // ← NOVO ESTADO DE CARREGAMENTO!

  // Quando der duplo clique, ativa edição
  const handleDoubleClick = () => {
    setEditando(true);
  };

  // Quando clicar fora, salva a edição
  const handleBlur = async (e) => {
    const novoNome = e.target.value;

    if (novoNome.trim() !== "") {
      try {
        // 🔄 ATIVA O LOADING
        setLoading(true);

        // ⏳ ESPERA A ATUALIZAÇÃO NA API
        await atualizarTarefa(id, novoNome);

        // ✅ SAI DO MODO EDIÇÃO
        setEditando(false);
      } catch (error) {
        console.error("Erro ao salvar tarefa:", error);
        // Opcional: mostrar mensagem de erro
      } finally {
        // 🔄 DESATIVA O LOADING (sempre, mesmo se der erro)
        setLoading(false);
      }
    } else {
      // Se o nome estiver vazio, só sai da edição
      setEditando(false);
    }
  };

  // Quando apertar ENTER, salva
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.target.blur(); // Dispara o onBlur
    }
    if (e.key === "Escape") {
      setEditando(false); // Cancela edição
    }
  };

  return (
    <li
      className={`${style.ListaTarefaItem} ${loading ? style.loading : ""} `}
      onDoubleClick={handleDoubleClick} // ← ADICIONAR
    >
      {editando ? ( // ← SE estiver editando, mostra input
        <CampoTexto
          type="text"
          defaultValue={nome}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          disabled={loading}
        />
      ) : (
        // ← SENÃO, mostra o texto normal
        <span>
          {loading ? "⏳ Salvando..." : nome}
          {/* ⬆ MOSTRA "Salvando..." ENQUANTO CARREGA */}
        </span>
      )}
      <Botao
        texto="-"
        tipo={TIPO_BOTAO.SECUNDARIO}
        onClick={() => removerTarefa(id)}
        disabled={loading}
      />
    </li>
  );
};

export { ListaTarefasItem };

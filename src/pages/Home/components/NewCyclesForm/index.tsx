import { FormsContainer, MinutesAmountInput, TaksInput } from "./styles";

export function NewCycleForm() {
  return (
    <FormsContainerner>
      <label htmlFor="taks">Vou trabalhar em </label>
      <TaksInput
        id="taks"
        list="task-suggestions"
        disabled={!!activeCycle}
        placeholder="Dê um nome para o seu projeto"
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 4" />
      </datalist>

      <label htmlFor="minutesAMount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAMount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormsContainer>
  )
}

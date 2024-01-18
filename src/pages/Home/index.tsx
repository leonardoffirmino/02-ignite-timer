import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormsContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaksInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormsContainer>
          <label htmlFor="taks">Vou trabalhar em </label>
          <TaksInput
            id="taks"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
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
          />

          <span>minutos.</span>
        </FormsContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}

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
          <TaksInput id="taks" placeholder="Dê um nome para o seu projeto" />

          <label htmlFor="minutesAMount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAMount"
            placeholder="00"
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

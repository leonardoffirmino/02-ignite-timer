import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormsContainer,
  HomeContainer,
  Separator,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormsContainer>
          <label htmlFor="taks">Vou trabalhar em </label>
          <input id="taks" />

          <label htmlFor="minutesAMount">durante</label>
          <input type="number" id="minutesAMount" />

          <span>minutos.</span>
        </FormsContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </HomeContainer>
  )
}

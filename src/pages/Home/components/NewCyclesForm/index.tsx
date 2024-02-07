import { useForm } from 'react-hook-form'
import { FormsContainer, MinutesAmountInput, TaksInput } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export function NewCycleForm() {
  const newCyleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
      .number()
      .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
      .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
  })

  type NewCycleFormData = zod.infer<typeof newCyleFormValidationSchema>

  interface Cycle {
    id: string
    task: string
    minutesAmount: number
    startDate: Date
    interrupteDate?: Date
    fineshedDate?: Date
  }

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolverlver(newCyleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  return (
    <FormsContainer>
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

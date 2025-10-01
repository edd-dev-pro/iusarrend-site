export interface PlanFeature {
  concept: string
  classic: boolean
  gold: boolean
  black: boolean
}

export const FEATURES: PlanFeature[] = [
  {
    concept: 'Elaboración de contrato de arrendamiento',
    classic: true,
    gold: true,
    black: true,
  },
  {
    concept: 'Investigación de incidencias legales arrendatario',
    classic: true,
    gold: true,
    black: true,
  },
  {
    concept: 'Investigación de incidencias legales fiador',
    classic: false,
    gold: true,
    black: true,
  },
  {
    concept:
      'Investigación de la propiedad en el Registro Público de la Propiedad (fiador) CDMX y Área Metropolitana',
    classic: false,
    gold: true,
    black: true,
  },
  {
    concept: 'Asesoría con expertos antes y durante el proceso de contratación',
    classic: false,
    gold: true,
    black: true,
  },
  {
    concept:
      'Validación de documentos presentados por el arrendatario y fiador',
    classic: true,
    gold: true,
    black: true,
  },
  {
    concept: 'Elaboración del Inventario Fotográfico (Previa solicitud)',
    classic: false,
    gold: true,
    black: true,
  },
  {
    concept: 'Asistencia de un abogado a la firma del contrato (Previa cita)',
    classic: true,
    gold: true,
    black: true,
  },
  {
    concept: 'Asistencia de un abogado a la entrega del inmueble (Previa cita)',
    classic: true,
    gold: true,
    black: true,
  },
  {
    concept:
      'Intervención extrajudicial por cualquier incumplimiento durante el arrendamiento',
    classic: true,
    gold: true,
    black: true,
  },
  {
    concept: 'Recuperación legal del inmueble por abandono del inquilino',
    classic: true,
    gold: true,
    black: true,
  },
  {
    concept: 'Recuperación legal del inmueble por falta de pago de renta',
    classic: false,
    gold: true,
    black: true,
  },
  {
    concept:
      'Recuperación legal del inmueble por negativa a la desocupación al vencer el contrato',
    classic: false,
    gold: true,
    black: true,
  },
  {
    concept:
      'Cobranza extrajudicial de adeudos de rentas y servicios contratados',
    classic: true,
    gold: true,
    black: true,
  },
  {
    concept: 'Cobranza judicial de adeudos de rentas y servicios contratados',
    classic: false,
    gold: true,
    black: true,
  },
  {
    concept: 'Gastos de lanzamiento',
    classic: false,
    gold: false,
    black: true,
  },
  {
    concept:
      'Gastos de procesos jurídicos del procedimiento de recuperación del inmueble',
    classic: false,
    gold: false,
    black: true,
  },
  {
    concept:
      'Honorarios de abogados expertos en la materia para la recuperación del inmueble',
    classic: true,
    gold: true,
    black: true,
  },
  {
    concept: 'Consulta de buró de crédito',
    classic: false,
    gold: true,
    black: true,
  },
  {
    concept: 'Proceso de Convenio de Mediación en Arrendamiento',
    classic: false,
    gold: false,
    black: true,
  },
]

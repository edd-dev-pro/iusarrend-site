import type { Section } from '../types/requirements'

export const SECTIONS: Section[] = [
  {
    key: '0',
    title: '1. ARRENDADOR (Propietario)',
    blocks: [
      {
        type: 'list',
        items: [
          'Identificación oficial vigente (INE, Pasaporte, o en caso de ser extranjero residencia permanente)',
          'Copia simple de la escritura de la propiedad a rentar, donde se vea el número de registro público y libertad de gravamen de la propiedad',
          'Comprobante de domicilio de la propiedad a rentar Comprobante de domicilio personal',
          'Llenar solicitud de otorgamiento',
        ],
      },
      {
        type: 'note',
        text: 'En caso de NO ser el propietario o ser administrador del inmueble, deberás presentar poder notariado o documento donde se faculte para Firmar como Arrendador.',
      },
    ],
  },
  {
    key: '1',
    title: '2. ARRENDATARIO (Inquilino)',
    blocks: [
      {
        type: 'list',
        items: [
          'Identificación oficial vigente (INE,Pasaporte, o en caso de ser extranjero residencia permanente)',
          'Constancia de situación fiscal actualizada',
          'Comprobante de domicilio actual',
          'Los últimos tres estados de cuenta personales o de nómina (NO pueden ser tarjetas de crédito ni de inversiones) Carta laboral (En caso de no presentar estados de cuenta o de nómina) Llenar formato de solicitud (Persona física o moral según sea el caso) Pago de investigación $1,000.00 (Un mil pesos 00/100M.N) (Transferencia o depósito)',
        ],
      },
      {
        type: 'note',
        text: 'En caso de ser persona moral deberás presentar: ',
      },
      {
        type: 'list',
        items: [
          'Acta constitutiva de la empresa (copia simple o digitalizada).',
          'Identificacion oficial del representante legal o de quien firmará como arrendatario.',
          'Comprobante de domicilio de la empresa.',
          'Los tres últimos estados de cuenta de la empresa. constancia fiscal de la empresa.',
          'Llenar solicitud correspondiente.',
        ],
      },
    ],
  },
  {
    key: '2',
    title: '3. FIADOR (Aval con bien raíz)',
    blocks: [
      {
        type: 'list',
        items: [
          'Identificación oficial vigente (INE, Pasaporte, o en caso de ser extranjero, residencia permanente)',
          'Comprobante de domicilio personal',
          'Copia simple de la escritura de la propiedad en garantía (Físico o digital), donde se vea el número de registro público de la propiedad en garantía para confirmar la libertad de gravamen',
          'Acta de matrimonio (en caso de ser Sociedad Conyugal)',
          'Predial del inmueble en garantía Llenar solicitud de fiador',
        ],
      },
    ],
  },
  {
    key: '3',
    title: '4. OBLIGADO SOLIDARIO',
    blocks: [
      {
        type: 'list',
        items: [
          'Identificación oficial vigente (INE, Pasaporte o en caso de ser extranjero, residencia permanente)',
          'Constancia de situación fiscal actualizada',
          'Comprobante de domicilio personal',
          'Los últimos tres estados de cuenta personales o de nómina (NO pueden ser tarjetas de crédito ni de inversiones)',
          'Carta laboral (En caso de no presentar estados de cuenta o de nómina)',
        ],
      },
      {
        type: 'note',
        text: 'En caso de ser persona moral como fiador u obligado solidario deberás presentar: ',
      },
      {
        type: 'list',
        items: [
          'Acta constitutiva de la empresa (copia simple o digitalizada) Identificación oficial vigente (INE, Pasaporte o en caso de ser extranjero, residencia permanente) del representante legal o de quien firmará como fiador u obligado solidario',
          'Comprobante de domicilio de la empresa',
          'Los tres últimos estados de cuenta de la empresa',
          'Constancia fiscal de la empresa',
          'Llenar solicitud correspondiente',
        ],
      },
    ],
  },
]

export interface PolicyBracket {
  min: number
  max: number | null
  classicPolicy: number
  goldPolicy: number
  blackPolicy: number
}

export const POLICIES: PolicyBracket[] = [
  {
    min: 0,
    max: 5_000,
    classicPolicy: 2_670,
    goldPolicy: 3_660,
    blackPolicy: 4_640,
  },
  {
    min: 5_001,
    max: 10_000,
    classicPolicy: 3_080,
    goldPolicy: 4_210,
    blackPolicy: 5_340,
  },
  {
    min: 10_001,
    max: 15_000,
    classicPolicy: 3_540,
    goldPolicy: 5_370,
    blackPolicy: 7_200,
  },
  {
    min: 15_001,
    max: 20_000,
    classicPolicy: 4_410,
    goldPolicy: 6_670,
    blackPolicy: 9_110,
  },
  {
    min: 20_001,
    max: 25_000,
    classicPolicy: 5_510,
    goldPolicy: 7_950,
    blackPolicy: 10_390,
  },
  {
    min: 25_001,
    max: 30_000,
    classicPolicy: 6_620,
    goldPolicy: 8_990,
    blackPolicy: 11_370,
  },
  {
    min: 30_001,
    max: 35_000,
    classicPolicy: 7_890,
    goldPolicy: 11_050,
    blackPolicy: 14_210,
  },
  {
    min: 35_001,
    max: 40_000,
    classicPolicy: 9_170,
    goldPolicy: 12_710,
    blackPolicy: 16_240,
  },
  {
    min: 40_001,
    max: 45_000,
    classicPolicy: 11_080,
    goldPolicy: 14_650,
    blackPolicy: 18_220,
  },
  {
    min: 45_001,
    max: 50_000,
    classicPolicy: 12_080,
    goldPolicy: 16_045,
    blackPolicy: 20_010,
  },
]

export const MAX_DIGITS = 8

export const NON_ALLOWED = /[^0-9.,$]/g

export const PERCENTAGES = {
  classic: 0.2,
  gold: 0.27,
  black: 0.35,
}

export function findPolicies(rent: number): PolicyBracket | null {
  const fixed = POLICIES.find(
    (p) => rent >= p.min && rent <= (p.max ?? Infinity),
  )
  if (fixed) return fixed

  if (rent > 50_000) {
    const iva = 0.16
    return {
      min: 50_001,
      max: null,
      classicPolicy: rent * PERCENTAGES.classic * (1 + iva),
      goldPolicy: rent * PERCENTAGES.gold * (1 + iva),
      blackPolicy: rent * PERCENTAGES.black * (1 + iva),
    }
  }

  return null
}

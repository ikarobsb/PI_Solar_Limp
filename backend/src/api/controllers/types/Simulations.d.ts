export interface SimulationRaw {
  id: number
  address_id?: null | number
  light_bill: string
  power_distributor_id: number
  annual_savings: string
  required_power: string
  required_area: string
  panels_amount: number
  panels_power: string
  estimated_cost: string
  created_at: string
  updated_at: string
  monthly_production: string
  estimated_generator_cost_min: string
  estimated_generator_cost_max: string
  equipment_cost: string
  freight_cost: string
  installation_cost: string
  payback: string
  monthly: string[]
  installment_value_range: {
    min: string
    max: string
  }
}

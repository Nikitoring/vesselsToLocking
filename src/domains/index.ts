export interface IVessel {
  direction?: 'Вверх' | 'Вниз'
  type?: 'Сухогрузный' | 'Танкер' | 'Пассажирский' | 'Тех/флот' | 'Маломер/флот' | ''
  name?: string | number
  barge?: 'Без Барж' | 'Баржа' | 'Нефтебаржа'
  sediment?: number
  typeName?: 'name' | 'numeric'
  newName?: ''
}

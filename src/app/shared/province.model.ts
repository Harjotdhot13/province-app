export interface IProvince {
  provinceName: string,
  provinceCode: string,
  provincePopulation: number,
  topCities: ICity[]
}

export interface ICity {
  cityName: string,
  cityPopulation: number
}
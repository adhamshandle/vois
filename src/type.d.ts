interface IPolygon {
    id: number
    type: string
    geometry: Object
  }
  
  type PolygonState = {
    polygons: IPolygon[]
  }
  
  type PolygonAction = {
    type: string
    polygon: IPolygon
  }
  
  type DispatchType = (args: PolygonAction) => PolygonAction
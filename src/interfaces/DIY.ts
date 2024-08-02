import MaterialInterface from "./Material"

interface DIYInterface {
    img?: string
    title: string,
    materials: MaterialInterface[],
    started: boolean,
    completed: boolean,
    notes: string
}
export default DIYInterface
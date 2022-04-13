import { AppDataSource } from "./data-source"

const connection = async () => {
    await AppDataSource.initialize()
    console.log('connected')
}

export default connection
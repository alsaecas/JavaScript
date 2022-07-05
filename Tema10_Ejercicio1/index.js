
import * as controller from './controller.js'
import chalk from "chalk"

const resultSuma = controller.suma(10,20)
const resultMultiplica = controller.multiplica(10,20)

console.log(chalk.green(resultSuma))
console.log(chalk.green(resultMultiplica))

import { useState } from 'react'
import { values } from '../constants'
import axios from 'axios'
import { endPoints } from '../constants/endPoints'
import { useNavigate } from 'react-router-dom'

const Calculator = () => {

    const [expression, setExpression] = useState("")
    const navigate = useNavigate()

    const calculate = async () => {
        try {
            const { data: { answer } } = await axios.post(endPoints.calculateExpression, {
                expression
            })
            setExpression(answer.toString())
        } catch (e) {
            alert("Failed to calculate")
        }

    }

    const setValue = (value: string) => {
        switch (value) {
            case "DEL": {
                setExpression(prev => prev.substring(0, prev.length - 1))
                break
            }
            case "AC": {
                setExpression("")
                break
            }
            case "=": {
                calculate()
                break
            }
            default: setExpression(prev => prev + value)
        }
    }

    const routeToHistory = () => {
        navigate('history')
    }

    return (
        <div>
            <div className="calculator">
                <div className="display">
                    <input type="text" placeholder='0' value={expression} id="input" disabled />
                </div>
                <div className="buttons">
                    {
                        values.map(el =>
                            (<button onClick={() => setValue(el.value)} id={el.id} className={el.type === "digit" ? "digit-button" : "operation-button"}>{el.value}</button>)
                        )
                    }
                    <button onClick={routeToHistory} className='history-btn'>Calculation History</button>

                </div >

            </div >

        </div >
    )
}

export default Calculator
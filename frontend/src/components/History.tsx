import axios from 'axios';
import { useEffect, useState } from 'react'
import { endPoints } from '../constants/endPoints';
import { Table } from 'antd'
import { useNavigate } from 'react-router-dom';

const History = () => {
    const [expressions, setExpressions] = useState<{ expression: string }[]>([]);
    const navigate = useNavigate()

    const columns = [
        {
            title: 'Calculation',
            dataIndex: 'calculation',
            key: 'cal',
        },
        {
            title: 'Answer',
            dataIndex: 'answer',
            key: 'ans',
        },

    ];

    const getExpressions = async () => {
         try {
            const { data } = await axios.get(endPoints.getAllExpressions)
            setExpressions(data)
        } catch (e) {
            alert("Failed to fetch data.")
        }
    }

    useEffect(() => {
        getExpressions()
    }, [])

    const data = expressions.map(el => {
        const exp = el.expression.split('=')
        return {
            calculation: exp[0],
            answer: exp[1]
        }
    })

    const routeToHistory = () => {
        navigate('/')
    }


    return (
        <div style={{ paddingTop: "40px" }}>
            <h1 style={{ textAlign: "center", marginBottom: "50px" }}>Calculation History</h1>
            <div className='table'>
                <Table dataSource={data} columns={columns} />
                <button style={{ marginLeft: "" }} onClick={routeToHistory} className='history-btn'>Back To Calculator</button>

            </div>
        </div>
    )
}

export default History

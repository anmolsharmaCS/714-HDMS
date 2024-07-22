import React from 'react'

function JsonDataDisplay(props) {
    const [data, setdata] = React.useState([]);
    
    React.useEffect(() => {
        // console.log(props.data)
        setdata(props.data)
    }, [props.data]);

    const DisplayData = data.map(
        (info) => {
            return (
                <tr
                    role={'button'}
                    onClick={() => props.launchModal("patrec", true, info.patient_id)}
                    className='text-center my-5 bg-slate-300 text-slate-900 hover:bg-rose-500 hover:text-slate-900 hover:shadow-lg hover:bg-slate-800 hover:text-rose-500 transition duration-150 ease-in-out'
                >
                    <td className='py-2'>{info.full_name}</td>
                    <td className='py-2'>{info.dob}</td>
                    <td className='py-2'>{info.patient_id}</td>
                    <td className='py-2'>{info.phone}</td>
                </tr>
            )
        }
    )

    return (
        <div className='flex w-full'>
            <table className="w-full justify-center">
                <thead className=''>
                    <tr className='bg-slate-900 text-rose-500 '>
                        <th className='py-5'>Name</th>
                        <th className='py-5'>Date of Birth</th>
                        <th className='py-5'>Email</th>
                        <th className='py-5'>Phone</th>
                    </tr>
                </thead>
                <tbody>


                    {DisplayData}

                </tbody>
            </table>

        </div>
    )
}

export default JsonDataDisplay;
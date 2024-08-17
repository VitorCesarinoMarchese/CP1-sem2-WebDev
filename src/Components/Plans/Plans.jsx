import './Plans.css'

function Plans(prop){
    return(
        <>
            <div className="plan" style={{background:`${prop.color}`}}>
                <div className="plan-title">
                    <h2>{prop.id}</h2>
                </div>
                <div className="plan-sections">
                    <h3>{prop.section}</h3>
                    <button>{prop.listText}</button>
                </div>
                <div className="plan-button">
                    <button style={{background:`${prop.btnColor}`}}>{prop.btnText}</button>
                </div>
            </div>
        </>
    )
}

export default Plans;

import { Circle } from 'rc-progress';

const ProgressCircle = ({ value }) => {
    const getColor = (percent) => {
        if (percent >= 70) return "#4CAF50"; // Verde
        if (percent >= 40) return "#FFC107"; // Giallo
        return "#F44336"; // Rosso
    };

    return (
        <div style={{ position: "relative", width: 40, height: 40 }}>
            <Circle 
                percent={value} 
                strokeWidth={14} 
                strokeColor={getColor(value)} 
                trailWidth={14}
                trailColor="#222"
            />
            <span style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: "14px",
                
            }}>
                {( Math.round(value * 10) / 100).toFixed(1)}
            </span>
        </div>
    );
};

export default ProgressCircle;


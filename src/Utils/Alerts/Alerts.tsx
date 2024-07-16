import { useEffect, useState } from 'react';
import './Alerts.css';

export interface AlertsProps {message:React.ReactNode,type:string}

const Alerts = ({message,type,}:AlertsProps) => {
  return ( 
    <div className={'alert alert-'+type}>
      {message}
    </div>
  );
  /*
  const [alerts, setAlerts]  = useState<{ id:number, type:string, message:string }[]>([]);
  const [alertNum, setAlertNum] = useState(0);
  const addAlert = (type:string, message:string) => {
    const addNewAlert = () => {
      setAlerts(alerts => [...alerts, {id: alertNum, type: "alert alert-"+type, message: message}]);
      setAlertNum(alertNum+1);
      setTimeout(() => {
          setAlerts([]);
          setAlertNum(0);
      },7000);
    }

    if (alertNum > 0) {
      setTimeout(() => {
          addNewAlert();
      },7001);
    } else {
      addNewAlert();
    }
  }

  return ( 
    <div className="alert-body">
      <button onClick={() => addAlert('info', 'Test function for testing functionality of alerts')}>Add info</button>
      <button onClick={() => addAlert('warning', 'Test function for testing functionality of alerts')}>Add warning</button>
      <button onClick={() => addAlert('success', 'Test function for testing functionality of alerts')}>Add success</button>
      {alerts.map(({id, type, message}) => (
        <div key={id} className={type}>
            {message}
        </div>
      ))}
    </div>
  );
  */
}

export default Alerts;

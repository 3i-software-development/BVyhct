import { useState } from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, Button } from 'antd';

function DatePick({visible,setVisible}) {
//   const [visible, setVisible] = useState(false);

//   const handleButtonClick = () => {
//     setVisible(true);
//   };

const onChange = (date, dateString) => {
    alert(date, dateString);
    setVisible(false);
  };

  return (
    <div>
     
      
        
          <DatePicker
            onChange={onChange} 
            open={visible}
          />
     
    </div>
  );
}

export default DatePick
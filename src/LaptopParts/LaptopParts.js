import React from 'react'

class LaptopParts extends React.Component{

    render(){
        return (
            <fieldset className="feature" key={featureHash}>
              <legend className="feature__name">
                <h3>{feature}</h3>
              </legend>
              {options}
            </fieldset>
          );
        };
    
    }


export default LaptopParts;
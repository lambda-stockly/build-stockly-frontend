import React, { Component } from 'react';
import './Sentiment.scss';
import { VictoryPie } from 'victory';
class Sentiment extends Component {
  render() {
    return (
      <div className="Sentiment">
        <h3>Sentiment Analysis</h3>
        <div style={{ width: 450 }}>
          <VictoryPie
            startAngle={90}
            endAngle={-90}
            innerRadius={100}
            colorScale={['cyan', '#0D122B', '#98A2B9']}
            data={[
              { x: 'Buy', y: 25 },
              { x: 'Sell', y: 50 },
              { x: 'Hold', y: 25 }
            ]}
            animate={{
              duration: 2000
            }}
          />
        </div>
      </div>
    );
  }
}

export default Sentiment;

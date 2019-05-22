import React, { Component } from 'react';
import './Sentiment.scss';
import { VictoryPie } from 'victory';
class Sentiment extends Component {
  render() {
    // const taBuy = this.props.technicalAnalysis.buy * 100;
    // const taSell = this.props.technicalAnalysis.sell * 100;
    // const taHold = this.props.technicalAnalysis.hold * 100;
    return (
      <div className="action-thresholds">
        <div className="action-thresholds__sentiment">
          <h4>Setiment Analysis</h4>
          <div style={{ width: 350 }}>
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
              // animate={{
              //   duration: 2000
              // }}
            />
          </div>
        </div>

        <div className="action-threshodls__technical-analysis">
          <h4>Technical Analysis</h4>
          <div style={{ width: 350 }}>
            <VictoryPie
              startAngle={90}
              endAngle={-90}
              innerRadius={100}
              colorScale={['cyan', '#0D122B', '#98A2B9']}
              data={[
                { x: 'Buy', y: 21 },
                { x: 'Sell', y: 13 },
                { x: 'Hold', y: 66 }
              ]}
              // animate={{
              //   duration: 2000
              // }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Sentiment;

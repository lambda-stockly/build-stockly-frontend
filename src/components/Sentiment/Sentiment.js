import React, { Component } from 'react';
import './Sentiment.scss';
import { VictoryPie } from 'victory';
class Sentiment extends Component {
  render() {
    return (
      <div className="action-thresholds">
        <div className="action-thresholds__sentiment">
          <h4 style={{ width: 350, textAlign: 'center' }}>
            Sentiment Analysis
          </h4>
          <div style={{ width: 350 }}>
            <VictoryPie
              startAngle={90}
              endAngle={-90}
              innerRadius={100}
              colorScale={['cyan', '#0D122B', '#98A2B9']}
              data={[
                { x: 'Buy', y: this.props.technicalAnalysis.buy * 100 },
                { x: 'Sell', y: this.props.technicalAnalysis.sell * 100 },
                { x: 'Hold', y: this.props.technicalAnalysis.sell * 100 }
              ]}
            />
          </div>
        </div>

        <div className="action-thresholds__technical-analysis">
          <h4 style={{ width: 350, textAlign: 'center' }}>
            Technical Analysis
          </h4>
          <div style={{ width: 350 }}>
            <VictoryPie
              startAngle={90}
              endAngle={-90}
              innerRadius={100}
              colorScale={['cyan', '#0D122B', '#98A2B9']}
              data={[
                { x: 'Buy', y: this.props.sentiment.buy * 100 },
                { x: 'Sell', y: this.props.sentiment.sell * 100 },
                { x: 'Hold', y: this.props.sentiment.sell * 100 }
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Sentiment;

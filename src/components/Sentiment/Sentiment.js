import React, { Component } from 'react';
import './Sentiment.scss';
import { RadialChart } from 'react-vis';

// import { VictoryPie } from 'victory';
class Sentiment extends Component {
  render() {
    const sentData = [
      {
        angle: this.props.sentiment.buy,
        label: (this.props.sentiment.buy * 100).toString() + '% BUY'
      },
      {
        angle: this.props.sentiment.sell,
        label: (this.props.sentiment.sell * 100).toString() + '% SELL'
      },
      {
        angle: this.props.sentiment.hold,
        label: (this.props.sentiment.hold * 100).toString() + '% HOLD'
      }
    ];

    const taData = [
      {
        angle: this.props.ta.buy,
        label: (this.props.ta.buy * 100).toFixed().toString() + '% BUY'
      },
      {
        angle: this.props.ta.sell,
        label: (this.props.ta.sell * 100).toFixed().toString() + '% SELL'
      },
      {
        angle: this.props.ta.hold,
        label: (this.props.ta.hold * 100).toFixed().toString() + '% HOLD'
      }
    ];
    return (
      <div className="action-thresholds">
        <div className="technical-analysis">
          <h4 style={{ textAlign: 'center' }}>Technical Analysis</h4>

          <RadialChart
            data={taData}
            labelsStyle={{
              fontSize: 12,
              fill: '#fff',
              fontWeight: 'bold'
            }}
            animation
            labelsRadiusMultiplier={0.7}
            width={300}
            height={300}
            showLabels
          />
        </div>
        <div className="sentiment-analysis">
          <h4 style={{ textAlign: 'center' }}>Sentiment Analysis</h4>
          <RadialChart
            data={sentData}
            labelsStyle={{
              fontSize: 12,
              fill: '#fff',
              fontWeight: 'bold'
            }}
            labelsRadiusMultiplier={0.7}
            width={300}
            height={300}
            showLabels
          />
        </div>
      </div>
    );
  }
}

export default Sentiment;

/* <div className="action-thresholds">
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
</div> */

import React, { Component } from 'react';
import { RadialChart } from 'react-vis';
import StockAction from '../StockAction';

import './Sentiment.scss';

class Sentiment extends Component {
  findLargestNum = obj => {
    const { buy, sell, hold } = obj;
    const max = Math.max(buy, sell, hold);
    if (max === buy) return 'buy';
    if (max === sell) return 'sell';
    if (max === hold) return 'hold';
  };

  render() {
    const {
      sentimentAnalysis,
      futureAnalysis,
      historicalAnalysis,
      technicalAnalysis
    } = this.props;

    const sentiment = this.findLargestNum(sentimentAnalysis);
    const future = this.findLargestNum(futureAnalysis);
    const historical = this.findLargestNum(historicalAnalysis);

    const {
      buy: technicalBuy,
      sell: technicalSell,
      hold: technicalHold
    } = technicalAnalysis;

    const technicalAnalysisData = [
      {
        angle: technicalBuy,
        label: (technicalBuy * 100).toFixed().toString() + '% BUY'
      },
      {
        angle: technicalSell,
        label: (technicalSell * 100).toFixed().toString() + '% SELL'
      },
      {
        angle: technicalHold,
        label: (technicalHold * 100).toFixed().toString() + '% HOLD'
      }
    ];
    return (
      <div className="action-thresholds">
        <div className="technical-analysis">
          <h3>Technical Analysis</h3>

          <RadialChart
            data={technicalAnalysisData}
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

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            totam veniam nam reiciendis repudiandae quod obcaecati harum!
            Quibusdam, ipsum dolorum.
          </p>
        </div>
        <div className="other-analysis">
          <div className="analysis-flex">
            <div>
              <h3 className="other-analysis__title">Sentiment Analysis</h3>
            </div>
            <div>
              <StockAction action={sentiment} />
            </div>
          </div>
          <p className="other-analysis__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            suscipit odit eaque recusandae facere sed nam dolor obcaecati
            reprehenderit dolore?
          </p>
          <div className="analysis-flex">
            <div>
              <h3 className="other-analysis__title">Historical Analysis</h3>
            </div>
            <div>
              <StockAction action={historical} />
            </div>
          </div>
          <p className="other-analysis__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            ipsam numquam maxime minima ipsa excepturi iusto itaque nulla
            mollitia beatae.
          </p>
          <div className="analysis-flex">
            <div>
              <h3 className="other-analysis__title">Future Analysis</h3>
            </div>
            <div>
              <StockAction action={future} />
            </div>
          </div>
          <p className="other-analysis__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facere
            excepturi distinctio vero consequuntur cupiditate aliquam explicabo
            ducimus nihil asperiores?
          </p>
        </div>
      </div>
    );
  }
}

export default Sentiment;

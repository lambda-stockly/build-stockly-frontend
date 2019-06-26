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
            The technical analysis was determined by a medley of technical
            indicators that reveal price trends and patterns in a stock's
            performance. Among the technical indicators we used are the Moving
            Average Convergence Divergence (MACD)<sup>1</sup> and the stochastic
            oscillator<sup>2</sup>.
          </p>
          <p>
            <sup>1</sup>MACD is an indicator that shows the relationship between
            two moving averages of a seurity's price.
          </p>
          <p>
            <sup>2</sup>A stochastic oscillator is a momentum indicator used to
            generate overbought and oversold trading signals.{' '}
          </p>
        </div>
        <div className="other-analysis">
          <div className="other-analysis__heading">
            <div>
              <h3 className="other-analysis__title">Sentiment Analysis</h3>
            </div>
            <div>
              <StockAction action={sentiment} />
            </div>
          </div>
          <p className="other-analysis__text">
            Sentiment analysis was determined by compiling arbitrary sentiment
            scores from a batch of recent tweets that mentioned{' '}
            {`"${this.props.symbol}"`}. Sentiment was determined with the use of
            an open source natural language processing toolkit called NLTK.
          </p>
          <p className="disclaimer">
            <em>
              The correlation between stock returns and public sentiment is a
              topic that has been scrutinized heavily by academic research. We
              recommend you research this area more before taking any actions
              based on this information.
            </em>
          </p>
          <div className="other-analysis__heading">
            <div>
              <h3 className="other-analysis__title">Historical Analysis</h3>
            </div>
            <div>
              <StockAction action={historical} />
            </div>
          </div>
          <p className="other-analysis__text">
            The historical determination is made by analysis of historical
            returns.{' '}
          </p>

          <p className="disclaimer">
            <em>
              The model may be underestimating extreme negative scenarios
              unobserved in the historical period on which the determination was
              based. Future returns may behave differently from historical
              patterns.
            </em>
          </p>
          <div className="other-analysis__heading">
            <div>
              <h3 className="other-analysis__title">Future Analysis</h3>
            </div>
            <div>
              <StockAction action={future} />
            </div>
          </div>
          <p className="other-analysis__text">
            With the help of Facebook's open source project{' '}
            <a
              href="https://research.fb.com/prophet-forecasting-at-scale/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prophet
            </a>
            , we are able to use Time Series data to determine the spread for a
            given stock's price movement.
          </p>
        </div>
      </div>
    );
  }
}

export default Sentiment;

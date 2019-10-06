import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import JSONViewer from 'react-json-viewer';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { CoinMarketCapAction } from "../../redux/constants";

const HomePage = ({ getListingLatest, coinmarketcapData }) => {
  const [coinmarketcapState, setCoinmarketcapState] = useState({});

  useEffect(() => {
    getListingLatest();
  }, []);

  useEffect(() => {
    setCoinmarketcapState(coinmarketcapData);
  }, [coinmarketcapData]);

  return (
    <Container>
      <Row className='row' style={{paddingTop: '100px'}}>
        <Col xs={12}>
          <h1>Simple CoinMarket Cap SPA</h1>
        </Col>
      </Row>
      <div style={{overflow: 'auto', marginTop: '50px', border: '1px solid'}}>
        {
          coinmarketcapState &&
          <JSONViewer json={coinmarketcapState.coinmarketcap || {}} />
        }
      </div>
      <Row className='row' style={{paddingTop: '100px'}}>
        <Col xs={12}>
          <h3>Dev: Erni Koldzic</h3>
        </Col>
      </Row>
    </Container>
  );
}

export const Counter = ({ counter }) => (
  <div>
    <p>{counter}</p>
  </div>
);

const mapStateToProps = state => ({
  coinmarketcapData: state.coinmarketcap.coinmarketcapData
});

const mapDispatchToprops = dispatch => ({
  getListingLatest: (start = 1, limit = 1, convert = "BTC") =>
    dispatch({ type: CoinMarketCapAction.GET_LISTING_LATEST_REQUEST, payload: { start, limit, convert } })
});

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(HomePage);

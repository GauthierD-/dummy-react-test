import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/count'
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';
import GridList from 'material-ui/lib/grid-list/grid-list';

const styles = {
  gridList: {
    width: 'auto',
  }
};

function Home({ number, increase, decrease }) {
  return (
    <div>
      <Paper zDepth={1}>
        <div>
          <h2> Some state changes: {number} </h2>
        </div>
        <div>
          <RaisedButton
            label="Increase"
            style={{margin: 12}}
            primary={true}
            onClick={() => increase(1) }
          />
          <RaisedButton
            label="Decrease"
            style={{margin: 12}}
            secondary={true}
            onClick={() => decrease(1) }
          />
        </div>
      </Paper>
      <div className="row">
        <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
          <Paper zDepth={1}>
            <div>
              <h2> Some state changes: {number} </h2>
            </div>
            <div>
              <RaisedButton
                label="Increase"
                style={{margin: 12}}
                primary={true}
                onClick={() => increase(1) }
              />
              <RaisedButton
                label="Decrease"
                style={{margin: 12}}
                secondary={true}
                onClick={() => decrease(1) }
              />
            </div>
          </Paper>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
          <Paper zDepth={1}>
            <div>
              <h2> Some state changes: {number} </h2>
            </div>
            <div>
              <RaisedButton
                label="Increase"
                style={{margin: 12}}
                primary={true}
                onClick={() => increase(1) }
              />
              <RaisedButton
                label="Decrease"
                style={{margin: 12}}
                secondary={true}
                onClick={() => decrease(1) }
              />
            </div>
          </Paper>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
          <Paper zDepth={1}>
            <div>
              <h2> Some state changes: {number} </h2>
            </div>
            <div>
              <RaisedButton
                label="Increase"
                style={{margin: 12}}
                primary={true}
                onClick={() => increase(1) }
              />
              <RaisedButton
                label="Decrease"
                style={{margin: 12}}
                secondary={true}
                onClick={() => decrease(1) }
              />
            </div>
          </Paper>
        </div>
      </div>

    </div>
  )
}

export default connect(
  state => ({ number: state.count.number }),
  { increase, decrease }
)(Home)

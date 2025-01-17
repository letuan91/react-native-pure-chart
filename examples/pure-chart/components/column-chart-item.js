import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'

export default class ColumnChartItem extends Component {
  render () {
    let renders = []
    let seriesCount = this.props.seriesArray.length
    for (let seriesIndex = 0; seriesIndex < seriesCount; seriesIndex++) {
      let lastElementMarginRight = 0
      if (seriesIndex === (seriesCount - 1)) {
        lastElementMarginRight = this.props.defaultMargin
      }

      // console.log("a"+seriesCount+"-" + lastElementMarginRight)
      // console.log("chart:" + JSON.stringify(this.props.seriesArray[seriesIndex].data[this.props.dataIndex]['y'] + "-" + this.props.max))

      renders.push(
        <View key={seriesIndex} style={[styles.bar, {
          width: this.props.defaultWidth / seriesCount,
          height: this.props.seriesArray[seriesIndex].data[this.props.dataIndex]['ratioY'],
          marginRight: lastElementMarginRight,
          // marginLeft: this.props.dataIndex === 0 ? this.props.defaultWidth/2 : 0,
          backgroundColor: this.props.seriesArray[seriesIndex].data[this.props.dataIndex]['y'] === this.props.max ? this.props.maxColor : (this.props.seriesArray[seriesIndex].data[this.props.dataIndex]['y'] === this.props.min ? this.props.minColor : this.props.primaryColor),
          borderColor: this.props.isSelected ? this.props.highlightColor : '#FFFFFF',
        borderTopLeftRadius:8,
          borderTopRightRadius:8
        }]} />
      )
    }
    return (
      <TouchableWithoutFeedback onPressIn={(evt) => this.props.onClick(evt)}>
        <View style={{height: this.props.defaultHeight}}>
          <View style={styles.chartView}>
            {renders}
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  chartView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: '100%',
    paddingTop: 20
  },
  bar: {
    justifyContent: 'flex-end',
    borderWidth: 1,
  }
})

ColumnChartItem.propTypes = {
  seriesArray: PropTypes.array,
  onClick: PropTypes.func,
  defaultWidth: PropTypes.number,
  defaultHeight: PropTypes.number,
  defaultMargin: PropTypes.number,
  primaryColor: PropTypes.string,
  maxColor: PropTypes.string,
  minColor: PropTypes.string,
  highlightColor: PropTypes.string,
  max: PropTypes.number,
  min:PropTypes.number
}

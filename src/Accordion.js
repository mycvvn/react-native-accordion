import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import PanelContainer from './PanelContainer';
import Panel from './Panel';

class Accordion extends Component {
  static propTypes = {
    containerStyle: ViewPropTypes.style,
    panelContainerStyle: ViewPropTypes.style,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    showChevron: PropTypes.bool,
    expandMultiple: PropTypes.bool
  };

  static defaultProps = {
    containerStyle: undefined,
    panelContainerStyle: undefined,
    iconSize: undefined,
    iconColor: undefined,
    showChevron: true,
    expandMultiple: false
  };

  constructor(props) {
    super(props);

    this.state = {
      activePanelTitle: null
    };
  }

  get totalPanels() {
    return this.props.children.length || 0;
  }

  checkPanelOpen = title => {
    return this.state.activePanelTitle === title;
  };

  handleSetActive = (title, isOpen) => {
    this.setState({
      activePanelTitle: isOpen ? null : title
    });
  };

  renderPanels() {
    return React.Children.map(this.props.children, (child, index) => {
      if (child.type !== Panel) {
        throw new Error('<Accordion /> can only contain <Panel />');
      }
      const isOpen = this.checkPanelOpen(child.props.title);
      return (
        <PanelContainer
          title={child.props.title}
          last={index === this.totalPanels - 1}
          panelContainerStyle={this.props.panelContainerStyle}
          iconSize={this.props.iconSize}
          iconColor={this.props.iconColor}
          showChevron={this.props.showChevron}
          expandMultiple={this.props.expandMultiple}
          onPressPanel={title => this.handleSetActive(title, isOpen)}
          isOpen={isOpen}
        >
          {child}
        </PanelContainer>
      );
    });
  }

  render() {
    return <View style={this.props.containerStyle}>{this.renderPanels()}</View>;
  }
}

export default Accordion;

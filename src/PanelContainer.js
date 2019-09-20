import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, ViewPropTypes } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from 'react-native-button';

class PanelContainer extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    last: PropTypes.bool,
    showChevron: PropTypes.bool,
    expandMultiple: PropTypes.bool,
    isOpen: PropTypes.bool,
    panelContainerStyle: ViewPropTypes.style,
    onPressPanel: PropTypes.func
  };

  static defaultProps = {
    children: null,
    title: undefined,
    iconSize: 18,
    iconColor: '#999',
    last: false,
    showChevron: true,
    expandMultiple: false,
    isOpen: false,
    panelContainerStyle: undefined,
    onPressPanel: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen || false
    };
  }

  handleToggle = () => {
    if (this.props.expandMultiple) {
      this.setState(
        prevState => ({
          isOpen: !prevState.isOpen
        }),
        () => {
          if (this.state.isOpen) {
            this.props.children.props.onOpen();
          } else {
            this.props.children.props.onClose();
          }
        }
      );
    } else {
      this.props.onPressPanel(this.props.title);
    }
  };

  get isOpen() {
    if (this.props.expandMultiple) {
      return this.state.isOpen;
    }
    return this.props.isOpen;
  }

  render() {
    const children = {
      ...this.props.children,
      props: {
        ...this.props.children.props,
        panelContainerStyle: this.props.panelContainerStyle
      }
    };
    return (
      <View style={styles.panelWrapper}>
        <Button
          onPress={this.handleToggle}
          containerStyle={[
            styles.panelButton,
            {
              borderBottomWidth: this.props.last && !this.isOpen ? 0 : 1
            }
          ]}
        >
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{this.props.title}</Text>
            {this.props.showChevron && (
              <Fragment>
                {this.isOpen ? (
                  <Icon
                    name="chevron-up"
                    size={this.props.iconSize}
                    color={this.props.iconColor}
                  />
                ) : (
                  <Icon
                    name="chevron-down"
                    size={this.props.iconSize}
                    color={this.props.iconColor}
                  />
                )}
              </Fragment>
            )}
          </View>
        </Button>
        {this.isOpen && children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panelWrapper: {
    flexDirection: 'column'
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 14,
    color: '#000'
  },
  panelButton: {
    paddingVertical: 14,
    borderColor: '#ebebeb'
  }
});

export default PanelContainer;

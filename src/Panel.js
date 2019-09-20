import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';

function Panel(props) {
    return (
        <View style={[props.panelContainerStyle, props.containerStyle]}>
            {props.children}
        </View>
    );
}

const defaultListener = () => {}

Panel.propTypes = {
    title: PropTypes.string.isRequired,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    panelContainerStyle: ViewPropTypes.style,
    containerStyle: ViewPropTypes.style,
    children: PropTypes.node,
}

Panel.defaultProps = {
    title: undefined,
    onOpen: defaultListener,
    onClose: defaultListener,
    panelContainerStyle: undefined,
    containerStyle: undefined,
    children: null,
}

export default Panel;
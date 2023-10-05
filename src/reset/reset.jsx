import React from 'react';
import PropTypes from 'prop-types';

import {
  Main,
  ConfirmButton,
  CancelButton,
  ButtonBox,
  Message,
} from './reset.styled';

export default class Reset extends React.Component {
  static propTypes = {
    onAction: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  render() {
    const { primaryAction, cancelAction } = this.props;

    return (
      <Main>
        <Message>Would like to reset the game?</Message>
        <ButtonBox>
          <CancelButton onClick={cancelAction}>No</CancelButton>
          <ConfirmButton onClick={primaryAction}>Yes</ConfirmButton>
        </ButtonBox>
      </Main>
    );
  }
}

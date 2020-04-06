import React from 'react';
import {ICONS} from '../../utils/utils';

export default function Spinner() {
  return (
    <div className="spinner-container">
      <img src={ICONS.loading} alt=""/>
    </div>
  );
}

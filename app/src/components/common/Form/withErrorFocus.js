import React from 'react';
import { connect } from 'formik';

const withErrorFocus = Component => connect(class extends React.Component {

  isObject = (value) => {
    return value && typeof value === 'object';
  }

  isHidden = (el) => {
    var style = window.getComputedStyle(el);
    return (style.display === 'none');
  }

  getKeysRecursively = (object) => {
    if (!this.isObject(object)) {
      return '';
    }
    const currentKey = Object.keys(object)[0];

    if (!this.getKeysRecursively(object[currentKey])) {
      return currentKey;
    }
    return currentKey + '.' + this.getKeysRecursively(object[currentKey]);
  }

  componentDidUpdate(prevProps) {
    const { isSubmitting, isValidating, errors } = prevProps.formik;
    const keys = Object.keys(errors);

    if (isSubmitting && !isValidating) {
      let errorElement = null;

      if(keys.length > 0) {
        const selectorKey = this.getKeysRecursively(errors);
        errorElement = document.querySelector(`[name="${selectorKey}"]`);

        if(!errorElement || this.isHidden(errorElement)) {
          errorElement = document.querySelector(`[class="${selectorKey}-error'"]`);
        }
      }

      if(!errorElement || this.isHidden(errorElement)){
        errorElement = document.querySelector('.server-errors');
      }

      errorElement && errorElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
    }
  }

  render() {
    return <Component {...this.props} />;
  }
});

export default withErrorFocus;

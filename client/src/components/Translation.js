import React from 'react';
import { useLocale } from '../context/LocaleContext';
import slider from '../resources/slider.json'

function Translation(props) {
    const locale = useLocale();

    return (getText(locale, props.resource, props.params));
}

function getText(locale, resource, params) {
    if (slider[locale] && slider[locale][resource]) {
        return slider[locale][resource] + ' ' +  (params ? params.join(' ') : '');
    } else {
        const text = slider['en'][resource] ? slider['en'][resource] : 'N/A'
        return text + ' ' + (params ? params.join(' ') : '');
    }
}

export default Translation;
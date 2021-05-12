import { useLocaleUpdate } from '../context/LocaleContext'

function LanguageSelector() {
    const setLocale = useLocaleUpdate();
    const style= {
        marginTop: '10px'
    }

    const styleButtons = {
        width: '95px',
        height: '50px',
        border: '1px solid black',
        marginRight: '10px',
        background: '#FFC140',
        cursor: 'pointer'
    };

    return (
        <div style={style}>
            <button style={styleButtons} onClick={() => {setLocale('en')}}>English</button>
            <button style={styleButtons} onClick={() => {setLocale('ru')}}>Russian</button>
        </div>
    );
}

export default LanguageSelector;
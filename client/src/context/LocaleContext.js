import React, { useState, useContext } from 'react'

const LocaleContext = React.createContext()
const ChangeLocaleContext = React.createContext();

export function useLocale () {
    return useContext(LocaleContext)
}

export function useLocaleUpdate() {
    return useContext(ChangeLocaleContext)
}

export function LocaleProvider ({children}) {
    const [locale, setLocale] = useState('en');

    function changeLocale (locale) {
        setLocale(locale)
    }

    return <LocaleContext.Provider value={locale}>
        <ChangeLocaleContext.Provider value={changeLocale}>
            {children}
        </ChangeLocaleContext.Provider>
    </LocaleContext.Provider>
}


import { useContext, useMemo } from "react";
import { CoreContext } from "../context/CoreContext";

export default function useLocale(
    _locale: Record<string, Record<string, string>> = { ru: {} }
): Record<string, string> {
    const { locale: globalLocale, language } = useContext(CoreContext);

    return useMemo(() => {
        const additionalLocale = _locale as Record<string, Record<string, string>>;
        return {
            ...(globalLocale[language] as Record<string, string>),
            ...(additionalLocale[language] as Record<string, string>)
        };
    }, [language, _locale, globalLocale]);
}

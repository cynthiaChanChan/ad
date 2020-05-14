import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import navList from "../components/Header/Header.data";

type AppProviderProps = {
    children: React.ReactChild;
};
type AppContext = {
    title: string;
    subPageTitle: string;
    setSubPageTitle: (title: string) => void;
};

const options: AppContext = {
    title: "",
    subPageTitle: "",
    setSubPageTitle: (title) => {},
};
export const AppContext = createContext(options);

const AppProvider = ({ children }: AppProviderProps) => {
    const defaultTitle = "驾悦传媒-大型品牌驾校媒体";
    const [title, setTitle] = useState(defaultTitle);
    const [subPageTitle, setSubPageTitle] = useState("");
    const router = useRouter();

    useEffect(() => {
        const title = document.querySelector("title");
        if (title && title.textContent) {
            const section = navList.find((elem) =>
                router.asPath.includes(elem.route)
            );
            const pageTitle = section ? section.title : defaultTitle;
            setTitle(pageTitle || defaultTitle);
        }
    }, [router.query.section]);
    return (
        <AppContext.Provider
            value={{
                title,
                subPageTitle,
                setSubPageTitle,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;

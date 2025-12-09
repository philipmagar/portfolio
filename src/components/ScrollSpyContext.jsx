import React from "react";

export const ScrollSpyContext = React.createContext();

export function ScrollSpyProvider({ children }) {
const [active, setActive] = React.useState("hero");


React.useEffect(() => {
const sections = document.querySelectorAll("section");


const onScroll = () => {
let current = "hero";
sections.forEach((sec) => {
if (window.scrollY >= sec.offsetTop - 200) {
current = sec.id;
}
});
setActive(current);
};


window.addEventListener("scroll", onScroll);
return () => window.removeEventListener("scroll", onScroll);
}, []);


return (
<ScrollSpyContext.Provider value={{ active }}>
{children}
</ScrollSpyContext.Provider>
);
}
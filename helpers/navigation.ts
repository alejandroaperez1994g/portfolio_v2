import React from "react";

export const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = window.document.getElementById(
        e.currentTarget.href.split("#")[1]
    );
    if (target) {
        target.scrollIntoView({behavior: "smooth"});
    }
};

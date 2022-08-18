import React from "react";

const WorkInstance = ({children , title , text, link, technologies}) => (

    <div className="work">

        <div className="work__textbox">
            <h3 className="h3">{title}</h3>
            <p className="work__text">{text}</p>
            <p className="work__text">{technologies}</p>
            <a className="work__link" target="_blank" rel="noopener" href={link} >Visit site &rarr;</a>
        </div>

        {children}

    </div>

)


export default WorkInstance
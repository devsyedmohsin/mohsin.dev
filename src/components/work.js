import '../sass/components/work.scss'

import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import WorkInstance from "./work-instance";

const Work = () => (

    <div className="row">

        <main className="works" id='work'>

            <h2 className="h2">Work</h2>


            <WorkInstance title={'indecision app'} text='Put your life in the hands of a computer.' link={'https://indecisionclone.netlify.app/'} technologies="REACT, PARCEL, SCSS">
                <StaticImage className="work__img" src="../images/work/indecision-app.png" alt="indecision app" placeholder="blurred" />
            </WorkInstance>
            

            <WorkInstance title={'gitpod clone'} text='Always ready to code gitpod is an cloud based IDE built on top of thiea. ' link={'https://gitpodclone.netlify.app/'} technologies="SASS, HTML">
                <StaticImage className="work__img" src="../images/work/gitpod.png" alt="gitpod website home page" placeholder="blurred" />
            </WorkInstance>
            

            <WorkInstance title={'totaliser'} text='A minimal, lightweight, and easy to use calculator built to use in your browser.' link={'https://totaliser.netlify.app/'}  technologies="JavaScript, HTML, CSS">
                <StaticImage className="work__img" src="../images/work/totaliser.png" alt="totaliser" placeholder="blurred" />
            </WorkInstance>

            <WorkInstance title={'fylo page'} text='Fylo allows you to store all your files in one secure location.' link={'https://fylodrive.netlify.app/'} technologies="HTML, CSS" >
                <StaticImage className="work__img" src="../images/work/fylo.png" alt="fylo landing page" placeholder="blurred" />
            </WorkInstance>


        </main>

    </div>

)

export default Work
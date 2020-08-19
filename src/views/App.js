import React, { useState } from 'react';
import { Profile } from '../components/Profile';
import { Educations } from '../components/Educations';
import { Experiences } from '../components/Experiences';


function App() {

    const [ cv, setCV ] = useState({

        profile: {
            prename: "",
            surname: "",
            country: "",
            phone: "",
            email: ""
        },
        educations: [],
        experiences: []
    });

    function addEducation() {

        setCV( 
            {
                ...cv,
                educations: [ 
                    ...cv.educations, { 
                        graduation: "",
                        school: "",
                        from: "",
                        to: "",
                        average: ""
                    }
                ] 
            }
        );
    }

    function addExperience() {

        setCV( 
            {
                ...cv,
                experiences: [ 
                    ...cv.experiences, { 
                        experience: "",
                        company: "",
                        from: "",
                        to: "",
                        notes: ""
                    } 
                ] 
            }
        );
    }

    /*function deleteEducation() {

    }

    function deleteExperience() {

    }*/

    return (
        <form className="m-4">
            <Profile values={cv.profile}/>
            <Educations educations={cv.educations} addEducation={addEducation}/>
            <Experiences experiences={cv.experiences} addExperience={addExperience}/>
        </form>
    );
}

export { App };

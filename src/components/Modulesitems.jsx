import React from 'react';
import { useState } from 'react';
import TopicModule from '../components/TopicModule';
import QuizModule from "../components/QuizModule";
import AssignmentModule from "../components/AssignmentModule";
const Modulesitems = () => {
    let [topic , setTopic] = useState("topic");
    return (
        <div>
            <div className="module-content">
                <nav id='modules-items-tab'>
                    <button onClick={() => setTopic("topic")}>Python Loops</button>
                    <button onClick={() => setTopic("quiz")}>Quiz-1 : Data Types</button>
                    <button onClick={() => setTopic("assignment")}>Assignment-1 : Operators | Loops</button>
                </nav>
                {topic === "topic" ? <TopicModule/> : topic === "quiz" ? <QuizModule/> : <AssignmentModule/>}
            </div>
        </div>
    )
}

export default Modulesitems
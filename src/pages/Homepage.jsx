import "../css/Homepage.css";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Dropdown from "../components/Dropdown";
export default function Homepage(){
  return (
    <div>
      <Header/>
      <Dropdown/>
      <div className="content">
        <Nav/>
        <div className="pages">
          <div className="certifications">
            <h2>Upcoming Certifications</h2>
            <div className="upcoming-cert">
              <img src={require("../Icons/Data-Analysis.png")}/>
              <div className="title">
                <span>CERTIFICATION | ATTEMPT 1</span>
                <h3>Data Analysis Certification</h3>
                <span>COMPLETED | 21 MAR 2023</span>
              </div>
              <div className="exam">
                  <h4>Exam Structure</h4>
                  <span>
                    <h5>Round 1</h5>
                    <span className="round">MCQS</span>
                    <span className="round">CODING</span>
                  </span>
                  <span>
                  <h5>Round 2</h5>
                    <span className="round">MCQS</span>
                  </span>
              </div>
              <button className="view-exam">VIEW EXAM DETAILS</button>
            </div>
          </div>

          <div className="certifications">
            <h2>Continue Learning</h2>
            <h4 style={{textAlign : "center" , color : "dodgerblue"}}>view module details</h4>
            <div className="continue-learning-details">
              <div className="module-detail">
                <div className="data-visualization">
                  <img src={require("../Icons/Data-Wrangling.png")}/>
                  <div className="heading">
                    <h4>DATA WRANGLING & VISUALIZATION</h4>
                    <span style={{color : "dodgerblue"}}>Test Instructor</span>
                    <div className="progress-content">
                      <span>Live Sessions&emsp;&emsp;<progress value={10} max={10} ></progress></span>
                      <span>Assignments&emsp;&emsp;<progress value={10} max={10} ></progress></span>
                      <span>MCQ Quiz&emsp;&emsp;<progress value={10} max={10} ></progress></span>
                    </div>
                  </div>
                  <div className="today-plan">
                    <h4>Today's Plan</h4>
                    <span>21 March 2023</span>
                    <h4>Data Transformation using Pandas-3</h4>
                    <span>Daily Feedback &emsp;&emsp; <span>opens 07:30 PM</span></span>
                    <div className="live-session">JOIN LIVE SESSION</div>
                    <span>BEGINS AT 07:30 PM</span>
                  </div>
                </div>
                
              </div>
              <div className="progress">
                <h4>Progress Overview</h4>
                <span>0%&emsp; &emsp; &emsp;Overall Grade</span>
                <span>0%&emsp; &emsp; &emsp;Attendance</span>
                <span id="view-progress">VIEW DETAILED PROGRESS</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  )
};